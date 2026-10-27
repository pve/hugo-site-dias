---
date: '2025-07-25T07:45:07Z'
draft: false
title: 'Cloud Computing'
weight: 100
aireview: 
notes-closed:
    - "[ ] Ford/River Rouge value-chain-fragmentation analogy as primary historical spine, attached to Broad Network Access"
    - "[ ] Verbatim six-telling composite as primary source for revising the five NIST characteristic subsections"
    - "[ ] Sharper opening hook: 'So your company is in the cloud. Now what?'"
    - "[ ] Phone-offline-music vs. streaming-subscription analogy as low-jargon cloud opener"
    - "[ ] 'AWS is probably the world's largest hoster of botnets, but...' + half-hour auto-killed credentials example"
    - "[ ] 'Provider heritage shapes the product' (Google/GCP vs. Amazon/AWS)"
    - "[ ] 'Cloud is the new mainframe' as deliberate counterpoint near the close"
    - "[ ] Recurring-misconceptions bundle (pick 2-3, don't stack)"
    - "[ ] 'Dunning-Kruger' as one-word diagnosis of cloud overconfidence"
    - "[ ] PSA container-terminal photo (Singapore) as scale-setting image"
    - "[ ] Resolve redundancy warning: pick Ford/River Rouge as spine, 'new mainframe' as counterpoint, park the other three historical framings"
