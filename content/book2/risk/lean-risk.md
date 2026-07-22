---
date: '2025-05-27T19:58:41Z'
draft: false
title: 'Lean Risk and Economics'
weight: 40
---
From the moment a security vulnerability is discovered, it represents a negative value to its potential victims.
When it gets exploited, it can lead to loss of data or loss of integrity of the data.
This in turn impacts the victim's business processes.

For example, if personal data is leaked, reputations will be damaged, financial losses and fines can be expected. Credit card abuse forms another example of loss.

This "damage potential" increases as the vulnerability becomes well-known, progressing from nation state actors, to organized crime, to script kiddies, just to name one example pathway.
At first, few people know about it, but gradually more people will be able to inflict damage with it.
Over time, each step adds to the likelihood of that vulnerability being exploited and causing real damage.
The likelihood starts at near zero, and ends at close to 100% as the vulnerability is completely public.
This only stops when an investment is made to mitigate the vulnerability, for example by updating the software.
And hopefully, that investment is less costly than the damage potential.

This damage potential resembles the concept of "work in progress" from lean production.
Originally developed as the "Toyota Production System", it is also applied to software development.

For example, if your team spends three months with five staff members on building a feature, the work in progress is now valued at fifteen man-months.
That is an investment, which you will only recover once the feature is delivered and accepted.
Only then will you be paid for it, hopefully reflecting more value than you put in as an investment.
The mantra of lean production is to reduce work in progress.
Work in progress represents a liability: it is capital tied up, and maybe it won't bear fruit.
For example, your new piece of software may solve the wrong problem.
This is why entrepreneurs love the idea of a minimum viable product, it reduces work in progress.
You want to drop bad ideas as fast as possible.

Back to vulnerabilities:

The longer you wait with mitigating a vulnerability, the more negative value it accrues.
Fixing it represents an investment, which hopefully has a positive return.

There is a parallel with software development.
In software development, the net value drops as more money is poured into development, which then returns to positive as the feature is delivered and paid for (figuratively speaking).
In cyber security, the net value drops as the vulnerability is accessible to more threat actors, which then returns to zero after an investment is made into its mitigation.
Hopefully the cost of mitigation is less than the net value (i.e. damage potential) at that time.

This may sound pretty abstract, but I think I will be able to show the usefulness of this approach.
It helps us identify where and how investments are most productive in cyber security.

At any given moment in time, a stream of new vulnerabilities is thrown at cyber defenders around the world.
For example, in 2024 around 40.000 vulnerabilities were published in the CVE database ([source](https://www.cve.org/about/Metrics)).
Without additional information, all of these carry a negative value to an organization, as all of them have damage potential.

What investments can reduce the damage potential, and more importantly, which of these have the best return on investment?

Let's start at the beginning.
If you can match vulnerabilities to the software you have, you'll find a lot of them are not relevant as they relate to software you don't have.
A proper and accessible software inventory therefore represents an investment that can reduce the total negative value of vulnerabilities.

>Case in point: log4j affected a quarter of the world's organizations.
>So, without more information, your organization had a 25% chance of being pretty vulnerable.
>But, if you knew that this software was not in use anywhere, your vulnerability dropped to zero.

Then, fast forward through the value chain.
How can we reduce the negative value of a vulnerability?
One way is to reduce the damage potential through segmentation and similar Zero Trust techniques.

In a future extension of this unit, we can discuss:

- actor analysis: we have two types of actors here: malicious actors and potential victims, but there are more actors
- self inflicted vulnerabilities such as misconfigurations
- the value streams for malicious actors
- the value stream for security researchers
- the value streams for security service providers
- why Zero Trust reduces the negative value of a vulnerability.
