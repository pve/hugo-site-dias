---
date: '2025-04-15T21:27:25Z'
draft: false
title: 'Who Suffers?'
weight: 10
---

I have found that no discussion on risk is going to lead anywhere if it does not make clear who suffers from it.
Make clear who has the pain.
For my phone and laptop it is easy: if I lose them, I suffer.
In a larger organisation it is less clear.
Suppose a server dies.
Whose application then no longer runs?
Who has to pay for a new server?
This gets increasingly harder if we are talking about shared services, because the owner and the consumer are now decoupled.

A related complication pops up when a failing component or service is remote from the organisations main purpose, or mission.
We see this a lot around software vulnerabilities.
A software vulnerability can allow a malicious actor to fully take over a service.
But unless you demonstrate that:

1. this vulnerability can actually be exploited, and
1. this exploit can cause damage to the mission

it would be a waste of time to address it individually.

If you are involved in risk analysis, make sure to complete the reasoning up to the point where the stakeholder with the budget feels the pain.
To do less is a waste of resources.

## External victims

It gets a little more complicated if those who suffer are not part of the organisation that controls that risk.
Example: as a merchant accepting credit card payments of your customers, the customers creditcard number helps you get paid.
But if you accidentally disclose it, and it falls in the hands of a bad actor, you don't suffer.
The customer does, or their bank.

From the perspective of the customer, your activity impacts something that is of value to them.
Economists call this an externality, and we see various examples of that in the world of risk, and in digital infrastructures at large.

As the example customer, there is little that you can do about it.
Why the credit card system still works is that banks and credit card issuers have an interest in the system working, and they don't want to saddle either the card holder or themselves with these losses.

They have the pain, and their response has been to create a mandatory certification scheme for everybody who touches a credit card number.
You cannot process a credit card, and definitely not at scale, without being PCI/DSS certified.
This is enforced by contract.
If you can't abide, you can't process credit cards, which may be important to you.
This is how they make the credit cards processors suffer.
It is an industry regulation.

Similarly, personal data loss is a risk to the person, not to the organisation that collects your personal data.
That is why there are privacy regulations, of which the EU GDPR (General Data Protection Regulation) is the most well-known.

These aren't industry regulations, they are the law.
And if you don't follow the law, countries can fine you.
Unfortunately, as I mention elsewhere, money is a blunt instrument.
So while privacy laws work, they are not a perfect solution.

Summing up, this leads to a new category of risk: compliance risk.
If you do not comply with regulations, whether they are industry or government, you will suffer the pain.
