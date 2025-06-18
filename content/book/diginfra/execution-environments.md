---
date: '2025-04-20T09:03:00Z'
draft: false
title: 'Execution Environments'
weight: 30
---

What do a laptop, a smartphone, and a smart thermostat have in common with a browser, a database, and a data center?

They are all execution environments that contain software and data, and that makes them building blocks for deploying digital infrastructures.
In a diagram we often depict them as a box, or an oval.
Inside the box, software gets executed, instructions get interpreted, actions are done. Software without execution is just dead data.

Why does it matter? Well, the more we know about those building blocks, the more efficient we can think about all the various manifestations of execution environments.
For example, these things, or more accurately: their boundaries, are prime locations for implementing security controls.

Whenever I look at how a digital infrastructure is implemented, I start by looking at the execution environments, and ask four questions: what, where, how, and who.

__What?__ What is the data that is inside it, what is the software, the code, that is inside that environment? And in an AI world: which model is there inside?

__Where?__  Where is that execution environment located? In our current virtualized and cloud world, that environment is typically inside another environment. Ultimately, of course, there is a physical machine in which it sits.

__How?__ How does the software get deployed inside that environment? There will be a manual process, or a continuous delivery pipeline, or something similar.

__Who?__ Who is responsible for managing the environment and its access controls. In a cloud world, this is an important question. What does the provider do, what does the consumer do?

Then it is time to look at the control boundary that this environment creates. The control boundary creates an outside and an inside. How is data from the outside allowed to go inside? What is the mechanism or protocol? How is that controlled? The same holds for the reverse. How is software inside that boundary allowed to access the outside?

Let's take an example: your browser is talking to a webserver, which could be a computer that runs Linux and an Nginx instance. The Linux machine implements an access control on the network level: it only allows traffic on the https port to go to the Nginx webserver process. The Nginx webserver then guards its data, and only allows read only access.

If you want more examples of execution environments, consider containers, functions as a service such as AWS Lambda, AWS S3 storage buckets, SaaS/PaaS providers, Antivirus agents, firewalls.
Each of these has processing inside, and each of these hold data.
But the type of software, data, and configuration they have differs, as does the mechanisms they offer for access control.

Deeper in the networking space you can see that a router is also an execution environment, though it does not have a lot of data, mainly the routing tables.

We will return to discussing how useful this is elsewhere.
