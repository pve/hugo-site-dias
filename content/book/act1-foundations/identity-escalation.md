---
date: '2026-09-16T16:07:32Z'
draft: true
title: 'Identity Escalation (draft)'
weight: 117
note: |
  Uncommon thought to preserve while drafting:
  Identity is not a property the caller possesses; it is conferred by the
  receiving process ("to identify" = to give an identity). It gets pinned onto a
  fragile, spoofable handle (file descriptor, phone line) which then stands in
  for the person. Authentication is promise-transfer: the directory's promise
  ("this entity is legitimate") is bestowed onto the connection, so your belief
  in the other end is borrowed credit from a shared third party.
  This links identity directly to directories and to shared infrastructure:
  no shared infrastructure, no identity (the car-radio case is the null case).
  Every identity claim is therefore a dependency claim, and "identity
  escalation" = infrastructure escalation: handle -> credential -> directory
  promise -> authorization each pulls in a bigger, more external piece of
  shared infrastructure, and the foothold compounds because the dependencies
  compound. Identity and agency are separate directory lookups; trust also
  accrues with interaction length (prisoner's dilemma).
  Placed as unit 11b, act1-foundations/identity-escalation.md, weight 117 -
  directly after 11a (identity: the control point). 11a stays at the "who does
  the system believe you are" level; this unit is the mechanism layer 11a
  points away from. Also feeds the promise-theory / shared-service material.

  Flow flaws (paragraphs numbered by blank-line block, P1 = "Imagine you are a
  process...", P11 = "Only you decide...").
  Fixed in the current version: P1 analogy now matches "no history"; P4 etymology
  and "phone has become the person" are motivated; "actor" removed; the title
  word "escalation" now lands in P11.
  Still open:
  - P4: order is deliberate. Bare handle = the identity first; then caller-id /
    IP as a separate beat: additional information, sourced from elsewhere, and
    may be a lie. Not a flaw. (Possible tighten: the "phone has become the
    person" / "you know little about them" aside sits mid-beat - could move it
    ahead of the caller-id sentences so handle -> additional-info runs clean.)
  - P6: now the WiFi-networks example (each SSID an asserted identity with no
    promise behind it; churns as you move = no sequential consistency at the
    other end). Fits the frame and previews P4/P7. Still never referred to
    again - a one-line callback later would pay it off.
  - P7: logic leap. Credentials prove identity, not promise-keeping; the step
    "identifiable -> accountable -> will keep promises" is left implicit.
  - P8: "in fact," is intrusive. "common to you and the other end" overclaims -
    they send credentials, you hold the directory. "typically called a
    directory" re-names it as if new (already named in P7).
  - P9: prisoner's-dilemma paragraph is orphaned - no forward hook to P10, weak
    backward tie (PD is about betrayal temptation, not the verification just
    done).
  - P10: "At the same time" contrasts with the wrong neighbour; the contrast is
    with authentication, not with P9's growing trust. "But identity alone gives
    you little basis for agency..." points the right way.
  - P11: "escalating" is the first appearance of the escalation frame; nothing
    in P7-P10 flagged the steps (handle -> credential -> directory ->
    authorization) as an escalation, so the payoff has nothing to click into.
    Seed the word earlier. Sentence also garbled: "enough dependable promise for
    you" -> "dependable enough for you".
  - Minor, not flow: "give frequency" -> "given" (P6); "this give you" ->
    "gives" (P10).

  Fact-check pass (body only, P1-P11):
  - P8 prisoner's dilemma: "trust grows with the length of a successful
    interaction" describes the ITERATED PD (Axelrod, tit-for-tat, "shadow of
    the future"), not one-shot PD (where mutual defection is the dominant
    outcome). Say "iterated/repeated" explicitly; keep consistent with
    act2-value/prisoners-dilemma.md and game-theory.md.
  - P4 "Identify literally means: to give an identity" overclaims - "identify"
    means to establish/recognize identity, not confer it. The conferring claim
    is the unit's own thesis, not an etymological fact - drop "literally" or
    rephrase.
  - P7 "credentials can be looked up by you in some directory" - technically
    credentials are verified (against a hash, or cryptographically), not
    looked up. Loose but acceptable for the register.
  - P4 caller-id/IP "may be a lie": true (spoofing exists for both) but
    uneven - caller-ID spoofing is trivial, source-IP spoofing on an
    established TCP connection is hard (return routing needed). Minor nuance,
    not a correction.
  - P1 movie reference: was "CYBER" (invented / conflated with Michael Mann's
    Blackhat working title, which is a cyberthriller, not sci-fi). Better,
    on-theme, real reference: "Cypher" (2002, Vincenzo Natali) - genuine
    sci-fi, literally about a man's identity being erased and overwritten by
    his employer. Swap "CYBER" -> "Cypher" in P1.
  - Term collision (flagged already, still true): "identity escalation" isn't
    an established term like "privilege escalation" - the unit later argues
    that's the point (see hero-story section below), so keep, don't hedge it
    away.

  Placement re-think (2026-09-09/16): this unit now absorbs most of 11a's
  planned content (identity is asserted/spoofable, authn vs authz, directory
  as shared infrastructure, promise-theory setup) - see the "fills in 11a"
  discussion. 11a's still-unique material: the at-scale control-point thesis
  ("the one thing you can really mess up"), the guard/secretary/bank-manager
  analogies, machine/AI-agent identity as the bridge to Act III, federation
  (eduroam/81a), and the Act IV power-foreshadow. Two options, undecided:
  (1) keep both - trim 11a to a short thesis+bridges unit, this unit stays the
  mechanism, consider ordering this unit BEFORE 11a (concrete -> "so this is
  the control point"); (2) merge - fold 11a's unique bits in as this unit's
  opening/closing and retire 11a. Lean towards (2) to avoid two thin units
  back to back, but not decided.

  Narrative reframe (2026-09-16, in response to "not disruptive enough"):
  the mechanism-only version above is an observation, not a disruption. New
  core thesis to build the unit around: you have no identity - to every
  digital system you are a distributed rumor, a stack of promises other
  parties make about you (employer, carrier, passport office, CA, login
  provider). The system never meets you, only your guarantors. This inverts
  promise theory's own rule (you can only promise about yourself) - identity
  is built entirely from promises OTHERS make about you. Second inversion:
  "privilege escalation" is normally framed as intrusion; reframe escalation
  (pulling one more promise from one more directory until you have enough
  borrowed cover to act) as the NORMAL mechanism of getting anything done -
  attacker and employee run the identical loop; the only real question is
  whose escalation the infrastructure underwrites. Fuse both inversions:
  identity-as-borrowed-vouching + escalation-as-normal-operation.
  Ties across the whole book: promise theory (the broken self-promise rule);
  Dunbar/software-dissemination (Act IV) - you can personally vouch for ~150
  people, everything past that is infrastructure prosthesis for trust that
  doesn't scale; OHDA loop (control-feedback) - authentication is a micro-OHDA
  (observe handle, hypothesize identity, decide if cover is enough, act);
  Delegation Domino (unit 53) - the org-to-org borg-chain is the same
  mechanism one level up; prisoner's dilemma (Act II) - iterated trust only
  works if identity stays stable between rounds, i.e. depends on this unit's
  premise; autonomy payoff (intro, Act V) - "how short can you make your
  borrow-chain, how many guarantors do you control" is the first, smallest
  instance of "how autonomous can you afford to be".
  5 alternative entry-angles considered (kept for later, not chosen):
  A. "distributed rumor" (above, breaks the sense of self - strongest).
  B. "identity is the system's bookkeeping, not yours" (you're a primary key;
  breaks the human-centered framing; hero learns to read the ledger).
  C. "every login was always already delegation" (identity is delegation's
  first, invisible link; de-mythologizes Act III's AI delegation as more of
  the same).
  D. "escalation is the water you swim in" (security's inside/outside moral
  geography is fiction; hero stops guarding a wall, starts governing a
  judgment - sets up Act IV/V).
  E. "no one has solid ground, reader included" (the Cypher-office condition
  is universal - you, the server, the company, the AI agent, the regulator -
  refuses the reader a privileged observer position).
  Recommendation: fuse A + D as the unit's spine.

  Hero-story fix for Neil/Maria (2026-09-16): the process/machine was the
  hero, not the reader. Put Neil and Maria in the office instead - give each
  a false mastery the unit undermines, make the disruption personal, end by
  handing each a sharper tool they carry into later acts.
  Maria (bottom-up, from the diagram): false mastery = she's drawn this
  deployment diagram four times, knows every arrow. The phone that rings is
  HER own login this morning - her machine, blind to her. Ordeal: her old
  tool (labeling arrows) reveals every arrow runs under a borrowed identity
  she never questioned - the diagram is a promise-graph, not a system map.
  Abyss: a concrete withdrawal (cert expires / service account rotated /
  federation partner drops) blacks out half the diagram - she never owned the
  thing everything depended on. Return: she redraws it as a promise-graph and
  can now spot the load-bearing borrow before it breaks - same building, now
  with X-ray vision. Ties to the recurring reference-diagram thread in TODO
  (re-annotate the AI voice bot diagram each act).
  Neil (top-down, from the decision): false mastery = six years of signing
  off the quarterly access review, IAM as compliance checkbox. Disruption: if
  escalation is a standing judgment about whose escalation gets underwritten,
  Neil IS that standing judge - every shared-responsibility split leaves
  exactly this judgment on his desk. Ordeal: a live decision scene (accept a
  federation? trust a partner directory? approve an AI agent acting on staff
  identities?) where "is it compliant" gives no grip - he has to invent the
  real question in the room: whose borg do we accept, what happens when a
  borg fails. Return: he stops guarding a perimeter and starts governing a
  judgment - a question he re-faces in Act IV and Act V.
  Braid: Maria works upward from the diagram, Neil downward from the
  decision; they meet in the middle at the same realization from opposite
  directions - mirrors the book's own foundations/power structure.
  Closing-line redirect: "Only you decide when this escalating set of
  promises is enough dependable promise for you" currently addresses the
  machine. Redirect it to Maria and Neil explicitly - the machine only
  executes the policy they wrote; the judgment was always human and upstream,
  and most people never claim it. The hero-task is realizing they'd been
  abdicating a decision that was theirs, and taking it back.
---

Imagine you are a process, with very little memory or history.
A network connection is coming in.
If you like an analogy, imagine you are in a science fiction movie like "Cypher" where you get dropped in an office you don't know with no history, and a telephone that rings.
You pick it up.

What is coming in?

You know that there is something at the other end of that connection, be it a human or a machine, and it is trying to communicate with you.
That is all you know at this point.

The only hook you have to identify the other end is the connection handle you have.
Identify literally means: to give an identity, and now the connection handle is that identity.
In real life this is the actual telephone device, in an operating system process it is probably a file descriptor.
It is almost as if the phone has become the person at the other end.
Right now, you know little about them.
Associated with that may be a caller ID on the phone, or a remote IP address for a network connection.
But both are additional information coming from somewhere else, and they may be a lie.

You tend to assume that there is some consistency in the other end.
There will be some behavior that you can rely on.
In other words, there is a promise lurking in there on future behavior.

This is not a universal promise, for example if you drive around a city looking at the Wi-Fi networks that your phone sees, there will be little consistency in that, and nothing to depend on.

Now let's imagine you are a login process (I know, this is a blatant anthropomorphization).
In order for you to be able to make some promises to the entity on the other end, you need some proof that the other end will keep up their promises.
That proof typically comes in the form of the other end sending you 'credentials', be they passwords, one-time tokens, or whatever.
These credentials can be looked up by you in some directory,
and to you the credentials act like a promise on the identity picture that you are building of the other end.
The directory makes the promise that the entity's promise is legitimate, and can be trusted.
You could say that a promise is now extended, transferred, or bestowed on the entity at the other end.

At this point you have more reason to believe that the other end has a consistent identity, and will keep up promises that come with that.
That belief is derived from something that is common to you and the other end: a directory.
That is a great example of a shared service (or infrastructure).

You and the other end now look like two players in an iterated prisoner's dilemma game (which we'll discuss later): they trust each other as long as they don't betray each other, and trust grows with the length of a successful interaction.

At the same time, this give you very little basis to give the other end some "agency", some power to create effects.
For that you might look at other directories, directories that hold authorization information.
That is another source of promises on the behavior of the other end.

Only you decide when this escalating set of promises is enough dependable promise for you.
