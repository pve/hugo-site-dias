---
date: '2026-09-16T16:07:32Z'
draft: false
title: 'Selecting software providers'
note: flow and logic can improve
aliases:
- "/posts/selecting-software/"
weight: 310
notes-closed:
    - "[ ] 'If it ain't broke, don't fix it'-heuristiek (drie onafhankelijke tellingen, 2012-2015) nog niet verwerkt — aanbevolen als opening/these van de unit"
    - "[ ] Strategic-asset-decisionboom (is de software uniek belangrijk voor wat de organisatie ís?) nog niet verwerkt"
    - "[ ] 'Business-case-ladder' (1-5, met SharePoint-rehosting-voorbeeld) nog niet verwerkt"
    - "[ ] Volledige worked vendor-vetting-decision-scene (security-compliance-professional) nog niet verwerkt — direct toepasbaar voor Maria"
    - "[ ] Standaardisatie-niet-inspanning-argument (EDS vs kleine pan-Europese ISP) nog niet verwerkt"
    - "[ ] Micro build-vs-buy-kostenvergelijking (SaaS €10k/jaar vs self-hosting €2-3k/jaar) nog niet verwerkt"
    - "[ ] Peter's eigen dogfooding-anekdote (zelfgebouwd LMS kostte veel en leverde niets) nog niet verwerkt"
notes: |
    Verplaatst vanuit units-notes/unit-31.md (2026-10-28). Unit is dun relatief tot
    de harvest — mist nog elk besliskader behalve de vier-wegen-lijst.

    Highly relevant (zie notes-closed voor volledige lijst):
    - "If it ain't broke" — composiet, bron: sources/verbatim-composites-for-book-insertion.md
      (consolideert oudemeuk-why-not-move-to-cloud.md,
      delivery-ccsk-2015-2016-live-nist-narration-subtleties.md,
      delivery-ccsk42-2015-gallagher-virtual.md).
    - Strategic-asset-decisionboom — bron: sources/oudemeuk-cloud-service-model-choice.md.
    - Business-case-ladder — bron: sources/delivery-ccsk42-2015-gallagher-virtual.md.
    - Vendor-vetting-scene — bron: sources/archive-2025-cloudalignment-migration-strategy-and-vendor-vetting.md.
    - EDS-vs-ISP-standaardisatie — bron: sources/oudemeuk-three-obstacles-cloud-adoption.md.
    - Micro-kostenvergelijking — bron: sources/interview-cbc1-philipp-2024-coaching.md.
    - Dogfooding-anekdote — bron: sources/delivery-ccsk79-2018-oslo-prep-session-audio.md.

    Redundantiewaarschuwing: "if it ain't broke" komt onafhankelijk minstens drie
    keer voor (2012 blogpost, 2015 CCSK-delivery, 2015 Gallagher-coaching) — al
    geconsolideerd tot één composietitem, niet apart opnieuw introduceren.

    Cross-unit flags:
    - Twee-tier-taxonomie (techneuten IaaS/PaaS vs business SaaS) → ook unit 28.
    - Towers Watson/Algorithmics als genoemde Solvency-II-softwareleveranciers (uit
      unit 19's onderzoek) → caveat: generiek "de marktpartijen", niet bevestigd als
      Aegon's specifieke leverancier.
    - Cloud Controls Matrix-beperkingen, vendor-risk-vetting-scene → ook unit 72.
---

Whenever we need a new piece of software, big or small, there are a few alternative roads to follow.
They include:

- Buy the software
- Use some SaaS, paid or freemium
- Use an open source solution
- Build it yourself

This is true for individuals as well as large corporations, and for stuff that you spend less than 10 minutes thinking about up to projects that take hundreds of man-years to complete.

Spoiler alert: none of these is guaranteed to be cheaper than any of the others.

For a small example, think of software to find duplicated files on your hard disk, which you need to get back some space.

A large example would be a hospital information system.
In this case, though I witnessed several variations of it, acquiring and implementing this software took many man-years.
Every week for a few months, 50 people would come together for a full day to detail out how to work with the software.
On the go-live day, just the company selling the software had about 100 staff on-site.

Each of the alternative ways of acquiring software has its own costs and benefits.
Briefly:

- Buying (or licensing) software costs money, but also time to select the right product.
Once purchased, more money typically has to be paid to the vendor for keeping the software up to date.
- Using SaaS also requires a selection process, and while there is less capital involved in it, the total cost of ownership may be higher.
- Open source software does not have licensing cost, but maintaining it typically requires manpower, more manpower than buying or renting the software from others.
- Build it yourself requires deeper design than any of the other approaches, as well as a lot of manpower for building it.

Another dynamic to consider is where the initiative to get the software comes from.
On one end of the spectrum there is an individual who starts this for themselves, or together with a few direct colleagues.
On the other end of the spectrum is a board level decision to roll out something across the entire organization.
The hospital system I mentioned is an example of that, as are many other ERP systems.

Across the spectrum you see different technology approaches, pricing strategies, and vendor sales tactics.

### Innovation

Many innovative projects start out as individual initiatives.
Some of these are actively encouraged by leadership, others are tacitly allowed if leadership can plausibly deny they did so.
Some companies have active search and destroy missions for these types of projects.
I am not here to judge which of these strategies should be followed.
Let's just accept that this is typically called shadow IT, or shadow cloud.

These grassroots projects, as they are often called, don't have a lot of options when it comes to acquiring software.
They lack support, budget, and therefore power.
But the people in these projects are close to where the real application and benefit is.
And that is where the value is.

### You choose a promise, not just a product

Every way of acquiring software comes with its own promises, and different actors making those promises.

- If you buy software, the vendor promises updates, if you pay.
- If you subscribe to SaaS, the provider promises to also host the software, as long as they like and you pay.
- If you use open source, your hope is that the community promises you updates, and the community hopes that you will chip in with your updates too.
- If you write the software yourself, you promise to spend your own time fixing problems in the future.

All these promises and actors are for you to chose from.
