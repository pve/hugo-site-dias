---
date: '2026-04-27T00:00:00Z'
draft: true
title: 'A badge on the wall'
weight: 10
---

## A badge on the wall: repurposing hacker camp hardware as a home energy display

Being energy conscious, I wanted a display in my living room that indicates the house's current power situation.

On a sunny day, it makes sense to turn on the dishwasher and other energy intensive appliances in the daytime, when our solar panels produce an energy surplus, for which we get very little money back.

Of course, this data is available in my Home Assistant (HA) setup, but that takes a few clicks on a phone or laptop.
I wanted something equivalent to a good old fashioned barometer, quietly hanging on the wall.
A look in passing by should be enough to be informed.

But I could not find any straightforward solutions to connect a display directly to HA.
If there was one, I would have bought it.

A bunch of ideas rotated in and out of my head, until I remembered that I had a couple of badges from hacker camps lying around.

https://badge.team/docs/badges/mch2022/

https://wiki.mch2022.org/Badge

It has most of the features I wanted (display, buttons, WiFi).
In the future I might want the device to ultra energy efficient (as in: runs on batteries for months), but for a prototype it looked very appropriate.

What unlocked the solution in my mind was the realization that we are just sending messages asynchronously to the display device.
You can try to build your own software for that, but MQTT is designed for this, and support for it is standard in HA.
In addition, I already had an MQTT server operational for a different purpose.

The project then neatly decomposes into two parts:
- getting the data published by HA to an MQTT topic, and
- picking up that data by an MQTT client running in the badge.

The badge has no operating system to speak off, but it does have a micropython interpreter.
With that, there is also a `umqtt.simple` module, exactly what we need.

https://docs.micropython.org/en/latest/index.html

Interestingly enough, Claude has knowledge about this from its training data.
In addition, it reviewed the API docs that I gave it, which are a bit more specific on the display and WiFi peculiarities.

With Claude and Claude Code, building the software was a breeze.
There where some library updates on the badge software here and there since 2022, which distracted for a while, but nothing really serious.

I had Claude Code deploy the software to the badge.
I did not get around to figuring out how to also test the software through Claude Code, which forced me to be the man in the middle.
It took 10-15 iterations to have the software run satisfactorily on the badge.

Other than the messaging logic, I had Claude Code also propose a few GUI mockups.
I only had to make a few comments, and Claude Code produced the code.

The current state of the project is that I am trying to mimic the MCH2022 theme on the device.

(picture)