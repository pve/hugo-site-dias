---
date: '2026-07-23T00:00:00Z'
draft: true
title: 'Migration, not greenfield'
weight: 830
---

<!-- NOTES DRAFT — unit 83 in book-sequence.md; chapter already specified in TODO.md ("chapter on change — migration, not greenfield"). Not prose yet. -->

## Thesis

The autonomy controls (81) describe the destination; almost nobody starts from an empty field.
This chapter covers the transition *out of an existing dependency* — which is a change-management problem first, an economics problem second, and a technology problem third, in that order.

## Position in the arc

After organising markets (82): the market gives you somewhere to go; this chapter is how you actually move.
Feeds unit 73 (the board pitch): the business-case numbers below are the worked example that unit needs.

## Anchor case (from TODO.md): the French sovereign-IT / DiNum migration

2.5 million civil-servant workplaces moving Windows → Linux.
Structure the chapter along its lessons:

- **Political mandate at the top**: cabinet-level decision and sustained support; without it, the first budget cycle kills the migration.
- **The business case**: licence cost vs migration cost vs annual saving — run the honest numbers, including the years where the migration costs more than it saves; this is the unit-73 material.
- **The human factor is the biggest obstacle**: resistance to behavioral change outweighs technical difficulty; countermeasures that worked — training, hotlines, in-office workshops, product champions.
- **Migration mechanics**: legacy and non-cloud-native applications; containerise vs rewrite as the recurring engineering decision (pros and cons, per the book's style rule).
- **An internal mandate with a deadline** — "no exceptions" — because every exception becomes a precedent and a permanent parallel system.
- **Parallel running** to protect critical services during the transition; time-boxed, or it becomes the new steady state.
- **The exemplary role of government**: lead by example; the credibility of asking others to move rests on having moved yourself.

## Further content notes

- Generalize beyond the case: the same seven beats apply to a SaaS exit, a cloud-provider switch, or a database migration — show the mapping in one table or list.
- Campbell note: this is the reader-as-hero's road of trials in miniature; write the beats as the order in which pain arrives, not as a checklist of virtues.
- Cross-references into digital-autonomy-controls (81): the intro framing sentence is already placed there ("I write about that in this book's chapters on change"); the deep-link at the end of *Building expertise* is still TODO — resolve both when this chapter lands.
- Deterrence closing (callback 32a/81): a rehearsed, costed migration you *don't* execute is still valuable — it is the credible exit that changes your provider's behavior.

## Persona check

- Neil: gets the seven beats as the skeleton for a migration proposal that survives a board.
- Maria: gets the mechanics section — containerise vs rewrite decided per application on her own diagram.

## Sources

- TODO.md chapter spec (authoritative; keep in sync); the French DiNum case details as gathered there.
- Cloud-adoption training logs once collected: real migration debates per the harvest map.
- Fact-check before publishing: verify the DiNum case numbers and current status; the 2.5M-workplaces figure needs a source.

## Open questions

- Title check: "Migration, not greenfield" states the constraint; alternative "The way out is through" states the promise — decide in the title pass.
