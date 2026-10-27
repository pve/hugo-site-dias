---
date: '2025-04-16T21:16:12Z'
draft: false
title: 'Things Break at Scale'
weight: 130
notes-closed:
    - "[ ] Four named outage post-mortems (2011 AWS EBS, 2012 Azure leap-year, 2017 GitLab, 2017 AWS S3)"
    - "[ ] GitLab's own lesson: the failure was discovering the safety net didn't exist only when needed"
    - "[ ] Isolation-failure story (authorized pentest reached an out-of-scope live customer)"
    - "[ ] Netflix ~30-hour average server life expectancy, attached to the existing Cockcroft line"
    - "[ ] Incident-call 'seagull management' — pick Donal Hanley's telling as the missing 'scale breaks organizations' story"
    - "[ ] October 4 2021 Facebook/WhatsApp/Instagram BGP outage hook"
    - "[ ] Gare Montparnasse 1895 train-wreck photo as chapter-opener/pull-quote candidate"
    - "[ ] DNS Made Easy DDoS 2010 collateral-damage dataset"
    - "[ ] Power vs. banking-website uptime comparison (99.996% vs. 99.8-99.967%)"
    - "[ ] Gmail 2009 self-inflicted cascading failure (load-throttle triggered the congestion it prevented)"
    - "[ ] Jim Gray / Terraserver cost-per-page numbers"
    - "[ ] Peter's own capture-the-flag incident story (DB connection pool overflow, live Argo CD rollout)"
    - "[ ] '10X or 100X the size, but not 10X the auditors' — scale forces automation of governance too"
    - "[ ] Resolve redundancy warning: Cockcroft line and 'not your daddy's datacenter' are confirmed/landed, not to be re-added; pick one seagull-management telling"
