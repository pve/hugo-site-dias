---
date: '2025-07-25T07:45:07Z'
draft: true
title: 'Cloud Computing'
weight: 51
aireview: 
---

Cloud Computing is an important and big set of digital infrastructures.

Between 2000 and 2010, as the internet was growing in reach, it also became a vehicle for the delivery of compute services.
Back in the day, Application Services Providers, as they were known, offered software remotely, so it was no longer necessary to install it in a company's datacenter.
I could tell horror stories about how early client server application installations went, so not needing that was a key selling point.

A little later, Amazon was one of the pioneers of offering storage and servers over the internet.
In addition, there were a bunch of other providers offering a variety of platforms on which you could develop and deploy software.
These offerings were often 'opinionated', which means they made a lot of technology choices for you.

These seemingly disparate developments were brought under a single umbrella term: cloud computing.
The history of that term is not easy to trace.
It is one of those concepts that seem to have been discovered independently in multiple ways.
As early as 2001 we talked about putting servers 'in the cloud', meaning we did not care much where they actually were.

NIST, the US National Institute of Standards and Technology, solidified the concept in 2011.
They lumped together all kinds of online services and access to resources in a single definition, by identifying *five essential characteristics* of such services.

I have spent many hours explaining these, and answering questions about them.
Technical people used to be confused about the vagueness of these characteristics, but once we start looking at them as drivers of value and risk, it becomes a bit more applicable.

We'll get to those characteristics in a moment, but first I want to point out that there is a more fundamental characteristic than the five of NIST.

## The service

Cloud computing is a service, rather than a product.

It is not a unit that you buy, like a laptop, but a service that you rent.
The consumer and the provider are in a continuous relationship.
If one of them goes away, the relationship ends.
This is different from owning something.
There are many computers still in operation of which the manufacturers have long gone out of business.
The sections on promise theory explain how you can describe and even quantify such services and their quality.

The NIST essential characteristics fit into that framework.
Let's go over them.

## On-demand self-service

> A consumer can unilaterally provision computing capabilities, such as
server time and network storage, as needed automatically without requiring human
interaction with each service provider.

The value that this brings is in the speed at which it can happen.
As a general rule, delay brings cost, or at least missed opportunities.
Not having a human in the loop at a provider can speed up things.
Not having a human in the loop at the consumer can speed up things even more.
This is why cloud providers generally offer APIs and web interfaces to provision their services.

Self-service also brings risk.
In order to reap the benefits, organizations must delegate their control over this provisioning to where it is needed, which is often at a much more operational level.
This can lead to uncontrolled consumption, unless technical and governance measures are put in place to mitigate these risks.

## Broad network access

> Capabilities are available over the network and accessed through standard mechanisms that promote use by heterogeneous thin or thick client platforms (e.g.,
mobile phones, tablets, laptops, and workstations).

There are a couple of things in this NIST definition that are obvious to some, and confusing to others.
It depends on your background, so be aware of that.

- Broad means ubiquitous here, distinct from broadband networks.
It assumes the network is available to everybody.
Broadband refers to the speed of networks, such as Gigabit fiber and 5G mobile.
- The network does not come included as a part of the service.
Consumers are supposed to already have some network access.
That is part of the value: no need to have separate networks for separate services.
- The network is a shared service between the consumer and the provider.
However, that does not mean that the network has a single owner.
- The NIST definition tries to avoid mentioning the internet, or internet protocols.
While the public internet is a major delivery infrastructure for delivering cloud services, major cloud providers also offer dedicated communication services where capacity and isolation can be agreed upon bilaterally.
Those services still run internet protocols, typically.
- The network is viewed here from the perspective of the service: what does it take to get to the users? It includes connectivity but also the user devices. In contrast, a typical network engineer excludes both the clients and the server from their definition of the network, whereas the average user sees all *services* as part of the network. Confusing, isn't it?
- In the old days (1960-1990), services such as airline reservations, Compuserve, the French Minitel, and financial market information (Bloomberg terminals) were provisioned as end-to-end services and the fee included data communications as well as the end user device.
- The risk associated with this characteristic is lack of isolation between clients and between services.
When a cloud service is on the internet, your accounts on that service are on the internet too, and therefore potentially accessible by bad actors.

This cloud characteristic compares to what economists call 'unbundling' of services.

## Resource pooling

