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

<!-- RAW MATERIAL, collected from Salvage to process/sources — my own words/teaching, not yet worked into prose. Kept verbatim so nothing gets lost before drafting. -->

## Raw material (mine, not yet drafted)

- The guard/secretary/bank-manager analogy, from a live CCSK call (Dec 2015): "like getting past the security guard at the front door, then a secretary, then you still have to show your ID to the bank manager." Each recognizes you differently, each grants something different — authentication vs. authorization in everyday terms.
  (source: `delivery-ccsk-for-christmas-2015-online.md`, Week 3 call)

- "The only thing that you can really mess up is your identity and access management" — if everything else works as advertised, IAM is the residual risk that never outsources.
  (source: `delivery-ccak2021-online-cohort-patterns.md`, CCAK3 online Nov 2021)

- On identity-provider concentration, an aside from an alumni call (Dec 2017): "nine out of ten questions is Active Directory" — most real federation is built on top of one legacy system, not a clean green-field IdP.
  (source: `delivery-alumni-clubcall-2017-2018-series.md`)

- Two real, unresolved practitioner questions from the same alumni series (April 2018), both circling the same friction — how to give a team enough IAM flexibility to work without losing control: "the best way to protect the IAM console from these risks: 0-day vulnerability" and "what's the best way to control admin rights within an AWS environment so that if credentials are stolen [the attacker can't] disable the admin account?"
  (source: `delivery-alumni-clubcall-2017-2018-series.md`)

- A business-case method I used live with a client (Stephen/Adam, Gallagher, Dec 2015) to justify identity infrastructure investment that "doesn't produce value in itself": either put a dollar value on the risk (probability × cost), or price the manual alternative in staff time — "how many password resets do you have in a year? What's the number of staff involved? What's the lost business value to the person losing his password? Assume you can improve that by 50 percent and you have a number."
  (source: `delivery-ccsk42-2015-gallagher-virtual.md`, day 2)

- From an old CCC-website post: "cloud services and applications should be separated from the management of identities" — identity as a separable infrastructure element, not baked into each application. Same post flags a dependency risk one layer removed from the application itself: what happens if the identity provider itself goes out of business? You can be locked into your identity provider even after your application vendor is easily swapped.
  (source: `oudemeuk-identity-management-multiple-clouds.md`)

- From my own notes at John Kindervag's live Zero Trust masterclass (Zurich, April 2024; also Nov 2023): his line, "Identity is asserted. Not a real thing," and my own real-time cross-link written down in Dutch at the time: "protect surface, attack surface... looks a lot like deployment diagrams. Control boundary, perimeter" — the moment I noticed his protect-surface framing is structurally the same move as this book's own boundary language.
  (source: `cczt-material-kindervag-masterclass-notes.md`)
