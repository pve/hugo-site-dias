---
date: '2026-06-14T00:00:00Z'
draft: true
title: 'Digital autonomy: Controls'
weight: 75
---

Suppose you are a government, a regulator, or a concerned cloud consumer.
What can you actually do to mitigate sovereignty risks and achieve adequate autonomy?

The honest starting point is that full digital autonomy, autarky, is not achievable, and not worth pursuing.
Read [here for more on that](/posts/digital-autonomy-autarky/).
No well-developed country is fully independent of others.
The goal is not independence, but resilience: reducing the negative effects of dependence, and preserving options.

With that framing, let's have a look at some of the options for controlling autonomy risks.
Choosing between these controls is not easy.
You (and any other actor) probably only influence some of them, and as with all controls, your budget forces you to choose which ones to do well.
These controls describe where you want to be, not how to get there.
I write about that in this book's chapters on change.

## Regulation

Regulation is the most direct lever available to governments and regulators.
Its relevance is demonstrated by the ferocity with which big tech and certain governments resist it.

Relevant regulatory instruments include:

- **Data residency.** A popular tool for governments is to demand that data is stored on servers
that are geographically located in the country's jurisdiction.
It aims to reduce confidentiality, integrity and availability risks that originate from other governments.
However, the protection that residency offers is largely a legal fiction.
It neither guarantees sovereignty nor is required for it.
Noteworthy is the example of GDPR, the European privacy regulation.
It does not require residency per se, but allows data to be stored under other jurisdictions, **if they provide an equivalent level of protection**.
The latter is often 'lost in translation' when people implement GDPR.
The legal discussion then shifts to the interpretation of the word 'equivalent'.
For example, if the overt law claims to guarantee that protection, but covert regulation about 'national interests' contradicts that, is the protection still adequate?
A foreign-headquartered company operating local infrastructure can still be subject to foreign government orders, whether you call it an autonomous 'govcloud' or not.
And this all assumes that governments will abide by the laws they make for themselves, to which there are many documented exceptions.
- **Interoperability and portability requirements.** Vendor lock-in increases the 'switching cost'. 
Interoperability and portability requirements make it easier to move workloads and data to other vendors or even in-house services.
An important tool for that is open standards.

## Open standards and open source

Open standards, formal or de facto, invite competing implementations of the same service, commercial or open source.
They reduce the chance of a market becoming a monopoly.

Monopolies concentrate power with suppliers at the expense of consumers.
A cloud consumer that can move its data and workloads has a credible exit option, which changes the power dynamic with the supplier.

Where open standards aim to deliver data portability and interoperability, open source aims to deliver
workload portability.
If the software you run is open source (for example WordPress content management software), you choose where it runs.
You can still choose to outsource the hosting to multiple providers, or host it yourself.
The reality is, as is often the case, a bit more complicated, as there are many actors whose agendas are in conflict with the consumers' control requirements.

## Consortia of smaller providers

A large governmental buyer risks creating its own dependencies.
It can create a service provider with scale and power that can be very attractive to international businesses.
When such service providers are acquired by a foreign-held company, much control is effectively lost.
International capital markets tend to favor such consolidation.

So, what is the alternative?

The internet itself is the model here: an ecosystem of many providers, interoperating through shared open standards, with no single point of control.
Applying this model to cloud services for government requires organizing the market by specifying common standards, so that buyers can each choose their own provider.
This is not an easy task, but if it works,
buyers benefit because they have more options, and suppliers benefit because they can address a larger market with less custom work.

The Common Ground initiative and its Haven hosting standard (by the Association of Netherlands Municipalities, VNG) are examples of this approach. 
The model is designed so that municipalities share development rather than each build their own, and independent Dutch providers such as Previder and Shock Media have built Haven-compliant offerings that municipalities are starting to run on. Progress has been slower and more contested than promised — VNG itself frames the payoff as sustainable public spending rather than guaranteed savings — but it is evidence that open standards can open the market to smaller players rather than entrench incumbents.

## Self-hosting

While self-hosting of software seems to deliver maximum autonomy, it can be expensive.
It requires expertise, capital, and a competent service organization, none of which come for free.

Without market pressure, these services are not likely to be competitive in a commodity market.
But they don't have to, as self-hosting serves other needs.

For example, to control the availability risk of a large email system, you must be able to  fall back quickly to an alternative for critical operations, even at reduced capacity.
As another example: what do you do if a government suddenly revokes your access to the AI model your work depends on?
Self-hosting an open-weights model is one answer — it reduces that availability risk, provided you have enough capacity.
But it doesn't protect you against falling behind on up-to-date trained models; mitigating that takes local expertise.

## Building expertise

Any alternative to big tech requires people who can build and operate it.
Expertise cannot be imported on demand; it has to be developed over time through actual operations.

The practical approach is to start small and scale deliberately.
A production pilot of a few hundred active users is a realistic first milestone.
It tests the technology, builds operational knowledge, and creates a template that can be replicated.
This is slower than buying a ready-made solution, but it produces something that cannot be switched off by a foreign government or an unwilling provider.

An operational system that is well run is a solid blueprint for scaling up by a factor of 10, in my experience.
Starting it from scratch is significantly harder, it takes time to develop opoerational expertise.
More on change and building expertise in the chapter on change.

Open source as a viable control for availability also requires having the capacity and competence in interacting with those communities.
The best way to do that is to participate and contribute back.

## Industrial policy

On a larger scale, countries want to be able to have certain expertise and capabilities available within their borders, under their control.
Without that, economic development is at risk, and autonomy in general.

China offers the clearest live experiment in pursuing digital autonomy the hard way: by building the bottom of the tech stack itself.
Cut off from Nvidia's top GPUs by US export controls, Beijing has not only backed Huawei's Ascend line as a domestic substitute — it has manufactured the demand for it.
In late 2025 the government ordered state-funded data centers to drop foreign AI chips and buy only domestically certified ones, with early-stage projects told to rip out hardware already installed. That turned a struggling alternative into a guaranteed market almost immediately: Huawei expects to roughly double output of its flagship Ascend 910C toward 600,000 units in 2026 and lift total AI-chip revenue past USD 12 billion.

But the same example shows what autarky costs. 
Huawei's best chips still deliver a fraction of the compute power of Nvidia's current generation, so the price of independence is paid in performance, and the captive home market that makes the strategy viable is also what insulates it from competitive pressure. It is autonomy bought with a state mandate and a quality gap — a reminder that "build it yourself" is not a free control.
The lesson for a government buyer is not to copy the chip factory, but to copy the move underneath it: organizing demand deliberately to keep a credible domestic alternative alive.

## The repeated prisoner's dilemma

Game theory offers a useful frame for what all of this adds up to.

The relationship between a dependent buyer and a powerful supplier looks like a prisoner's dilemma: each side is tempted to act in its own narrow interest, and both can end up worse off for it.
What keeps such a relationship cooperative is not goodwill, it's that the game repeats, and each side can hit back if the other defects.

That is the point of all the controls above.
A government or company with working alternatives, real expertise, and regulatory tools can credibly walk away, and so is not easily coerced. 
The threat never has to be used to be effective; it just has to be credible. 
This is also what open standards and open source bring: a way to retaliate against hostile suppliers or other actors in the supply chain.

Which is why the capability has to exist before a crisis, not be improvised during one. A deterrent that isn't already in place deters no one.
