---
date: '2025-04-20T09:03:00Z'
draft: false
title: 'Execution environments'
weight: 70
notes-closed:
    - "[ ] Barry White 'identity is your first, your last, your everything' as anchor quote for the 'who' section"
    - "[ ] Circle-of-control model (physical control ≠ logical control; Create→Use→Share)"
    - "[ ] Apartment-building multi-tenancy metaphor (landlord legally barred from entry)"
    - "[ ] Cash-register analogy (allowed vs. possible → more controls needed)"
    - "[ ] 'We're secure because we run on Azure. Well, it rhymes...' closer line"
    - "[ ] Pizza-as-a-service + Ford supply-chain analogy"
    - "[ ] Cattle-vs-pets shorthand"
    - "[ ] Three-way definition of 'the network' (engineer/user/hacker) + boxes/lines/circles diagramming logic"
    - "[ ] Maria's redrawn client diagram — read in full, possibly foundational to the persona itself"
    - "[ ] Pentest pair (Tunisian aircon / Adobe crowdsourced pentest) illustrating old-school controls don't transplant"
    - "[ ] Execution-environment example list + 'ask how the code gets deployed inside' attack-vector tip"
    - "[x] Supply-chain-depth quote cross-ref to unit 53 — already noted below, not yet resolved there either"
