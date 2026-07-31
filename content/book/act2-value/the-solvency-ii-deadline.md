---
date: '2026-07-28T00:00:00Z'
draft: true
title: 'Why we signed the cloud deal'
weight: 190
---

Let's look at a realistic and somewhat uncommon story of cloud and outsourcing, the purpose of which is to illustrate what value a customer got, and how they got there.

It's a life insurance company that needs to comply with what's called the Solvency II regulation, which requires reporting the net-present-value estimate of its entire life-policy portfolio — which is millions of policies across thousands of scenarios.
The way they did that was to crunch that portfolio with a couple of hundred CPUs, for several weeks, every quarter.

#### Why Cloud?

When they started this project, they were doing this in their own data center.
Why would they want to move to cloud?
They figured they needed more flexibility and capacity for different scenarios, and presumably better disaster recovery.
They were doing it in their own data center, but they were having some issues with the long-term viability of that approach.
They were lacking the skills to size the machines and the software; in terms of assurance, it wasn't too good either.
As you can imagine, that kind of workload isn't easy to migrate, and they needed quicker turnaround — the process was taking six weeks.
By the end of this project, they managed to cut that down to two weeks.

- Regulatory driver, stated in concrete numbers: the insurer had to report the net-present-value estimate of its entire life-policy portfolio — "millions of policies over thousands of scenarios" — by crunching it on a few hundred CPUs for several weeks, every quarter. Moving to (private) cloud cut that quarterly batch from six weeks to two.
  (source: `misc-cae-udemy-2015-bank-roadmap-insurance-case.md`)


- Verbatim, from the raw transcript (not in the synthesis note): "if you ever have a six week batch, the batch fails in its fifth week, you have to run it again, and it fails again, you're one quarter short — and the fines that you get from the regulators from not reporting your NPV are fairly significant and they will constitute a career limiting move for some officials of the insurance company."
  (source: `3 Cloud roadmap banks.txt`, ~line 54)


(NOTES, as far as I know this was a COTS tool where neither the vendor nor the customer was competent in sizing)

#### Step 2: Why not

Back to our example: the insurance company was mainly worried about regulatory and compliance concerns — fairly obvious ones, like "can we do this, are we allowed to do that."
But separately, we also hear them say they worried about their own competence to do this work.
They were doing it themselves in the data center, but not in a cloud fashion — they had dedicated hardware for it, and while they wanted more flexibility, they worried about having the competence around that.

#### Step 3: Process

Our insurance company example was in project mode, more or less: they assembled a cross-functional team to guide the process, which was really an outsourcing process.
They pulled together the stakeholders: the business unit that was actually responsible for the Solvency II report, business information managers, the account manager from the IT department towards that business unit, the service manager, procurement, contract managers, risk managers, security managers, and legal — all on that project team.
Their project plan had a number of steps I won't go into in detail here, but it ended in a go/no-go decision, plus a step to inform the regulator about their outsourcing decision — which is required in this particular jurisdiction.

- Real governance worked example: the project team pulled together the business unit, business information managers, the IT account manager, service manager, procurement, contract managers, risk managers, security managers, and legal — and the project plan formally ended in a go/no-go decision plus a required step to notify the regulator about the outsourcing decision, "which is required in this particular jurisdiction."
  (source: `misc-cae-udemy-2015-bank-roadmap-insurance-case.md`)

#### Step 4: What, and to whom

Back to our specific example: the insurance company really wanted substantially more flexible and scalable solvency analysis and reporting.
Long term, they also wanted to be more sure of the compliance of the process, because if that process isn't working for a couple of months, or if you ever have a six-week batch and the batch fails in its fifth week, you have to run it again — and if it fails again, you're one quarter short.
And the fines from the regulators for not reporting your NPV are fairly significant — they will constitute a career-limiting move for some officials of the insurance company.
So, basically, from a functional perspective they wanted what they had, but they wanted it to be much more flexible and scalable.

#### Step 5: Partners and providers


How was our example company, the insurance company, doing that?
They worked with two major providers.
One was the external private cloud provider, which more or less functioned as a managed services provider — internally there was definitely a very specific private cloud discernible.
The other relevant partner was a Big Four audit firm, for assurance on their entire setup.
That's step five: once you've figured out who you're going to work with, you know what you have to do yourself, because that's the delta between what you want and what somebody else is delivering to you.

