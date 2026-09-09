---
date: '2026-09-08T00:00:00Z'
draft: true
title: 'Identity Escalation'
weight: 10
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
  Fits next to (after) unit 11a (identity: the control point) and the promise-theory /
  shared-service material.

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
---

Imagine you are a process, with very little memory or history.
A network connection is coming in.
If you like an analogy, imagine you are in a science fiction movie like "CYBER" where you get dropped in an office you don't know with no history, and a telephone that rings.
You pick it up.

What is coming in?

You know that there is something at the other end of that connection, be it a human or a machine, and it is trying to communicate with you.
That is all you know at this point.

The only hook you have to identify the other end is the connection handle you have.
Identify literally means: to give an identity, and now the connection handle is that identity.
In real life this is the actual telephone device, in an operating system process it is probably a file descriptor.
It is almost as if the phone has become the person at the other end.
Right now, you know little about them.
Associated with that may be a caller id on the phone, or a remote IP address for a network connection.
But both are additional information coming from somewhere else, and they may be a lie.

You tend to assume that there is some consistency in the other end.
There will be some behavior that you can rely on.
In other words, there is a promise lurking in there on future behavior.

This is not a universal promise, for example if you drive around a city looking at the WiFi networks that your phone sees, there will be little consistency in that, and nothing to depend on.

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

You and the other end now look like two players in a prisoner's dilemma game: they trust each other as long as they don't betray each other, and trust grows with the length of a successful interaction.

At the same time, this give you very little basis to give the other end some "agency", some power to create effects.
For that you might look at other directories, directories that hold authorization information.
That is another source of promises on the behavior of the other end.

Only you decide when this escalating set of promises is enough dependable promise for you.