notes: |
    Verplaatst vanuit `units-notes/unit-13.md` (2026-10-27) — harvest-triage, nog niet
    verwerkt in de proza hieronder. Gewicht klopt nog (130).

    Live file: `act1-foundations/things-break-at-scale.md` (weight 130, published).
    Largest Act I harvest (46 items) after unit 7 — grouped rather than fully
    itemized where several sources tell the same anecdote.

    ## Current state

    Already substantive: opens with Google's own cluster-failure numbers (1,000
    machine failures/year, rack failures, ~50% chance of overheating), a 2024
    drive-failure-rate stat, then Adrian Cockcroft's Netflix-era "size breaks
    hardware" line and Google's Jeff Dean quote on preferring twice as much unreliable
    hardware over half as much reliable hardware — building the argument that
    reliability must live in software, not hardware. Closes with an
    organizational-scale parallel: a task that's a side-job at one volume becomes a
    department at 100x volume, with coordination overhead that can outrun any
    economies of scale. Good bones; the harvest mostly supplies named incidents,
    sharper numbers, and — currently missing — a real story about scale breaking
    *organizations*, not just hardware.

    ## Triage

    **Highly relevant**

    - **Four named, dateable cloud outage post-mortems**: 2011 AWS EBS (routine
      network change → re-mirroring storm → control plane starved); 2012 Azure
      leap-year outage (certificates computed "valid until Feb 29" the following
      non-leap year); 2017 GitLab.com (production DB deleted, then discovered all
      five backup strategies had silently failed); 2017 AWS S3 (an operator's routine
      capacity-removal command took down more than intended, cascading region-wide)
      (`sources/archive-2019-ernw-outage-case-studies.md`). None require deep
      technical explanation — each root cause is a one-sentence, human-scale story.
      The single biggest gap-filler available.
    - **GitLab's own lesson**: the failure wasn't the deletion, it was discovering the
      safety net didn't exist only when it was needed — "monitor whether backups are
      actually working," "test the restore methods."
    - **Isolation-failure story**: during an authorized test of whether customer A
      could reach customer B's data on shared IaaS, testers accidentally reached a
      live production "customer C" who was never in scope. Reinforces unit 7's
      control-boundary theme.
    - **Netflix's ~30-hour average server life expectancy**, attached to the
      Cockcroft "size breaks hardware" line already in the text — "if a server
      malfunctions once a year, 1,000 servers means three failures a day"
      (`sources/delivery-ccsk155-2024-online-sept.md`).
    - **Incident-call "seagull management"**: real war stories of multi-day, 15-20-
      person incident bridge calls, one "over Christmas," with the diagnosis of why
      they're low-maturity — everyone reports "it's all fine" until blame lands on
      the network team by default — and the landed metaphor "seagull management: big
      brass flying in, making a lot of noise, and leaving" (three tellings across
      `sources/delivery-ccsk155-2024-online-sept.md`,
      `sources/delivery-ccsk157-2025-online-jan.md`,
      `sources/delivery-ccsk159-2025-online-may.md`). **The missing "scale breaks
      organizations" story** the unit's closing paragraph currently only asserts
      abstractly — recommend Donal Hanley's telling (day-long call, four-week
      incident) as the most concrete.
    - **October 4, 2021 outage hook**: "do you remember where you were on 4-10-2021?"
      — the global Facebook/WhatsApp/Instagram BGP outage, anchoring a
      dependency-chain argument (own equipment → ISP → DNS → inter-ISP routing →
      provider infrastructure) (`sources/delivery-pvib-2022-cloud-dependency-evening.md`).
    - **Gare Montparnasse 1895 train-wreck photo** — public-domain, needs no caption:
      overconfidence meeting a small margin-of-error miscalculation, with visible
      consequences (`sources/image-catalog-train-wreck-montparnasse.md`). Strong
      chapter-opening or pull-quote candidate.
    - **"Tipping points" image** — a dog balanced at the pivot point of a seesaw; own
      tag already prefers this unit as primary home.
    - **DNS Made Easy DDoS, August 2010**: a 40+ Gbit/s attack saturated upstream
      backbone links; resolve times for the target's own customers rose from <100ms
      to 200ms+, but a separate dataset of 300+ *unrelated* sites also saw resolution
      times rise from ~360ms to 450-800ms during the attack window
      (`sources/oudemeuk-dns-attack-collateral-damage.md`, 2 items). Concrete, dated,
      genuinely surprising: shared infrastructure failure has collateral damage well
      beyond the intended target.
    - **Power vs. banking-website uptime comparison**: local grid power outages
      average 36 minutes/year (99.996%), while "the best banking websites" struggled
      to reach 99.967% (3 hours/year), a typical one 99.8% (18 hours/year)
      (`sources/oudemeuk-dual-power-uptime.md`). Counterintuitive, quantified — a
      clean example of misdirected risk investment.
    - **Gmail's self-inflicted cascading failure** (2009): a load-throttling
      mechanism meant to protect the system instead reduced capacity without a
      matching demand drop, triggering the very congestion it was meant to prevent —
      "like a traffic jam" (`sources/oudemeuk-gmail-outage-engineering-scale.md`).
      Safety mechanisms causing the failure they guard against is a sharp,
      generalizable point.
    - **"Can anyone think of a way to beta test systems of this size?"** — a
      genuinely open rhetorical question, still unresolved as a general problem. Good
      closing-thought material.
    - **Jim Gray / Terraserver cost-per-page numbers** (2005): ~350 microdollars/page
      in 2004, an estimated 64 microdollars/page at Google-like scale — a
      factor-of-100 economy of scale, concretely sourced
      (`sources/oudemeuk-cost-of-a-web-page.md`).
    - **"Google solved the hard part: duplication over a large distance. If you can do
      that, you can deploy any number of servers"**
      (`sources/oudemeuk-watching-the-cloud.md`).
    - **YouTube "old hand" honesty-about-failure framing**: "these are the people who
      are honest about the mistakes and epic failures you can make when you run more
      than a few thousand servers" (Velocity Europe, 2011).
    - **"Joe R. SME running secure IT in his closet? What are you smoking?"** — a
      blunt, quotable puncture of the DIY-is-safer assumption. Also cross-ref unit 68.
    - **Zero Trust "breaking things at the DIA, and that's good"** — a named US
      intelligence-agency CIO reframing broken legacy assumptions as the point, not a
      failure (`sources/delivery-ccak12-2024-dod-zero-trust-guest-deck.md`).
    - **"10X or 100X the size, but not 10X the auditors"** — a 2021 argument that
      scale forces automation of governance functions, not just technical ones: "we
      simply don't have that many auditors" (`sources/oudemeuk-ccak-scale-problem.md`).
      Extends the unit's own closing paragraph about scale breaking organizations
      into a concrete, current governance problem.
    - **Netflix proactively killing VMs in "bad neighborhoods"** — an early, informal
      precursor to chaos engineering (`sources/oudemeuk-bad-neighbors-cloud.md`).
    - **Peter's own live incident story**: during a capture-the-flag contest on his
      own teaching platform (120-130 concurrent participants), CPU/memory looked fine
      but a database connection pool overflowed; fixed live with one config change
      and an Argo CD auto-rollout — "which was a bit scary, I must say"
      (`sources/delivery-ccak12-2024-brian-session-content.md`). First-person,
      dramatic, fits the book's personal-thread voice (echoes units 9/12).
    - **Recurring, still-unanswered question**: "how do AWS, Azure etc. plan for
      rapid expansion in advance?" — a participant correctly sensing that "infinite
      elasticity" must rest on finite, planned physical capacity somewhere upstream.

    **Maybe relevant**

    - Cloud-supply-chain scale numbers ("hundreds of DevOps teams," "1000+ SaaS
      providers") and the "10X data/threats in 5 years" claim — decent texture; the
      10X claim also cross-refs unit 74.
    - Compliance-workload scaling example — primary home **unit 71**.
    - Fast-food chain container deployment (2,500 restaurants, ~10,000 machines) —
      leans Kubernetes-flavored/technical.
    - Fashiolista AWS migration load-test case — real but niche, small numbers.
    - Bucharest OpenStack telco log-volume anecdote and Spotify's router-replacement
      efficiency story — two disconnected small anecdotes, moderate value.
    - Vendor-denial mid-incident anecdote — redundant with the seagull-management
      bucket above.
    - Container-scaling architecture diagram and the four-step deployment-speed
      timeline diagram — the timeline diagram's own tag prefers **unit 10** as
      primary.
    - Real scale numbers ("800 SaaS apps in APM, 16k Git repos," "50+ Salesforce
      instances") — also cross-ref **unit 56**.
    - IPv4 exhaustion numbers — dated territory, may not land as fresh.
    - IT-consolidation risk-tradeoff list — also ties to unit 12.
    - Serverless "old-school security models fail" misconception — cross-ref **unit
      72**.
    - AWS ELB console screenshot mid-misconfiguration — also cross-ref unit 63.
    - Shipping-container disaster photos (MV Rena, Evergreen stack collapse) — a fun
      literal pun for a chapter about (Docker) containers, but own tag prefers **unit
      71** as primary home.

    **Hardly relevant**

    - Kubernetes storage-class lesson — genuinely deep technical, skip for this unit.
    - "This does not scale" / "at scale you deploy to schedulers" — same issue,
      Docker/K8s implementation detail.
    - "Not your daddy's datacenter" recurring line — already the recommended anchor
      quote for **unit 7**; redundant here.
    - Hybrid-cloud terminology-drift example — primary home already **unit 10**.
    - "Invisible hardware churn" observation — already flagged (unit 6 note) as
      needing its stat dropped/replaced.

    ## Redundancy warning

    The Cockcroft "size breaks hardware" attribution and the "not your daddy's
    datacenter" line each recur 2-3 times across independently harvested sources —
    treat as confirmed, landed lines (good), not as three separate pieces of content
    to include. Similarly, four different "incident bridge call" war stories tell
    essentially the same organizational-dysfunction story — pick one (Donal Hanley's)
    rather than stacking them.

    ## Cross-unit flags

    - Compliance-workload scaling example → unit 71.
    - "10X data/threats in 5 years" claim → also unit 74.
    - Container-scaling diagram, deployment-speed timeline → also unit 41 (by
      analogy) / unit 10 (primary for timeline).
    - Real scale numbers (SaaS/Git-repo counts) → also unit 56.
    - IT-consolidation risk-tradeoff list → also unit 12.
    - Serverless misconception → also unit 72.
    - AWS ELB misconfiguration screenshot → also unit 63.
    - Shipping-container disaster photos → primary home unit 71.
    - "Joe R. SME" quote, Zero Trust DIA quote → also unit 68.
---

Computers are terribly reliable, in general. Today's computer systems execute millions, even trillions, of instructions each second, with an error rate that is inconceivable in other technologies. Yet, if you have hundreds of thousands of machines, you do need to take care of failures.

In the early days of Google growth I read an [article about their error numbers](https://www.cnet.com/culture/google-spotlights-data-center-inner-workings/)
(a Google cluster has several thousands of machines):

> In each cluster's first year, it's typical that 1,000 individual machine failures will occur; thousands of hard drive failures will occur; one power distribution unit will fail, bringing down 500 to 1,000 machines for about 6 hours; 20 racks will fail, each time causing 40 to 80 machines to vanish from the network; 5 racks will "go wonky," with half their network packets missing in action; and the cluster will have to be rewired once, affecting 5 percent of the machines at any given moment over a 2-day span, Dean said. And there's about a 50 percent chance that the cluster will overheat, taking down most of the servers in less than 5 minutes and taking 1 to 2 days to recover.

A [2024 report](https://www.storagereview.com/news/backblaze-2024-drive-stats-hard-drive-failures-drop-as-high-capacity-models-take-over) puts storage drive failure rates at about 1.35% per year.
With thousands of drives, failure is not an option, but a certainty.

These look like interesting considerations for both hardware and software planners.

Adrian Cockcroft, while he was CTO of Netflix around 2010, summed it up as:

>Size breaks hardware

No matter how good your hardware is, if it becomes big enough, it breaks. In his view you therefore need to solve reliability problems in software, not in building better hardware.

As Google say:

> Our view is it's better to have twice as much hardware that's not as reliable than half as much that's more reliable, Dean said. You have to provide reliability on a software level. If you're running 10,000 machines, something is going to die every day.

The business case for this is that you will have to invest in software for reliability.
Once you have done that, the hardware reliability no longer matter, within certain bounds, and you are financially better off with cheaper hardware.

The next thread of thought then becomes on which software level you can best provide that reliability. At Google a core technology for that was Map/Reduce, which is a "middleware" software layer on which resilient applications can be build.
We'll cover that in another unit.

Finally, scale does not only break hardware, but also organizations.
For example, a task that takes half a day every week can be done by a single person. When the volume increases tenfold, this becomes a fulltime job.
When the volume increases a hundredfold, you need a small department to do it, and with that comes a whole range of coordination and management tasks.
That introduces a lot of communication overhead.
Without being compensated with economies of scale, this can make the task too expensive to do.