#### Step 6: Attitude and skills

Then comes step six, as I've identified in all the work I've been doing: attitude and skills.
This is even more important than process, because if you have the right attitude and skill set, the process will develop itself, and not the other way around.

In our example company, again I didn't get that much detail, but the number-one thing was, of course, to have a cross-functional procurement team, bringing together all the skills they needed to do what they wanted to do.
Some of those skills were outsourced — to the managed hosting provider, the private cloud provider, and the audit firm.

#### Step 7: Structure and technology

Back to our example company — and I'm not making this up, this is real: they outsourced basically all their technology to the external private cloud provider, running their analysis in what we should call a private infrastructure cloud.
In this particular case, they had an entire zone of that private cloud dedicated to the customer — "here are your racks, we have physical hardware in these racks, we run a ton of virtual machines on those, but these racks are all yours."
When the batch would be done, within a week or two, the provider would say, "okay, we're going to reimage all those physical machines and put it back to a different usage."
The external private cloud provider was also responsible for sizing, which means, in effect, they're more like a PaaS or SaaS provider — even though internally they were using this private Infrastructure-as-a-Service.

The private cloud provider was also responsible for installing the software around that, and they did data masking on export and import.
You can understand why: if you need to calculate the value of a portfolio of policies, you don't need all the data that's in those policies.
You probably need the ages and sex of the people, and other basic data, but you don't have to have their names, addresses, or payment information.
This is a generic theme with cloud: data moves around, and at every point where you hand it over to another control authority, you need to be very aware of the filtering you can apply, to avoid data leaking out too much.
That was a technical, or logical, control that was part of the structure of the solution.

- Concrete data-minimization control mentioned in the same walkthrough (probably belongs in unit 66, Assets, not here — flagging in case it's useful as connective tissue): "you don't need all the data that's in those policies... you probably need the ages and sex... but you don't have to have their names or addresses or payment information" — data masking on export/import, generalized to "at every point where you hand data over to another control authority, you need to be very aware of the filtering you can apply."
  (source: `misc-cae-udemy-2015-bank-roadmap-insurance-case.md`)



- Verbatim, on the two-partner structure: "they work with two major providers and one of them was the external private cloud provider that... was going to function as a managed services provider... internally there was definitely a very specific private cloud discernible... and the other relevant partner that they had was a big four audit firm for assurance on their entire setup."
  (source: `3 Cloud roadmap banks.txt`, ~line 61)

- Verbatim, on the private-cloud mechanics: "they had an entire virtual machine zone... dedicated to the customer... here are your racks... when the batch would be done, in a week or two they would say okay we're going to reimage all those physical machines and we'll put it back to a different usage." A concrete, almost throwaway detail that shows the deal wasn't just outsourcing — it was a specific, engineered arrangement.
  (source: `3 Cloud roadmap banks.txt`, ~line 81-84)

#### Step 8: Consolidate and secure success

Now, in our example company, how did they secure the success of this?
An external audit firm produced a SOC 2 compliance statement.
SOC 2 — there's a lot of material on the web about it — is probably one of the most stringent compliance frameworks for service organizations; that's what it stands for, Service Organization Controls, and the "2" means that they actually demonstrated all the controls work on a continuous basis.
Some of what they did isn't uncommon in the cloud world, but it's pretty new for a lot of organizations: for example, automation of evidence collection in all your processes, making sure you record any decisions that were made by people, and logging identity and access information.
They embedded certain controls into the workflow — for instance, principles around what needs to be done in contracts: there's a right to audit that you want to make sure you have, or at least enough right to audit.

Finally, in our example case, they had a specific provision for what somebody else calls "liberation of data."
For this particular service, virtual machine images were prepared, custom-made for the insurance company, under the control of the private cloud provider.
The contract basically said: we want those machine images to be available to us, outside of your influence, at all times or at regular intervals, whatever the case may be.
That's the way that this particular company did that.


- Concrete anti-lock-in contract clause — exactly the kind of real example book-sequence.md flags as missing for the lock-in unit: the insurer's contract required the private-cloud provider to keep custom-built VM images "available to us outside of your influence at all times or at regular intervals" — a named, specific portability/exit mechanism ("liberation of data"), not just the general advice to "avoid lock-in."
  (source: `misc-cae-udemy-2015-bank-roadmap-insurance-case.md`; target unit 32a, mention only in passing here)

- Verbatim, on the close: "they had an external audit firm produce a SOC 2 compliance statement... SOC 2 is probably one of the most stringent compliance frameworks for service organizations... they actually demonstrated all the controls work on a continuous basis." Also names a specific SOC 2 practice worth keeping: "automation of evidence collection," "you record any decisions that were made by people," logging "identity and access information."
  (source: `3 Cloud roadmap banks.txt`, ~line 112-118)

- Verbatim, right-to-audit clause, same paragraph as the already-noted portability clause: "there's a right to audit that you want to make sure that you have, or at least to get enough right to audit" — mentioned in the same breath as the VM-image portability clause, both under the same "consolidate and secure our success" closing step of the roadmap.
  (source: `3 Cloud roadmap banks.txt`, ~line 118-120)

<!-- NOTES DRAFT — unit 19 in book-sequence.md. Not prose yet; these are the notes on what the unit should contain. Replaces the Kaminski capacity-planning interview as Act II's case opener (that interview moved to unit 72a, act5-risk/automate-or-die-capacity-planning.md — it's a control story, not a deal story, and didn't earn this act's thesis). -->

