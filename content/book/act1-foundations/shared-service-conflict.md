---
date: '2025-06-06T10:32:19Z'
draft: false
title: 'Shared services lead to conflicts'
weight: 120
notes-closed:
    - "[ ] Author's own EC2 'bad neighbors' story as the unit's anchor example, replacing the abstract opening"
    - "[ ] 'What is cloud' as a power question, not a definitional nuisance"
    - "[ ] Private-cloud fair-allocation governance failure as second real-world confirmation"
    - "[ ] Dutch government IT-failure numbers (200% overruns, 80% to commodity infra)"
    - "[ ] 'Cloud distributes responsibility across an IT supply chain' thesis as the missing 'why'"
    - "[ ] 'Cloud didn't remove infrastructure management, it relocated it'"
    - "[ ] 'Consolidation is a back-office thing, divergence is a front-office thing'"
    - "[ ] Zero-Trust-as-shared-services-payoff balancing note"
    - "[ ] Resolve redundancy warning: pick EC2 story as primary + one consolidation case (funding-incentive quote) + brief Ford/Apple callback only"
notes: |
    Verplaatst vanuit `units-notes/unit-12.md` (2026-10-27) — harvest-triage, nog niet
    verwerkt in de proza hieronder. Gewicht klopt nog (120). Book-sequence.md flagt ook
    het folden van idea AR-dec-18 ("start IT management at the resource conflicts") —
    niet in deze harvest-batch aanwezig, apart checken.

    Live file: `act1-foundations/shared-service-conflict.md` (weight 120, published,
    title "Shared Services Lead to Conflicts").

    ## Current state

    Argues that shared digital infrastructure necessarily creates resource conflicts:
    market conflicts (provider/consumer expectations mismatch; delivery team vs. sales
    overselling) and internal conflicts (politically strong departments monopolizing
    shared resources at others' expense). Frames this explicitly as a governance and
    leadership failure when unaddressed, closes on "where understanding is missing,
    politics, power, and ego fill the void." Currently stays abstract — no worked
    example, no named case, no personal anecdote, which makes it the thinnest-feeling
    unit relative to its central claim so far in Act I.

    ## Triage

    **Highly relevant**

    - **The author's own EC2 "bad neighbors" story**: his own site suffered repeated
      ~20-minute slowdowns, traced via NewRelic to a co-tenant on the same physical
      host running CPU-bound batch jobs — a literal, personal, dated instance of
      shared-resource conflict inside virtualized infrastructure
      (`sources/oudemeuk-bad-neighbors-cloud.md`). Exactly the worked example the unit
      currently lacks — first-person, concrete, fits the book's established
      "personal thread" voice (unit 9). **Strong recommendation: use this as the
      unit's anchor example**, replacing the current abstract "it can play out in a
      variety of places."
    - **"What is cloud" as a power question, not a definitional nuisance**: leaving
      scope unclear guarantees a fight — one camp wants the definition broad to claim
      credit/scope, another wants it narrow to avoid the work
      (`sources/delivery-ccsk2023-online-cohort-patterns.md`). Lands directly on the
      unit's own closing line about politics and ego filling the void.
    - **Private-cloud fair-allocation governance failure**: "there will be a point
      where some consumer will say, hey, I'll take all the resource because I have
      to," leaving others "out in the cold"
      (`sources/delivery-webinar-pragmatic-cloud-2016-oct-audio.md`). A second,
      independent real-world telling of the unit's own "politically savvy department"
      paragraph.
    - **Dutch government IT-failure indictment**, numbers-backed: budget overruns of
      200% are not exceptional, 80% of budget goes to commodity infrastructure/
      middleware, leaving only 20% for actual business functionality
      (`sources/delivery-cae5-2017-dci-cloudbroker-announcement.md`).
    - **Cloud's structural-novelty thesis**: "distributing responsibility for IT
      services across an IT supply chain of independent providers... technical
      boundaries matched by organizational and contractual boundaries. This is new"
      (`sources/misc-teamprogram-scat2018-faster-innovation.md`, also cross-referenced
      for unit 11). Close to the missing *why* in the current text.
    - **"Cloud didn't remove infrastructure management, it relocated it"** — cloud
      reintroduces the necessity of managing capacity/cost/performance conflicts that
      server-silo architectures had suppressed, rather than solved
      (`sources/oudemeuk-cloud-is-new-mainframe.md`).
    - **"Consolidation is a back-office thing, divergence is a front-office thing"**
      (`sources/oudemeuk-consolidation-and-divergence.md`). Explains why the same
      organization can rationally centralize infrastructure while decentralizing
      customer-facing strategy — useful nuance against a too-simple "sharing = good"
      reading.
    - **Zero-Trust-as-shared-services-payoff**: individual-application retrofitting
      works, but "many of these controls will become better and cheaper if there is
      some maturity and shared services in the organization"
      (`sources/cczt-material-retrofitting-illustration-blog.md`). A balancing note —
      shared services aren't just a source of conflict, they're where the payoff
      concentrates once conflicts are resolved.

    **Maybe relevant**

    - **Pre-cloud SAP-per-country consolidation case(s)** — two independent tellings
      (`sources/delivery-ccak2021-online-cohort-patterns.md`,
      `sources/delivery-ccak2023-online-cohort-patterns.md`, the latter with the
      sharper funding-incentive line: "if I need a network link to your site, it's my
      benefit and your cost — what do you think is going to happen?"). **Pick one
      telling** — the funding-incentive quote is the sharpest if only one survives.
    - **Soft-drink-bottler consolidation case**: country-by-country ERP made every
      upgrade a repeated multi-country project; consolidating became "an internal
      cloud, a private SaaS cloud" (`sources/oudemeuk-it-consolidation-private-cloud-case.md`).
      Same pattern as the SAP cases — three tellings of "org consolidates and calls it
      an internal cloud" is one too many for this unit; consider for unit 10 instead
      if all three feel worth keeping.
    - **Extended Ford/River Rouge + Apple analogy**, carried into the IT
      supply-chain argument — the fuller version is already the recommended primary
      narrative for **unit 10**; **recommend a brief callback reference here** rather
      than retelling.
    - **Davinci SaaS mortgage-processing example** (named company) — concrete, but
      check against the sources-workflow anonymization rule before using a named
      company/case.
    - **Cloud-account segmentation as blast-radius isolation** — the underlying idea
      fits, but told in cloud-tooling terms; would need abstracting.
    - **Isolation vs. segregation working distinction** — more vocabulary than
      narrative, works best as a short aside.
    - **"Compliance inheritance"** — real mechanism, but its own tag prefers **unit 71
      (compliance vs. risk)** as primary home.

    **Hardly relevant**

    - SUWI/BKWI government network topology diagram — a genuine, complex worked
      diagram, but its own tag prefers **unit 14 (Deployment diagrams)** as primary
      home.
    - "New IT supply chain model" framing line (cars/iPhone) — fully subsumed by the
      fuller Ford/Apple telling above.

    ## Redundancy warning

    This unit's harvest converges on **four different real-world "org consolidates
    shared infrastructure" cases** (SAP-per-country ×2, soft-drink bottler, Davinci)
    plus the Ford/Apple supply-chain analogy already claimed by unit 10. Using all of
    them would turn a short, punchy unit into a list of case studies. Recommend: the
    EC2 bad-neighbors story as the unit's primary (personal, first-person, on-thesis),
    one consolidation case as secondary (the funding-incentive quote from the
    SAP/CCAK2023 telling is the sharpest), and a one-line callback to Ford/Apple
    rather than a retelling.

    ## Cross-unit flags

    - Extended Ford/River Rouge + Apple analogy → primary home unit 10; brief callback
      only here.
    - "Compliance inheritance" → primary home unit 71.
    - SUWI/BKWI network diagram → primary home unit 14.
    - Soft-drink-bottler and one SAP case, if not used here → both still fit unit 10's
      cloud-vs-consolidation discussion.
---

Digital infrastructures serve, nearly always, multiple customers.
These customers therefore share the resources provided by these digital infrastructures.
With that sharing comes the potential for conflicts over those resources.

When I talk to my friend over the phone, we share a connection, and that is exactly when sharing is part of the value of that infrastructure.
But when multiple users draw computer capacity from the same pool, there is a risk that the pool is too small, and some users will not get the capacity that they require.

That is a conflict of interests, and it can play out in a variety of places.

When the service is offered on a market (as is the case with a public cloud provider), the conflict is between the provider and the consumer, who are not getting what they think they have contracted. Secondly, there is a conflict between the delivery team, who are not getting the resources that they need to realize the service level objectives, and the sales teams who have sold more than can be delivered.

In an in-company situation (for example, a private cloud), the conflict is more likely to occur out between various internal consumers.
I have seen more than one example where a department with a lot of ego and budget manages to get their way at the expense of less politically savvy departments.
Bullying your way into monopolizing resources may be effective for the bully, but it is not necessarily the best outcome for the organization as a whole.

That is a governance issue, and there should be leadership supervising these conflicts and setting policies for their resolution.
Failure to do so is a failure of governance and leadership.
We'll talk more about that in another unit.

For the moment we'll end here with the observation that in digital infrastructures it can involve technical and architectural insight to understand these resource conflicts and the means through which they can be resolved.
I have seen governance fail in these situations because the leadership is not properly educated on these finesses.

For example, capacity in an infrastructure setting could refer to storage, bandwidth, or processing power.
These differ seriously in how their capacity can be managed.

Where understanding is missing, politics, power, and ego, fill the void.