> The provider’s computing resources are pooled to serve multiple consumers
using a multi-tenant model, with different physical and virtual resources dynamically
assigned and reassigned according to consumer demand. There is a sense of location
independence in that the customer generally has no control or knowledge over the exact
location of the provided resources but may be able to specify location at a higher level of
abstraction (e.g., country, state, or datacenter). Examples of resources include storage,
processing, memory, and network bandwidth.

This one is a mouthful, probably because the concept of resource here is pretty broad.
It tries to cover all bases.

Cloud providers are shared services, as I have explained elsewhere.
What makes that work economically is a combination of factors.
There are economies of scale at work that individual consumers can't reach.
But in combination with the characteristic of rapid elasticity, consumers can provision just enough capacity for their needs without paying for excess or unused capacity.
The slack is taken up by the provider, who can average out the consumption over multiple consumers, in the same way that the average electricity user is only occasionally using ten times their average consumption.

That is a clear business benefit, but the risk of it is that the resources may not be available when the consumer needs them.
And of course, the provider bears the risk of unused spare capacity that cost them money and does not bring immediate revenue.
As an internal IT department is typically a cost center, accounting rules in an organization won't allow them to take on this risk.

## Rapid elasticity

> Capabilities can be elastically provisioned and released, in some cases
automatically, to scale rapidly outward and inward commensurate with demand. To the
consumer, the capabilities available for provisioning often appear to be unlimited and can
be appropriated in any quantity at any time.

We discussed on-demand self service, but that did not state how fast the capabilities were scaled.
It also did not discuss de-provisioning.
To the consumer, the speed of provisioning matters.
And in order to control costs, release must also be fast.

How fast? That depends on the business process that it needs to support.
An incoming storm of new shoppers should probably be handled in minutes.
In contrast, a flood of new employees would still be well served in hours, or even days.

Rapid elasticity also has risks, in particular uncontrolled spending.
If spend can grow faster than the review cycles can keep up with, there is a monetary risk.

The provider also faces risks.
It is hard to predict how much capacity is required to serve the customers.
And the demand can change much faster than a provider can build the resources.

This is probably one of the reasons that infrastructure providers have reserved instances and spot instances, on top of the regular server instances.
The reserved instances do not run the risk of a sudden scale down.
The spot instances can typically be pre-empted by the provider, so when they are running low on capacity for better paying consumers, they can just terminate the spot instances, and reallocate the capacity.

## Measured service

> Cloud systems automatically control and optimize resource use by leveraging
a metering capability at some level of abstraction appropriate to the type of service (e.g.,
storage, processing, bandwidth, and active user accounts). Resource usage can be
monitored, controlled, and reported, providing transparency for both the provider and
consumer of the utilized service.

If nobody pays for what they are using, they will hoard everything they can lay their hands on.
Before cloud computing existed, IT resources went to the departments that were most savvy in budget discussions,
not necessarily the departments and applications that needed it most or had the best use for it.
I discuss these governance issues in more detail elsewhere.

The promise of measure service is that you pay for what you use, or more specifically, you pay for what is *valuable* to you.
That is why some services are priced by the account: the more users you have, the more valuable the service becomes.
Think of email as an example.

More simply, an infrastructure service does not charge you for the storage box, but only for the part that you are using.

This is different from the cost structure of the provider.
For the provider, the number of email accounts is not a cost driver.
Instead the storage of mailboxes is, as well as the number of messages processed.
Again, the difference between cost and value is taken up by the provider as profit or loss (as the case may be).

Setting prices like these can be complicated.
One approach that works quite often is to consider pricing and consumption as a game.
The moves of the providers are not just setting the prices, they also set the dimensions, e.g. charge per user or charge for consumption.
The consumer can primarily accept or reject the pricing, based on the payoffs they are getting.
In a business context the payoff is closely tied to the business benefit.

The NIST definition tries to not talk about money, but instead talks of control.
Money is a form of control, but inside an organization there are other forms of control, such as quota.

## Wrap up

Cloud computing brings power to at least two types of actors.
The consumers get to ship new features, and deploy new software faster.
The providers are building a scalable business for themselves.

So everybody wins, right?
Maybe, maybe not.
Maybe there is a party that is not getting benefits.
It is up to you to figure that out in your situation, because those are the ones that may sabotage any cloud migration project.
For example, if adoption of new technology reduces opportunities for professionals whose careers are based on mastering the old technology, those professionals are likely to strongly oppose the adoption.

Every change in technology changes power structures. 