## Thesis

A deal is good when it's struck for a reason you can put a number on, by the people who actually have to answer for it.
This unit is Act II's case opener: it should show a deal being made, not a deal being administered after the fact.

## Why here in the arc

- First worked case after the Act II opener (18) — earns the act's thesis ("why the deal was good") before the abstract value chapters (20 Intro to value, 21 Value of information) unpack it.
- Gives Neil a concrete go/no-go he can argue with: was this the right call, and on what basis?
- Plants the anti-lock-in contract clause here as a teaser, paid off properly in 32a (Lock-in).
- The regulator-notification step foreshadows the compliance/governance material later in the act and in Act V (55, 71).

## What goes in

- A regulated life insurer must revalue its entire policy portfolio every quarter for Solvency II: net-present-value of "millions of policies over thousands of scenarios," run on a few hundred CPUs, taking six weeks — up against a quarterly reporting deadline.
- The move to managed private cloud cut that batch from six weeks to two — a real, quantified number tied to a hard regulatory date, not a hypothetical.
- The deal itself: a cross-functional team (business unit, business information managers, IT account manager, service manager, procurement, contract managers, risk managers, security managers, legal) drove this to a formal go/no-go decision — including a required step to notify the regulator about the outsourcing decision.
- The contract that got signed wasn't naive: it required the provider to keep the insurer's custom-built VM images "available to us outside of your influence at all times or at regular intervals" — a named, specific portability/exit clause, not just general lock-in advice. Mention it here, pay it off in 32a.
- Framing device: this is what "why the deal was good" looks like in practice — quantified value, a real deadline, the right people in the room, and an exit clause negotiated *before* signing, not regretted after.
- The stakes behind the deadline, in the teaching narration's own words: a failed batch doesn't just cost time — "if you ever have a six week batch, the batch fails in its fifth week, you have to run it again... you're one quarter short," and the resulting fines are "a career limiting move for some officials of the insurance company." Worth keeping close to verbatim — it's the line that makes the deadline feel like a real deadline.
- Two distinct partners, not one faceless "the provider": a managed private-cloud provider (a dedicated VM zone, reimaged for other use between batches) *and* a Big Four audit firm brought in separately for assurance. Naming both roles makes the "right people in the room" claim concrete.
- The deal's proof point at the close: the audit firm produced a SOC 2 report demonstrating the controls "work on a continuous basis" — described in the narration as "one of the most stringent compliance frameworks for service organizations." A clean way to end the scene — the deal wasn't just signed, it was verified.
- A right-to-audit clause sat alongside the already-noted portability clause — worth a single joint mention ("liberation of data" plus right to audit) rather than two separate beats.

## Sources

