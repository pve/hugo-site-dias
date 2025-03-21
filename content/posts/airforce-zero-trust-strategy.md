---
date: '2025-03-21T12:26:58Z'
draft: false
title: 'The US Air Force Zero Trust Strategy'
---
Who is really doing Zero Trust? 

Well, the US Air Force is. Here is my summary, with some comments, of their strategy document for the benefit of my Certificate of Competence in Zero Trust (CCZT) learners. In fact, this is an edited version of a conversation we had during one of our classes.

You can download the full strategy [here](https://www.dafcio.af.mil/Portals/64/Documents/Strategy/DAF%20API%20Reference%20Architecture%202.0.pdf), and the current roadmap [here](https://www.dafcio.af.mil/Portals/64/Documents/Strategy/DAF%20Enterprise%20Zero%20Trust%20Roadmap%20and%20Release%20Notes_v2.0.pdf?ver=36cbAKNEe7JiRVAPFwWepg%3d%3d), all linked from [this page](https://www.dafcio.af.mil/).

I think the fundamental first important point about the strategy document is that it exists at all. There is an actual organization of significant size that has a strategy and is implementing it. Many can learn from this.

The second major point is that its terminology and even its conceptual frame of reference is almost 100% CCZT compatible. Even better, it lists more specific initiatives than the Zero Trust courseware itself. So rather than talking about a strategy, it actually is a strategy with strategic goals and sub-goals that match.

I am not repeating the strategic goals and subgoals here. They align with CCZT, and the strategy document is succinct enough.

Data is considered to be the strategic asset to protect. It is really focussed on protecting the data. Side note: for regular organizations, it is actually quite hard to have a  top-down understanding of the value of data. Anyway, the focus on data represents a shift away from a network centric security strategy. In fact, the current strategy is defined as network focused, defense in depth, castle and moat.

# Benefits

Already in the summary it mentions three important benefits of the strategy, instead of just saying "We need to be more secure". 
1. Reduction of architectures
1. Unlock access
1. Impose higher costs on adversaries

The strategy summary states that it reduces the number of architectures. Later in the document, it's a bit more specific about that, saying there are too many point solutions and stop-gap measures across that entire network.
This is what happens - you start with a low-security network and then as you mature your requirements, if you don't have an overall strategy, you get all these point solutions and they are expensive simply because you have so many different ones. So the zero trust strategy has, as one benefit, that you will have less of these.

In IT, migrating from a functioning system to a new one rarely has a strong business case. As a matter of fact, that's true for a lot of technology. If it ain't broke, don't fix it. That's for a number of reasons. One of them is the business case: it is too costly. But if you're not happy with the current situation, you have a change imperative and the business case changes because your migration cost is a sunk cost and no longer something that needs to be recouped.

The most important functional benefit mentioned is that it unlocks access. And a little later it explains: "to shared and trusted information." 
This is enabling warfighters. Well, also a lot of other roles. But the mission of the air force is to fight, or at least demonstrate the capability to fight, which is probably even more important than the actual fighting. 
It's fairly obvious that you want to do this in quite adverse network circumstances. They even have an abbreviation for that - DDIL (denied, degraded, intermittent, and limited) - for situations where you may or may not have a connection to your drone, for example.

The third one that I liked from a security mindset perspective is that it imposes higher costs on adversaries. They don't say we need to protect ourselves from adversaries, because that is not a goal that has a measurable KPI. It's hard to say "okay, we've reduced our exposure to adversaries." The adversaries are all over the place. In fact, without adversaries, you wouldn't need to have an air force.

So what they're saying is, okay, our defensive strategy is based on increasing the cost of the attacker to attack us. 
This is military doctrine - you end a war when the enemy no longer wants to fight you. 
That's the military definition of ending a war, dating back to Sun Tzu. One way of doing that is raising the cost for them to continue attacking you. 

So I liked these benefits very much. I think they're understandable on a strategic level.

# Scope

In terms of coverage, the strategy sometimes looks like buzzword bingo. 
First of all, it mentions all new developments like AI and IoT. It includes top secret data and operational technology. Cloud and mobile is included, even non-IP devices. Microservice architectures. 

It acknowledges that more endpoints are moving to the cloud.

# Old is new again?

The strategy contains a lot of elements that you already see in mobile security infrastructures that are being build these days. Mobile, cloud, 'new way of working'. 

It is a theme that we've seen before - zero trust isn't about reinventing the wheel. It is not about reinventing all great tactical security stuff we already know. Most of that is still useful.

Zero trust is a more comprehensive and consistent approach to stuff that we already know.

Potentially a new technology that is explicitly mentioned is SDP (software defined perimeter). But even that has its roots in earlier technologies such as the [knock knock protocol](https://en.wikipedia.org/wiki/Port_knocking). SDP is a more structured variant of that. 

SDP is fairly directly stated as a tool to eliminate VPNs. This is a substantial driver of the benefits mentioned.

# Maturity and automation

Section three includes a small maturity model, in which an important dimension is 'automation'. In the document, the mantra is repeated regularly: we do this initially with manual efforts but we must evolve to a real-time and automated approach. I think the nice thing here is that it acknowledges that you need to get started on it and don't overautomate in the beginning, but that manual processes are not sustainable in the long run.

You don't want to automate what you don't understand. So there's a fine line there. As a matter of fact, I've written earlier about this in the context of automating system management and network management. And one of my former colleagues had a PhD thesis of which that was the most important result.

# The big elephant

Another interesting point, the ramifications of which are not immediately clear, is that without mentioning Microsoft, the document states: 'We have Active Directory Domain Controllers all over the bleeping place.

This is the Microsoft Active Directory architecture where every location has its own domain controllers - and this is archaic because this is from the period that you had flaky connections to offices.
In the old time at banks where I worked, every office had an active directory domain controller.
In fact, two because of high availability requirements.
But it's an attack surface.
The Air Force says we have over 180 sites, so we have more than 360 attack surfaces.

One of the stated objectives of the strategy is to drop the dependence on these Domain Controllers. Now, how they are actually going to do that, it doesn't say, but I thought it was a really interesting point to make.


# Logging and shared responsibility

What I liked also is the emphasis on comprehensive security event monitoring and logging, including application security events.

They also highlight the need for a 'shared responsibility model' for handling those events, involving both external security service providers and internal security operations centers.
I think that's a nice frame of mind or a nice thinking model on how to roll that into your architecture.

# Governance and risk

Strategy can be a theoretical exercise. How do you pull this off in reality? The final part of the paper prescribes how the responsibilities for the implementation are delegated to various offices and units within the Air Force organization. A dozen of them are mentioned, and it even spells out where some of the deconflicting of priorities is going to happen. Deconflicting is a core element of governance - that you find out: where are the conflicts and how do we actually handle them?

Institutional resistance to change is identified as the greatest risk, as it requires 'all communities to adapt in uncomfortable ways.'"

Amen.


# Open ends

In a couple of places, it says we need to do discovery of everything on the AFIN - the Air Force Information Network. And then somewhere else, it says we have a cloud-first priority. My question: wait a minute, are those cloud services part of the Air Force Information Network or not? It depends a little bit on your definition of what a network is. This is, by the way, not new for this document. I've seen that ambiguity over the past 30 years in a couple of other ways and places. Is the network the stuff that routes packets? Is it everything that you can reach from a certain device? Is it all the servers? Does it include all the clients? 

It's a little less clear how that works. So there are some loose ends on the edge of the strategy.

What I also did not see is how progress is going to be measured, and how you would audit or assess that. 

In conclusion: read this if you are interested in enhancing your IT-based capabilities while reducing your security costs.