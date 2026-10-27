---
date: '2025-06-05T15:03:13Z'
draft: true
title: 'Customer Service (draft)'
weight: 175
notes-closed:
    - "[x] Resequenced (2026-10-27): weight moved 150 → 175, now after promise-contract.md (170), not before promise-theory.md — most of this unit's content is slated to move out (see items below), so little may be left to actually sit here"
    - "[ ] Fix regel 11 forward-reference direction (wrong-way → promise-theory.md comes after, not before) — moot if this unit ends up mostly emptied, but fix if any intro prose survives"
    - "[ ] Move service-elements taxonomy + hierarchy (regel 54-74) to act2-value/engineering-services.md (unit 26a)"
    - "[ ] Cut IP-address/TCP-protocol Q/R/A (regel 29-49) — superseded by act3-delegation/dhcp-automation.md"
    - "[ ] Decide fate of unused permissions/phishing scenarios — fold into promise-theory.md or let this file retire"
    - "[x] No separate units-notes/unit-15.md harvest file exists — the list above is this session's own resequence analysis, not a moved harvest"
notes: |
    Resequence-aantekeningen (2026-10-27), ter voorbereiding op verplaatsing door de
    auteur — tekst hieronder is NIET verplaatst, alleen geannoteerd.

    - Regel 11 ("In an earlier unit, we talked about promise theory") is een
      verkeerde-richting-verwijzing: promise-theory.md (160) komt juist ná deze unit.
      Fix bij verplaatsen: ofwel herformuleren als vooruitwijzing ("in the next unit"),
      ofwel — zie volgende punt — laten vervallen omdat dit stuk toch achter 160/170
      komt te staan.
    - Regel 9–23 (intro + drie voorbeeldscenario's: laptop/permissies/phishing): het
      laptop-voorbeeld staat al, bijna letterlijk, in promise-theory.md regel 52
      ("we want a new laptop... proceeds by making a request... to a service desk").
      De twee andere scenario's (permissies, phishing) zijn niet gebruikt — kandidaat
      om die als extra voorbeelden aan promise-theory.md (160) toe te voegen, of hier
      te laten vervallen als ze overbodig blijken.
    - Regel 29–49 (Q/R/A IP-address-allocation + TCP/IP connect/transmission): overlapt
      met, en is zwakker dan, de latere, met-naam-en-bron verteld DHCP-verhaal in
      `act3-delegation/dhcp-automation.md` (weight 350, "Network Management Automation
      - the DHCP case"). Kandidaat om hier volledig te laten vervallen; geen nieuwe
      bestemming nodig, 350 dekt dit al beter.
    - Regel 54–74 (Service elements-taxonomie + Hiërarchie van services:
      contract/provision/use): dit is het bruikbare restmateriaal. Hoort niet na
      promise-contract.md (170) in Act 1 — dat zou de net afgesloten "meeting the
      mentor"-sequentie weer heropenen. Hoort in **Act 2**, bij
      `act2-value/promise-theory-services.md` (weight 260, "A service agreement is a
      set of promises"), die al zegt "a contract, as we saw earlier, is essentially a
      set of complementary promises" — rechtstreekse callback naar 170. Bestemming:
      nieuwe stub-unit `act2-value/engineering-services.md` (weight 265, zie
      book-sequence.md unit 26a) is al aangemaakt als landingsplek; verplaats deze
      regels daarheen.
    - Na verplaatsing: dit bestand (`customer-service.md`) houdt waarschijnlijk niets
      bruikbaars meer over — overweeg het dan op te heffen i.p.v. als leeg restje te
      laten staan, tenzij de twee ongebruikte scenario's (permissies/phishing) hier
      een nieuwe, kleinere functie krijgen.
---

Customer service is a great thinking model for a lot of what is going on in digital infrastructures, even if the customer is not a human, as we will see.
We are often buying products, but we really mostly want a service.
In an earlier unit, we talked about promise theory

An IT services organization deals with customer requests all the time.

>Can I get a new laptop?
>
>Joe from accounting needs permissions to access this application. Can you fix that?
>
>I think I clicked on a phishing link. What now?

The list is endless.

Most of these scenarios can be described very nicely with promise theory.


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

