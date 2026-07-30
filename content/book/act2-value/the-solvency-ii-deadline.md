---
date: '2026-07-28T00:00:00Z'
draft: true
title: 'The Solvency II Deadline'
weight: 190
---

<!-- NOTES DRAFT — unit 19 in book-sequence.md. Not prose yet; these are the notes on what the unit should contain. Replaces the Kaminski capacity-planning interview as Act II's case opener (that interview moved to unit 72a, act5-risk/automate-or-die-capacity-planning.md — it's a control story, not a deal story, and didn't earn this act's thesis). -->

## Thesis

A deal is good when it's struck for a reason you can put a number on, by the people who actually have to answer for it.
This unit is Act II's case opener: it should show a deal being made, not a deal being administered after the fact.

## Why here in the arc

- First worked case after the Act II opener (18) — earns the act's thesis ("why the deal was good") before the abstract value chapters (20 Intro to value, 21 Value of information) unpack it.
- Gives Neil a concrete go/no-go he can argue with: was this the right call, and on what basis?
- Plants the anti-lock-in contract clause here as a teaser, paid off properly in 32a (Lock-in).
- The regulator-notification step foreshadows the compliance/governance material later in the act and in Act V (55, 71).

## What goes in

- A regulated life insurer must revalue its entire policy portfolio every quarter for Solvency II: net-present-value of "millions of policies over thousands of scenarios," run on a few hundred CPUs, taking six weeks — up against a quarterly reporting deadline.
- The move to managed private cloud cut that batch from six weeks to two — a real, quantified number tied to a hard regulatory date, not a hypothetical.
- The deal itself: a cross-functional team (business unit, business information managers, IT account manager, service manager, procurement, contract managers, risk managers, security managers, legal) drove this to a formal go/no-go decision — including a required step to notify the regulator about the outsourcing decision.
- The contract that got signed wasn't naive: it required the provider to keep the insurer's custom-built VM images "available to us outside of your influence at all times or at regular intervals" — a named, specific portability/exit clause, not just general lock-in advice. Mention it here, pay it off in 32a.
- Framing device: this is what "why the deal was good" looks like in practice — quantified value, a real deadline, the right people in the room, and an exit clause negotiated *before* signing, not regretted after.

## Sources

- `sources/misc-cae-udemy-2015-bank-roadmap-insurance-case.md` (Salvage) — primary source. Whisper transcript of scripted "Cloud Adoption Essentials" Udemy narration (c. 2015), walking an eight-step cloud-adoption roadmap using this one anonymized case throughout. Also carries three secondary items worth a mention elsewhere: the anti-lock-in clause (32a), the Dutch Olympic Committee OS2010 existence-proof case (28, not this unit), and a restaurant/waiter promise-theory walkthrough (26).

## Persona check

- Neil: this is his scene — he has to be able to defend the go/no-go on both the numbers (six weeks to two) and the governance (who signed off, what got negotiated).
- Maria: less central here, but the "which of my systems actually has a regulatory deadline attached" question is hers to ask when she reads this.

## Open questions

- How much of the eight-step roadmap structure to keep visible vs. compress into a single decision scene? Probably compress — the act opener (18) is where the arc framing lives, this unit just needs the case.
- Does the anti-lock-in clause get its own paragraph here, or a single foreshadowing line with the payoff held for 32a? Leaning toward a single line — don't let this unit do 32a's job.
- Title still open: "The Solvency II Deadline" vs. something that names the deal more directly (e.g. "Why We Signed the Cloud Deal"). Current working title kept simple and case-specific.

<!-- RAW MATERIAL, collected from Salvage to process/sources — my own words/teaching, not yet worked into prose. Kept verbatim so nothing gets lost before drafting. -->

## Raw material (mine, not yet drafted)

- Regulatory driver, stated in concrete numbers: the insurer had to report the net-present-value estimate of its entire life-policy portfolio — "millions of policies over thousands of scenarios" — by crunching it on a few hundred CPUs for several weeks, every quarter. Moving to (private) cloud cut that quarterly batch from six weeks to two.
  (source: `misc-cae-udemy-2015-bank-roadmap-insurance-case.md`)

- Real governance worked example: the project team pulled together the business unit, business information managers, the IT account manager, service manager, procurement, contract managers, risk managers, security managers, and legal — and the project plan formally ended in a go/no-go decision plus a required step to notify the regulator about the outsourcing decision, "which is required in this particular jurisdiction."
  (source: `misc-cae-udemy-2015-bank-roadmap-insurance-case.md`)

- Concrete data-minimization control mentioned in the same walkthrough (probably belongs in unit 66, Assets, not here — flagging in case it's useful as connective tissue): "you don't need all the data that's in those policies... you probably need the ages and sex... but you don't have to have their names or addresses or payment information" — data masking on export/import, generalized to "at every point where you hand data over to another control authority, you need to be very aware of the filtering you can apply."
  (source: `misc-cae-udemy-2015-bank-roadmap-insurance-case.md`)

- Concrete anti-lock-in contract clause — exactly the kind of real example book-sequence.md flags as missing for the lock-in unit: the insurer's contract required the private-cloud provider to keep custom-built VM images "available to us outside of your influence at all times or at regular intervals" — a named, specific portability/exit mechanism ("liberation of data"), not just the general advice to "avoid lock-in."
  (source: `misc-cae-udemy-2015-bank-roadmap-insurance-case.md`; target unit 32a, mention only in passing here)