- `sources/misc-cae-udemy-2015-bank-roadmap-insurance-case.md` (Salvage) — synthesis note, bullets only. Also carries three secondary items worth a mention elsewhere: the anti-lock-in clause (32a), the Dutch Olympic Committee OS2010 existence-proof case (28, not this unit), and a restaurant/waiter promise-theory walkthrough (26).
- **Primary source, fuller and verbatim** — the raw transcript behind that synthesis note:
  `transcripts/Content en creatie/Archive 2017/Cloud Adoption Essentials CAE June 2017/Udemy CAE 2015/Section 3 Cloud adoption road map/3 Cloud roadmap banks.txt` (Salvage). Peter's own scripted "Cloud Adoption Essentials" Udemy narration (c. 2015), whisper transcript, walking the same eight-step roadmap in his own words — draft prose from this file, not the bullet synthesis; it has the "career limiting move" line, the SOC 2 close, the two-partner structure, and the right-to-audit clause, none of which made it into the harvested bullets.

## Persona check

- Neil: this is his scene — he has to be able to defend the go/no-go on both the numbers (six weeks to two) and the governance (who signed off, what got negotiated).
- Maria: less central here, but the "which of my systems actually has a regulatory deadline attached" question is hers to ask when she reads this.

## Open questions

- How much of the eight-step roadmap structure to keep visible vs. compress into a single decision scene? Probably compress — the act opener (18) is where the arc framing lives, this unit just needs the case.
- Does the anti-lock-in clause get its own paragraph here, or a single foreshadowing line with the payoff held for 32a? Leaning toward a single line — don't let this unit do 32a's job.
- Title still open: "The Solvency II Deadline" vs. something that names the deal more directly (e.g. "Why We Signed the Cloud Deal"). Current working title kept simple and case-specific.

<!-- RAW MATERIAL, collected from Salvage to process/sources — my own words/teaching, not yet worked into prose. Kept verbatim so nothing gets lost before drafting. -->

## Raw material (mine, not yet drafted)



## transcript

I have a business cloud business case from an insurance company, and I've added in some other experiences that my customers have had, plus material I found through additional desk research.
First, a brief note about this report: as you can see, this is a pretty new report by the Cloud Security Alliance.

#### Step 1: Why

The number-one step in the roadmap, as far as I'm concerned — and this is borne out by my own experience — is that you have to be clear on what you want to do with cloud: as a consumer, as a provider, or whatever role applies.
You need to know why you want to do this, or why your customers want you to do this if you're a cloud provider.
Failure to answer this question will lead to trouble, problems, and stagnation later in the process.

There are three levels of business benefit I typically distinguish.
The first, most basic level is cost saving — actually the most uninteresting benefit of cloud.
You can obviously save money by going to the cloud, but that doesn't change your business or give you any new business agility.
The whole business-agility promise of cloud computing is much more relevant to the overall cost of the business.
You can save a few percent on IT, but that doesn't make a significant difference in the larger scheme of things.
A couple of percentage points' difference on the business side is much larger — and using cloud to go where your competition isn't is where the real value lies.

Everybody has their own favorite reason for going to the cloud, of course.
So what did the Cloud Security Alliance report find?
Here's a diagram: the primary reasons for adopting cloud computing.
The top two are not about cost — they're about being more flexible, more agile, and reducing provisioning time.
The third is reduction in total cost of ownership, but most of the others aren't really about cost.
The interesting thing that pops up in the report is that banks with more digital customers — people who do their banking on the web or on mobile — are less likely to have a "no cloud" strategy.
It's a bit of a double negative: the more digital customers you have, the more likely you are to have a cloud strategy; fewer digital, more traditional customers, and you're more likely to have a no-cloud strategy.

Additional reasons for going to cloud in the financial industry: companies that provide accounting software are definitely moving to cloud.
What I also see in my training is that people report pressure from the line of business and from external suppliers — "here's cloud, this is the way to go, we as a bank need to go in that direction."
The example I have is arguably not from a bank but from an insurance company — but rest assured, they face the same regulatory pressure.

#### The case

This situation is actually a pretty interesting one, and not entirely straightforward.
It's a life insurance company that needs to comply with what's called the Solvency II regulation, which requires reporting the net-present-value estimate of its entire life-policy portfolio — which is millions of policies across thousands of scenarios.
The way they did that was to crunch that portfolio with a couple of hundred CPUs, for several weeks, every quarter.

