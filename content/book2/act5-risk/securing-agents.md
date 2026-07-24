---
date: '2026-07-23T00:00:00Z'
draft: true
title: "Securing agents you don't fully control"
weight: 750
---

<!-- NOTES DRAFT — unit 75 in book-sequence.md. From posts travel-mail-bot + mcp-risk + idea olra (OWASP LLM risk allocation) + wicked-2026 (agentic-security half). Not prose yet. -->

## Thesis

An agent you don't fully control is a provider you can't fully trust — and the book has spent four acts building the controls logic for exactly that situation: bound the promises, allocate the responsibilities, verify the outcomes, contain the blast radius.
AI agents don't need a new security theory; they need the existing one applied without sentimentality.

## Position in the arc

After querying-AI-risk (74): assets and threats are named; this unit is the controls counterpart for the agentic case.
Before retrofitting zero trust (76): the ZT mindset ("assumed trust is a risk", unit 67) is the natural closer for both.

## What goes in

- Why agents change the stakes (from wicked-2026): AI that *acts* rather than answers turns every wrong output into a wrong action; the uncanny-valley note from AR-dec-nr-6 (people project human judgment onto a simulation) explains why oversight erodes.
- The lethal trifecta (Simon Willison, link in snippets.txt) as the unit's organizing risk pattern: private data + exposure to untrusted content + an exfiltration channel; any agent with all three is a breach waiting for a prompt.
  Show it on the reference diagram: which of the three can we remove per boundary?
- MCP as the concrete risk surface (mcp-risk post): tools as promises, tool poisoning, the confused deputy; "look at MCP now to be ahead of AI risk" — the early-warning framing still holds.
- Risk allocation across the supply chain (olra): OWASP LLM Top 10 mapped to the AICM roles from unit 42 — the same shared-responsibility move that cloud security made; who controls which risk is a contract question as much as a technical one (link 77, lawyers).
- The worked example: the travel mail bot (post) — least privilege, constrained outputs, human-in-the-loop where actions are irreversible, and what remained uncomfortable anyway.
  Second, briefer example: the sandboxing lessons from vibe-deploy (a contained environment as the promise boundary for a coding agent).
- Controls checklist shape (feeds toolbox 86a): name the principal; enumerate the tools and their promises; strip one leg of the trifecta per boundary; log and review the agent's actions (feedback loop, unit 36 — the kill switch is a feedback mechanism); decide in advance which promises the agent may never make.

## Persona check

- Neil: this is the unit his board will ask about in the coming years; give him the trifecta as the explainable model.
- Maria: runs the trifecta test on her own diagram's newest AI arrow.

## Sources

- `[post]` travel-mail-bot, mcp-risk, wicked-2026; `[idea]` olra (OWASP LLM risk allocation), AR-dec-nr-6 fragment.
- snippets.txt: lethal trifecta link; Securosis "data, exploit, egress" report (same triad in older clothes — nice continuity point).
- Intro-AI-and-security training logs once collected.

## Open questions

- Version risk: MCP specifics date fast; keep protocol details in examples, principles in prose.
- Does the Bert Hubert Angry Birds surveillance story (snippets) open this unit or stay an Act IV sidebar? Currently assigned to IV/V sidebar — decide at write time.
