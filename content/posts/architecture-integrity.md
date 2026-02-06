---
date: '2026-02-06T07:31:06Z'
draft: false
title: 'Architectural Integrity, Angkor Wat, and open source'
weight: 10
---

Angkor Wat (Cambodia) is the world's largest religious building and site.
Built in the 12th century, it is still a stunning building, featuring high symmetry and perfect north-south alignment.

As I was visiting this and other temples, I got to think about architectural integrity.
For example, Angkor Wat has 4 major towers around a central tower.
I call that an architectural feature.

Symmetry like this does not happen automatically.
It takes an architect and good execution, in other words carefully controlled power, to realize this.
As a visitor, you notice, maybe only subconsciously, that great power was required to construct such a building.
The building is a symbol of power.

Suppose you wanted to dedicate each of the towers to a specific deity.
Without guidelines, teams of builders will produce a loose collection of unrelated buildings.
Instead you should give the builders strict guidelines combined with a certain freedom.
That will lead to architectural integrity, and the corresponding impact that it has on visitors.

Now what does this have to do with open source software?

As I write this, one of my side projects is figuring out how [nanobot](https://github.com/HKUDS/nanobot) works.
Nanobot is a small knock-off of OpenClaw, the agentic chatbot that is making waves.
These aim to do a lot of your work, automatically, all the time.
Because nanobot is so small, it is easy to review its workings.
In my case I focus on its security.

Nanobot has an active group of contributors.
In less than a week it racked up 9000 stars on GitHub and a couple of hundred contributions in the form of discussion entries and pull requests.

Here is where my architecture example comes in.
Many of the pull requests are for the addition of more language models to support.
Most of the time they also bring in more software libraries.
This leads to a lot of software replication, and inconsistent ways of doing more or less the same thing.

Isn't one of the jobs of a software architect to create some architectural integrity?
Similar things should be done using a common pattern, not built from scratch.

The reason for that isn't to impress visitors, the reason is to make it easier to understand and maintain the software.
Because the more complicated the code, the harder it is to change.
As a reader of the software code, you will notice the difference.
You will be able to see what power the software architect was capable of exerting over the process.

I wish the creators of nanobot lots of wisdom in maintaining architectural integrity.

(BTW, did I just compare language models to deities?)