When they started this project, they were doing this in their own data center.
Why would they want to move to cloud?
They figured they needed more flexibility and capacity for different scenarios, and presumably better disaster recovery.
They were doing it in their own data center, but they were having some issues with the long-term viability of that approach.
They were lacking the skills to size the machines and the software; in terms of assurance, it wasn't too good either.
As you can imagine, that kind of workload isn't easy to migrate, and they needed quicker turnaround — the process was taking six weeks.
By the end of this project, they managed to cut that down to two weeks.
Let's see how they actually did that — but first, on to step two in my roadmap: why not.

#### Step 2: Why not

Step two is about what's holding you back — what stumbling blocks do you see in your cloud adoption strategy?
I'll be talking about banks here as cloud consumers, but the same steps also hold for other companies, like cloud providers or cloud brokers.

Let's look at the CSA research study — I'm not going to read all the details here; if you're interested, download it and find out for yourself.
The top concerns aren't surprising: confidentiality of data, control over data, and legal and compliance issues.
Lower on the list are availability and provider lock-in — which, in the grand scheme of things, isn't the lowest concern, but it's maybe surprising that it doesn't get more attention.

Outside the CSA survey, anecdotal evidence suggests that uncontrolled cloud adoption by lines of business is really endemic in banks and financial organizations — done outside the IT department.
There are people, especially in IT, and risk managers, who are somewhat worried about this, and that definitely counts as a "why not" question: why shouldn't we be doing cloud?

Back to our example: the insurance company was mainly worried about regulatory and compliance concerns — fairly obvious ones, like "can we do this, are we allowed to do that."
But separately, we also hear them say they worried about their own competence to do this work.
They were doing it themselves in the data center, but not in a cloud fashion — they had dedicated hardware for it, and while they wanted more flexibility, they worried about having the competence around that.

#### Step 3: Process

Once you know why you want to do this, and the obstacles you see, the third step in my roadmap is to devise some kind of process for how you want to approach your cloud adoption — again, either as a provider or as a consumer.

In some cases we're talking about consumers: who do you involve, what can you leverage, and so on.
It really depends — if you want to design a greenfield application, the process is very different from the one you'd need if you have a couple hundred onboard applications that need assurance.

The CSA report finds that most financial institutions in particular are required to implement specific security measures.
Evidence from other sources indicates that, from a process perspective, most banks and other financial institutions actually do have compliance processes — they've been doing this, and having compliance issues, for decades already.
What we're seeing is that they can often adapt compliance processes they already have from pre-cloud situations to cloud in general, though there are significant issues around that, and it's a struggle to realign the scope of these processes.
They go by names like the "external connections committee," and they're typically fairly embedded in change management generally — auditors look after every change, to make sure you're still capable of resolving incidents and that availability isn't hurt.
So those processes exist, but they're not necessarily adapted to cloud, or staffed by people with the appropriate cloud skills and insight.

Our insurance company example was in project mode, more or less: they assembled a cross-functional team to guide the process, which was really an outsourcing process.
They pulled together the stakeholders: the business unit that was actually responsible for the Solvency II report, business information managers, the account manager from the IT department towards that business unit, the service manager, procurement, contract managers, risk managers, security managers, and legal — all on that project team.
Their project plan had a number of steps I won't go into in detail here, but it ended in a go/no-go decision, plus a step to inform the regulator about their outsourcing decision — which is required in this particular jurisdiction.

#### Step 4: What, and to whom

The fourth step in any cloud strategy adoption process is to figure out exactly what you're going to deliver, and to whom — who are the consumers, and what is the service they'll be getting from the cloud provider?
This particular second bullet is phrased from the perspective of a provider or broker, but you can turn it around.
Typically, the IT department isn't the end consumer of cloud services — it's providing and brokering a service to business units.

Let's have a look at what kind of applications are being adopted in a corporate bank context, according to the CSA survey.
Interestingly, the top two are the usual suspects: customer relationship management and application development.
Application development matches our agility objective fairly well; CRM does too, but from the business side rather than the IT side.

The rest reads like a shopping list of IT applications for basically any company.
The most noticeable exception on this list is core banking itself — not really surprising, because core banking, in its core, isn't really changing a lot; it's the stuff around it that is changing all the time.
This list is fairly generic — you can't even tell from it that it's bank-specific.

If we look at the anecdotal evidence from talking to people, they say they're getting a lot of data feeds through the cloud now — feeds that used to be sent in by CDs or whatever are now connected through the cloud, like the Bloomberg terminals but on a much more extensive scale.
Other examples: credit ranking of customers and businesses, and a significant amount of outsourcing of analytics, like investment-portfolio analysis.
A lot of customer interaction is also being put into cloud solutions.

