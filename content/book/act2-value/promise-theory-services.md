---
date: '2025-05-05T05:58:14Z'
draft: false
title: 'A service agreement is a set of promises'
weight: 260
notes-closed:
    - "[ ] Suwinet/reisplanner-oorsprongsverhalen (service-hiërarchie-hoek) nog niet geschreven"
    - "[x] Restmateriaal (SLA-kwantificering, environment-tiers, risico/zero-trust, oefening, Ariba-case, meeting-notes) verplaatst naar notes, bestemming per item benoemd — niet hier verwerkt"
notes: |
    Leftover-material note (units-notes/unit-26.md) draws a weakest-
    link/chain-composition parallel to "unit 53's Air France material" — but
    that Air France chain-of-responsibility example
    (sources/delivery-ccak14-2024-governance-cohort-mj-interview.md) never
    made it into the published unit 53 (act4-power/promise-multiparty.md),
    which took a narrower intermediary-taxonomy/Delegation-Domino angle
    instead. The cross-ref doesn't resolve as-is: either pull the Air France
    example in directly here, or treat unit 53 as needing a follow-up pass
    before this parallel can just point there.

    Identity callback (2026-10-26): unit 11a (identity-control-point, weight
    115, draft) sets up promise theory's unstated assumption — agents must be
    identifiable before they can exchange promises — specifically so units
    16/17 don't have to introduce it cold. This unit is one of those; the
    handoff isn't cashed in yet. Could note here that a provider and consumer
    must first recognize each other as the parties named in the agreement
    before any promise in it means anything.

    Verplaatst vanuit units-notes/unit-26.md (2026-10-28). Unit is bewust kort
    gehouden (2026-07-31 afgekapt tot één these); het restmateriaal uit de oude,
    langere versie is hier geparkeerd voor latere units.

    Nog niet geschreven oorsprongsverhalen: suwinet, reisplanner (de twee projecten
    waar de auteur promise theory in de praktijk leerde) — service-hiërarchie-hoek
    specifiek nog niet uitgewerkt.

    Restmateriaal met bestemming elders:
    - SLA-kwantificering (KPI's, response/fulfillment-tijd, penalties, AUP als
      "reverse SLA") → kandidaat vervolgunit direct na deze.
    - Environment-tier chains (dev/test/acceptance/productie, staging) → zelfde
      vervolgunit; weakest-link-logica kruisverwijst naar unit 53 (contractuele
      versie van dezelfde chain-compositie-redenering).
    - Risico/security-hoek (elke belofte is een risico; DDoS als resource-reservering-
      belofte) → Act V (what-is-trust.md of een threat-modelling-unit).
    - SaaS/PaaS/IaaS-matching-oefening (ongebruikt) → cloudcomputing.md of de
      business-model-canvas-iaas/saas-units.
    - Broken-promises-hiërarchie (restaurant/menu/licensing) en game-theoretische
      vergelding → kruisverwijzing prisoners-dilemma.md.
    - Zero trust / interventielagen → act5-risk (what-is-trust.md of
      securing-agents.md).
    - Cfengine-geschiedenisvoorbeeld (idempotente operaties als belofte-als-code) →
      kandidaat voor een automation/infrastructure-as-code-unit.
    - Ariba/overheidsaanbesteding-case (~171 overheidsinstanties, $3B procurement) →
      kandidaat case-opener voor een procurement/contracts-unit; bron nog te
      verifiëren (onduidelijk welke engagement dit was).
    - Meeting-notes-synthese (ruw, ongeredigeerd) — verdient een eigen harvest/
      triage-pas volgens sources/README.md in plaats van hergebruik as-is.
---

A service agreement is a contract.
And a contract, as we saw earlier, is essentially a set of complementary promises.

So a service agreement is really a set of promises between a provider and a consumer.
Not a technical specification, not a piece of legal boilerplate: a set of promises.

Take a typical IT service.
The provider might promise things like this:

- We promise to prevent unauthorized access.
- We promise to keep your information safe.
- We promise to maintain the service according to vendor best practices.
- We promise to keep a spare copy of your data off site.
- We promise to add resources as needed.
- We promise to apply updates and improvements.
- We promise to have trained staff that reacts timely and professionally.

None of these promises are self-evident.
Each one could fail, or be broken.
Each one is, in other words, also a risk.

This works the other way around too.
Within a large organization, one team is often the provider and another the consumer of the very same kind of promises.
That means internal teams need internal service agreements as well, even if nobody bothered to write them down.

We'll come back to how these promises get quantified, measured, and enforced later.
They can become service levels, key performance indicators, and penalties.
For now, the point to take away is simpler: a service agreement is a contract, and a contract is a set of promises.
