---
date: '2025-05-05T10:18:17Z'
draft: false
title: 'What is trust'
weight: 670
---

Trust is an essential element in any collaboration.
We want to trust things, people, and organizations to do the right thing, to keep their promises.
Without trust, we will not be able to have confidence in the contribution of others, and that is a risk.

Anything we don't trust is a risk.
Anytime we assume trust that is not warranted is also a risk.
That is one of the core concepts of Zero Trust Security Architecture.

We talk about trusting people, trusting organizations, but trust can also apply to fairly technical issues.
For example: can I trust the webserver to be up all the time?

I struggled with defining trust, it can be an elusive concept.
In the end, I found promise theory to be a very helpful tool.

### Trust my promise

From the lens of promise theory, trust is our expectation of the extent to which promises will be kept.
And as promises are about events and interactions, we can put numbers on those expectations.

For example, we tend to trust technical things that have demonstrated their reliance over a long time.
If the web service had an uptime of 99,99% over the past months,
I feel I can take that as a reasonable backing of a promise of future uptime.
On the other hand, if my internet provider has had an outage every other day in the past week (which is what happened as I am writing this) I no longer trust that uptime guarantee anymore.

Trusting people and organizations works in a similar way: we see past performance as a predictor of future behavior.
But there are other mechanisms to understand trust in outcomes.

### Trust mechanisms

One is from "the Prisoner's Dilemma," which is a story from game theory.
Another is "authority," which is basically "I trust somebody, because somebody else helps enforce that trust".

The (iterated) Prisoner's Dilemma game shows how perceived promises can appear out of adversarial situations.
Once we understand our retaliation options, we can have a more calculated estimate of the chances that promises will be kept.

In essence: If you don't escalate, I will not escalate.
This is a conditional promise.

For example: if your webserver fails to work, I will find another hosting company.

The authority based promise is a bit more complicated.
It is a delegated promise, combined with retaliation, but instead of us retaliating against bad behavior, it is the authority who will retaliate.
This is the core of escalation.
If the service desk does not resolve your issue, you take it a level up.
See the unit on Delegation Domino for more detail on management layers and promises.

### Trust failures

What goes wrong in reality is that people have misunderstandings about promises.
They think promises were made that weren't.
One example is to assume industry standard levels of performance and competence.
You may assume that, but unless it is actually promised, you don't have a leg to stand on.
A variation of this is in dealing with organization where one part suggests promises made that are not kept by another part.
I remember multiple stories where sales and delivery disagreed on that one.

A more subtle case happens in developing partnerships, where there is fluidity in what each partner does, and hence what they are promising each other.
It often happens that one partner is making stricter assumptions on
the what, when, and how, than the other partner.
Somebody will then be disappointed, and will feel they cannot trust the other.
In these cases, check the promises you were assuming.

Circling back to Zero Trust approaches, I'd like to rephrase this as zero *assumed* trust.
Look for the promises that are assumed in the technology, the architecture or the governance, and check the understanding.

By analyzing the promises actually made, or omitted, we can see how trust develops and is sustained.
Look for the gaps, because that is where trust is assumed, rather than supported.

Assumed trust is where risk is.
