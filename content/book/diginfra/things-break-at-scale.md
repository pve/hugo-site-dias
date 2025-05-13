---
date: '2025-04-16T21:16:12Z'
draft: false
title: 'Things Break at Scale'
weight: 10
---

Computers are terribly reliable, in general. Today's computer systems execute millions, even trillions, of instructions each second, with an error rate that is inconceivable in other technologies. Yet, if you have hundreds of thousands of machines, you do need to take care of failures.

In the early days of Google growth I read an [article about their error numbers](https://www.cnet.com/culture/google-spotlights-data-center-inner-workings/)
(a Google cluster has several thousands of machines):

> In each cluster's first year, it's typical that 1,000 individual machine failures will occur; thousands of hard drive failures will occur; one power distribution unit will fail, bringing down 500 to 1,000 machines for about 6 hours; 20 racks will fail, each time causing 40 to 80 machines to vanish from the network; 5 racks will "go wonky," with half their network packets missing in action; and the cluster will have to be rewired once, affecting 5 percent of the machines at any given moment over a 2-day span, Dean said. And there's about a 50 percent chance that the cluster will overheat, taking down most of the servers in less than 5 minutes and taking 1 to 2 days to recover.

A [2024 report](https://www.storagereview.com/news/backblaze-2024-drive-stats-hard-drive-failures-drop-as-high-capacity-models-take-over) puts storage drive failure rates at about 1.35% per year.
With thousands of drives, failure is not an option, but a certainty.

These look like interesting considerations for both hardware and software planners.

Adrian Cockcroft, while he was CTO of Netflix around 2010, summed it up as:

>Size breaks hardware

No matter how good your hardware is, if it becomes big enough, it breaks. In his view you therefore need to solve reliability problems in software, not in building better hardware.

As Google say:

> "Our view is it's better to have twice as much hardware that's not as reliable than half as much that's more reliable," Dean said. "You have to provide reliability on a software level. If you're running 10,000 machines, something is going to die every day."

The business case for this is that you will have to invest in software for reliability.
Once you have done that, the hardware reliability no longer matter, within certain bounds, and you are financially better off with cheaper hardware.

The next thread of thought then becomes on which software level you can best provide that reliability. At Google a core technology for that was Map/Reduce, which is a 'middleware' software layer on which resilient applications can be build.
We'll cover that in another unit.

Finally, scale does not only break hardware, but also organizations.
For example, a task that takes half a day every week can be done by a single person. When the volume increases tenfold, this becomes a fulltime job.
When the volume increases a hundredfold, you need a small department to do it, and with that comes a whole range of coordination and management tasks.
That introduces a lot of communication overhead.
Without being compensated with economies of scale, this can make the task too expensive to do.