notes: |
    Unit 53 (multiparty promises: brokers and intermediaries) is now written
    (act4-power/promise-multiparty.md) but does NOT include this unit's own
    flagged cross-ref: the supply-chain-depth quote ("your average company has
    hundreds of SaaS suppliers who in turn use hundreds of other cloud
    companies", sources/oudemeuk-typical-challenges-tech-architecture.md).
    Either fold it in here directly (an execution environment as one node in
    that deep supplier chain), or add a forward-reference to unit 53's own
    supply-chain section if it's revisited later.

    ---

    Verplaatst vanuit `units-notes/unit-07.md` (2026-10-27) — harvest-triage, nog niet
    verwerkt in de proza hieronder. Gewicht klopt nog (70). Let op: de
    supply-chain-depth-quote hierboven staat OOK in deze harvest (cross-unit flags) —
    dezelfde bron, niet opnieuw invoegen als los punt.

    Live file: `act1-foundations/execution-environments.md` (weight 70, published).
    Largest harvest for Act I — 69 items — so this note groups rather than itemizing
    every flipchart photo individually; nothing is dropped, but low-value duplicates
    are bundled.

    ## Current state

    Defines execution environments (laptop, phone, thermostat, browser, database,
    datacenter — anything holding software+data) as the book's basic deployable unit.
    Introduces the four-question method (what/where/how/who), then the *control
    boundary* each environment creates, illustrated with one worked mini-example
    (browser → Nginx). Closes with a short list of environment types (containers,
    Lambda, S3, SaaS/PaaS, antivirus, firewalls, routers) and a one-line nod to "we'll
    return to this." Deliberately stays light on any single vendor or protocol — the
    unit's whole job is to be a reusable lens, not a technology survey.

    ## Triage

    **Highly relevant** — these sharpen the unit's own method (four questions, control
    boundary, "who's responsible") with memorable, non-technical anecdotes and
    analogies that work for both personas.

    - **"It's not your daddy's data center anymore... identity is your first, your
      last, your everything"** (Barry White pairing) — the single sharpest available
      restatement of the unit's own "who" question and control-boundary argument.
      Recurs near-verbatim across independent sources over years. **Recommend as the
      anchor quote for the "who" section.** (`sources/casa-ccsk-domain-song-pairings.md`,
      `sources/ccskv5-general-story-teaching-order.md`,
      `sources/delivery-ccsk-overview-webinars-2015.md` — pick one, don't stack them.)
    - **ELI18 explanation of the same shift** — "physical locks don't work, instead
      they rely on digital identities" (`sources/ccskv5-genz-explainer-script.md`).
      Plain-language companion to the quote above.
    - **Circle-of-control model**: the myth that physical control of a system implies
      logical control of its data; fix is to track data through Create → Use → Share
      and insist control holds throughout, regardless of whose hardware it sits on
      (`sources/ccskv4-peters-suggestions-4.1-review.md`). One of the strongest single
      items in this batch.
    - **Boundary re-drawn as a control-point question**: not "which domain is this"
      but "what does the provider do vs. what must the tenant add"
      (`sources/ccskv5-general-story-teaching-order.md`).
    - **Apartment-building multi-tenancy metaphor**, sharpened with a legal detail: the
      landlord is legally barred from entering a unit without cause, even though
      tenants share a front door (`sources/delivery-ccsk2023-online-cohort-patterns.md`).
    - **Cash-register analogy**: who can access a shop's cash register vs. an
      internet-connected one — "if there's a difference between allowed and possible,
      then we need to apply more controls" (`sources/delivery-ccsk2023-online-cohort-patterns.md`).
    - **"We're secure because we run on Azure. Well, it rhymes, but that does not make
      it true"** (`sources/delivery-ccsk2023-online-cohort-patterns.md`). Good closer
      for the "who's responsible" discussion.
    - **Pizza-as-a-service model + Ford supply-chain analogy**, independently praised
      by a working IT auditor (`sources/delivery-ccsk70-2018-online-jan.md`).
    - **Cattle-vs-pets** — landed deeply enough that a participant had to explain it to
      a vegan that evening (`sources/delivery-ccsk73-2018-online-march-chat.md`).
      Already industry-standard shorthand.
    - **Three-way definition of "the network"** (engineer's = routers/switches; user's
      = everything that isn't their computer; hacker's = everything, including all
      users' computers), paired with the boxes/lines/circles diagram method
      (`sources/delivery-ccsk2023-online-cohort-patterns.md`). This *is* the unit's own
      diagramming logic, stated as an aha-line — strong candidate to fold directly
      into the browser/Nginx example.
    - **Google Maps PaaS-vs-SaaS confusion**, explicitly logged as "still confusing"
      even after explanation (`sources/delivery-ccsk70-2018-online-jan.md`). Fits the
      "any map is inaccurate, that's what makes it useful" voice (echoes units 5/6).
    - **Oracle Cloud pushback exchange**: a student raised pre-configured OS images as
      a case where the provider manages the OS layer; Peter held ground — "the OS is a
      very lousy layer to outsource... you're much better off outsourcing the
      database, because it has a much more well-defined interface"
      (`sources/delivery-ccsk2023-online-cohort-patterns.md`). Generalizable principle
      (boundaries sit best at well-defined interfaces).
    - **Management-plane-as-attack-surface**: controlling the hypervisor means
      controlling "not just one system... the entire cloud system"
      (`sources/oudemeuk-risks-of-virtualization.md`, 2015, NIST SP 800-125-based).
    - **Maria's own diagram, redrawn live** — a voice bot on a client's actual system,
      control boundary redrawn to include the vendor, each data-flow crossing labeled
      by data type, plus the two-level contract test: "does the contract make the
      correct promises?" and separately "are they capable of keeping it?"
      (`sources/delivery-aire2-2025-studio.md`). **This may be the literal origin of
      the "Maria" persona.** Worth reading in full before drafting — it's not just a
      candidate example, it may be foundational material for how the persona itself
      was defined.
    - **Tina's cross-border data-access story**: an overseas team could only get
      hashed/masked telecom logs; an EU team manually stripped personal data by hand
      for the rare full-log request; her own diagnosis — relying on humans "to
      function... with no faults" is the actual weak point ("Schwachstelle")
      (`sources/delivery-ccsk158-2025-online-mar.md`).
    - **Pentest pair**: a certified ethical hacker in Tunisia found a client's
      server-room aircon could be switched off because the default admin password was
      never changed, set against Adobe's head of secure software describing
      crowdsourced pentesting that caught privilege-escalation bugs invisible to any
      infrastructure provider by definition
      (`sources/delivery-ccsk-for-christmas-2015-online.md`). Also flagged for unit
      72c.
    - **Execution-environment example list + attack-vector tip**: containers, FaaS,
      S3, SaaS/PaaS, antivirus, firewalls, routers/switches, plus "ask how the code
      gets deployed inside — that's an attack vector"
      (`sources/archive-2025-cloudsec1-deployment-diagrams.md`). Also cross-refs unit
      75.
    - **Quotable compression of shared responsibility**: "if everything works as
      advertised... the only thing you can really mess up is your identity and access
      management" (`sources/delivery-ccak2021-online-cohort-patterns.md`).

    **Maybe relevant** — solid material, but needs abstraction, is redundant with
    something above, or sits at the edge of "too technical."

    - **"Cloud Alien Life Form"** analogy (`sources/ccskv4-ccsk-ccsp-webinar-notes.md`)
      — keep the analogy, consider a less networking-specific illustration than the
      routing-table example.
    - **Hotel key-card / hotel-manager metaphors** for shared responsibility — three
      tellings of the same metaphor (`sources/delivery-ccsk2023-online-cohort-patterns.md`
      ×3). **Pick one telling, not all three.**
    - **Container-vs-VM isolation explanation** (shared kernel + union filesystem vs.
      shared-hardware-only) (`sources/archive-2023-k8-argo-video.md`) — only worth it
      if the book wants one concrete "here's what a boundary is made of" moment.
    - **"Power, ping, and pipe" full stack walkthrough** with a sliding demarcation
      line for IaaS/PaaS/SaaS (`sources/delivery-ccsk-overview-webinar-2014-dec.md`) —
      overlaps with similar stack material flagged for units 6 and 14; pick one
      canonical version across the book.
    - **Netflix architecture disclosures** (base-image security, SSH via portal,
      per-app security groups, promise-named environment tiers) — abstract to general
      principles if used, don't name specific services.
    - **"Task promise vs. outcome promise" / "product + support = service"**
      distinction (`sources/delivery-aire2-2025-studio.md`). **Better home: unit 16 or
      17.**
    - **Serverless unit-cost economics**: "from a dollar a day to millicents"
      (`sources/oudemeuk-serverless-final-frontier.md`). **Maybe better home: unit 10
      or 28.**
    - **Supply-chain-depth observation** — see note above this harvest block; **better
      home: unit 53**, cross-ref here only in passing.
    - **Zero-trust "protect surface" analogy** — presidential motorcade
      (`sources/delivery-cczt1-2024.md`). **Better home: unit 72b.**
    - **Bank mobile-app hybrid diagram** — primary home unit 14 (its own tag agrees),
      secondary fit here.
    - **Two recurring audit/legal Q&A questions** — reads as a sidebar/Q&A box item,
      not core prose.
    - **AWS regulated-architecture / AKS reference diagram** and **AWS VPC/WordPress
      lab diagram** — primary home unit 14.
    - **Isolation-as-control-point claim** (OS vs. hypervisor isolation, PCI DSS) —
      keep only if the book wants one concrete "here's where the real wall is" claim.
    - **Early cloud-as-security-upgrade argument** (email filtering, WAF) — flagged by
      the harvest itself as early/rougher.
    - **CASB→SASE aside** — more useful as evidence the field moves fast than as
      content.

    **Hardly relevant** — deep technical detail or provider-specific diagrams the
    unit's current level deliberately avoids; most cluster around unit 14 instead.

    - Domain-restructuring notes — curriculum provenance, not reader-facing content.
    - Onboarding-narrative-organized-around-the-learner point — feeds a "how to read
      this book" note near the introduction, not unit 7.
    - Segmentation-vs-isolation-via-cities analogy — harvest note flags "handle with
      care" (historically loaded geography); **recommend dropping the geographic
      framing entirely.**
    - Live shared-responsibility chain debate + ACME Inc. card-sorting exercise —
      **cross-ref: unit 86a (Toolbox).**
    - Planning note "watch out (didactic) with comparison to 'traditional'" — an
      authorial caution, not content.
    - All flipchart/whiteboard photo descriptions — training-deck visuals past this
      unit's level; the strongest two (AKS SVG, AWS VPC/WordPress lab diagram) already
      captured as unit-14 candidates.
    - OHDA troubleshooting micro-example (`more readme.txt` → permission denied → `ls
      -l`) — natural home unit 36 (Control and feedback). **Cross-ref: unit 36,
      priority given open gap noted there.**
    - Tipping-point image (dog on a seesaw) — primary home unit 13.

    ## Cross-unit flags

    - Maria's redrawn client diagram → possibly foundational to the persona itself;
      read in full, likely also relevant to units 16/17/26.
    - "Task promise vs. outcome promise" → units 16/17.
    - Supply-chain-depth observation → unit 53.
    - Serverless unit-economics number → units 10/28.
    - Zero-trust protect-surface analogy → unit 72b.
    - Bank hybrid-app diagram, AKS reference diagram, AWS VPC lab diagram → unit 14
      (primary).
    - ACME card-sorting exercise, live responsibility-chain debate → unit 86a
      (Toolbox).
    - OHDA `ls -l` example → unit 36 (flagged as an open gap there).
    - Pentest pair (Tunisia aircon / Adobe crowdsourced pentest) → also unit 72c.
    - Deployment/attack-vector tip → also unit 75.
    - VLAN trunking diagram → also unit 6 (already noted there as hardly relevant /
      technical-appendix-only).
---

What do a laptop, a smartphone, and a smart thermostat have in common with a browser, a database, and a data center?

They are all execution environments that contain software and data, and that makes them building blocks for deploying digital infrastructures.
In a diagram we often depict them as a box, or an oval.
Inside the box, software gets executed, instructions get interpreted, actions are done. Software without execution is just dead data.

Why does it matter? Well, the more we know about those building blocks, the more efficiently we can think about all the various manifestations of execution environments.
For example, these things, or more accurately, their boundaries, are prime locations for implementing security controls.

Whenever I look at how a digital infrastructure is implemented, I start by looking at the execution environments, and ask four questions: what, where, how, and who.

__What?__ What is the data that is inside it, what is the software, the code, that is inside that environment? And in an AI world: which model is inside?

__Where?__ Where is that execution environment located? In our current virtualized and cloud world, that environment is typically inside another environment. Ultimately, of course, there is a physical machine in which it sits.

__How?__ How does the software get deployed inside that environment? There will be a manual process, or a continuous delivery pipeline, or something similar.

__Who?__ Who is responsible for managing the environment and its access controls? In a cloud world, this is an important question. What does the provider do, what does the consumer do?

Then it is time to look at the control boundary that this environment creates. The control boundary creates an outside and an inside. How is data from the outside allowed to go inside? What is the mechanism or protocol? How is that controlled? The same holds for the reverse. How is software inside that boundary allowed to access the outside?

Let's take an example: your browser is talking to a webserver, which could be a computer that runs Linux and an Nginx instance. The Linux machine implements an access control on the network level: it only allows traffic on the HTTPS port to go to the Nginx webserver process. The Nginx webserver then guards its data, and only allows read-only access.

If you want more examples of execution environments, consider containers, functions as a service such as AWS Lambda, AWS S3 storage buckets, SaaS/PaaS providers, antivirus agents, firewalls.
Each of these has processing inside, and each of these holds data.
But the type of software, data, and configuration they have differs, as do the mechanisms they offer for access control.

Deeper in the networking space you can see that a router is also an execution environment, though it does not have a lot of data, mainly the routing tables.

We will return to discussing how useful this is elsewhere.