Back to our specific example: the insurance company really wanted substantially more flexible and scalable solvency analysis and reporting.
Long term, they also wanted to be more sure of the compliance of the process, because if that process isn't working for a couple of months, or if you ever have a six-week batch and the batch fails in its fifth week, you have to run it again — and if it fails again, you're one quarter short.
And the fines from the regulators for not reporting your NPV are fairly significant — they will constitute a career-limiting move for some officials of the insurance company.
So, basically, from a functional perspective they wanted what they had, but they wanted it to be much more flexible and scalable.

#### Step 5: Partners and providers

On to our fifth step of the roadmap: which partners and providers are we using to get that service?
It doesn't make much sense to do this step before we've answered the questions the previous four steps raised — if you don't know what these providers are delivering, or what you want, then you can't ask the question.
Turning to your technology suppliers or upstream cloud providers first is begging the question.
It makes sense to talk to them for inspiration, but you decide, and then you talk to them.

How does that work in a banking context?
There isn't a lot of data in the report, but one thing that's there is the feature banks desire most from cloud providers: help me be compliant, by being transparent and giving me the controls I need.
The second thing is that, in terms of partners and providers, banks are expecting to work on the basis of a hybrid cloud strategy — there's no way they're going to do all their IT fully in the cloud, as of now, so there will be a mix.

One reason for this is legacy: if you were to start a bank from scratch, you could potentially outsource all your IT to a "bank in a box" provider.
Allegedly there are a number of companies worldwide realizing platforms like that, or already doing so to some extent.
So if you're not very agile as a bank, you'd better start thinking, because there will be banks that don't have any big IT assets themselves, because they'll be able to outsource all of that.

How was our example company, the insurance company, doing that?
They worked with two major providers.
One was the external private cloud provider, which more or less functioned as a managed services provider — internally there was definitely a very specific private cloud discernible.
The other relevant partner was a Big Four audit firm, for assurance on their entire setup.
That's step five: once you've figured out who you're going to work with, you know what you have to do yourself, because that's the delta between what you want and what somebody else is delivering to you.

#### Step 6: Attitude and skills

Then comes step six, as I've identified in all the work I've been doing: attitude and skills.
This is even more important than process, because if you have the right attitude and skill set, the process will develop itself, and not the other way around.

The CSA survey doesn't have any specific findings on that, but I can tell you what I see happening in practice.
I see banks and insurance companies scaling up: in the region I work in, most banks have actually come to my training, and sometimes they send entire cross-functional teams to cloud-security training.
Those are really interesting sessions, because you can discuss their entire risk-management process around cloud with them, and that really makes a difference for those teams — they become much more agile, and a lot of the internal conflict that used to stall progress is reduced to a large extent, which really speeds up their development and design-decision processes.

In our example company, again I didn't get that much detail, but the number-one thing was, of course, to have a cross-functional procurement team, bringing together all the skills they needed to do what they wanted to do.
Some of those skills were outsourced — to the managed hosting provider, the private cloud provider, and the audit firm.

#### Step 7: Structure and technology

Once we have this, we can start building — getting the structure and the technology right is part of that.
If you run a course with me on this, we could talk for a significant amount of time about what this actually looks like in a real cloud environment; it depends on the service model and the deployment model you use.
This is the phase where you design your technical architecture, including all the more detailed security processes around this.

What CSA finds here is reminiscent of what we defined earlier: the banks are using a hybrid cloud strategy — or, I'd say, the banks are finding themselves using a hybrid cloud strategy, because they don't have a formal strategy a lot of the time.

One of the number-one technical controls that stands out is encryption and tokenization of data.
That's a little less trivial than it sounds — in places, it requires you to rethink entire processes.
As an example of an initiative that was going around — not specific to banks, but it shows how invasive these controls can be — MasterCard and Visa proposed a scheme where merchants would no longer store their customers' credit card numbers, but instead store tokens for those credit cards, specific to each merchant.
That requires a total overhaul of a significant amount of IT systems, but it has a very big benefit: even if you steal the entire database of a specific merchant, it's totally useless, because those tokens only mean anything when run from that specific merchant.
That's an example of how some of these controls can be very hard to implement, while at the same time being extremely relevant.
Blanket encryption of data, by contrast, can be fairly straightforward — we actually have an exercise on the CCSK training where we spend about 20 minutes on that.

