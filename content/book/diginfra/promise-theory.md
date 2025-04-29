---
date: '2025-04-25T21:21:54Z'
draft: true
title: 'Promise Theory'
weight: 10
---
Digital infrastructures are about services, not products.
It can be elusive to describe these services, and specifically, how to describe the somewhat loose interaction between the service providers and the service consumers.

Promise theory is a little-known approach to interaction, though it has quite a few great thinkers behind it.
Introduced by Mark Burgess and others, it is about how autonomous actors work together.
It helped me a lot in getting a handle on various distributed systems.
There was this project where we envisioned a scalable travel information system with what we now call microservices.
We needed to describe how these parts work together.
And there was a project that required lots of independent and autonomous social security agencies to work together on providing a service.
In getting this from the drawing board to actual production, promise theory turned out to be a great tool.

Let's start with the basics, and we'll cover some of the background details later.

Imagine you are in a café or restaurant, and you wish to avail yourself of the service to order a beverage.
You have the attention of the waiter, and you politely ask them for a coffee. The waiter responds with a 'yes, by all means' statement. After a while, the waiter returns with the coffee and says: 'there you go', to which you reply: 'thank you!'

This is a transaction between two autonomous actors. Both have the option to not participate.

Now what is really going on here?

Our question to the waiter is really a request for a commitment.
We want the waiter to commit to delivering us the coffee.
The 'yes, by all means' statement amounts to an acceptance of this commitment.
Once the coffee is there, the statement 'there you go' in fact signifies a request to be acquitted of the earlier commitment, that is to say: a declaration that the commitment is fulfilled.
And once we say 'thank you', we have answered to that acquittal request, and stated that there are no more open commitments.

This basic interaction is an enormously universal pattern as we will see, and it can be used to describe interactions on many levels.
I have examples ranging from technical internet protocols to the organisation of service management and legal contracts.

But before we move on, I'll have to discuss some variations that allow you to see how universal the pattern is.

- Some of the steps can be combined, or are implicit.
- The two steps by the provider can be combined if there is little time delay between them.
- The final acquittal can be implicit.
- What we have described is the 'happy path'. Alternative messages are also possible. The waiter can refuse the request: 'we ran out of coffee unfortunately'. We may not accept the drink: 'could you make that an iced latte, please'.

Another point to make is that these transactions are often part of a bigger picture.
For example, once we accept the coffee, we are making an implicit promise to pay for it, at some later stage.
Though you can also envision scenarios where putting your money on the counter of the barista is an implicit acquittal.

Many, if not most, business transactions can be modelled with this, as we will see.
The key is to understand what the promises are that are being made and acquitted.

## IT support is also a service

Let's turn our attention to an example in digital infrastructures: we want a new laptop.
Again, this proceeds by making a request, in this case typically to a service desk.
It is the exact same flow of messages, although there may be more detail involved and a paper or web form needs to be filled in.

In our example, we have humans trading with humans.
But the same principles hold between humans and machines, machines and other machines, as well as between organisations and machines.
The core idea is that we are describing how actors transact.

Once we understand and describe the essence of such a transaction, we can automate it without changing the meaning.
That is a very powerful insight in a cyber world.
As an organisation, we want to have machines service our customers.
And as customers, we don't seem to mind talking to a website as a substitute to talking to an organisation.

In the course of the 20th century, most countries completed the automation of their telephone systems.
Requesting a call through an operator was replaced by 'direct dialling', or self-service as we would call it in other situations.
As late as the 1970s there were destinations you could not directly dial, even in developed countries.

But the principle of setting up a call is the same, whether you ask a human or a machine.
It starts with 'please connect me with this number'.
And the general promise, the commitment, of the telecommunications company remains to do that, irrespective of the technology.

## What is a promise?

According to [Jeff Sussna](https://www.oreilly.com/library/view/designing-delivery/9781491903742/), a promise is "... a strongly stated intention to provide a service, which may or may not be kept".
This makes it clear that there ultimately is a possibility for it to not be fulfilled.
Jeff Sussna compares this to a teenager's promise to clean their room.
It may happen, but there is a chance it does not.

Autonomous agents can only make promises to each other, they cannot force each other to do things.
However, we can *ask* other agents to make a promise to us.
In our example, we ask the waiter to bring us a coffee.
The waiter may chose to respond by making the actual promise.

The next important construct is the *conditional* promise.
An example would be: "If you bring me a coffee, I will promise to pay you for it".

With these basic primitives, we can model a lot of conversations.

Our example coffee conversation now becomes:

- Query: Please promise me to bring a drink
- Ack:  I promise to bring you a drink in a short while
- Reply: Please promise me that you are satisfied and will pay
- Ack: I promise to pay you for the drink

## Contracts are complementary promises

Once we have this in place, contracts between agents now become really simple to express.
They are a set of complementary conditional promises: "If you do this, I will promise that".
In our example this looks like the following.

- If you promise to pay me, I will promise to bring you coffee.
- If you promise to bring me coffee, I will promise to pay you.

If one party does not keep its end of the bargain, the other party is free to witdraw from their part of the deal.
Of course there is the complication that somebody has to deliver first: do you get coffee first, or do you have to pay first?
This requires trust.
As you are probably aware, both types of contract exist in real life.
In fact you can find more complicated versions as well.

It is typical to have additional promises for any deviations from the happy path.
An example would be: "If you do not pay for your coffee, I promise to call the police".
This is a simple approach.
We will discuss later how we can model trust and trust violations.

One way to sum it up is by this question:

>What do I do, what do you do, what do I do if you don’t?

This was the longest English sentence I made that only has monosyllabical words.
I had a rap song produced from it.

## Semantics

We can dive a little deeper into what such a promise means.
In all our examples, messages were exchanged between actors.
These messages control a process of interaction, and in that interaction, a shared reality is created.
This sounds abstract, I know, so let's have an example.
At a marriage, the magic sentence is: 
>“I now pronounce you husband and wife”.

What changed after that sentence is said?
Legally, these people are now married, which creates a whole new world of possibilities and obligations.
Before that sentence was spoken, they were not married.

That is why this is also called 'speech act theory': the statement acts upon our reality.

Speech act theory: language controls a process, or creates a shared reality, each of which can be about information or about a physical process

- ”I promise to deliver your drink”
- ”I promise to deliver your virtual server”

## Coming up

What if a promise is not kept?

Rooted in Deontic logic (obligations, commitments, permissions)
