---
date: '2026-07-23T00:00:00Z'
draft: true
title: 'Lock-in: switching costs and network effects (draft)'
weight: 325
notes-closed:
    - "[ ] '40% van cloudgebruikers heeft geen exitplan'-statistiek nog niet verwerkt — aanbevolen als openingshaak/pull-quote"
    - "[ ] 'Exit plan even before you begin'-advies (2014-2016, drie tellingen) nog niet verwerkt — dekt de outline's eigen 'engineering posture'-bullet al volledig"
    - "[ ] Technisch lock-in-voorbeeld (Gmail-migratie, 11GB/200k berichten, verwacht 20s, werd een week) nog niet verwerkt"
    - "[ ] Tweede technisch schaalvoorbeeld (petabyte-migratie, weken niet uren) nog niet verwerkt"
    - "[ ] 'Technology bankruptcy'-term nog niet verwerkt"
    - "[ ] Microsoft e-book-DRM-shutdown-case (2019) nog niet verwerkt — sterk secundair/alternatief voor de Neato-opener"
    - "[ ] Verzekeraar's anti-lock-in-contractclausule (VM-images 'outside of your influence') nog niet verwerkt — is de payoff van unit 19's teaser"
    - "[ ] Drie forced-migration-cases (SAP/leverancier/Microsoft Office) nog niet verwerkt — kies één"
    - "[ ] Kubernetes-vs-OpenStack-netwerkeffect-voorbeeld nog niet verwerkt"
    - "[ ] Broadcom/VMware-repatriation-case (2024, actueel) nog niet verwerkt"
    - "[ ] Lock-in-is-asymmetrisch-tegenargument (ook on-prem heeft lock-in) nog niet verwerkt — nodig voor eerlijkheid van de these"
    - "[ ] Identity-provider-lock-in nog niet verwerkt — kruisverwijzing unit 11a"
    - "[ ] Feature-continuity-als-lock-in-mechanisme nog niet verwerkt"
    - "[ ] 'Robber barons'-historische analogie nog niet verwerkt"
notes: |
    Verplaatst vanuit units-notes/unit-32a.md (2026-10-28). Veruit de grootste
    harvest in Act 2 (51 items) — dit bestand is zelf al een notes-draft (these,
    positie, case-opener-kandidaat, outline, persona-check, bronnen, open vragen),
    dus getrieerd als aanvulling op die draft, niet als gat in afgewerkte prose.
    De harvest overlevert massaal relatief tot de outline — de hoofdtaak is een
    klein aantal beste voorbeelden per outline-bullet kiezen, niet meer materiaal
    zoeken.

    Highly relevant: zie notes-closed voor de volledige lijst. Bronnen: 40%-
    statistiek — sources/oudemeuk-omkatten-why-do-people-buy-cloud-services.md +
    oudemeuk-why-people-buy-cloud.md (twee tellingen, citeer één). Exit-plan-advies —
    delivery-ccsk-overview-webinars-2015.md, delivery-ccsk-refresher-call-2014-may.md,
    delivery-webinar-pragmatic-cloud-2016-oct-audio.md. Gmail-migratie —
    delivery-ccsk-for-christmas-2015-online.md. "Technology bankruptcy" —
    delivery-ccsk66-2017-online-sept-chat.md. MS e-book-DRM —
    delivery-ccsk100-2019-online-july.md. Anti-lock-in-clausule —
    misc-cae-udemy-2015-bank-roadmap-insurance-case.md. Forced-migration-cases —
    archive-2024-cff-transcript-carlo-g.md, interview-johann-2024-dutch.md,
    interview-stefan-2024.md. Kubernetes/OpenStack en Broadcom/VMware —
    interview-vozza-2024.md. Lock-in-is-asymmetrisch —
    delivery-ccsk2023-online-cohort-patterns.md. Identity-provider-lock-in —
    oudemeuk-identity-management-multiple-clouds.md. Feature-continuity —
    oudemeuk-feature-continuity-risk.md. "Robber barons" —
    delivery-ccsk158-2025-online-mar.md.

    Redundantiewaarschuwing: de "40% zonder exitplan"-statistiek, het "exit plan
    even before you begin"-advies en de "data liberation"-framing maken over 5+
    onafhankelijke bronnen (2014-2016) in essentie hetzelfde punt — behandel als één
    goed bevestigde argumentlijn. Drie vendor-forced-migration-cases (SAP, een
    naamloze leverancier, Microsoft Office) vertellen hetzelfde verhaal — kies één.
    De "vijf antipatterns"-lijst en de lift-and-shift-risicochecklist zijn al bij
    unit 28 gevlagd — niet hier een derde keer introduceren.

    Cross-unit flags:
    - Minimum-viable-exitplan-checklist → primair thuis unit 72.
    - Netflix's vroege, onzorgvuldige AWS-onboarding ("gooiden er 10.000 machines
      tegenaan") → ook unit 26.
    - Ford River Rouge/broker-supply-chain-analogie → ook unit 26 of Act IV
      marktstructuur.
    - Disruptive-innovation-lens (Christensen: Wikipedia vs Britannica) → ook unit
      57 (power shift/disruption), indien die unit bestaat.
    - €40.000/core Oracle-licentievoorbeeld (uit unit 19's onderzoek, expliciet
      hypothetisch in de bron) → bruikbaar hier als illustratieve kleur, duidelijk
      gecaveat als generiek.
    - Insurance-NPV-migratiecase's residual-risk/lock-in-mitigatiedetail → primair
      thuis unit 19 (plant dit al als teaser) / unit 73 (board pitch).
    - Bart's governance-framework-ontstaansverhaal → mogelijke latere governance/
      methodologie-unit.
