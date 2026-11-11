---
date: '2026-11-09T09:00:00Z'
draft: true
title: 'SUWI: a chain of promises (draft)'
weight: 58
notes: |
    Stub created 2026-11-09. No body text yet: the author writes it, or inserts text
    from here into another unit. Weight 58, directly after promise-contract (57),
    whose claim it illustrates (contracts are complementary promises, here chained
    across organizations). The reisplanner unit (53), simpler and chronologically
    earlier, is the lead-in story before promise-theory (55); SUWI needs the theory,
    so it stays after it. Author's decision 2026-11-09: the SUWI story may be split
    over several units in different places (for example identity, escalation, power,
    risk); this stub is the home of the shared material and the installments can be
    placed elsewhere. Find per installment the claim it supports (TODO.md item 2).

    Intended claim (to be confirmed by the author): when many organizations must
    cooperate, the formal agreement between their executives is the tip of the
    iceberg; the real work is a chain of promises down through each organization,
    and each link can be missing. Must pass the criterion in TODO.md item 2.

    What was found (facts and pointers only, no prose):

    From the recording of the talk (transcript lines refer to recording.txt;
    whisper transcript, check wording before quoting; the project is not named in the
    recording, the link to SUWI comes from the deck and the author's own notes):
    - Lines 156-163: "This is actually what we did in the social security world.
      There's like two of these parties, like 12 of them, and they have to talk to
      each other. And there's multiple layers in each of these parties. These
      parties are summarized to two layers. But the reality is there's like four
      layers in 12 of those parties. And how do you write down these service
      agreements on that?"
    - Lines 164-171: promise theory gives tools; the organizations are represented by
      their top executives who say "let's collaborate"; they do not know exactly
      what is wanted, so it must be specified in more detail.
    - Lines 172-174: "the tip of the iceberg. Because there's like a couple of
      hundred promises below this, to make this work. I spent a couple of months
      figuring all that out."
    - Lines 175-178: the chain. One party asks another: "please promise me that
      Alice can talk to Bob whenever she wants something". The other party turns to
      its internal people: "please promise me that you promise to Alice to pick up
      the phone when she rings."
    - Lines 179-185: "I worked at EDS. For certain customers, we did not have that
      promise. Explicitly. Because they weren't paying probably. So, this is how you
      do chains of service management." Can be expanded "to like the entire
      internet".
    - Lines 300-303: "It was way back at EDS. First we got the customer, and then we
      took a year to write the service level agreement. Because nobody really
      understood what was going on. This is a theory that expedites that entire
      process."
    Also in the same talk, possibly usable elsewhere: the "99% uptime, what does it
    mean" and "promises, promises" lines about service agreements (lines 141-154:
    "we cannot guarantee that we keep those promises. We can only say, we promise.").

    Deck: "Patterns for service design.pdf" (26 Mar 2015), slide 2 of the talk shows
    a historical SUWI/BKWI network topology (headed "SUWI BKWI infra, To Be",
    "Routering en Nummerplan SUWInet (end2end)"). Visible parties: LISV, CADANS,
    GUO, USZO, SFB, GAK, ABP/USZO, plus "BKWI centrale voorzieningen". Each has its
    own DMZ, FirewallFilter and NAT; they share a "SUWI koppel LAN" and a VPN
    backbone (Roccade), with KPN as provider, a helpdesk, internet exchange
    (AMS-IX), and per party three environments (integratietest, acceptatietest,
    productie, hostnames like spoor1-xml-productie.extranet.<party>.nl).
    Note: an earlier harvest note listed UWV; UWV does not appear in the diagram.
    Source note: sources/misc-independent-units-talk-service-design.md.

    Author's own post-talk notes (notes2.txt, 27 Mar 2015, Dutch):
    - "plaat 2 (suwi) uitleggen van complexiteit van werking en diagnose
      (conditionals, etc)."
    - "Meer WHY, Complication, voorbeeld van een probleem dat je hier mee oplost."
    - "Data loss/breach: hoe spoor je het op? Door de (impliciete) promises op te
      sporen."
    - "Voorbeeld: helpdesk medewerker helpt niet. Ga je schelden of escaleren? Wat
      betekent escaleren eigenlijk?" (a possible short scene; harvest note suggests
      units 54 and 52.)

    Caveats: the numbers (12 parties, four layers, a couple of hundred promises, a
    couple of months, a year for the SLA) are the author's spoken estimates from a
    2015 meetup, about work done years earlier; check against memory or documents
    before printing. The client and the parties are public bodies, but check whether
    naming them is acceptable. The first third of the talk was not recorded; no
    other recording exists under Digital Infrastructures/. Transcript:
    Salvage to process/transcripts/Content en creatie/Independent units/talk service
    design/recording.txt.

    Open questions only the author can answer: what exactly went wrong or nearly
    went wrong, which promise was missing, and what the author did about it; how the
    SUWI work relates to the author's time at EDS; the dates of the project.

    Cross-references: promise-theory-services (260, set of promises, the
    service-agreement claim), promise-contract (170), customer-service (175 draft,
    escalation scene), promise-multiparty (act4, delegation chains), promises
    inventory entry in TODO.md item 8.
---

Promises