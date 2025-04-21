---
date: '2025-04-20T09:03:00Z'
draft: true
title: 'Execution Environments'
weight: "30"
---

A laptop is an execution environment. A smartphone is an execution environment.
A smart thermostat is an execution environment. So is the browser, a database, and a datacenter.

What do they have in common? 

They contain software and data, and that makes them building blocks for deploying digital infrastructures.

Why does it matter to introduce such an abstract and complicated word?

 the more we know about those building blocks, the more efficient we can think about all the various manifestations of execution environments.

For example, execution environments, or more accuratley: their boundaries, are a prime place where controls for security are. 

Software and data live inside an execution environment, which we'll call box for short. Inside the box, software gets executed, instructions get interpreted, actions are done. Software without execution is just dead data.

Whenever I look at a how a digital infrastructure is implemented, I start by looking at the execution environments, and ask three questions: what, where, and how.

__What?__ What is the data that is inside it, what is the software, the code, that is inside that environment? And in an AI world: which model is there inside?

__Where?__  Where is that execution environment located? In our current virtualized and cloud world, that environment in typically inside another environment. Ultimately, of course, there is a physical machine in which it sits. 

__How?__ How does the software get deployed inside that environment? There will be a manual process, or a continuous delivery pipeline, or something similar. 

Then it is time to look at the control boundary that this environment creates. The control boundary creates an outside, and an inside. How is data from the outside allowed to go inside? What is the mechanism? How is that controlled? The same holds for the reverse. How is software inside that boundary allowed to access the outside?

Let's take an example: your browswer is talking to a webserver, which could be a computer that runs Linux and an Nginx instance. This system typically allows full access through a networks

And if you want more examples of execution environments, consider containers, functions as a service such as AWS Lambda, AWS S3 storage buckets, SaaS/PaaS providers, Antivirus agents, firewalls.

Link to Zero Trust Architecture.