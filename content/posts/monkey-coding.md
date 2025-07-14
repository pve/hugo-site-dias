---
date: '2025-07-12T06:26:24Z'
draft: false
title: 'Can Machines Code?'
weight: 10
---

### The approach

People call LLMs statistical completion engines, and that they therefore cannot write computer code.
While the first may be true, the conclusion not necessarily follows.

Let's try this out!
Inspired by modern discoveries in, for example, context engineering and swarm coding (references to come) I decided to give AI assisted coding it a shot.

I had a little used SaaS application (an LMS) that was nevertheless costing serious money.
It was relatively easy to extract the Gigabytes of content in there, also through a bit of AI assistance.
So I decided to rebuild the app, or at least a minimal version of it.
Hey, how hard can it be with Claude Code?

I started out by adopting the prompt and repository structure by [Cole Medin](https://github.com/coleam00/context-engineering-intro).
I fed Claud with the first prompt of that approach, and a bit of the structure of the backup of the SaaS application, and asked it to create the initial feature request.
With just a few lines of text, plus the data structures, it created a multi page feature list, sorted by priority.
Quite nice.
It even did an ASCII mockup of the GUI.

Following the steps in Cole's method, Claude Code started ticking off tasks and building code.
At first, it moved nicely, regularly asking me for certain permissions or decisions.
The interval between those was sometimes minutes, so I quickly decided to introduce some audio feedback using the MacBook `say text` command as a notification hook.

It ran into a couple of errors, but most were fixed immediately.

Then it became time to look at the GUI to see if it actually worked.
There were some errors and mistakes in them, so I reflected that back to Claud Code.
It dutifully tried to fix them.
Some of the fixes worked, some of them did not.

Then it started to feel that for every fix, a new issue appeared in the user interface, and the coding assistant dutifully was not so helpful any more.

### The sting

What is going on here?

The thing is, I had become part of a feedback loop involving me and the assistant on the implementation of small features.
While doing that, I am no longer a part of the solution, I have become part of the problem.

And the problem is that I was interacting with the LLM on the wrong level.

I was fixing code, I was not fixing the requirements and the methods.
And while I am fixing the code, I am doing their job.

I should be working on the requirements, such as clearly specifying required outcomes that can be independently verified by the coding assistant.
I should be working on the methods, such as how the *coding assistant* can verify that those outcomes are achieved, instead of *me* verifying them.
I should be thinking about the way this application we are building together is solving a business problem, or not, as the case may be.

Maybe there is a better way to solve this problem than by writing code.
In my case, the problem was already solved, I just thought the price was too high. But the business case for that was deteriorating by the hour.
Still, the experiment allows me to research this approach and write about it.

### Monkeys

At this point in the story you might feel that indeed AI is a statistical completion machine.
I was reminded of the meme "If you give enough monkeys enough typewriters, you will find a Shakespeare sooner or later", and I felt like the poor guy who actually had to read through an ocean of words to find that piece of playwriting.

The trick is to have a structure that makes an AI look after that.

The peculiar thing is, if you ask the AI (Claude in this case) how we should simplify and strengthen the approach, so that there can be better end to end testability, it actually comes up with a very decent answer.
That answer can even be translated into extensive project guidelines.
This includes things such as modular application architecture, test driven design, proper git version control hygiene, CI/CD pipelines, browser based testing, and more.

The coding assistant managed to apply these guidelines to a smaller project I gave it, and then made very few errors that required my attention.

I had transcended the feedback loop.

One technique for that is making sure the assistant sees as much of the workings of the system, including its development and deployment process as possible, because you are the one who has to fill the gaps.
For example, if the web app gives a server error (for example, code 500), the assistant should see it directly, instead of you manually relaying it to them.

### The lessons

The AI coding assistant will happily do what you ask it to do, and is not necessarily challenging you on best practices, or the lack of them.

The more we ask it to apply solid software engineering methods that work in teams of programmers, to better AI will perform.

The assistant is capable of applying abstract rules to a specific situation (e.g. apply a modular structure, or introduce test driven design).
It is also capable of *identifying* relevant best practices and abstract rules based on quality criteria such as 'modern tools', and 'better testability'.
What does not happen automatically is identifying that the human has those demands to begin with.
It seems to be trained on pleasing you with as little effort as possible, and without asking you questions that you may not like to hear.
And maybe it should start there, in the same way that making an inventory of your home kitchen cupboard does not start with building an ERP system.

Can an AI assistant code?
I would rather ask the question: can it adequately simulate humans that code.
What I have learned here is that this is quite dependent on making the best practices of human programmers explicit.

### Vibe coding

An afterthought: in his original tweet Andrej Karpathy introduced 'vibe coding' as the flow of being engaged with the assistant in a cycle of giving commands and fixing bugs.
I understand that as not paying attention to any higher level guidance or method, which is not something to aspire to as a professional software engineer.
Unfortunately, as it often goes, 'vibe coding' is now often used as a term for all AI assisted coding.
