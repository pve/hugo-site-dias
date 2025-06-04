---
date: '2025-05-11T08:37:01Z'
draft: false
title: 'Information Security Assets'
weight: 5
---

Let's dive a little deeper into assets.
The most relevant asset in information security is data.
That is what users of information care about most.
In addition, we can also see the processing power that we need as an asset.

Here are some examples of data assets:

- A customer record in a business system
- An MRI scan
- A browser cookie (on the server)
- A logfile entry

As you can guess from these examples, many involve regulatory concerns due to the type of data that they consist of.
One of the tasks of a risk analyst is to figure out what regulations apply exactly.

From a risk analysis, the asset is the unit that we consider.
ENISA, the European Network Information Security Agency, is one of the many institutes in the world that describe IT risk management.
Its [cloud security report](https://www.enisa.europa.eu/publications/cloud-computing-risk-assessment) identified a number of asset types.
Here are a few examples to illustrate its breadth:

- A4. Intellectual property, this represents value to the organization owning it.
- A6. Personal data
- A14. Cloud service management interface
- A17. Physical hardware
- A22. Security logs

But the document is still worth a more in depth study.

## Vulnerabilities and Threats

Now what could *possibly* go wrong with a data asset?
Who might see your secret pictures?

Various terms are used to talk about this.

ENISA talks about vulnerabilities as "Any circumstance or event with the potential to adversely impact an asset".
It is therefore about the damage potential, not the actual damage.

Microsoft in their framework uses these concepts:

- Threat. A potential occurrence, malicious or otherwise, that might damage or compromise your assets.
- Vulnerability. A weakness in some aspect or feature of a system that makes a threat possible. Vulnerabilities might exist at the network, host, or application levels.
- Attack (or exploit, leads to bad consequence). An action taken by someone or something that harms an asset. This could be someone following through on a threat or exploiting a vulnerability.

Again, it is about how this leads to damage.
Threats and vulnerabilities are hypothetical, they are about things that have not happened yet.
That is, they have not happened to *you*. Yet.
And that makes them hard to reason about.
We'll return to that.

Here are some cloud specific examples from the ENISA report

- V1. AAA vulnerabilities (authentication and authorization, i.e. weak or reused passwords)
- V4. Remote access to management interface
- V5. Hypervisor vulnerabilities

An example of the first one is a weak password like "password123", especially if it is used on many accounts.
V4 is about cloud access. In a cloud environment, you don't walk up to your computer, you log in to it remotely, possibly over the internet.
That brings additional vulnerabilities.
Especially since this 'management interface' is not just an account, it is an account that rules other accounts.

Finally, a more technical cloud specific example is the hypervisor.
The hypervisor is a technology for dividing up a physical machine into multiple virtual machines.
Each could serve different customers.
If you are one of those customers, you typically don't want another customer to have access to your data.
The hypervisor is an 'isolation provider', and it creates isolated 'execution environments' (see elsewhere).
Failure to isolate is therefore a vulnerability.

## Risk

Vulnerabilities exist all over the place.
All technology has weaknesses.
But what are the ones that matter?

Most vulnerabilities are not easy to exploit, and they are not necessarily leading to a lot of damage.
For example: while hypervisor vulnerabilities exist, they are really esoteric and hard to exploit.
Most of them have been fixed anyway.
And losing your drivers license as it slips out of your pocket is a nuisance, but not something that ends the world.

What matters is how big the resulting damage can be, and what the chances are that it happens.

As we saw earlier, it is common to distinguish three major sources of damage: lack of availability, lack of integrity, lack or confidentiality.

Each of these hints at a business process in which the information is used.
But it is nothing more than a hint.
Part of the job of a risk analyst is to figure out what kinds of damages can happen in real use cases.
The value of that the damage is called the *impact*, and mostly relates to events outside the information system.
It happens to another stakeholder.
If in a risk analysis you cannot find a credible stakeholder who is impacted, it is not much of a risk.

As risk is always about the future, it often makes sense to think in terms of probabilities.
One way to quantify risks is to assign them a value based on impact and probability.
The impact of losing the corporate's CRM system is quite a bit larger than that of losing the menu of the company's restaurant.
The probability of somebody losing a password is quite a bit higher than the probability of a major cloud provider going out of business.

The aforementioned ENISA report mentions this formula:

>Risk = Impact * Probability

The greater the impact and probability, the higher the total loss.

The ENISA report gives the following example:

>A14. Cloud service management interface
>+
>V1. AAA vulnerabilities
>Leads to
>R.11 Management interface compromise

What this tries to say is that there exists a thing called the cloud service management interface (e.g. the website that you use to control your cloud account), which has a vulnerability (password too simple, or publishing the secret key to it), which when exploited will lead to a management interface compromise.

The report then describes some of the bad things that can happen as a result of this.
For example, a malicious actor can exfiltrate data, or run a Bitcoin farm.

A final note on probabilities.
Some events are really random, for example the chance of a server breaking down.
The server does not 'know' how valuable the data is that you put on it.
Different brands of servers will have different failure probabilities, and you can do actual math on that to predict when it will be cheaper to replace them versus waiting for them to fail.

Malicious actor events, however, are a little harder to quantify.
Generally speaking you can assume that the chances of a script kiddy attacking you is quite high, that chances of being targeted by organized crime quite a bit lower, and the chances of being targeted by a nation-state actor even lower than that.
But this strongly depends on the value that you as a target represent.
A nation-state actor is not going to waste a very valuable unknown vulnerability on discovering your restaurant menu.
But if your data are the crown jewels of your organization, or give access to national critical infrastructure, the stakes are quite a bit higher.

When you have trouble quantifying probabilities, especially for malicious actor events, I find it useful to review the money and resources that the attacker is willing to spend on you, in addition to your value at risk.
But beware organized crime, their operations are highly automated and well tuned, and you might be cheaper to compromise than you know.