Other observations, again from clients and people I talk to: procurement and risk-management processes are slowly being adapted to cloud.
It's hard, because the people involved in them don't necessarily have great cloud insight into how cloud is different — different from traditional outsourcing, different from doing it yourself.
There are challenges in adapting operational processes: the help desk will say, "well, either it's one of our applications, so we worry, or it's not, so we don't worry" — and that doesn't work out very well.
One example, from a banking customer: they had something like an approved list of external cloud providers — think Box, or even WhatsApp, approved for specific functionality — and somebody needs to tell the IT service desk that you can actually do that.

Finally, what we see is that lines of business generally procure SaaS, and IT departments generally position themselves as an infrastructure provider or a broker.
That doesn't mean this is the best or most successful strategy, but it's what we see happening — and if you're wondering what the best strategy would be, let's talk.

Back to our example company — and I'm not making this up, this is real: they outsourced basically all their technology to the external private cloud provider, running their analysis in what we should call a private infrastructure cloud.
In this particular case, they had an entire zone of that private cloud dedicated to the customer — "here are your racks, we have physical hardware in these racks, we run a ton of virtual machines on those, but these racks are all yours."
When the batch would be done, within a week or two, the provider would say, "okay, we're going to reimage all those physical machines and put it back to a different usage."
The external private cloud provider was also responsible for sizing, which means, in effect, they're more like a PaaS or SaaS provider — even though internally they were using this private Infrastructure-as-a-Service.

The private cloud provider was also responsible for installing the software around that, and they did data masking on export and import.
You can understand why: if you need to calculate the value of a portfolio of policies, you don't need all the data that's in those policies.
You probably need the ages and sex of the people, and other basic data, but you don't have to have their names, addresses, or payment information.
This is a generic theme with cloud: data moves around, and at every point where you hand it over to another control authority, you need to be very aware of the filtering you can apply, to avoid data leaking out too much.
That was a technical, or logical, control that was part of the structure of the solution.

#### Step 8: Consolidate and secure success

Then we get to our final step, step eight, where we consolidate and secure our success, so to say.
Of course, all the governance and risk management that goes into an entire solution has to start earlier on — you have to think about this earlier on — but I've used step eight to cover it here.

Going back to the survey: there are a couple of controls and ways that banks approach compliance assurance.
They make specific contracts, they lay these out in a lot of detail, they do audits, and they use cloud-controls matrices.
That's exactly borne out by the stories I hear from the companies I talk to.
It's becoming a very common practice to take the CAIQ — the Consensus Assessment Initiative Questionnaire, based on the CCM — and put that to a provider, then ask questions.
Providers are reluctant at first, but once they understand that the entire world is going to do that, they actually see the benefit in it, and it becomes a good structure for the discussion between the provider and the bank — I've heard that reported by a number of my customers.

One final observation: the Dutch central bank has a cloud risk-management approach that closely follows the ENISA cloud-assessment document and the CSA Cloud Controls Guidance document — the CCSK body of knowledge — which is the basis for the most well-recognized, vendor-neutral cloud-security individual certification.

Now, in our example company, how did they secure the success of this?
An external audit firm produced a SOC 2 compliance statement.
SOC 2 — there's a lot of material on the web about it — is probably one of the most stringent compliance frameworks for service organizations; that's what it stands for, Service Organization Controls, and the "2" means that they actually demonstrated all the controls work on a continuous basis.
Some of what they did isn't uncommon in the cloud world, but it's pretty new for a lot of organizations: for example, automation of evidence collection in all your processes, making sure you record any decisions that were made by people, and logging identity and access information.
They embedded certain controls into the workflow — for instance, principles around what needs to be done in contracts: there's a right to audit that you want to make sure you have, or at least enough right to audit.

Finally, in our example case, they had a specific provision for what somebody else calls "liberation of data."
For this particular service, virtual machine images were prepared, custom-made for the insurance company, under the control of the private cloud provider.
The contract basically said: we want those machine images to be available to us, outside of your influence, at all times or at regular intervals, whatever the case may be.
That's the way that this particular company did that.
