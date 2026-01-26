---
date: '2026-01-23T09:55:29Z'
draft: false
title: 'Securing my AI travel mail bot'
weight: 10
---

I wanted to experiment with AI automation while also paying particular attention to security concerns.
Security is something I take seriously (I delivered cloud security training for more than 10 years), and the power that AI has is very scary.

There are lots of frameworks related to AI security, and I feel that it is hard to apply them to the real world.

For example how would you mitigate LLM06 – Sensitive Information Disclosure, or ASI05 - Inadequate Guardrails and Sandboxing from the OWASP guidelines?

That is the question that this practical example aims to illustrate.

I chose an email summary application that will be useful on a daily basis.

I hope this story can serve as an inspiration.
You can try to recreate something similar as a home lab, or course exercise.

## The purpose of the bot

While I am on my sabbatical I do quite a bit of traveling, and to keep track of what is coming up I created a daily mail automation.
It draws its information from a spreadsheet with trip details (flights, hotels, etc), which in its turn is fed largely by information in emails.

So part of the system is an email summarizer.

Now, email is a core critical security issue: control somebody's email, and you control their digital life.
After all, most password resets go over email.
If that makes you feel reluctant to hand over control of your email to an AI bot, you are right.

## Isolate the bot

My first step, therefore, was to open a new (Gmail) account specifically for the bot.
In this way I can control exactly what the bot has access to.
This account also serves as the identity that is granted access to the spreadsheet with trip details.
If it gets hacked, or goes astray, this extra account significantly limits the damage because it does not have access to all my emails.

I can forward travel-related emails manually to that account, and I also set forwarding rules.
For example, everything from well-known booking sites gets forwarded automatically.
I also match some specific keywords that make an email highly likely to be about travel.

Let's talk about the risks.

The majority of my email is not about travel, and therefore will not be accessible to the bot.
The forwarded set has a few false negatives, but I can forward those manually.
The forwarded set will also have a few positives, emails that are not about travels, but happen to pass through anyway.
How can we handle those?

## Filtering the input to the bot

At first, I had a whitelist of senders in my bot, but experience shows that this is maintenance intensive and error prone.
A much better idea is to have some kind of guardrails function, and I decided to use an LLM to triage the messages.
By the way, this is fairly simple to implement in N8N, the workflow engine I am using for this project.

The guardrails also allowed me to fine-tune how emails are triaged and flagged.
For example, most travel mail will be followed up by a seemingly endless stream of requests for reviews.
Those are not important for my travel briefings, so I want to filter them out.
All this now becomes a matter of good prompt engineering, and selecting a good LLM model.

But how do you know it is any good?

## Evals and quality

The AI equivalent of proper testing is using 'evals'.
As AI and LLMs in particular are nondeterministic, it is really hard to have a consistent single correct answer.
Instead, we are scoring the systems on specific quality attributes.
Those are the evals.

In this case, the first system I want to score is the guardrails function, which simply consists of a prompt and an LLM model
(In N8N this is a variant of the Guardrails Node called topical alignment).

Here is how I piloted the guardrails scores.

I created a spreadsheet in Google Drive accessible by the bot, of course.
The first column has actual emails that were forwarded to the bot (I got these from logging my production to another sheet in Google Drive).
The next columns are "expected_result" and "actual_result".
Later I added a column for "confidence", as that is one of the outputs of the guardrail.

Naturally, I had to manually label the email in each row with a label pass or fail.

Then I created an N8N workflow that reads the items from that sheet, feeds them through the guardrails, and writes the pass/fail output back to that sheet.
In this way you can immediately see which emails are not labelled correctly by the guardrail.

## Making it better

With that pass/fail information, the game is on.
My guardrail prompt and model (gpt-4.1.mini) misclassify 8 out of 28 test cases, mainly about review requests and receipts.

My thinking was that these are still about travel, so I needed to make the prompt to be more explicit about rejecting reviews and receipts.
But it made no difference.

I then ran the same test with a few other models, which you can do in a matter of minutes.
The results range from 2 to 8 misclassifications, and a repeat run of a model is not guaranteed to give the same results.

In the end I settled on gpt4o, which most consistently gave the best answers.

## More risk

The story so far focuses on

- protecting data in my accounts by giving the chatbot only limited access to my full email account
- reducing the amount of irrelevant or even wrong information that will be fed into the daily email summarizer.

But more risks exist within the architecture.
Any mail that is addressed to the bot account will be processed by the bot.
An open 'execution environment' like that brings a few problems.
[This unit](/book/diginfra/execution-environments.md) in the Digital Infrastructures book starts an elaboration on the idea of execution environments.
In short: an execution environment sits inside a control boundary.
In this case, the control boundary lets all emails go through.

Not so good...

The first problem to consider: a mail flood to that account will consume LLM resources associated with the guardrail.
These are costing money, and such a flood would either lead to an uncontrolled expense, or a denial of service if limited resources are depleted.
A denial of service could result in a service interruption where no travel update emails are processed for a while. I chose to mitigate the financial risk of excessive resource usage by setting a monthly budget on the specific API key associated with the guardrail. However, this does mean accepting some risk of service interruption if the budget is exhausted.

The second risk to consider is that an email to the bot account could contain a prompt injection attack.
Such a prompt injection attack would contain hidden instructions, instead of just travel information, and LLMs are generally vulnerable to that because they don't easily make a distinction between data and instructions.
There are two LLMs potentially at risk here.
The first one is the guardrail, and the second one is the actual email summarizer.

However, neither of these has access to any tools.
They only output very specific information that is then processed by other functions.
For example, the email summary is stored using an N8N node, not by the LLM or its tools directly.

So the worst an attacker could do is create a fake entry in the list of email summaries.
This may lead to misinformation, and maybe that entry could contain another prompt injection attack targeted at the downstream tool that creates a daily report from the email summaries.

We will have to deal with that option later.

## Closing thoughts

It was fun and informative to go through the process of building and securing this application.

In the architecture of this system I have systematically reduced the agency of the bot, meaning that it can do very little on its own, which translates into less risk.
As such, it does not tell us much about securing full agentic AI.

If you want to dive deeper in my solution, send me a message with your questions, and I will show you my current version.
