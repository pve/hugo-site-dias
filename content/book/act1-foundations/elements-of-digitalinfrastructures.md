---
date: '2025-03-27T20:34:01Z'
draft: false
title: 'Elements of the digital world'
description: "Every digital system reduces to three entangled elements — storage, networks, and processors — mapped through two simple diagrams for how data moves."
weight: 60
notes-closed:
    - "[ ] Pragmatic distributed-system definition (parts over a network, each with storage+processing, not all equal)"
    - "[ ] 'How do we name the box' terminology-gap aside"
    - "[ ] PCs-never-built-for-fleet-scale framing"
    - "[ ] Disassembled-car stock photo as decomposition metaphor"
    - "[ ] Differential cost-dynamics paragraph (memory/network/processing/people cost curves), moved in from unit 8 2026-07-28 — resolve the 'research questions' follow-on into statements before use"
notes: |
    Verplaatst vanuit `units-notes/unit-06.md` (2026-10-27) — harvest-triage, nog niet
    verwerkt in de proza hieronder. Gewicht klopt nog (60).

    Live file: `act1-foundations/elements-of-digitalinfrastructures.md` (weight 60,
    published, title "Elements of the Digital World").

    ## Current state

    Defines the three elements (storage, networks, processors), notes the
    cloud-security habit of "data at rest/in motion/in use," and stresses the elements
    are *entangled*, not cleanly separable — echoing the book's "any map is inaccurate,
    that's what makes it useful" theme. Then pivots into two diagram types
    (input→processor→output block diagram; time-sequence diagram) as a first taste of
    the book's diagramming toolkit. Stays conceptual throughout — no vendor names, no
    protocol detail.

    ## Triage

    **Highly relevant**

    - **Pragmatic distributed-system definition**: "multiple parts that communicate
      over a network, each part has storage and processing, though not all parts need
      to be equal — often exist because they do one thing really well"
      (`sources/archive-2021-22-cloud-security-intro-teaching.md`). A clean, reusable
      one-liner that extends the existing "entangled elements" paragraph without
      adding jargon.
    - **"How do we name 'the box'?"** — the author's own flagged terminology gap: no
      settled word for the unit of compute/infra being reasoned about
      (`sources/archive-2021-22-content-plan-nuggets.md`). Fits the unit's already-honest
      tone (same spirit as unit 5's "defining it with scientific rigor is difficult").
      Works well as a short aside owning the ambiguity rather than papering over it.
    - **PCs were never built for fleet-scale management** — "single-user, single-box
      devices" that virtualization retrofits onto fleet scale
      (`sources/oudemeuk-remove-barriers-virtualization.md`). A sharp one-line framing
      of exactly this unit's theme.
    - **Disassembled-car stock photo** — a car fully taken apart, laid out on the floor
      (`sources/image-catalog-images-and-pictures.md`, `CarExploded_AlvisLazarus.jpg`).
      Strong, non-technical visual metaphor for "decomposing a system into its
      elements."
    - **Differential cost dynamics of the three elements** — own text, pulled from unit
      8 (`applications.md`) 2026-07-28 as off-topic there. Storage, processing, and
      networking costs all change over time but at different rates (memory cheapens
      fastest, then network, then processing; the cost of the humans managing it all
      drops slowest, if at all) — meaning there's a continuing shift in what counts as
      the optimal design for networked computing. Directly extends this unit's
      "elements are entangled, not separable" theme with a *why it keeps moving* angle.
      Original text:

      > Digital infrastructures are made up of processors, storage and networking. The
      > costs of these change rapidly, but at different rates. Memory is becoming
      > cheaper a lot faster than processing, and network bandwidth prices are dropping
      > slower than that. The cost of humans to manage this technology is dropping
      > slowest, if at all. What this means is that there will be continuing shifts in
      > what the optimal design is for networked computing.
      >
      > Now for the research questions. How fast is it actually changing? How do we
      > organize this, technically and people wise, in order to control the cost,
      > improve the quality, and speed up the change and development process? For
      > example, technology development in this area is very much structured by
      > standards. This allows people to collaborate on the design of system components
      > so that those components then later work together. These standards can be set
      > by a vendor for example, or agreed in a standardization committee. What is the
      > dynamics of that? In which way can we best organize the development and in
      > particular the management of large digital infrastructures?

      The differential-cost paragraph is strong, ready prose. The "research questions"
      paragraph reads as author notes-to-self rather than reader-facing text — the
      standards/dynamics questions are a genuine second idea (how vendor vs. committee
      standards shape element interoperability) but need to be resolved into
      statements, not left as open questions, before they belong in body text.

    **Maybe relevant**

    - **"Every tool has a function in a business process — also true for security
      tools"** (`sources/delivery-ccsk158-2025-online-mar.md`). Good generalizable
      maxim, but it's a value/purpose framing more than an elements framing. Consider
      for unit 20 (Intro to value) instead; only use here if the unit wants a bridge
      sentence into "why these elements matter."
    - **Google cost-per-result vs. scaled Terraserver estimate** — unresolved ~10x gap,
      illustrating infra cost is workload-dependent, not just scale-dependent
      (`sources/oudemeuk-cost-of-a-web-page.md`). Interesting but analytical/in-the-weeds;
      works better as a footnote or aside than core prose.
    - **"Invisible hardware churn behind a stable running application"** — long uptime
      despite constant hardware replacement underneath
      (`sources/oudemeuk-omkatten-target-market-google-cloud-platform.md`). Fits the
      entanglement/abstraction theme, but the note itself flags the underlying stat as
      unverifiable/stale — reuse the *idea*, not the number. Also fits unit 13 (Things
      break at scale).
    - **2008 latency measurement showing "the cloud" has real geography**
      (Netherlands vs. Hong Kong, via Watchmouse/App Engine)
      (`sources/oudemeuk-watching-the-cloud.md`). The underlying point — infrastructure
      is physical, geography and speed-of-light still apply — is evergreen and worth
      keeping; the specific 2008 tooling is dated. Recommend re-deriving the point with
      a fresher (or no) specific example rather than citing Watchmouse/GAE by name.
    - **Identity/relying-party separation via OpenID** — "cloud services and
      applications should be separated from the management of identities"
      (`sources/oudemeuk-identity-management-multiple-clouds.md`). Good example of an
      element that should be separable but often isn't. **Better home: unit 11a
      (Identity: the control point)**, which is built exactly around this claim. Keep
      out of unit 6 to avoid pre-empting 11a's argument. *(Check for overlap — this
      claim already appears in identity-control-point.md's own notes, raw-material
      section, sourced from `oudemeuk-identity-management-multiple-clouds.md`.)*
    - **"Real cloud vs. relabeled hosting" test** — manually-provisioned dedicated
      servers arguably don't qualify as cloud, since real elasticity requires no manual
      intervention (`sources/oudemeuk-public-private-case-study.md`). Sharp test, but
      it's a *cloud computing* definitional question, not an *elements* one. **Better
      home: unit 10 (Cloud computing).**
    - **Boundary-by-boundary architecture stack** (WAN → datacenter → racks →
      virtualization → OS/infra services → DBMS → applications)
      (`sources/archive-pre2017-private-cloud-case.md`). A genuine worked diagram, but
      really a deployment/execution-environment sequence, not a three-elements
      framing. **Better home: unit 14 (Deployment diagrams)**, secondary fit unit 7.
    - **"Let's start at the bottom" stack walkthrough**, framed around "who runs it,
      you choose" (DIY/colo/IaaS/PaaS/SaaS/outsourcing)
      (`sources/archive-pre2017-signature-speech-stack-and-board.md`). Same issue —
      execution-environment framing more than elements framing. **Better home: unit 7
      (Execution environments).**
    - **Historical eras framing** (mainframe → client-server → internet → cloud,
      admin-ratio numbers, "industrial revolution translated into the information
      age") (`sources/delivery-ccsk-overview-webinars-2015.md`). Flagged in the source
      note itself as an early/rougher draft worth comparing to current text. Narrative
      history, not elements-definition content. **Better home: unit 10 (Cloud
      computing)**, possibly unit 9.
    - **Signature-talk "who pays the electricity bill?" narrative** (mainframe →
      client/server → PC+internet → cloud, each step reframed as who owns the compute)
      (`sources/misc-signature-speech-2016-2017.md`). Strong narrative backbone, but
      same call as above — cloud history, not elements. **Better home: unit 10.**

    **Hardly relevant** (deep technical / cloud-provider-specific, or off-topic for
    this unit)

    - Five-elements-of-cloud-security historical narrative (infrastructure → data →
      application → identity → governance security) and the matching hybrid-cloud
      worked example. Cloud-*security* domain framework content, not
      elements-of-infrastructure content. Belongs in a risk/controls unit (candidates:
      72 Controls, 76 Retrofitting zero trust), not here.
    - Hypervisor misconception (Type-I vs. Type-II, "is the hypervisor the OS") —
      genuinely useful teaching fix but squarely the "deep technical" category the
      unit avoids. Only reconsider if unit 7 (Execution environments) goes into
      virtualization internals.
    - VLAN trunking diagram — correct and clean, but network-internals detail well
      past this unit's level. Same call: only relevant if unit 7 wants a
      technical-deep-dive appendix.
    - "Bad neighbors" VM-restart anecdote (EBS/Elastic IP specifics) — the underlying
      idea (architectural resilience beats negotiation) is sound but told in
      AWS-specific terms. If wanted, re-tell abstractly for unit 13 (Things break at
      scale); not a fit for 6 as currently sourced.
    - Tina's "aha moment" and "too abstract" feedback quotes
      (`sources/delivery-ccsk158-2025-online-mar.md`, two items) — pedagogy/meta
      feedback about *how the training lands*, not content for the unit itself.

    ## Cross-unit flags

    - Identity/OpenID separation quote → unit 11a, not 6 (likely already covered
      there, verify before adding).
    - "Real cloud vs. relabeled hosting" test → unit 10.
    - Boundary-by-boundary architecture stack → unit 14 (primary), unit 7 (secondary).
    - "Let's start at the bottom" stack walkthrough → unit 7.
    - Historical-eras framing and "who pays the electricity bill" narrative → unit 10
      (primary), unit 9 (secondary).
    - "Every tool has a function in a business process" maxim → consider unit 20.
    - Five-elements-of-cloud-security narrative + hybrid-cloud worked example → a
      risk/controls unit (72 or 76), not Act I at all.
    - "Bad neighbors" anecdote → unit 13, if re-told without AWS-specific naming.
    - "Invisible hardware churn" → also fits unit 13.
---

It all starts with bits: digital units of information. It is about how we store these bits, how we move these bits, and how we transform or process these bits.

The three major elements of digital infrastructures are:

1. Storage
1. Networks
1. Processors

In the cloud security world, it is customary to talk about data at rest, data in motion, and data in use. This introduces data as the key common element. But more on cloud security later.

All of these elements have a wide variety of different manifestations, with associated quality and performance attributes that matter enormously in the design and management of digital infrastructures.

You'll also have to understand that these three concepts are very entangled. A storage system is connected to a network, but it also has network and processing elements inside. The same is true for the other two concepts. Once again, it is a way to draw maps of digital systems, and any map is inaccurate. As said elsewhere, this inaccuracy actually can make it a good map! It reduces complexity so that we can more easily think about it.

Speaking of maps, a variety of diagrams is used in the field of IT.
I'd like to gently expose you some of those diagram types.

The link between the digital elements is, in its simplest form, often depicted as follows:

```mermaid
block-beta

in space env:2 space out
in["Input"] --> env["Processor"]
env--> out["Output"]

style in fill:#fff,color:#000,line:#000;stroke-width:0px,color:#000,stroke-dasharray: 5 5
style out fill:#fff,color:#000,line:#000;stroke-width:0px,color:#000,stroke-dasharray: 5 5
   
```

A few comments on what this does, and does not show:

- input is data, which is _transformed_ into output, also data
- the diagram does not show if this is a one-off activity, or a stream of events, we need a time-sequence diagram for that
- there is no explicit mention of any "state" or "persistent data" inside the processing.

We will see later how this simple model is adequate to describe a vast variety of data processing tasks.
A very simple example is adding two numbers. The input is formed by the two numbers, and the output it their sum.
An AI example might be the input a voice recording, and output a file with the transcribed conversation.

In an interactive world, it is more common to have the output returned to the source of the input.
The following diagram illustrates that.

```mermaid
sequenceDiagram
    User->>Processor: Here is my input
    Processor->>User: Here is the output
```

A common example would be to send as input a question to a search engine, where the search results are the output.
The vertical lines are _timelines_ that show from top to bottom how time flows, and what the sequence of interactions is.
That is why we call these _time sequence diagrams_ (TSD).
