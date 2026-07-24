---
date: '2026-07-23T00:00:00Z'
draft: true
title: 'Identity: the control point'
weight: 115
---

<!-- NOTES DRAFT — unit 11a in book-sequence.md. Not prose yet; these are the notes on what the unit should contain. -->

## Thesis

Identity is asserted, not physical.
At scale there is no perimeter or physical access left to fall back on; everything is logical, and everything is governed by who the system believes you are.
That makes identity the control point of digital infrastructures — and the one thing you can really mess up.

## Why here in the arc

- Picks up directly from the directories unit (11): directories are the infrastructure *for* identity.
- Sets up promise theory's unstated assumption before units 16/17 need it: agents must be identifiable before they can exchange promises.
- Gives what-is-trust (67), controls (72), and retrofitting zero trust (76) a shared concept to build on instead of re-deriving it.

## What goes in

- From physical to logical: the office building had a door, a guard, and a desk you sat at; the cloud has none of these.
- The security-guard / secretary / bank-manager analogy (from the CCSK Christmas 2015 delivery): each recognizes you differently, each grants different things — authentication vs authorization in everyday terms.
- Kindervag masterclass line: "Identity is asserted. Not a real thing." — assertions can be stolen, spoofed, delegated; that is why identity is where attacks concentrate.
- CCAK cohort observation: in the cloud "the only thing that you can really mess up is your identity and access management" — the provider runs the datacenter, you run the who-may-do-what.
- Identity is not only for humans: services, machines, and AI agents carry identities too (service accounts, API keys, workload identity).
  This is the bridge to Act III — the machines that start promising must first be identifiable.
- Federation: trusting someone else's assertion (teaser for eduroam in unit 81a — federation as a European success story).
- Power foreshadow (Act IV): whoever grants and revokes identities holds power over every interaction that depends on them.

## Sources

- `sources/delivery-ccsk-for-christmas-2015-online.md` — guard/secretary/bank-manager analogy; note flags "no dedicated IAM unit currently exists".
- `sources/cczt-material-kindervag-masterclass-notes.md` — "Identity is asserted."
- `sources/delivery-ccak2021-online-cohort-patterns.md` — "the only thing you can really mess up".
- NB 2026-07-23: these three intake notes are cited in book-sequence.md but not present in `sources/` in this workspace yet — locate/import them before writing prose.

## Persona check

- Maria: have her label every arrow in her own deployment diagram with the identity it runs under; surprises guaranteed.
- Neil: identity governance is the residual responsibility that never outsources; every shared-responsibility split leaves IAM on his side of the line.

## Open questions

- How deep into mechanics (tokens, SSO, OIDC)? Probably not at all — keep at the "who does the system believe you are" level; point to side-reading.
- Does the unit need its own mini-case (a stolen-assertion incident) or does the site-hack case (63) carry that later?
