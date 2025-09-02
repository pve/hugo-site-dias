---
date: '2025-09-01T19:48:55Z'
draft: true
title: 'Data, Risk, or Controls: where to start?'
weight: 80
---

For many organizations, the start of their IT security journey is when they have to fulfill a compliance obligation to demonstrate that confidential information remains confidential.
Maybe their customer is asking for an ISO27001 certification, demonstrating that an IT risk management system is in place. Maybe they are handling credit cards and therefore need to worry about PCI/DSS.
The common theme in these is that they are *control* based.
The process is that you demonstrate compliance by implementing a set of controls, such as defining a password policy, or implementing a firewall of sorts.

There are many positive elements to this approach, especially if it raises awareness to a structured management approach.

The downside of this approach is that not all controls are that relevant in a given situation.
It also lends itself to a 'box-ticking' approach, where controls are implemented only in a superficial way, and their actual effectiveness remains unclear.

In the security community, the topic of the day is what the most current *threat* is.
Money and effort is spent on investigating the latest threats, and discussing how they can be averted.
Every day a seemingly endless stream of new vulnerabilities is discovered, each and every one having the potential to endanger all sensitive data that an organization has.
See another unit.

This can be a relevant approach.
After all, many vulnerabilities have actual exploits associated with them.
Yet, exploitable does not imply that actual damage is imminent.
A server that is hacked but has no valuable data or relevant connectivity does not result in any significant actual damage to the organization.

A third approach is more strategic, and focuses on the value at risk: the data.
This is the core of the Zero Trust approach, which starts with focussing on one important data set at a time.
That set is isolated, and by tracing where that data is allowed to flow, access to that data can be controlled.
While there are a number of described approaches to Zero Trust, including the CCZT (Certificate of Competence in Zero Trust) by the Cloud Security Alliance, there is little guidance on how to implement it in specific technologies.

## How good is it?

The control based approach is top-down, starting with policies, working your way down.
From a management perspective, setting up a system for overseeing IT risk management promises that eventually all risks will be treated.

However, control frameworks can be extensive.
The CSA Cloud Controls Matrix has more than 100 controls.
These controls are also quite high-level, and translating them into more  system and technology specific language is hard.
The result is risk management progress that is forever 'half' finished, with unknown gaps.
Nevertheless, regulators love this approach, because it speaks to the senior management and board members who need to take responsibility.

The threat based approach is more bottom-up.
Starting with the technologies in place, relevant threats are identified and prioritized.
Often, these are very technical, and need technology specific expertise to be evaluated.
Overlooking just one threat can be disastrous.
As is often said: defenders have to defend everything, attackers need only one path in.

This approach is the one practitioners take, if they have no other way to prioritize their efforts.
Though it sounds cynical, security vendors love this approach because it is an easier sell: the dangers are clear to explain.

The data based approach is inside-out, so to say.
Identifying the most important data deep inside allows to build out layered defenses.
Zero Trust calls this the 'defend surface' as opposed to the 'attack surface'.
As said, the problem with this approach is not knowing where to start, and not understanding how to scale up.

For example, in many organizations, ZT gets twisted into 'implement two factor authentication everywhere', which is neither necessary nor sufficient.


## Synthesis

In the end, these three approaches need to be merged, as they all bring relevant perspectives.

Start with a top down inventory of the most strategic data.
That allows to focus the other efforts and maximizes the risk reduced per invested effort.
Zooming in on the most important data, relevant controls can then be applied there, while identifying the technology that is used there.
This helps to more selectively filter the vulnerabilities that have to be taken seriously.

For example, if the most important data is stored in a MySQL database on a Linux system with an (think of an identity technology), only vulnerabilities in that technology need to taken into account.

But this requires a fundamentally different dialogue between the business process owners, risk assessors, and technical practitioners.

A common language for the value of data, and an understanding what risk tolerance in IT security means.