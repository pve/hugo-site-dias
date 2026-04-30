---
date: '2026-04-27T00:00:00Z'
draft: false
title: 'A badge on the wall'
weight: 10
---

## A badge on the wall: repurposing hacker camp hardware as a home energy display

I wanted a wall display for my house's energy. Not an app, but something glanceable, always on, no clicks required. 
Apparently that's harder to buy than it sounds.

On a sunny day, it makes sense to turn on the dishwasher and other energy-intensive appliances, because the energy surplus from our solar panels earn us almost nothing.

This data is available in my Home Assistant (HA) setup, but that takes a few clicks on a phone or laptop.
I wanted something equivalent to a good old-fashioned barometer, quietly hanging on the wall.
A glance in passing should be enough to tell me what I need.

But I could not find any straightforward solutions for connecting a display directly to HA.
If there was one, I would have bought it.

I cycled through several ideas, until I remembered that I had a couple of badges from hacker camps
lying around.
Hacker camps are like festivals for people who like to tinker and think out of the box.

For MCH2022, I bought my nephew with me, who had recently started out as a chips designer.
I remember him joking to me: "finally, we are amongst normal people!"

Part of the tradition of these camps is that they come with a custom built badge.
In the old days this would just be a digital name tag, but they evolved to be esoteric bleeding edge developer IoT boards.
The badges that I collected over the years survived several rounds of decluttering my house, I suspect because they are cute collectors' items with fond memories attached.

The [MCH](https://badge.team/docs/badges/mch2022/) [badge](https://wiki.mch2022.org/Badge) has most of the features (display, buttons, WiFi) I wanted.
In the future I might want the device to be ultra energy efficient (as in: runs on batteries for months), but for a prototype the badge looked very appropriate.

What unlocked the solution in my mind was the realization that we are just sending messages asynchronously to the display device.
The display device is a subscriber to those messages.
You can try to build your own software for that, but MQTT (the standard protocol for IoT messaging) is designed for this, and support for it is standard in HA.
In addition, I already had an MQTT server operational for a different purpose.

The project then neatly decomposes into two parts:

- getting the data published by HA to an MQTT topic, and
- picking up that data by an MQTT client running in the badge.

The badge has no general purpose operating system, but it does have a [MicroPython](https://docs.micropython.org/en/latest/index.html) interpreter.
Matching that, there is also a `umqtt.simple` module, exactly what we need.

Interestingly enough, Claude has knowledge about MicroPython from its training data.
In addition, it reviewed the badge API docs that I gave it, which are a bit more specific on the display and WiFi peculiarities.

With Claude and Claude Code, building the software was a breeze.
Deploying had some hiccups, though.
There were some library updates on the scripts that deploy software to the badge since 2022, which distracted for a while, but nothing really serious.

I had Claude Code use those scripts to deploy the software to the badge.
I did not get around to figuring out how to also test the software through Claude Code, which forced me to act as a manual relay.
Once we overcame the hurdle of deploying the software to the badge, the 0.1 version worked out of the gate.
This was the version that just received MQTT messages.

The next thing I wanted was a graceful exit on pressing a key.
This failed in the first attempt because the badge API docs were a bit ambiguous, related to a recent change.

Other than the messaging logic, I had Claude Code also propose a few GUI mockups, wireframe style.
I only had to make a few comments, and Claude Code (Sonnet 4.6) produced the [code](https://github.com/pve/mch2022-badge-mqtt).

With the basic logic operational, I turned to the HA side of the project.
Claude Code had no trouble coming up with alternative approaches for configuring HA.

What it could not do was look in my HA setup.
An HA MCP server is available, but for looking up the three required entity names (solar, energy consumed, energy produced), installing it felt overly complicated.

Instead, Claude Code gave me the full YAML spec for an automation,
which is triggered by any change in the state of any of the three entities.

If I had not messed up matching the entity names across HA and the badge software,
it would have worked on the first attempt.
Instead the badge confidently showed three zeroes for all values.
I should have installed the MCP server instead of being a sloppy relay, manually copying names between two development environments.

Functionally the energy monitor objective was fulfilled. It worked, which took just a few hours.
Buying an appliance to do it would have been more expensive,
would still require configuration, and would not have been as fun and instructive as this project.

Then I turned to the color and font design.
I handed Claude Code a picture of the badge and a link to the style guide, and it came up with some suggestions.
I selected a simple one, and it got it right in one go.
The result is in the picture.

![MCH2022 badge on the wall](/images/mch-badge.jpeg)

As you can see, it is now hanging on the wall like a barometer, readable as you pass by.
The current battery life is about 12 hours, so we'll need a power cable for continuous service.

The architectural lessons are: standardized messaging protocols turn these devices into composable infrastructure.
The interface naming mistake is a classic one.
Also classic is that the lack of an API description has blocked adding the battery status indicator.

The AI-assisted coding lessons are: it works amazingly well, at least for these types of projects, and given the right requirements and documentation.
Improvements can be made in connecting the coding agents more directly to the deployment environment, in this case the badge and HA.
