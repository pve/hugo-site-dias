---
date: '2025-03-10T21:34:21Z'
draft: false
title: 'The essence of digital infrastructures'
weight: 50
notes-closed:
    - "[ ] 'Managing the technology matters more than the technology itself' as replacement/companion for the closing thesis sentence"
    - "[ ] Technology-education paradox (AWS 5→200+ services; father's 1930s trig textbook) to make the essence-not-features stance explicit"
    - "[ ] 'Oldskool IT' vs. 'compute just happens' framing device for the unit's opening move"
    - "[ ] Moore's-law cost-collapse numbers (admin ratio 10:1 → 1:1 → 1:10,000s) to give the closing claim teeth"
    - "[ ] Blind-men-and-elephant image only (drop the responsibility-split framing, which belongs elsewhere)"
notes: |
    Verplaatst vanuit `units-notes/unit-05.md` (2026-10-27) — harvest-triage, nog niet
    verwerkt in de proza hieronder. Let op gewicht: units-notes zei weight 50, klopt nog
    met de huidige front matter.

    Live file: `act1-foundations/essence-digital-infrastructures.md` (weight 50,
    published).

    ## Current state

    Short, already-published unit. Defines digital infrastructures by contrast (roads,
    airports, grid, internet, search) — services independent of a specific user,
    provisioned on a longer timescale, usually not owned by the user. Notes the
    "platform" label's drift (Windows in the 90s → platform engineering today). Admits a
    crisp definition is hard, like defining "car." Closes on the thesis: automation is
    what gives digital infrastructures their distinctive scale, reach, and speed — and
    that dynamic is where value, power, and risk come from. This closing paragraph is
    effectively the book's one-sentence thesis, so it's a load-bearing few lines.

    ## Triage

    **Highly relevant**

    - **"Managing the technology matters more than the technology itself"** (author's
      own stated core insight — `sources/archive-2024-cff-course-design-notes.md`).
      Close to a direct restatement of the unit's own closing thesis, but sharper and
      more quotable. Worth testing as a replacement or companion sentence for the
      current close — exactly the line that tells Neil "you don't need to be the
      engineer, you need to be able to manage this." Recurring-concept fit: this is the
      book's central bridging claim, stated in the author's own words.
    - **Technology-education paradox** (AWS 5→200+ services since 2008; a 4-year IT
      curriculum hasn't scaled to match; his father's 1930s trigonometry textbook was
      300 pages, now covered in a couple of lessons —
      `sources/archive-2021-22-content-plan-nuggets.md`). Directly supports the unit's
      implicit stance that it teaches essence, not exhaustive coverage, currently only
      implicit. This anecdote makes it explicit and is genuinely memorable — the
      trigonometry-textbook comparison lands with both personas because it's not
      IT-specific.
    - **"Oldskool IT" mental model vs. "compute just happens"** (younger/other-background
      learners have no machine-based mental model of compute; they think phones, IoT,
      thermostats — `sources/archive-2021-22-cloud-security-intro-teaching.md`). A
      genuinely useful framing device for *how* to open the essence discussion: start
      from the devices the reader already trusts intuitively, not server/datacenter
      concepts. Neil in particular is likely closer to this "compute just happens"
      reader than to old-school IT, so this could reshape the unit's opening move, not
      just add a sentence.
    - **Moore's-law cost-collapse numbers** (price/performance up ~1,000,000× in the
      speaker's lifetime; admin ratio moved 10 people-per-computer → 1 person-per-computer
      → 1 person per tens of thousands of computers —
      `sources/misc-signature-speech-2016-2017.md`). The concrete, quantified version of
      the unit's own closing claim ("orders of magnitude greater... automation"),
      currently asserted with no number behind it. Also flagged for unit 37 (automation
      business case) — no conflict, the number works as a seed here and a fuller
      argument there.

    **Maybe relevant**

    - **Car-manufacturing / industrial-history analogy** for cloud's historical arc,
      independently praised by multiple participants
      (`sources/delivery-ccsk66-2017-online-sept-chat.md`, tagged 5 and 9). A
      proven-resonant analogy, but essence-of-infrastructure (unit 5) is a definitional
      unit, not yet a historical-narrative one. **Better home: unit 9 ("My first
      network"), the personal-thread/historical unit.** Keep unit 5 clean of history and
      let 9 carry it.
    - **"Blind men and the elephant" analogy** for cloud terminology ambiguity, used
      originally to motivate defining shared vocabulary before splitting security
      responsibilities (`sources/archive-2024-ccsk-social-copy.md`). A nice fit for the
      unit's existing line "defining it with scientific rigor is difficult" — but the
      reason it was harvested (setting up a security *responsibility split*) belongs
      later, in a governance/controls unit, not essence. **Suggestion: reuse only the
      elephant image here, drop the responsibility-split framing; that argument may
      belong near unit 12 (shared-service-conflict) or a controls unit in Act V.**

    **Hardly relevant** — none. All six items clear the "example/anecdote/recurring
    concept, not deep technical" bar; nothing here is cloud-provider-specific plumbing.

    ## Cross-unit flags

    - Car-manufacturing analogy: primary home unit 9, not 5.
    - Moore's-law numbers: dual home, seed here / fuller treatment unit 37.
    - Blind-men-and-elephant: image usable here, but its original responsibility-split
      motivation belongs in unit 12 or a risk/controls unit — flag for whoever
      processes those.
---

What do roads, airports, the internet, the electricity network, and a search engine have in common? They are all services that are independent of a specific user or usage. They are provisioned on a longer timescale than that of an individual usage. And they are typically not owned by their users, or at least, not directly.

In this book I am mostly concerned with digital infrastructures. Their services are digitally accessible. Of the above examples, the internet and the search engine are the best examples of that. Interestingly, the other services increasingly rely on digital infrastructures themselves, or even incorporate specific digital infrastructures. 
Trading platforms, for example, enable the planning of electricity supply and demand.
In many countries, electricity is a market, not a monopoly, which requires coordination between the various players.

You'll also see that I talk about digital infrastructures as a service, not a product. It is not sufficient to buy a road, for example. For it to be truly useful to its users, it needs maintenance, repairs, incident management, and more. Any abandoned road will soon deteriorate without maintenance, and become useless.

Digital infrastructures are sometimes called platforms. In the 1990s Windows was an example of a platform. A few decades later the concept of platform engineering started to be used for services that helped developers develop and deliver code faster.

Defining it with scientific rigor is difficult, much like unambiguously defining what a car is.
There will always be edge cases.

What sets digital infrastructures apart, in my opinion, is that, thanks to automation, their scale, geographical reach, and deployment speed, can be orders of magnitude greater than that of other infrastructures. That has a lot in interesting effects, which we'll explore in this book.

In summary, digital infrastructures are about services that organizations deliver to independent consumers, while at the same time these services are subject to automation. That gives a tremendous dynamic in that relationship, and leads to new value, new power, and new risk.
