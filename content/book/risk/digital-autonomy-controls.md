---
date: '2026-06-14T00:00:00Z'
draft: true
title: 'Digital autonomy: Controls'
weight: 75
---

What can cloud consumers, regulators, and governments actually do to mitigate sovereignty risks and achieve adequate autonomy?

The honest starting point is that full digital autonomy, autarky, is not achievable, and not worth pursuing.
Read [here for more on that](/posts/digital-autonomy-autarky/).
No well-developed country is fully independent from others.
The goal is not independence, but resilience: reducing the negative effects of dependence, and preserving options.

With that framing, the controls fall into a few categories.

## Regulation

Regulation is the most direct lever available to governments and regulators.
Its relevance is demonstrated by the ferocity with which big tech and certain governments resist it.

Relevant regulatory instruments include:

- **Data residency.** A popular tool for governments is to demand that data is stored on servers
that are geographically located in the country's jurisdiction.
The objective of that is to reduce confidentiality, integrity and availability risks that originate from other governments.
However, the protection that it offers is largely a legal fiction.
Residency neither guarantees sovereignty nor is required for it.
Noteworthy is the example of GDPR, the European privacy regulation.
It does not require residency per se, but allows data to be stored under other jurisdictions, **if they provide an equivalent level of protection**.
The latter is often 'lost in translation' when people implement GDPR.
In any case the legal discussion then shifts to the interpretation of the word 'equivalent'.
For example, if the overt law claims to guarantee that protection, but covert regulation about 'national interests' contradicts that, is the protection still adequate?
A foreign-headquartered company operating local infrastructure can still be subject to foreign government orders, whether you call it an autonomous 'govcloud' or not.
And this all assumes that governments will abide by the laws they make for themselves, to which there are many documented exceptions.
- **Interoperability and portability requirements.** Vendor lock-in creates a dependency on a specific vendor because it increases the so-called 'switching cost'. 
Interoperability and portability requirements make it easier to move workloads and data to other vendors or even in-house services.
This is relevant on a broader level, so let's dive into this a bit deeper.

## Open standards and open source

Open standards, whether formally standardized, or de-facto, can lead to alternative implementations of the same service, whether by a commercial provider or by open source.
As such they reduce the chance of a market becoming a monopoly.

The economic market theory says that monopolies lead to power concentration at suppliers, at the expense of power at the consumers.
A cloud consumer that can move its data and workloads has a credible exit option, which changes the power dynamic with the supplier.

Where open standards are about data portability and interoperability, open source is more about
workload portability.
If the software you run is open source (for example WordPress content management software), you choose where it runs.
You can still choose to outsource the hosting to multiple providers, or host it yourself.
The reality is, as often, a bit more complicated, as there are enough actors in the space whose agenda is in conflict with the consumers control requirements.
More about that elsewhere.

## Consortia of smaller providers

A large governmental buyer can run the risk of creating its own dependencies.
It can create a service provider with scale and power that can be very attractive to international businesses.
When such service providers are acquired by a foreign held company, much control is effectively lost.
International capital markets tend to favor such consolidation.

So, what is the alternative?

The internet itself is the model here: an ecosystem of many providers, interoperating through shared open standards, with no single point of control.
Applying this model to cloud services for government requires organizing demand — a consortium of buyers that specifies common standards and distributes contracts — rather than building a single national provider.

The VNG Common Ground and Haven initiatives in the Netherlands are early examples of this approach.
Their value is not only technical but organizational: they demonstrate that smaller providers can compete when the playing field is defined by open standards rather than proprietary platforms.

## Self-hosting

While self-hosting of software seems to deliver maximal autonomy, it can be an expensive proposition.
It requires expertise, capital, and a competent service organization, none of which come for free.

Without market pressure, these services are not likely to be competitive in a commodity market.
But they don't have to, as self hosting serves other needs.

For example, to control the availability risk of a large email system, an important mitigation is to be able to quickly fall back to an alternative for critical operations, even at reduced capacity.

An operational system that is well run is a solid blueprint for scaling up by a factor of 10, in my experience.
Starting it from scratch is significantly harder, and an important factor in that is lack of battle tested expertise.

## Building expertise

Any alternative to big tech requires people who can build and operate it.
Expertise cannot be imported on demand; it has to be developed over time through actual operations.

The practical approach is to start small and scale deliberately.
A production pilot at 1,000 active users is a realistic first milestone.
It tests the technology, builds operational knowledge, and creates a template that can be replicated.
This is slower than buying a ready-made solution, but it produces something that cannot be switched off by a foreign government, or an unwilling provider.

Open source as a viable control for availability also requires having the capacity and competence in interacting with those communities.
The best way to do that is to participate and contribute back.

## Industrial policy

On a larger scale, countries want to be able to have certain expertise and capabilities available within their borders, under their control.
Without that, economic development is at risk, and autonomy in general.

China offers the clearest live experiment in pursuing digital autonomy the hard way: by building the bottom of the stack itself. Cut off from Nvidia's top GPUs by US export controls, Beijing has not only backed Huawei's Ascend line as a domestic substitute — it has manufactured the demand for it. In late 2025 the government ordered state-funded data centres to drop foreign AI chips and buy only domestically certified ones, with early-stage projects told to rip out hardware already installed. That turned a struggling alternative into a guaranteed market overnight: Huawei is reported to be roughly doubling output of its flagship Ascend 910C toward 600,000 units in 2026 and lifting AI-chip revenue past USD 12 billion.

But the same example shows what autarky costs. Huawei's best chips still deliver a fraction of the compute of Nvidia's current generation, so the price of independence is paid in performance, and the captive home market that makes the strategy viable is also what insulates it from competitive pressure. It is autonomy bought with a state mandate and a quality gap — a reminder that "build it yourself" is a real control, not a free one. The lesson for a government buyer is not to copy the chip factory, but to copy the move underneath it: organising demand deliberately to keep a credible domestic alternative alive.

## The prisoner's dilemma

Game theory offers a useful frame for what all of this adds up to.
The underlying dynamic between a buyer and a supplier resembles a prisoner's dilemma.
If they work together, both benefit. If one of them does not cooperate, the outcome is negative.
In order for stable cooperation to emerge, both sides need to be able to hurt the other, so to speak.

A government or company that has working alternatives, real expertise, and regulatory tools is not easily coerced.
The threat does not have to be exercised to be effective — it just has to be credible.

This is also what open standards and open source bring: a way to retaliate against hostile suppliers or other supply chain agents.

The option of going alone is best demonstrated before a foreign actor induced crisis.