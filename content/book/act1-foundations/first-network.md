---
date: '2025-06-08T14:31:28Z'
draft: false
title: 'How I Got Started in Computer Networks'
weight: 90
notes-closed:
    - "[ ] Full personal computing timeline (1973 punched cards → PhD/rail network → EDS → Deloitte → independent → cloud) to extend/replace current 'early 80s' opening"
    - "[ ] Career-origin narrative (Twente → EDS → Deloitte consolidation insight → 'the cloud fulfilled all those promises of the future') as core thesis-grounding material, not just anecdote"
    - "[ ] Car-manufacturing / industrial-history analogy, landed here per unit-05's cross-reference"
    - "[ ] Resolve the unit's own open forward-reference: 'I have a great story about that, but that will be in another unit' (storage-media story) — not found in the harvest, check sources/ directly"
notes: |
    Verplaatst vanuit `units-notes/unit-09.md` (2026-10-27) — harvest-triage, nog niet
    verwerkt in de proza hieronder. Gewicht klopt nog (90).

    Live file: `act1-foundations/first-network.md` (weight 90, published, title "How I
    Got Started in Computer Networks").

    ## Current state

    Personal-memoir unit, first-person, in the book's "personal thread" voice per
    book-sequence.md. Covers: early-80s dial-up (1200 baud vs. today's 1 Gbit/s, "a
    million times faster"), physically moving storage media between machines ("I have
    a great story about that, but that will be in another unit" — a forward reference,
    apparently unresolved), discovering Tanenbaum's *Computer Networks*, a
    self-organized student course, then a PhD in networking, and the multi-year gap
    between starting the PhD and reaching "planet-scale internet." Short, warm,
    specific — the only unit so far written in pure memoir mode.

    ## Triage

    **Highly relevant**

    - **Full personal computing timeline**: first program on punched cards in 1973,
      then paper tape, pre-internet distributed-systems research at university,
      pioneering wide-area client-server apps on the Dutch rail network over 64kbit
      lines, a stint at an internet provider doing cross-country technical
      consolidation in the late '90s, IT-strategy consulting with "a couple hundred
      million euro" budgets, independent from ~2005, cloud-focused full time from
      ~2011 (`sources/delivery-ccsk79-2018-oslo-prep-session-audio.md`). A direct,
      richer extension of exactly what this unit already does — pushes the timeline
      back to 1973 (earlier than the current "early 80s" opening) and forward through
      the author's whole career. Strong candidate to substantially extend this unit
      rather than leave it at the university years.
    - **Career-origin narrative**, described in the harvest note itself as "cleaner
      and more complete than any other version of this bio found in the corpus":
      academic networking research at Twente → internet connections for large
      corporations at EDS → business cases for large-scale IT deployments at Deloitte,
      where he "figured out that consolidation of infrastructure into good shared
      services is the way forward to both quality and lower cost of IT" → "then the
      cloud came, and it fulfilled all those promises of the future"
      (`sources/misc-ccsk-understanding-udemy2015-bio-team-roi.md`). Reads as the
      actual origin story behind the book's central thesis (infrastructure
      consolidation → value/power/risk), not just a credentials list — arguably the
      single strongest item found in the Act I harvest so far. Worth treating as core
      material: it gives units 5/6/10's abstract claims a lived, personal grounding.
    - **Car-manufacturing / industrial-history analogy** for cloud's historical arc,
      independently and unpromptedly praised by multiple participants the same day
      (`sources/delivery-ccsk66-2017-online-sept-chat.md`, also tagged unit 5). Fits
      this unit's memoir-meets-history register better than unit 5's more definitional
      tone — recommend landing it here, per the cross-reference already flagged in the
      unit-05 note.

    **Maybe relevant**

    - **"Cars made suburbs possible"** analogy — cheaper transport changed where
      activity happens, just as cheaper compute/network changed where processing
      happens (`sources/archive-pre2017-signature-speech-stack-and-board.md`). Good
      analogy, but a conceptual/economic point rather than personal history. **Better
      home: unit 10 (Cloud computing).**

    **Hardly relevant** — pedagogy/teaching-order evidence from course delivery, not
    personal-narrative content, doesn't fit this unit's memoir voice.

    - Bank of "already familiar" example candidates (multiplayer gaming, smart
      thermostat, home Wi-Fi, barcode scanner, Uber/food delivery) — **better home:
      unit 5 or the introduction.**
    - Trainer's own course-opening sequence — meta course-design notes, not book
      content.
    - Comparative teaching-order verdict (SC-900 vs. CCSK abstractness) —
      training-feedback meta, not narrative.
    - Real-world-analogy-request evidence, including the "you take cattle to vets too"
      extension of cattle-vs-pets — pedagogy evidence, not a story for this unit.
      **Cross-ref: unit 7**, where cattle-vs-pets already lives.

    ## Open item

    The unit's own text promises a story about physically moving storage media ("I
    have a great story about that, but that will be in another unit") — none of the 8
    harvested items for unit 9 supply that story. Worth checking the wider `sources/`
    directory directly, since this is a specific unresolved forward-reference the
    author made to himself.

    ## Cross-unit flags

    - "Cars made suburbs possible" → unit 10.
    - "Already familiar" example bank → unit 5 or introduction.
    - "Cattle to vets" extension → unit 7.
---

My first interest in networking came in the early 80s, as I was in the final years of my mathematics and computer science master's program.

At the time, dial-up terminal networking was about the most advanced there was.
And if you were lucky, you'd get 1200 baud (transmitting approximately 120 characters per second).
My current fiber-optic home links are 1 Gigabit/sec, which is about 1 million times faster.

Beyond this, computer-to-computer communication was mostly confined to the local data center.
Transferring files from one computer to another typically involved physically moving storage media around.
I have a great story about that, but that will be in another unit.

Eager to learn, we browsed the library to find a new book by Andrew Tanenbaum: Computer Networks.
We already worked through most of his book "Structured Computer Organization" and we liked his approach and style.
Many years later, I had the chance to meet and work with him a few times. He is both smart and personable.

Our professors did not have time to set up a new course on computer networks, so we proposed teaming up with other students to each present a chapter to the group.
That worked, but we could not do much practical work, as we lacked internet connectivity and even the hardware and software to run that on.
I had to wait many years for that.

After my Master's, I got the chance to pursue a Ph.D. in a research group that was focussed on networking and computer communications.
Even then, it took a few years before I moved from dial-up networking to planet scale internet.

It may seem archaic from today's perspective, but that is how it was.
You can't expect to be using the network much when you are still in the process of building it out.
