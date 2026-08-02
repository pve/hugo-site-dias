---
date: '2026-07-28T00:00:00Z'
draft: true
title: 'Why we signed the cloud deal'
weight: 190
---

Let's look at a realistic and somewhat uncommon story of cloud and outsourcing, the purpose of which is to illustrate what value a customer got, and how they got there.

Aegon Levensverzekering N.V. is a life insurance company that needs to comply with what's called the Solvency II regulation, which requires reporting the net-present-value (NPV) estimate of its entire life-policy portfolio — which is millions of policies across thousands of scenarios.
The regulator is worried that the insurer might not be capable of honoring the life insurance policies.
There are many scenario's: changing retirement ages, changing life expectancies, changing interest rates and investment returns.
This require a high performance compute environment with quite confidential data.

The way they did that was to crunch that portfolio with a couple of hundred CPUs, for several weeks, every quarter.
But outside of that batch, all the machines are idle.

The full story is on YouTube (PVIB meeting 2014).

For the record, the actuarial analysis software is a commercial off the shelf product.

#### Why Cloud?

When they started this project, they were doing this in their own data center.
Why would they want to move to cloud?
They figured they needed more flexibility and capacity for different scenarios, and presumably better disaster recovery.
They were doing it in their own data center, but they were having some issues with the long-term viability of that approach.
They were lacking the skills to size the machines and the software; in terms of assurance, it wasn't too good either.
As you can imagine, that kind of workload isn't easy to migrate, and they needed quicker turnaround — the process was taking six weeks.
If you ever have a six week batch, the batch fails in its fifth week, you have to run it again, and it fails again, you're one quarter short — and the fines that you get from the regulators from not reporting your NPV are fairly significant and they will constitute a career limiting move for some officials of the insurance company.

By the end of this project, they managed to cut that down to two weeks.

The (private) cloud provider was Bitbrains, who had been doing business in the dutch financial sector for a while already.
Together with the vendor for the actuarial software, they were the two contract partners for the insurer.

#### Step 2: Why not

The insurance company was mainly worried about regulatory and compliance concerns — fairly obvious ones, like "can we do this, are we allowed to do that?"
But separately, we also hear them say they worried about their own competence to do this work.
They were doing it themselves in the data center, but not in a cloud fashion — they had dedicated hardware for it, and while they wanted more flexibility, they worried about having the competence around that.

DNB, the dutch banking regulator, has actually stopped banks mid-motion on cloud adoption, prompting them to seek KPMG assurance specifically to get the regulator's blessing.

if it goes wrong, DNB comes after the bank/insurer, not the cloud provider — a penalty clause against the vendor doesn't make the regulatory problem go away. Outsourcing doesn't outsource accountability.

#### Step 3: Process

Our insurance company example was in project mode, more or less: they assembled a cross-functional team to guide the process, which was really an outsourcing process.
They pulled together the stakeholders: the business unit that was actually responsible for the Solvency II report, business information managers, the account manager from the IT department towards that business unit, the service manager, procurement, contract managers, risk managers, security managers, and legal — all on that project team.
Their project plan had a number of steps I won't go into in detail here, but it ended in a go/no-go decision, plus a step to inform the regulator about their outsourcing decision — which is required in this particular jurisdiction.

#### Step 4: What, and to whom

The insurance company really wanted substantially more flexible and scalable solvency analysis and reporting.
Long term, they also wanted to be more sure of the compliance of the process, because if that process isn't working for a couple of months, or if you ever have a six-week batch and the batch fails in its fifth week, you have to run it again — and if it fails again, you're one quarter short.
And the fines from the regulators for not reporting your NPV are fairly significant — they will constitute a career-limiting move for some officials of the insurance company.
So, basically, from a functional perspective they wanted what they had, but they wanted it to be much more flexible and scalable.

#### Step 5: Partners and providers

The insurance company worked with two major providers.
One was the external private cloud provider, which more or less functioned as a managed services provider — internally there was definitely a very specific private cloud discernible.
The other relevant partner was a Big Four audit firm, for assurance on their entire setup.
That's step five: once you've figured out who you're going to work with, you know what you have to do yourself, because that's the delta between what you want and what somebody else is delivering to you.

Bitbrains was the managed services provider.
As they were maturing their processes, they learned that SOC 2 covered most of the requirements that they were getting from many prospects and customers.
Hence, they put in effort to conform to that.
The alternative would have been to keep doing bespoke conformance work for clients, or even to be ecxluded from RFPs for lacking it.
They estimate that the annual maintenance cost of that certification was around 2500 engineering hours.

#### Step 6: Attitude and skills

Then comes step six, as I've identified in all the work I've been doing: attitude and skills.
This is even more important than process, because if you have the right attitude and skill set, the process will develop itself, and not the other way around.

In our example company, again I didn't get that much detail, but the number-one thing was, of course, to have a cross-functional procurement team, bringing together all the skills they needed to do what they wanted to do.
Some of those skills were outsourced — to the managed hosting provider, the private cloud provider, and the audit firm.

#### Step 7: Structure and technology

The insurance company outsourced basically all their technology to the external private cloud provider, running their analysis in what we should call a private infrastructure cloud.
In this particular case, they had an entire zone of that private cloud dedicated to the customer — "here are your racks, we have physical hardware in these racks, we run a ton of virtual machines on those for you, but these racks are all yours."
When the batch would be done, within a week or two, the provider would say, "okay, we're going to re-image all those physical machines and put it back to a different usage."
The external private cloud provider was also responsible for sizing, which means, in effect, they're more like a PaaS or SaaS provider — even though internally they were using this private Infrastructure-as-a-Service.

The private cloud provider was also responsible for installing the software around that, and they did data masking on export and import.
You can understand why: if you need to calculate the value of a portfolio of policies, you don't need all the data that's in those policies.
You probably need the ages and sex of the people, and other basic data, but you don't have to have their names, addresses, or payment information.
This is a generic theme with cloud: data moves around, and at every point where you hand it over to another control authority, you need to be very aware of the filtering you can apply, to avoid data leaking out too much.
That was a technical, or logical, control that was part of the structure of the solution.

#### Step 8: Consolidate and secure success

Now, in our example company, how did they secure the success of this?
An external audit firm produced a SOC 2 compliance statement.
SOC 2 — there's a lot of material on the web about it — is probably one of the most stringent compliance frameworks for service organizations; that's what it stands for, Service Organization Controls, and the "2" means that they actually demonstrated all the controls work on a continuous basis.

Some of what they did isn't uncommon in the cloud world, but it's pretty new for a lot of organizations: for example, automation of evidence collection in all your processes, making sure you record any decisions that were made by people, and logging identity and access information.
They embedded certain controls into the workflow — for instance, principles around what needs to be done in contracts: there's a right to audit that you want to make sure you have, or at least enough right to audit.

Right to audit is seen as redundant over an independent report.

Finally, in our example case, they had a specific provision for what somebody else calls "liberation of data."
For this particular service, virtual machine images were prepared, custom-made for the insurance company, under the control of the private cloud provider.
The contract basically said: we want those machine images to be available to us, outside of your influence, at all times or at regular intervals, whatever the case may be.
That's the way that this particular company reduced the lock-in risk.

- Verbatim, on the close: "they had an external audit firm produce a SOC 2 compliance statement... SOC 2 is probably one of the most stringent compliance frameworks for service organizations... they actually demonstrated all the controls work on a continuous basis." Also names a specific SOC 2 practice worth keeping: "automation of evidence collection," "you record any decisions that were made by people," logging "identity and access information."

