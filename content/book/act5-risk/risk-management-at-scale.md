---
date: '2026-07-23T00:00:00Z'
draft: true
title: 'Risk management at scale'
weight: 700
---

<!-- NOTES DRAFT — unit 70 in book-sequence.md. From ideas AR-dec-20 (treatment vs management) + AR-dec-22 (policy–execution gap). Write as a decision scene. Not prose yet. -->

## Thesis

Risk *treatment* is deciding what to do about one risk; risk *management* is organizing how thousands of potential risks get identified, distributed, consolidated, and reviewed.
Confusing the two is the profession's standard failure: the paperwork gets done, the real work does not.
And the one risk to treat best is an inadequate risk management system itself.

## Position in the arc

After DaRiCo (69) — the reader has the assessment vocabulary; before compliance (71) — which is what risk management calcifies into when this unit's lesson is missed.

## The decision scene (structural spine of the unit)

AR-dec-22 stops exactly at the good part: "I remember being in a meeting with a risk manager and an IT architect…" — finish that story as the unit's opening and closing frame.
Beats to reconstruct (from memory or the original session):
what each side brought, the language mismatch, the moment a shared artifact (a diagram? a concrete risk with a name and an owner?) made the connection, what changed after.
If the real ending is missing, reconstruct honestly and say so — the composite is allowed, the fabrication is not.

## What goes in

- The scale problem, concretely: every device, every configuration setting (MS Teams has over 2000 of them), every line of code is a potential risk; you cannot treat your way through that list one by one.
- The two failure modes from AR-dec-22, symmetrical:
  policy makers translate policy into ever more paper in a language executors don't speak (Parkinson's law: processes to manage processes);
  technologists drown in everything that can go wrong and can't see the forest for the trees.
  Neither side understands what the other is trying to accomplish; waste, not risk reduction, results.
- The subtle trap (AR-dec-20): many control frameworks mix technology controls with controls *on the risk management process*; you can score progress on the latter while systems get no safer — "you have done the paperwork, but not the real work."
- What working at scale actually requires: distribution of identification work to teams, guidelines those teams can execute, a consolidation path back up, and a feedback loop that closes (link unit 36).
- Who suffers / buck-stops callbacks (65, 54): risk management at scale is the machinery that connects the suffering to the deciding.

## Persona check

- Neil lives this unit: he is usually the person sent into that meeting; give him the bridge-language.
- Maria: her boundary-annotated diagram is precisely the shared artifact that makes the meeting work — say so explicitly, connect to the reference-diagram thread.

## Sources

- `[idea]` AR-dec-20 and AR-dec-22 (aged as newsletters, still the right skeleton — rewrite fully in book voice).
- Cloud-security training logs once collected: the risk-management-vs-treatment confusion appears in every cohort per the harvest map.
- Alternative per book-sequence: fold into 69 if it stays under a page — current judgment: it carries a full unit because the decision scene needs room.

## Open questions

- Does the ISO 27001 / compliance-trigger material from darico overlap too much?
  Division of labor: 69 = how to start; 70 = how to run at scale; 71 = what compliance does to it.
