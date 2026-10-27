---
date: '2025-05-15T21:03:24Z'
draft: false
title: 'Contracts are complementary promises'
description: "A contract is just two complementary conditional promises plus a fallback for non-delivery: what do I do, what do you do, what do I do if you don't?"
weight: 170
notes-closed:
    - "[ ] 'Advertising is a promise, treated as a hypothesis' opening hook"
    - "[ ] 'Contracts are the interfaces in the supply chain' — architectural, not just legal, framing"
    - "[ ] Worked SLA-to-promise translation table (Security/Continuity/Support)"
    - "[ ] 'The L in SLA stands for lies' joke + 'the S in IOT stands for security' running gag"
    - "[ ] 'They write that in a contract somewhere... Facebook does NOT' — responsibility as contractual choice, not technical given"
    - "[ ] 'Contract = a set of mutual, complementary promises' independent confirmation"
    - "[ ] Real practitioner answer to the unit's own closing question ('we open a risk and start risk mitigation')"
    - "[ ] Tina's data-classification table request (vendor couldn't provide it)"
    - "[ ] Identity as 'first, last, everything' + passport/visa federated-identity analogy — connective tissue to unit 11a, don't repeat it"
    - "[ ] Exit/lock-in contract clause question — forward-link to unit 32a"
    - "[x] German auditor / Tunisian supplier decision scene — already flagged above for unit 53, use at most once across both units"
