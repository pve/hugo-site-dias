---
date: '2026-05-13T00:00:00Z'
draft: false
title: 'Digital autonomy: The risks'
weight: 72
---

Many people think we are overly dependent on big tech, and we should be more autonomous and sovereign.
Fewer can say what exactly is the risk here.
Digital autonomy and sovereignty form a wicked problem: its parts are intertwined with many
other issues and conflicting interests, so there is no clean solution.
Before
reaching for solutions, it pays to be precise about the risk.

At risk is our power to decide which data flows where, a power exercised through
control over digital infrastructures such as cloud and social media.
The risk,
then, is what happens when that power sits with someone else.

I start by asking these questions.

- Where does the data actually sit?
- Where can it flow?
- Where does control change hands?
- And who promises what to whom?

Dull questions, perhaps.
But they stop emotion from driving the analysis for you.

Emotions abound when it comes to depending on big tech.
If you jump from emotion to action, without an analysis in between,
the response will be too late, too expensive, or incomplete.

## Who applies the pressure?

We want to keep big tech from constraining our autonomy — for instance by being
used as a means of pressure. But who applies that pressure? The answer is not
obvious. Is it big tech itself? Is it a government that holds the most power
over big tech?
Can a government hold power over a foreign or multinational corporation?
Or does big tech hold power over that government? It matters,
because the threat actor shapes both the motive and the direction of any
solution. A risk is a threat actor acting on an asset; naming the actor is half
the work. I treat the actors separately in
[Digital Autonomy: the Actors](/posts/digital-autonomy-the-actors/).

## The classic triad, through a sovereignty lens

The usual starting point in information security is confidentiality,
availability, and integrity. Each looks different when the concern is
sovereignty.

**Confidentiality.** The fear is that data on American servers is data the
American government can reach,
or that data on Chinese servers is data that the Chinese government can reach.
That is real, but more nuanced than it sounds.
There are law firms in Washington D.C. whose main existence is to fight government data disclosure requests on the cloud providers' behalf.
That tells you two things: the requests are real, and so is the resistance.

For government data, confidentiality is rarely the biggest risk.
Much government data is public by law,
even political and military policy
is openly available.
What is actually more sensitive, and worth hiding?
The metadata: who talked to whom, when, and from which place.
And foreign powers have many other ways to reach data; they do not
need Microsoft 365 for it.
Important, but a weak reason to
invest in alternatives.

**Availability.** A government can threaten to cut you off, sea cables can be
severed, and Microsoft itself can simply go down. None of this is hypothetical,
and no one is too big to fail. As our dependence on digital infrastructures
grows, availability becomes a business-resilience question more than a technical
one. The response is not a complete clone of every capability — that is usually too expensive. Resilience includes graceful degradation. A damaging event
is never free, but if you can limit the damage and buy time to build
alternatives, twenty percent of your capacity can carry eighty percent of your
result. That argues for an emergency provision that can scale up quickly, run by
real, daily users — because a standby that no one uses will not work when it is
finally needed. The pandemic showed how fast organizations can switch
communication systems when they have to.

**Integrity.** Beyond the technical risks, which are not automatically larger
than in any alternative, there is a subtler one.
Integrity risks are not just about factual correctness of data.
It is in the interest of a democratic society that elections reflect the true opinions and values
of the population.
Social media shapes what people
think. Its natural tendency is to sort people into bubbles and echo chambers,
which erodes mutual understanding and feeds radicalization. That makes
populations open to outside influence, especially when the platforms are owned
by people with a political agenda — the alleged Cambridge Analytica involvement in
several election campaigns is the cautionary example. Technology that can shift the
beliefs of large groups, against the interest of a sovereign state, is a risk to
integrity in the broadest sense.
Would a national platform be safer?
Possible, but it can still turn into an echo chamber.
But the kill switch is closer to home.

## What is at risk

A ministry fears its cabinet traffic leaking.
A regulator fears it can no longer enforce its own rules.
A business fears it can no longer be compliant.
Citizens want their tax records to stay private.
Communities fear being torn apart by social media megaphones.

Each fear points to an asset.
Which ones are at stake depends on who you are.

- **States:** confidentiality of internal communication; military capability;
  the capacity to regulate businesses and individuals; the ability to meet
  obligations to citizens (law, privacy rights); economic policy as a development
  tool.
- **Businesses:** license to operate and regulatory compliance; assets and
  profits; the capacity to compete, innovate, and develop.
- **Regulators:** the capacity to enforce the rules they set.
- **NGOs:** the capacity to carry out their mission.
- **Individuals:** privacy rights as data subjects.
- **Society at large:** the availability of IT services (email, file storage,
  operations); control over the supply chain (hardware, software, systems
  management, personnel); and, at the limit, democracy and prosperity
  themselves.

Underneath all of these sits digital infrastructure itself — the subject of
[the sovereignty and resilience guide](/book/risk/guide-autonomy-resilience/)
and of [how we might achieve autonomy](/posts/how-can-we-achieve-autonomy/).

## Wicked risks

Finally, some of the risks result from the very remedies that governments have.
Regulating big tech opens up a wide gray zone between protecting groups and censoring inconvenient speech.
Building a sovereign alternative can leave you with something too late, too expensive, or too small to matter.
The cure carries its own risk, which is what makes this a wicked problem.

That is the point to hold on to. The risk of depending on big tech is not one
thing: it runs across the risk triad, it differs
by actor, and even the remedies carry a downside.
None of that is an argument for
doing nothing. It is an argument for doing the analysis first — naming the actor,
the asset, and the threat — so that the response
fits the threat, rather than the loudest noise in the room.
Be precise about the risk, and you can be deliberate about the
cure. What that cure looks like is the subject of
[Digital autonomy: Controls](/book/risk/digital-autonomy-controls/).
