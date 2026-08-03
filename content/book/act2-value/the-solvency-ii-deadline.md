---
date: '2026-07-28T00:00:00Z'
draft: false
title: 'Why we signed the cloud deal'
weight: 190
---

Let's look at a realistic and uncommon story of cloud and outsourcing.
It illustrates what value a customer got and how they got there.

Aegon Levensverzekering N.V. is a life insurance company that needed to comply with what's called the Solvency II regulation,
which required reporting the net-present-value (NPV) estimate of its entire life-policy portfolio,
millions of policies across thousands of scenarios.
The Dutch regulator is worried that the insurer might not be capable of honoring the life insurance policies.
There are many scenario's: changing retirement ages, changing life expectancies, changing interest rates and investment returns.
Off the shelf scenario-based actuarial risk-modeling software exists to do this, but the compute requirement is pretty big.
This requires a high performance compute environment with hundreds of CPUs, for several weeks, every quarter.
But outside of that batch, all the machines are idle.

When they started this project around 2013, they were doing this in their own data center.
Why would they want to move to cloud?
They figured they needed more flexibility and capacity for different scenarios, as well as better disaster recovery.
Solvency II, coming into effect in 2016, required massively more compute than Solvency I, and they needed to prepare for that.
They were lacking the skills to size the machines and the software; in terms of assurance, it wasn't too good either.

Their existing set up took six weeks to run the batch.
For the person responsible to report compliance, this is a risk.
If they ever have a six week batch, and the batch fails in its fifth week, they have to run it again.
If it fails again, they're one quarter short — and the fines that they get from the regulators from not reporting their NPV are fairly significant.
This will constitute a career limiting move.

Aegon was mainly worried about regulatory and compliance concerns, such as "can we do this, are we allowed to do that?"
But they also worried about their own competence to do this work.
They were doing it themselves in the data center, but not in a cloud fashion — they had dedicated hardware for it, and while they wanted more flexibility, they worried about having the competence around that.

Using cloud computing could be a solution, but would that work in their regulatory environment?
DNB, the dutch regulator and supervisor for the financial industry, has actually stopped companies mid-motion on cloud adoption, prompting them to seek auditor assurance specifically to get the regulator's blessing.
If it goes wrong, DNB comes after the financial company, not the cloud provider.
A penalty clause against the vendor doesn't make the regulatory problem go away.
Outsourcing doesn't outsource accountability.

They set out to create a compliant and resilient cloud solution to implement Solvency II.
To tackle this challenge, they pulled together the stakeholders: the business unit that was actually responsible for the Solvency II report, business information managers,
the account manager from the IT department towards that business unit, the service manager, procurement, contract managers, risk managers, security managers, and legal.
All on one project team.

Their project plan had a number of steps, which ended in a go/no-go decision,
plus a step to inform the regulator about their outsourcing decision, which is required in this particular jurisdiction.

Aegon brought in a (private) cloud provider, Bitbrains, who had been doing business in the dutch financial sector for a while already.
They functioned as a managed services provider, and they had a private cloud inside.
Sizing was their responsibility, so they're more like a private PaaS or private SaaS provider — even though internally they were using this private Infrastructure-as-a-Service.

In this particular case, they had an entire zone of that private cloud dedicated to the customer — "here are your racks, we have physical hardware in these racks, we run a ton of virtual machines on those for you, but these racks are all yours."

With all those resources and proper sizing, the batch window shrank to two weeks.
When the batch would be done, the provider would say, "okay, we're going to re-image all those physical machines and put them back to a different usage."

The cloud characteristic that was driving the benefit in this case is "elasticity" and machine capacity scaled up and down according to need.

Besides sizing, Bitbrains was also installing the software and they did data masking on export and import.
You can understand why: if you need to calculate the value of a portfolio of policies, not all the data that's in those policies is needed.
This calculation probably needs the ages and sex of the people, and other basic data, but it doesn't need their names, addresses, or payment information.
This is a generic theme with cloud: data moves around, and at every point where data flows to another control authority, filtering avoids data leaking out.
That was a technical, or logical, control that was part of the structure of the solution.

Bitbrains was maturing their processes and learned that SOC 2 covered most of the requirements that it was getting from many prospects and customers.
SOC 2 stands for Service Organization Controls.
The "2" refers to the version that was developed for IT organizations, whereas SOC was originally for financial services.
Hence, they put in effort to conform to SOC 2, not just for this client.
The alternative would have been to keep doing bespoke conformance work for clients, or even to be excluded from RFPs for lacking it.
They estimate that the annual maintenance cost of that certification was around 2500 engineering hours.

Some of what they did is common in the cloud world, but it's new for a lot of organizations:
for example, automation of evidence collection in all your processes, making sure you record any decisions that were made by people, and logging identity and access information.

Aegon could rely on the SOC 2 statement that auditor KPMG produced for Bitbrains.
Some discussion remains over this, as the DNB still requires the client (Aegon) to have a contractual right-to-audit.
Many believe however, that
right to audit can be implemented by having adequate access to a proper audit statement.

Finally, Aegon had a specific provision for what somebody else calls "liberation of data."
For this particular service, Bitbrains prepared virtual machine images, custom-made for Aegon.
The contract said: we want those machine images to be available to us, outside of your influence, at all times or at regular intervals, whatever the case may be.
That's the way that they reduced the lock-in risk.