notes: |
    Cross-ref flagged for unit 53 (multiparty promises), now published
    (act4-power/promise-multiparty.md) but without this item: the Tunisia/
    German-supplier audit scene ("if this company stopped delivering, the
    assembly line in Germany would stop in 48 hours",
    sources/misc-signature-speech-2016-2017.md). This unit's own harvest was
    already strong without it — use here only if a vivid contract-as-verified-
    promise-chain example is still wanted, otherwise leave it for a future
    unit-53 pass.

    ---

    Verplaatst vanuit `units-notes/unit-17.md` (2026-10-27) — harvest-triage, nog niet
    verwerkt in de proza hieronder. Gewicht klopt nog (170). Let op: de
    Tunisia/German-auditor scene hierboven staat OOK in deze harvest als eigen
    "Highly relevant"-item ("German auditor / Tunisian supplier decision scene") —
    zelfde bron, niet dubbel invoegen.

    Live file: `act1-foundations/promise-contract.md` (weight 170, published, title
    "Contracts are complementary promises"). Short unit, closing Act I. Unusually
    well-matched harvest — most of the 21 items clear the bar.

    ## Current state

    Short and punchy: defines a contract as a set of complementary conditional
    promises ("if you promise to pay me, I will promise to bring you coffee"), notes
    the who-goes-first trust problem, adds a deviation-promise example ("if you don't
    pay, I promise to call the police"), and closes on the unit's own compressed
    question — "what do I do, what do you do, what do I do if you don't?" — followed
    by a genuinely charming aside: this is the author's longest all-monosyllabic
    English sentence, and he had a rap song made from it. Short enough that almost
    any strong item below would be a meaningful addition.

    ## Triage

    **Highly relevant**

    - **"Advertising is a promise, which we should treat as a hypothesis"** —
      illustrated with "buying this car gets you a nicer relationship" as a testable
      claim, not a guarantee (`sources/archive-2021-22-it-professional-value-promise.md`).
      A fresh, universally relatable bridge from everyday consumer claims into the
      unit's formal promise/contract vocabulary — good opening hook candidate.
    - **"Contracts are the interfaces in the supply chain and should be matched to
      GRC requirements"** (`sources/casa-service-agreements-promise-theory.md`).
      Treats contracts as an architectural boundary rather than a legal afterthought.
    - **Worked SLA-to-promise translation table**: Security → "we will try to prevent
      unauthorized access," Continuity → "we will make sure there's a spare copy of
      your data off site," Support → "we will have trained staff that reacts timely
      and professionally." A ready-made worked example turning abstract SLA line
      items into the unit's own plain-promise phrasing.
    - **"The L in SLA stands for lies"** (participant joke) answered by the trainer's
      own running gag, "the S in IOT stands for security."
    - **"They write that in a contract somewhere... Facebook does NOT write that in a
      contract, quite the opposite."** Sharp, concrete illustration that
      responsibility allocation is a contractual *choice*, not a technical given.
    - **"Contract = a set of mutual, complementary promises"** — an instructor's own
      live compression of promise theory, independently arrived at. Near-verbatim
      confirmation the unit's existing definition is already the right one.
    - **A real answer to the unit's own question**: asked "what do you do if they
      [vendors] don't do what they say?", a practitioner answered, "we open a risk
      and start risk mitigation. We can be very persistent." Strong candidate to use
      as the unit's actual close.
    - **Tina's data-classification table request**: her org asked a cloud vendor for
      a table showing which data attributes were masked/encrypted/plaintext (a legal
      requirement); the vendor "was not able to provide this table," and it took
      weeks to sort out.
    - **Identity as "your first, your last, your everything"**, paired with a
      federated-identity analogy: the identity provider is like the country issuing
      your passport (authentication), the relying party is like the country deciding
      whether to let you in on a visa (authorization) — separate promises, separate
      parties. A clean way to show that even "identity" decomposes into two distinct,
      separately-owned promises — good connective tissue to unit 11a without
      repeating it.
    - **Exit/lock-in contract clause question**: a student asking whether there's "a
      usual contract clause for leaving the provider (against lock-in)." A genuine,
      unresolved procurement question — natural forward-link to unit 32a (lock-in).
    - **"SLAs are awful — 99% uptime, what does it mean?"** A blunt, honest pushback
      line matching the unit's own willingness to admit contracts are imperfect
      approximations of promises.
    - **German auditor / Tunisian supplier decision scene**: an auditor's job is to
      audit the *process*, not the product, of a Tunisian supplier making part of a
      German car's electrical system — "if this company stopped delivering, the
      assembly line in Germany would stop in 48 hours," backed by strict delivery
      agreements and financial penalties. Vivid, concrete, real stakes. Also cross-ref
      unit 53. *(See note above this harvest block — already flagged once for this
      unit, don't add twice.)*
    - **"What do I do, and what do you do?"** — a simplified version of AWS's
      shared-responsibility framing. Confirms the unit's own closing question is
      independently reinvented elsewhere.
    - **"Boundary promise" needs two competencies on one side**: procurement
      (contract-condition expertise) and business users (actual risk appetite) can't
      evaluate a deal apart. Neil-relevant.
    - **Dutch outsourcing-complacency quote**: "I've outsourced it to a professional
      party who will surely do it better than I could myself" — a named, common
      misconception that outsourcing a task also outsources accountability for it.
      Also cross-ref unit 54.
    - **"Shared responsibility model confusion" as a named root cause** of
      misconfiguration prevalence — organizations don't grasp that the provider
      secures the infrastructure while the customer must configure their own
      resources. Frames a common security platitude explicitly in promise-theory
      terms.

    **Maybe relevant**

    - Two-sided CSP-misunderstanding point — own tag prefers **unit 28** as primary
      home.
    - Provider-side cohort complaints and the utility-company demarcation question —
      both tagged primary **unit 52**.
    - DHCP "wasknijper" (clothespin) physical prop for making an enforced promise
      tangible — natural home is **unit 35 (DHCP automation)**.
    - FUD-style shared-responsibility-confusion objection — corroborates the "shared
      responsibility model confusion" item above rather than adding new content.

    **Hardly relevant** — none; this was an unusually well-targeted harvest.

    ## Cross-unit flags

    - Two-sided CSP misunderstanding → unit 28.
    - Provider-side complaints, demarcation Q&A → unit 52.
    - DHCP clothespin prop → unit 35.
    - Outsourcing-complacency quote → also unit 54.
    - German auditor / Tunisian supplier scene → also unit 53.
    - Exit/lock-in contract question → forward-link to unit 32a.
---

Once we understand promises, contracts between agents now become really simple to express.
They are a set of complementary conditional promises: "If you do this, I will promise that".
In our example this looks like the following.

- "If you promise to pay me, I will promise to bring you coffee."
- "If you promise to bring me coffee, I will promise to pay you."

If one party does not keep its end of the bargain, the other party is free to withdraw from their part of the deal.
Of course there is the complication that somebody has to deliver first: do you get coffee first, or do you have to pay first?
This requires trust.
As you are probably aware, both types of contract exist in real life.
In fact you can find more complicated versions as well.

It is typical to have additional promises for any deviations from the happy path.
An example would be: "If you do not pay for your coffee, I promise to call the police".
This is a simple approach.
We will discuss later how we can model trust and trust violations.

One way to sum it up is by this question:

>What do I do, what do you do, what do I do if you don’t?

This was the longest English sentence I made that only has monosyllabic words.
I had a rap song produced from it.
