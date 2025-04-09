---
date: '2025-04-04T14:20:26Z'
draft: false
title: 'Network Management Automation - the DHCP case'
weight: 40
---
As we mature processes, they come within reach of actual automation. Especially IT management processes. To paraphrase General Carl von Clausewitz, who said "War is the continuation of diplomacy with different means", we can say that automation is the progression of process maturity with different means - replacing human effort with software and systems.

My favorite historical example is IP address allocation. In the past, whenever there was a new computer, you would walk up to the head of the lab or data center and ask for a new IP address for that machine. You may remember that.

You'd go to the person in charge for an IP address, they'd pull out their notebook, sharpen their pencil, and note it down. Simple, manual, and not built for scale.

In 1994 I went to a Unix systems administration conference and they had Mike O'Dell over from the USA.
He had a [presentation about the internet](https://archief-website.nluug.nl/activiteiten/events/vj94/abstracts/Mike.ODell.html) where he talked about many layers of technology to just push IP packets around. I was impressed by the number of layers back then, but I think what he was trying to say was how wasteful it really was, and that many of these things had to be reengineered to allow the internet to grow.

As a side note, it grew by a factor of 500-1000 in number of users in the thirty years since. At the time of the conference there were about a 1000 websites worldwide, and this conference is the first one listed on the NLUUG website.

We talked with him in the bar afterwards, where he said: "You know, next year Microsoft's going to come out with a new version of Windows (editor note: Windows 95) and that will have an internet protocol stack built in to the operating system. They're planning to sell 150,000 of those every month". That sounded like a staggering amount.
Can you imagine how many IP addresses that will be right? How are we going to manage these? We need more pencils!

Then he mentioned that Microsoft collaborated with the IETF to define an automated system for IP address allocation. That standard we now know as DHCP, and it is also in every PC and practically every network. It very likely has reduced many errors that happened in the traditional process, such as duplicate IP addresses being handed out.

What we see here is that a process (address allocation) matured enough for it to be automated. Consequently, it can scale up, and it can be of higher quality.

Another perspective on this is that this activity largely fades into the background of the system administration domain, and becomes part of the technical digital infrastructure. This is a very common pattern in IT, systems administration, and in digital infrastructures in particular.

Compare how assemblers and compilers were heralded in the early days of writing software as making programmers redundant. Well, automation did not make them redundant, it just made them write software on a much higher level of abstraction, leading to more productivity and more quality. The same thing happens in systems administration: as parts get automated, admins operate at a higher level.

In the late eighties, a university colleague of mine, now a retired professor, was doing his PhD on network management architectures—a concept that was quite elusive at the time. What did network management entail? How would it be standardized? Back then, the idea of computer networks was still new, and automating their management seemed unnecessary because there were so few computers. However, once networks started to scale, network management became much more critical.

His research focused on SNMP and similar technologies. Just as DHCP automated address allocation, SNMP helped manage network measurements and settings. Ultimately though, he concluded that network management encompasses everything not yet automated into a protocol. Again, this represents a maturity story: human management handles what we cannot automate (yet).

That is the cycle of digital development: from manual effort to mature processes to automation—and then on to the next layer of complexity.
