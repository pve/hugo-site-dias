---
date: '2025-08-22T09:18:35Z'
draft: false
title: 'Compliance is a Risk'
weight: 100
---

For people who care about risk in IT, compliance is a mixed blessing.
Compliance regulations can lead to better risk management, but sometimes it is more of a hindrance than a help.

Compliance in IT generally means compliance with regulations that are set up to reduce risk, for example, across a chain of actors.
A great example is the PCI/DSS regulation, which governs everybody who touches a credit card transaction.
The objective of this regulation is to protect card holders and card issuers from credit card fraud.
The reason why the regulation exists in the first place is because negligence at one actor can lead to damages at another actor.

For example, it is not in the merchant's primary interest to keep customer credit card numbers secure.
Keeping that data secure involves work.
The merchant's prime interest is in getting paid, not in spending more money on security than absolutely necessary.

The customers, however, really would like their credit card to be safe, because it is them who bear the fraud risk.
Actions by the merchant, or lack thereof, are an 'externality', as economists say.

Compliance regulations are a way to force risk management on, in this case, the merchant.

A similar pattern can be seen in privacy regulations.
Personal data disclosure is primarily a risk to the individual involved, not to the organization that holds that data.
Regulations on data privacy, such as the EU GDPR (General Data Protection Regulation), force risk management on the storing of personal data upon a lot of organizations.

Compliance on IT risk management is also becoming a national security issue.
The EU NIS2 (Network and Information Systems) Directive forces critical infrastructure providers, such as telecom and electricity companies to be resilient.
This is because our society is more and more dependent on these infrastructure providers.
Even if these infrastructure providers are not digital infrastructure providers, they need IT to operate.
The threat landscape is also changing, with nation-state actors actively targeting these critical infrastructures.

As a side note, in the early 2000s I was part of a governmental working group investigating these critical infrastructure risks (or vital infrastructures, as we called them).
Our research showed that there were many dependencies between them, but that they all depended on electricity.
This highlights the need for critical infrastructure protection.

While all these initiatives help, compliance does not imply security.
Even if compliance is treated as more than a 'box-ticking' exercise, there are many documented cases of compliant organizations being breached.

Target was PCI DSS compliant in 2013, yet more than 40 million card numbers were stolen.

Equifax was ISO27001 certified in 2017, yet more than 140 million people's personal data were exposed.

Being secure does not automatically mean that you are compliant.

But being compliant can be hard, especially with conflicting or ambiguous government regulations.
For example, GDPR requires adequate protection of personal data.
It requires that protection explicitly when that data is processed outside the EU.
Legally, there have been a number of instruments for this protection deemed to be adequate when personal data is processed at e.g. a US cloud provider (though the situation is by no means US-EU specific).
There have equally been many arguments that the US government still has control over such data, which would make it illegal to process personal data at a US provider.
As an example consider the EU–US Privacy Shield (2016–2020), which was struck down in the Schrems II (CJEU 2020) ruling.

Every control, be it technical, managerial, or legal, involves interpretation, trade-offs, and residual uncertainty.
Regulators, auditors, or courts may later disagree with your choices.

In the end this means that being compliant also involves a risk decision: you accept the risk that you are not fully compliant, in the same way that you accept the risk that you are not fully secure.