notes: |
    Verplaatst vanuit `units-notes/unit-10.md` (2026-10-27) — harvest-triage, nog niet
    verwerkt in de proza hieronder. Gewicht klopt nog (100).

    Live file: `act1-foundations/cloudcomputing.md` (weight 100, published,
    `aireview:` field present but empty). Second-largest Act I harvest (42 items),
    including one long pre-composited passage.

    ## Current state

    This is the most developed unit in Act I: a short history (ASPs in the 2000s,
    Amazon's early storage/servers, "opinionated" platforms, the term's murky
    2001-era origin, NIST solidifying it in 2011), then a section arguing cloud is a
    *service, not a product* framed through promise theory, then a full walk through
    NIST's five essential characteristics (on-demand self-service, broad network
    access, resource pooling, rapid elasticity, measured service) — each with a value
    paragraph and a risk paragraph — closing on a "wrap up" about power shifting to
    both consumers and providers, and a warning that whoever loses out from a cloud
    migration may quietly sabotage it. Already well-structured; the harvest mostly
    offers concrete anchors, sharper phrasing, and one big narrative device the unit
    currently lacks: history.

    ## Triage

    **Highly relevant**

    - **Henry Ford / River Rouge value-chain-fragmentation analogy**, recovered in
      full: Bloomberg terminals, CompuServe, and airline reservation systems used to
      bundle network + device + service together, which slowed rollout; cloud's
      "broad network access" is what unbundles it. Payoff: Ford's River Rouge plant
      (c. 1910, "six square miles," fully vertically integrated — its own steel mill,
      its own power plant) — eighty years later the site still exists but the steel
      mill, power plant, and dozens of other pieces are now independent companies.
      Same pattern hit the iPhone supply chain and the movie industry; "IT is no
      exception, and cloud computing is finally making that happen in IT"
      (`sources/delivery-ccsk-2015-2016-live-nist-narration-subtleties.md`, told
      across 3 of 5 sessions; also present in the big composite below). The richest
      available narrative device for the unit, attaching directly to the *Broad
      Network Access* section, which currently has no history at all.
    - **The verbatim six-telling composite** (`sources/verbatim-composites-for-book-insertion.md`)
      is close to publication-ready prose already covering: outsourcing-with-five-
      characteristics framing; on-demand self-service as removing the human first
      from the provider side, then potentially the consumer side; broad network
      access as "decoupling" the network/device from the service (ties to the Ford
      analogy above); concrete elasticity anchors — a day for a new employee, minutes
      for a dev machine, seconds for a traffic surge, with "automatic provisioning
      matters more than rapid elasticity itself"; Dunbar's number (~150 people, never
      named as such) explaining why SMEs can run on trust and enterprises can't;
      measured-service billed "by account, not by message" for email, "pay as you go
      is definitely not pay as you grow"; and the blunt IaaS surprise — "you are
      forced to run and maintain the operating system... you actually also have to
      patch that." **Recommend using this composite as the primary source when
      revising each of the five characteristic subsections.**
    - **"So your company is in the cloud. Now what?"**
      (`sources/archive-2025-cloudalignment-sigs-conference-notes.md`) — a sharper,
      more inviting opening hook than the current flat first line.
    - **Phone-with-offline-music vs. streaming-subscription** analogy, used to
      introduce "cloud" without ever saying the word
      (`sources/archive-2021-22-cloud-security-intro-teaching.md`).
    - **"AWS is probably the world's largest hoster of botnets, but..."** provocative
      framing paired with Amazon's own internal practice of half-hour, auto-killed
      credentials for internal server access ("now that is cloud for you")
      (`sources/casa-nsa-hack-case.md`, 2 items).
    - **"Provider heritage shapes the product"**: Google's platform reflects Google's
      own search-scale problems (hence GCP's Big Data/TensorFlow strength); AWS's
      platform reflects Amazon's own webshop problems (hence early IaaS/VM/API focus)
      (`sources/oudemeuk-omkatten-target-market-google-cloud-platform.md`).
    - **"Cloud is the new mainframe"** thesis: power, expense, and centralization
      returning after a detour through cheap decentralized x86 farms, with
      Santayana's "condemned to repeat it" (`sources/oudemeuk-cloud-is-new-mainframe.md`).
      A sharp counter-narrative / dialectic partner to the disruption-wave framing
      below — cycles, not just linear progress.
    - **2011 disruptive-innovation-wave essay**: minicomputer → PC → internet → cloud
      as ~10-year waves, following the standard disruption pattern
      (`sources/archive-pre2017-career-obsolescence-essays.md`). Also cross-refs unit
      57 (power shift/disruption).
    - **IT-consolidation mapped onto the five NIST characteristics** — a purely
      internal consolidation project checked against broad network access, resource
      pooling, rapid elasticity, measured service via cross-charging
      (`sources/oudemeuk-it-consolidation-private-cloud-case.md`).
    - **Perspective-dependent public/private cloud**: the same 2012 client
      infrastructure is "public cloud" from the end-customer's view and
      "private/dedicated" from the provider's view
      (`sources/oudemeuk-public-private-case-study.md`).
    - **Kindergarten analogy**: private clouds/intranets are "like kindergarten — you
      can play, but you can't get out over the fence"
      (`sources/oudemeuk-blurring-public-private-cloud.md`).
    - **Recurring-misconceptions bundle** (pick 2-3, don't stack all of them): "onze
      cloud is geen cloud"; "hybrid cloud" misused as a synonym for "part cloud, part
      legacy"; "our private cloud isn't on-prem, so it isn't private cloud?"; a
      government-cloud practitioner not realizing his own system was a textbook
      Community Cloud (`sources/archive-pre2017-delivery-cohort-feedback-spotcheck.md`,
      `sources/delivery-ccsk113-2020-online-april-covid-launch.md` ×2,
      `sources/delivery-ccsk66-2017-online-sept-chat.md`).
    - **"Dunning-Kruger"** named explicitly as the instructor's one-word diagnosis of
      cloud overconfidence (`sources/delivery-ccsk157-2025-online-jan.md`).
    - **PSA container-terminal photo (Singapore)** — cranes, thousands of stacked
      containers, skyline — as a scene-setting "this is what scale actually looks
      like" image (`sources/image-catalog-docker-security-graphics-2016.md`). Pairs
      well with the Ford/River Rouge narrative.

    **Maybe relevant**

    - **"Cars made suburbs possible"** analogy — good, but see redundancy warning
      below.
    - **"Who pays the electricity bill?" narrative** and the **historical-eras
      admin-ratio framing** — both good, but see redundancy warning (also
      cross-referenced from the unit-06 note).
    - Feb 2017 alumni recurring-questions survey — only the service-models portion is
      this unit's; the rest cross-ref units 26/55/72.
    - "New IT supply chain model" framing line, tying cloud to car/iPhone production
      — good but largely redundant with the Ford analogy above; also cross-ref unit
      12.
    - ENISA "ages like a good wine, not spoiled meat" analogy — cute, echoes unit 5's
      "teach essence, not features" thesis; consider as a cross-link there instead.
    - Four-step deployment-speed timeline diagram (Datacenter Snowflakes →
      Virtualized/Cloud → Docker → Lambda) — good visual, also fits unit 13.
    - Google's own location-guessing error (misplacing Denmark) — minor aside only.
    - "Which characteristic increases confidentiality risk most?" audience exercise,
      landing on broad network access — could extend the existing risk paragraph
      under Broad Network Access.
    - Teaching-order structure for "Cloud Adoption Essentials" — useful evidence for
      how Acts I–II might sequence overall, not specific unit-10 prose.
    - v3→v4 "descriptive to prescriptive" framing of guidance maturity — low priority,
      possibly cut.

    **Hardly relevant** — vendor-specific technical diagrams/tables.

    - Azure VNet lab architecture diagram — better fit for unit 40 (Cloud-native
      tutorial).
    - AKS regulated-architecture SVG — primary home already unit 14.
    - Storage-options table (Volume/Object/DB/CDN storage) — vendor taxonomy, too
      technical.
    - Provider-bias complaint (AWS-heavy material irritating an Azure user) — not
      book content, but a reminder to stay vendor-neutral throughout.

    ## Redundancy warning

    Between this unit and units 6/9, there are now **five distinct historical-arc
    narratives** pointing at unit 10: Ford/River Rouge, the "electricity bill"
    mainframe→cloud story, the admin-ratio historical-eras framing, the
    disruptive-innovation-wave essay, and "cloud is the new mainframe." All are good;
    using all five would overload the unit. **Recommend: Ford/River Rouge as the
    primary spine** (attaches directly to Broad Network Access, richest), "cloud is
    the new mainframe" as a deliberate counterpoint near the close (progress isn't
    purely linear), and treat the other three as backup material or move them fully
    to units 6/9/57 where they're also tagged.

    ## Cross-unit flags

    - Service-model/broker/incident/key-management Q&A items → units 26, 55, 72.
    - "New IT supply chain" framing → also unit 12.
    - ENISA wine-not-meat analogy → consider unit 5 instead.
    - Deployment-speed timeline diagram → also unit 13.
    - Disruptive-innovation-wave essay → also unit 57.
    - Azure VNet diagram → unit 40.
    - AKS regulated architecture → unit 14 (primary), 76 (secondary).
---

Cloud Computing is an important and big set of digital infrastructures.

Between 2000 and 2010, as the internet was growing in reach, it also became a vehicle for the delivery of compute services.
Back in the day, Application Services Providers, as they were known, offered software remotely, so it was no longer necessary to install it in a company's datacenter.
I could tell horror stories about how early client server application installations went, so not needing that was a key selling point.

A little later, Amazon was one of the pioneers of offering storage and servers over the internet.
In addition, there were a bunch of other providers offering a variety of platforms on which you could develop and deploy software.
These offerings were often "opinionated", which means they made a lot of technology choices for you.

These seemingly disparate developments were brought under a single umbrella term: cloud computing.
The history of that term is not easy to trace.
It is one of those concepts that seem to have been discovered independently in multiple ways.
As early as 2001 we talked about putting servers "in the cloud", meaning we did not care much where they actually were.

NIST, the US National Institute of Standards and Technology, solidified the concept in 2011.
They lumped together all kinds of online services and access to resources in a single definition, by identifying *five essential characteristics* of such services.

I have spent many hours explaining these, and answering questions about them.
Technical people used to be confused about the vagueness of these characteristics, but once we start looking at them as drivers of value and risk, it becomes a bit more applicable.

We'll get to those characteristics in a moment, but first I want to point out that there is a more fundamental characteristic than the five of NIST.

### The service

Cloud computing is a service, rather than a product.

It is not a unit that you buy, like a laptop, but a service that you rent.
The consumer and the provider are in a continuous relationship.
If one of them goes away, the relationship ends.
This is different from owning something.
There are many computers still in operation of which the manufacturers have long gone out of business.
The sections on promise theory explain how you can describe and even quantify such services and their quality.

The NIST essential characteristics fit into that framework.
Let's go over them.

### On-demand self-service

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

### Broad network access

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

This cloud characteristic compares to what economists call "unbundling" of services.

### Resource pooling

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

### Rapid elasticity

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

### Measured service

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

### Wrap up

Cloud computing brings power to at least two types of actors.
The consumers get to ship new features, and deploy new software faster.
The providers are building a scalable business for themselves.

So everybody wins, right?
Maybe, maybe not.
Maybe there is a party that is not getting benefits.
It is up to you to figure that out in your situation, because those are the ones that may sabotage any cloud migration project.
For example, if adoption of new technology reduces opportunities for professionals whose careers are based on mastering the old technology, those professionals are likely to strongly oppose the adoption.

Every change in technology changes power structures. 