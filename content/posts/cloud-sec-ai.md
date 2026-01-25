---
date: '2025-09-09T06:10:21Z'
draft: false
title: 'Cloud Security and AI'
weight: 10
---

How can you use cloud security lessons to better secure AI?
This is what is keeping some of my clients busy recently.

Arguably the most important concept in cloud security is the allocation of responsibilities across the independent actors that contribute to any digital service.
Often referred to as 'shared responsibility', this is about 'who does what?'.
For example, in an IaaS service model, the provider does the physical security of servers, offers a variety of network isolation options, and so forth.
The IaaS consumer's job is to use those features to, for example, organize logical server access, so only authorized access is permitted.
In contrast, many mistakenly think it is the provider's job to secure and update the operating system.
It is not, in an IaaS model, it is the consumer's job.

Many security tasks can be delegated to trusted parties, provided you have proof or evidence of their proper execution.

As we move up the stack to PaaS and SaaS offerings, the responsibility matrix can become a bit more blurred, and more attention is required to the details.

AI services are no different, they are typically cloud services, too.
After all, AI is just somebody's data on somebody's computer.

The AI supply chain is a bit more complex than that of a simple web application.
The Cloud Security Alliance recently developed an AI version of their Cloud Controls Matrix.
It is called the AICM (for AI Control Matrix), and one of its interesting features is a list of roles.
The AICM distinguishes the AI consumer, Application Provider, Orchestrated Services Provider, Model Provider, and Cloud Service Provider.
You'll find my [discussion of those roles](book/diginfra/ai-roles/) elsewhere.

With that list of roles, as described in the AICM, we can then allocate security responsibilities to specific actors.
But first, we need a set of controls that we want actors to take responsibility for.

There is no lack of risk and control frameworks for AI.
Right now I am experimenting with the OWASP Top 10 for Large Language Model Applications.
Inside it, I identified 87 controls, which I mapped to the roles I described earlier.

While this is preliminary research, and I am validating this with clients, you can already preview it.
Navigate to my [OLRA (OWASP LLM Risk Allocation) Navigator](/olra/artifact3.html).
It lets you interactively explore the mapped controls along various dimensions,
and see how they relate to different roles.
This offers insight into AI-specific risk management.

Looking forward to your thoughts on this!