---

<!-- NOTES DRAFT — unit 32a in book-sequence.md. Not prose yet; these are the notes on what the unit should contain. -->

## Thesis

Lock-in is the mechanism that binds the book's three lenses together: the same forces that create value for you accumulate power over you, and that accumulated power is tomorrow's autonomy risk.
Lock-in is not a vendor trick; it is the flip side of integration value.
Every engineering decision has pros and cons — the pro is called integration, the con is called lock-in, and they are the same thing.

## Position in the arc

Closes Act II as the second value→power bridge (after network neutrality, unit 32).
The reader has just seen why the provider deal is genuinely good; this unit shows what the deal quietly accumulates.
Act IV (power) and Act V (autonomy controls, deterrence) build on it.

## Case opener candidate

The Neato robot-vacuum shutdown (vacuumwars link in snippets.txt): vendor discontinues cloud services, working hardware degrades.
Questions to walk through: who are the actors, who had power over which asset, what could a buyer have known in advance?
Also usable: "the neighbourhood pizzeria vs the platform hairdresser" note from snippets (revenue-share platform → service platform: it is about who has power over the important asset).

## What goes in

- Anatomy of switching costs: contractual (termination fees), technical (data formats, egress fees, proprietary APIs), procedural (retraining, process rebuild), emotional/organizational (nobody gets fired for staying).
- Network effects taxonomy — harvest selectively from the NFX "network effects bible" (direct, indirect/marketplace, data network effects); keep only what Neil needs to recognize, not the VC framing.
- The law-of-rent analogy (snippets link): the value you create above your next-best alternative is exactly what the "landlord" can capture.
  A provider prices toward your switching cost, not toward their cost.
- Data gravity: data attracts applications, applications attract more data; why the biggest switching cost is usually the data, not the software.
- "Consumers buy ecosystems from you" (arcast notes in snippets): lock-in is often bought willingly, bundled with convenience.
- Salesforce as the standing example of high switching costs (snippets).
- Measuring it: exit cost as a number you maintain, like an insurance premium — links to the deterrence frame in digital-autonomy-controls (81): an exit option that isn't credible deters no one.
- Engineering posture: you don't avoid lock-in, you price it and choose it consciously; standard interfaces and escrow as partial hedges.

## Persona check

- Neil: gets the vocabulary to say "this discount raises our exit cost by X" in a procurement meeting.
- Maria: annotates her diagram with the switching cost per boundary — which arrows could she re-point in a month, which in a decade?
- Toolbox appendix (86a): a one-page "estimate your switching cost" worksheet comes from this unit.

## Sources

- `snippets.txt`: NFX network-effects bible, law of rent + substack link, Salesforce switching costs, arcast ecosystem notes, pizzeria/platform note.
- Neato case: https://vacuumwars.com/neato-ending-cloud-services/
- Cloud-adoption training logs (once collected): participants' voiced switching fears — see sources/README.md harvest map.

## Open questions

- Does egress pricing deserve its own worked example (numbers date quickly) or a timeless treatment?
- Jevons paradox / platform-scale note from snippets: in scope here, or Act IV?
