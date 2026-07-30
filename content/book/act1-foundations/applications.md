---
date: '2025-04-16T21:11:32Z'
draft: false
title: 'Applications and Infrastructures'
weight: 80
checks: none
---
Infrastructures are nice, but the applications that they enable are where the value of information technology is.
We want to understand how this fits into this book's understanding of value, risk, and control boundaries.

Applications store and process data, so an application is roughly a data model plus a certain number of functions operating on that.
A word processor is an application. Its data model is formatted text, and the functionality allows you to manipulate that text.
Another example would be Gmail, whose data model is a set of messages, and the functionality allows you to manipulate the messages and their flow.

That is a simplistic view, but a good start from the perspective of understanding who is responsible for doing what.

Applications are what live in execution environments,
and the business value of applications is the most important
source of funding for these execution environments and all related digital infrastructures.
Without applications, your hardware, your VMs, your Kubernetes clusters, etc. are just a cost item.

But how do applications map to execution environments?

The earliest prototype computers ran one program at a time.
Switching between programs was relatively easy, at least easier than building another machine for a new task.
Computers are universal symbol processing machines, and software applies them to a specific task.

This adaptability is the root of the business value of computers.
It is often cheaper and faster to write software to customize a universal machine than it is to build a dedicated machine.
This is one of the reasons why modern cars have dozens or more micro-controllers inside.

Back to the timeline, in the beginning, only large corporations had computers, and often only one.
Those machines ran several programs, one by one at first, but simultaneously later when the machines got more powerful.

The personal computer era brought us back to one computer running one program again.

The internet boom with e-commerce and social media brought us a world where one piece of software was replicated over many machines.
In the early years of the millennium, I worked with a social media provider that had staff dedicated full-time to installing new hardware in the racks: thousands of servers.
And that was child's play compared to companies like Google, which run millions of servers.

At a meetup recently, I heard Durk Kingma, one of the OpenAI co-founders, say that his team was working on combining the power of several data centers together to train one single large language model.

To sum up, there is no longer a one-to-one correspondence between an application and a computer.
It becomes quite a bit more complicated.
If multiple applications run on a single machine, how do you isolate them from each other?
If multiple machines are needed for a single application, who controls which machines are used for that?
And who sets the rules around how that is done?
These are governance decisions that can find their way into e.g. data residency rules in enterprise policies in cloud providers.

Machines are now dynamically allocated to applications, but application boundaries also become fluid.
An application is no longer an island.
It is actually an amalgamation, a consolidation, a constellation of various services that run on various places and draw from an ecosystem that extends way beyond the enterprise that is building the application.

Applications not just serve users, they also serve other applications.
This was called the programmable web in the early days.
As you can imagine, this creates a whole new series of execution environments and control boundaries.
That is the view from outside the execution environments.
Let's look at the inside: where does the running software actually come from?

### Getting the code

Software comes into existence as programmers write it.
But that is only one way.
Software also gets reused from libraries, and some deployable software artifacts contain more library code than new code.
Using external services, as discussed earlier, also enables reuse.

Training neural networks is another way of creating software.
The trained neural net is effectively a piece of software: data goes in, processed data comes out, and it runs on hardware.

It looks like software, except nobody wrote it, and in fact understanding how that software works is really hard.
Large Language Models come into existence in this way, as well as many pieces of software in self-driving cars.

It raises the question how we control the process of getting from an idea to working code.
We'll discuss that in more detail later, when we talk about CI/CD pipelines.

That's the inside view.
Back to the outside view.
The distributed applications, services talking to services, software being deployed, all of this requires machines to talk to each other.
So that's where we go next: the basics of computer networks.
