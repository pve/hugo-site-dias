---
date: '2025-05-05T05:58:14Z'
draft: true
title: 'Promise Theory and service hierarchies'
weight: 100
---

origin story promise theory

suwinet
reisplanner

design patterns

customer service, can I get a new app/user account

Q: Can I get a unique IP address?
R: Here is your address, let me know when you are done with it


A: thank you, I am done with this address

Example IP addresses allocation
![alt text](image.png)
![alt text](image-1.png)

Example TCP/IP
picture

Connect
Q: can you reserve buffer space for a connection?
R: yes we promise, here is your initial window size
A: thank you, here is your initial window size

Transmission
Q: please accept this data
A: thank you, I will forward it, here is your new window size

Rinse and Repeat
=-

Service elements: consumer actions and provider responses 

Every service has multiple components/elements, i.e.
Access resource (login, get webpage, …)
Create resource (server, virtual disk, mailbox, …)
Modify resource (bigger disk/mailbox, new functional module, add friend, …)
Create user (provisioning)
Create account
Talk to a sales representative
Negotiate and set up contract
Reset password
Delete account
Delete data (deprovisioning)

Generally: anything that can be governed by a permission or can lead to a commitment or obligation

Hierarchy of services
Extra note: can you group these in phases: contract, provision, use..
Contract (start – end)
Provisioning users within a contract, deprovision
Using resources by a user


Service quality
e.g. response time. fulfillment time.
Fulfillment time: months, weeks, days, minutes, seconds, …

These quantitative measures can be used as Key Performance Indicator (KPI) metrics in a Service Level Agreement (SLA)

Average response time for primary service
Provisioning latencies of users, instances, network, disks
Minimum/maximum volumes
Cost per user; typically registered user, not per concurrent user
Latency and volumes of calls.
Network latency by location
Software resources (e.g.  # connections)
Incident response times
(and so on)
(kan wellicht met mermaid annotations)

Defines the qualitative and quantitative parameters of the service
Contains promises
Translate to assurance obligations
Translate to penalties

Within larger corporations internal consumer/providers relations exist, which also require internal SLA’s



exercise: Match the service element to the service model (SaaS, PaaS, IaaS), if any

Get webpage from Intranet
Create email
Create mailbox
Add virtual disk
Ask external service to process a payment (in webshop)
Request rack in data center

Manage the CMS content
Configure the CMS
Manage and maintain CMS code base
Manage webserver and application platform
Manage database
Manage operating system
Manage hypervisor
Host hardware


History and books.
Cfengine
21 "/var/cfengine/bin/." 
22   create => "true", 
23   perms => usystem("0700");
(idempotent operations... of is dat iets anders?)
“I promise that the directory will have permissions 0700 or report my failure"

=-
service agreements
A lot of service management is about organizing promises, evolving them, and managing the risks of not keeping them.

You not keeping them
Your providers not keeping them

We promise to prevent unauthorized access
We promise to keep your information safe
We promise to maintain according to vendor best practices
We promise to make sure that there is a spare copy of your data off site
We promise to add resources as needed
We promise to apply updates and improvements
We promise to have trained staff that reacts timely and professionally

= risk and security
Every promise is a risk:
    failure 
    deception

Security can also be about information leakage: I promise to not tell

DDOS: denial of service
Resource exhaustion

If a promise implies a resource reservation (commitment), and the amount of resources is finite, denial of service is a realistic risk
Examples:
TCP connections
Processing capacity



Nog meer leftovers:

end to end applicatie performance meten. Hoe. Link met SRE

Service example 
Type of organization: Public Government
Challenge: procurement process spread over 171 agencies, 
most having their own IT systems, 
controlling $3B procurement
Approach: Community SaaS procurement system (Ariba)

Procurement by hundreds of government agencies, served by thousands of suppliers

What is the data, what are the service elements?

Contractual framework in promises
General terms and conditions
Service Agreements
Service Level Agreements (SLA)
Acceptable Use Policy (like a reverse SLA)

=> Contracts are the interfaces in the supply chain and should be matched to GRC requirements


=-

Promise Theory and Services: Peter explains that a service is actually a set of promises. He discusses how this framework applies to daily work, particularly with customers using services. He contrasts thinking in terms of buying products versus services. He also mentions a book by Jeff Sesna that dives deeper into this.
•
Contracts and Service Level Agreements (SLAs): Peter connects the idea of a contract to a set of complimentary promises, where if one party does something, the other will do something else. He clarifies that an SLA is a type of contract. He also notes that an SLA might be an "upstream SLA".
•
Handling Broken Promises: Peter elaborates on what happens if a provider doesn't keep their promise. He discusses standard contractual elements like guarantees or penalties. He also introduces two ways of handling broken promises:
◦
A hierarchy of contracts/promises, using the example of a restaurant transaction nested within higher-level promises like menu availability and societal promises about restaurant licensing and quality. This hierarchy can extend to international legal levels.
◦
A game theoretical approach where repeated interactions allow parties to punish each other for broken promises, fostering trust. He mentions the prisoner's dilemma and the concept of credible retaliation as part of this.
•
Risk Management: Peter introduces the concept that every promise is a risk and that one significant risk is assuming a promise that is not actually there from a provider. He emphasizes that risk management involves finding somebody who suffers a bad consequence when a service isn't working. He also contrasts the compliance perspective on risk (assuming internal is better than external) with potentially different "real" risks.
•
Diagram Analysis and Application of Frameworks: Regarding the project diagram Maria shared, Peter explains it as a deployment diagram showing data, processing, control boundaries (the boxes), and communication/messages (the lines crossing boundaries). He then explains how to apply the concept of service agreement items and promises to each boundary crossing in the diagram.
•
Zero Trust Principles: In the context of the diagram and sensitive data flow, Peter introduces Zero Trust principles. He explains thinking in terms of "allow rules" for specific transaction flows (e.g., allowing sensitive data to the local LLM but not outside) and showing where there is no "allow rule" to prevent unwanted flow. He mentions that a policy enforcement point would be where this control is implemented.
•
Intervention Layers for Governance/Controls: When discussing the complexity of risk, architecture, and zero trust, Peter suggests thinking in terms of intervention layers. These layers range from stopping specific data flow, to watching the controls, to ensuring people understand policies, up to the policy-setting level itself. He notes that if a higher-level control isn't there, "you are the higher level control", though acknowledging enforcement challenges. He suggests starting at a lower level and scaling up.

