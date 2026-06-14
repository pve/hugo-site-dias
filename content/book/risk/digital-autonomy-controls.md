---
date: '2026-06-14T00:00:00Z'
draft: true
title: 'Digital autonomy: Controls'
weight: 75
---

(gegenereerd. )
voorbeeld controls: zelf hosten, eigen software ontwikkelen.
Voorbeeld China die Huawei chips laat ontwikkelen voor AI.
Government regions (fake)
CCM sov controls. 

The guide to [digital sovereignty, autonomy, and business resilience](/book/risk/guide-autonomy-resilience/) frames the problem and identifies the questions. This unit begins answering them: what can cloud consumers, regulators, and governments actually do?

The honest starting point is that full digital autonomy — autarky — is not achievable, and not worth pursuing. No well-developed country is fully independent from others. The goal is not independence, but resilience: reducing the negative effects of dependence, and preserving options.

With that framing, the controls fall into a few categories.

## Regulation

Regulation is the most direct lever available to governments and regulators. Its effectiveness is demonstrated by the ferocity with which big tech and the US government resist it.

Relevant regulatory instruments include:

- **Interoperability and portability requirements.** Mandating open standards prevents lock-in at the data and service level. A cloud consumer that can move its data and workloads has a credible exit option, which changes the power dynamic with the supplier.
- **Ownership and control rules.** A company that appears European may still fall under foreign jurisdiction if its ownership chain leads there. Rules on beneficial ownership and operational control are needed to close this gap.
- **Data residency and access rules.** Residency alone does not guarantee control — a foreign-headquartered company operating local infrastructure can still be subject to foreign government orders. Regulation needs to address both where data is stored and who can compel access to it.

The risk of regulatory overreach is real: the line between protecting citizens and censoring expression is not always clear, especially for content and social media. That does not argue against regulation, but for precision in how it is written.

## Emergency standby capacity

A full clone of all capacity and functionality is neither necessary nor affordable. The more useful framing is graceful degradation: can you sustain critical operations at reduced capacity, buy time, and scale up alternatives?

A standby system at roughly 20% of normal capacity could sustain 80% of output in a disruption scenario. The key requirement is that this standby capacity must have real, daily users. A system that sits idle until an emergency is unlikely to work when needed. The COVID-19 pandemic offers a reference point: Zoom scaled twentyfold in weeks because the underlying cloud model allowed it.

For a government context, a standby of a few thousand active users is a realistic starting ambition.

## Open standards

Open standards are more important than open source for achieving interoperability and portability. Open source helps, and open-source reference implementations reduce the cost of adopting a standard, but the standard itself is what prevents a market from tipping toward monopoly.

Building procurement requirements around open standards is one of the more durable controls available to public-sector buyers. It shifts the negotiating position without requiring governments to build and operate infrastructure directly.

## Consortia of smaller providers

The internet itself is the model here: an ecosystem of many providers, interoperating through shared standards, with no single point of control. Applying this model to cloud services for government requires organizing demand — a consortium of buyers that specifies common standards and distributes contracts — rather than building a single national provider.

The VNG Common Ground and Haven initiatives in the Netherlands are early examples of this approach. Their value is not only technical but organizational: they demonstrate that smaller providers can compete when the playing field is defined by open standards rather than proprietary platforms.

## Building expertise

Any alternative to big tech requires people who can build and operate it. Expertise cannot be imported on demand; it has to be developed over time through actual operations.

The practical approach is to start small and scale deliberately — growing by a factor of ten at each step. A production pilot at 1,000 active users is a realistic first milestone. It tests the technology, builds operational knowledge, and creates a template that can be replicated. This is slower than buying a ready-made solution, but it produces something that cannot be switched off by a foreign government.

## The prisoner's dilemma

Game theory offers a useful frame for what all of this adds up to. The underlying dynamic between a dependent buyer and a powerful supplier resembles a prisoner's dilemma: unilateral compliance is exploitable, but unilateral defection is expensive.

The controls above collectively create a credible alternative. That is the point. A government or company that has working alternatives, real expertise, and regulatory tools is not easily coerced. The threat does not have to be exercised to be effective — it just has to be credible.

This is also why the controls need to be developed before the crisis, not in response to it.
