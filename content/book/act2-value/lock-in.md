---
date: '2026-07-23T00:00:00Z'
draft: false
title: 'Locked-in: switching costs'
weight: 325
notes-closed:
    - "[ ] P1 (haak, risico) — '40% van cloudgebruikers heeft geen exitplan'-statistiek nog niet verwerkt — aanbevolen als openingshaak/pull-quote"
    - "[ ] P1 (risico) — 'Exit plan even before you begin'-advies (2014-2016, drie tellingen) nog niet verwerkt — dekt de outline's eigen 'engineering posture'-bullet al volledig"
    - "[x] Technisch lock-in-voorbeeld (Gmail-migratie, 11GB/200k berichten, verwacht 20s, werd een week) verwerkt (bullet Data)"
    - "[x] Tweede technisch schaalvoorbeeld (petabyte-migratie, weken niet uren) verwerkt (bullet Data)"
    - "[ ] P2 (risico) — 'Technology bankruptcy'-term nog niet verwerkt"
    - "[ ] P3 (dubbel met Neato, kies Neato) — Microsoft e-book-DRM-shutdown-case (2019) nog niet verwerkt — sterk secundair/alternatief voor de Neato-opener"
    - "[x] Verzekeraar's anti-lock-in-contractclausule (VM-images 'outside of your influence') verwerkt (Aegon, 'Reducing switching cost') — is de payoff van unit 19's teaser; promise-lens (contract = belofte) nog niet benoemd"
    - "[ ] P2 (promises, macht) — Drie forced-migration-cases (SAP/leverancier/Microsoft Office) nog niet verwerkt — kies één"
    - "[ ] P1 (infrastructuur, macht) — Kubernetes-vs-OpenStack-netwerkeffect-voorbeeld nog niet verwerkt"
    - "[x] Broadcom/VMware-repatriation-case (2024, actueel) verwerkt (opener 'Lock-in means power')"
    - "[ ] P1 (macht, eerlijkheid) — Lock-in-is-asymmetrisch-tegenargument (ook on-prem heeft lock-in) nog niet verwerkt — nodig voor eerlijkheid van de these"
    - "[ ] P2 (infrastructuur, promises) — Identity-provider-lock-in nog niet verwerkt — kruisverwijzing unit 11a"
    - "[ ] P1 (promises, risico) — Feature-continuity-als-lock-in-mechanisme nog niet verwerkt"
    - "[ ] P3 (macht, eerder Act IV) — 'Robber barons'-historische analogie nog niet verwerkt"
notes:
    - "Kern van de unit (2026-11-23)"
    - "Deze unit is een nieuwe toepassing van vijf basisbegrippen uit het boek."
    - "Elk nieuw stuk tekst wordt hieraan getoetst."
    - "[ ] Promises (unit 16 promise-theory, 17 promise-contract): de cases zijn promise-gebeurtenissen. Vorwerk beloofde de Neato-cloud ongeveer vijf jaar, VMware trok reseller- en licentieafspraken in, Aegon legde de overdracht van VM-images contractueel vast. Een contract is een set van beloften."
    - "[ ] Games (`act2-value/game-theory.md`, regel 154-164 behandelt al switching cost en drie strategieën): verwijzen, en alleen de nieuwe stap (Y+S, winst = S) hier uitwerken."
    - "[ ] Power (Act IV, bijvoorbeeld `positions-of-power-it.md`): macht van de provider tegenover macht van de consument, en de brug naar machtsposities."
    - "[ ] Infrastructure: lock-in op infrastructuurniveau (unit 32, netneutraliteit) tegenover leveranciers- en economische macht (32a)."
    - "[ ] Risico (Act V, unit 81 deterrence): exit-strategie en een exit-optie die geloofwaardig moet zijn."
    - "Prioriteit van de overige notes (2026-11-23)"
    - "P1, cherry-picked, dient direct een van de vijf begrippen:"
    - "P1: Kubernetes tegenover OpenStack (netwerkeffect, infrastructuur, macht)."
    - "P1: Lock-in is asymmetrisch (ook on-prem), voor de eerlijkheid van de thesis."
    - "P1: Feature-continuity (promise die breekt, risico)."
    - "P1: Exit-plan-advies en 40%-statistiek, behandeld als één argumentlijn: het advies als mechanisme, de statistiek als haak."
    - "P1: Law of rent en \"provider prijst naar jouw switching cost\" (games, macht)."
    - "P1: Meten: exit cost als getal, en de deterrence-koppeling met unit 81 (risico, games)."
    - "P1: Engineering posture: prijs het en kies het bewust, standaardinterfaces en escrow als halve hedges."
    - "P2, nuttig maar niet kern:"
    - "P2: Data gravity, Salesforce, NFX-taxonomie, pizzeria-tegenover-platformkapper."
    - "P2: Identity-provider-lock-in, technology bankruptcy, één forced-migration-case."
    - "P2: Persona-check en toolbox-worksheet (86a)."
    - "P2: De losse regels \"switching cost.\" en \"kennis van hoe te migreren\"."
    - "P2: De nabrander in cloudcomputing.md over onderhandelingsbereidheid."
    - "P2: \"Wat is de vendor lock-in bij AI?\" (geen materiaal geoogst)."
    - "P3, lage prio of ander thuis:"
    - "P3: Microsoft e-book-DRM (dubbel met Neato), Robber barons (Act IV), \"Consumers buy ecosystems\" (bron onduidelijk)."
    - "P3: Oracle €40.000 per core (hypothetisch, alleen gecaveat)."
    - "P3: Cross-unit: Netflix-onboarding, Ford River Rouge, Christensen, Bart's governance-framework, insurance-NPV, minimum-viable-exitplan (unit 72)."
    - "P3: Open vragen: egress pricing en Jevons paradox."
    - "Oorspronkelijke notes"
    - "Oorspronkelijke notes: Verplaatst vanuit units-notes/unit-32a.md (2026-10-28). Veruit de grootste harvest in Act 2 (51 items) — dit bestand is zelf al een notes-draft (these, positie, case-opener-kandidaat, outline, persona-check, bronnen, open vragen), dus getrieerd als aanvulling op die draft, niet als gat in afgewerkte prose. De harvest overlevert massaal relatief tot de outline — de hoofdtaak is een klein aantal beste voorbeelden per outline-bullet kiezen, niet meer materiaal zoeken."
    - "Oorspronkelijke notes: Highly relevant: zie notes-closed voor de volledige lijst. Bronnen: 40%- statistiek — sources/oudemeuk-omkatten-why-do-people-buy-cloud-services.md + oudemeuk-why-people-buy-cloud.md (twee tellingen, citeer één). Exit-plan-advies — delivery-ccsk-overview-webinars-2015.md, delivery-ccsk-refresher-call-2014-may.md, delivery-webinar-pragmatic-cloud-2016-oct-audio.md. Gmail-migratie — delivery-ccsk-for-christmas-2015-online.md. \"Technology bankruptcy\" — delivery-ccsk66-2017-online-sept-chat.md. MS e-book-DRM — delivery-ccsk100-2019-online-july.md. Anti-lock-in-clausule — misc-cae-udemy-2015-bank-roadmap-insurance-case.md. Forced-migration-cases — archive-2024-cff-transcript-carlo-g.md, interview-johann-2024-dutch.md, interview-stefan-2024.md. Kubernetes/OpenStack en Broadcom/VMware — interview-vozza-2024.md. Lock-in-is-asymmetrisch — delivery-ccsk2023-online-cohort-patterns.md. Identity-provider-lock-in — oudemeuk-identity-management-multiple-clouds.md. Feature-continuity — oudemeuk-feature-continuity-risk.md. \"Robber barons\" — delivery-ccsk158-2025-online-mar.md."
    - "Oorspronkelijke notes: Redundantiewaarschuwing: de \"40% zonder exitplan\"-statistiek, het \"exit plan even before you begin\"-advies en de \"data liberation\"-framing maken over 5+ onafhankelijke bronnen (2014-2016) in essentie hetzelfde punt — behandel als één goed bevestigde argumentlijn. Drie vendor-forced-migration-cases (SAP, een naamloze leverancier, Microsoft Office) vertellen hetzelfde verhaal — kies één. De \"vijf antipatterns\"-lijst en de lift-and-shift-risicochecklist zijn al bij unit 28 gevlagd — niet hier een derde keer introduceren."
    - "Cross-unit flags:"
    - "Cross-unit: Minimum-viable-exitplan-checklist → primair thuis unit 72."
    - "Cross-unit: Netflix's vroege, onzorgvuldige AWS-onboarding (\"gooiden er 10.000 machines tegenaan\") → ook unit 26."
    - "Cross-unit: Ford River Rouge/broker-supply-chain-analogie → ook unit 26 of Act IV marktstructuur."
    - "Cross-unit: Disruptive-innovation-lens (Christensen: Wikipedia vs Britannica) → ook unit 57 (power shift/disruption), indien die unit bestaat."
    - "Cross-unit: €40.000/core Oracle-licentievoorbeeld (uit unit 19's onderzoek, expliciet hypothetisch in de bron) → bruikbaar hier als illustratieve kleur, duidelijk gecaveat als generiek."
    - "Cross-unit: Insurance-NPV-migratiecase's residual-risk/lock-in-mitigatiedetail → primair thuis unit 19 (plant dit al als teaser) / unit 73 (board pitch)."
    - "Cross-unit: Bart's governance-framework-ontstaansverhaal → mogelijke latere governance/ methodologie-unit."
    - "Cross-unit: switching cost."
    - "Cross-unit: kennis van hoe te migreren"
    - "<!-- NOTES DRAFT — unit 32a in book-sequence.md. Not prose yet; these are the notes on what the unit should contain. -->"
    - "Thesis"
    - "Thesis: Lock-in is the mechanism that binds the book's three lenses together: the same forces that create value for you accumulate power over you, and that accumulated power is tomorrow's autonomy risk. Lock-in is not a vendor trick; it is the flip side of integration value. Every engineering decision has pros and cons — the pro is called integration, the con is called lock-in, and they are the same thing."
    - "Position in the arc"
    - "Position in the arc: Closes Act II as the second value→power bridge (after network neutrality, unit 32). The reader has just seen why the provider deal is genuinely good; this unit shows what the deal quietly accumulates. Act IV (power) and Act V (autonomy controls, deterrence) build on it."
    - "Case opener candidate"
    - "Case opener candidate: The Neato robot-vacuum shutdown (vacuumwars link in snippets.txt): vendor discontinues cloud services, working hardware degrades. Questions to walk through: who are the actors, who had power over which asset, what could a buyer have known in advance? Also usable: \"the neighbourhood pizzeria vs the platform hairdresser\" note from snippets (revenue-share platform → service platform: it is about who has power over the important asset)."
    - "What goes in"
    - "What goes in: Network effects taxonomy — harvest selectively from the NFX \"network effects bible\" (direct, indirect/marketplace, data network effects); keep only what Neil needs to recognize, not the VC framing."
    - "What goes in: The law-of-rent analogy (snippets link): the value you create above your next-best alternative is exactly what the \"landlord\" can capture. A provider prices toward your switching cost, not toward their cost."
    - "What goes in: Data gravity: data attracts applications, applications attract more data; why the biggest switching cost is usually the data, not the software."
    - "What goes in: \"Consumers buy ecosystems from you\" (arcast notes in snippets): lock-in is often bought willingly, bundled with convenience."
    - "What goes in: Salesforce as the standing example of high switching costs (snippets)."
    - "What goes in: Measuring it: exit cost as a number you maintain, like an insurance premium — links to the deterrence frame in digital-autonomy-controls (81): an exit option that isn't credible deters no one."
    - "What goes in: Engineering posture: you don't avoid lock-in, you price it and choose it consciously; standard interfaces and escrow as partial hedges."
    - "Persona check"
    - "Persona check: Neil: gets the vocabulary to say \"this discount raises our exit cost by X\" in a procurement meeting."
    - "Persona check: Maria: annotates her diagram with the switching cost per boundary — which arrows could she re-point in a month, which in a decade?"
    - "Persona check: Toolbox appendix (86a): a one-page \"estimate your switching cost\" worksheet comes from this unit."
    - "Sources"
    - "Sources: `snippets.txt`: NFX network-effects bible, law of rent + substack link, Salesforce switching costs, arcast ecosystem notes, pizzeria/platform note."
    - "Sources: Neato case: https://vacuumwars.com/neato-ending-cloud-services/"
    - "Sources: Cloud-adoption training logs (once collected): participants' voiced switching fears — see sources/README.md harvest map."
    - "Cross-unit flag"
    - "Cross-unit flag: 2026-11-12: act1-foundations/cloudcomputing.md's Measured service-sectie krijgt een nabrander over lage onderhandelingsbereidheid bij cloud providers (geen SLA-dialoog, take-it-or-leave-it). Daar primair uitwerken; hier alleen de \"provider prices toward your switching cost\" link behouden als die unit het mechanisme al concreet maakt."
    - "Open questions"
    - "Open questions: Does egress pricing deserve its own worked example (numbers date quickly) or a timeless treatment?"
    - "Open questions: Jevons paradox / platform-scale note from snippets: in scope here, or Act IV?"
    - "Los: Wat is de vendor lock-in bij AI?"
    - "Los: -- here is where the real story starts."
---

### Lock-in means power

In 2023 VMware was acquired by Broadcom.
The data centers of more than 400,000 organizations depend on VMware's virtualization products.
Once the deal was closed, Broadcom canceled the entire partner program and drastically changed the licensing structure.
Some customers of VMware reported a tenfold increase in their license cost.
While those customers wanted an alternative technology,
many found out that switching was very costly, and slow to pay back.
Because of that cost, customers were locked-in, and Broadcom had the power to raise the price.
That is the game that is being played here.

Lock-in gives the provider power to create value for themselves, sometimes at the expense of the consumer.
But the consumer can also gain power and value.

Every time you select an external provider, or even a piece of open source, you are creating a dependency.
Ideally this dependency creates value, because the provider takes away effort from you, and is charging you less than it would cost if you did it yourself.
In that sense, the provider increases your power.

The [promise](/book/act1-foundations/promise-theory/) of lock-in is: stay with me, and I will make your life easier.

In my courses I used to joke and compare lock-in to a marriage.
Sure, you can have wrinkles in the relationship from time to time, but if you are happy overall, don't get a divorce.

The dependency also creates risk, for example because your providers may fail or have interests that don't align with yours.
Neato sold robotic vacuum cleaners and promised a bundled cloud service that allowed 'smart' operation of the cleaner.
But the company was taken over a few years after that, and after a while the parent company had no interest in continuing the cloud service.
My speculation is that this was
because there was no subscription revenue.
The promise of continued cloud service was broken, leaving the vacuum cleaners with severely limited functionality.
The vacuum cleaner is locked-in to a service that doesn't even exist anymore.

There are many more examples of SaaS providers going out of business.
My father had a lot of his pictures stored on fototime.com.
After a fire in an OVHcloud datacenter, that service went out of business.
While we had copies of those pictures elsewhere, the metadata he entered was lost.

Let's dive into what happens when the dependency stops delivering a net benefit, and how that can be analyzed.

### Switching cost

Changing a provider, or a technology, needs work.
That work incurs 'switching costs', and they come in many forms.

- Contractual. As a client you may face termination fees, and a new contract has to be negotiated.
- Data. I once moved my mail from one Gmail account to another. At two seconds per message, this took almost a full week. At petabyte scale, the industry joke is that it is faster to run a truck full of storage devices than to use the internet.
- Technical. Services from a provider are consumed through certain formats and APIs. This represents a development investment on the consumer side that may need to be redone for a new provider or solution. Moving away from VMware (or to VMware for that matter) requires changing a lot of virtual machine images, scripts, and monitoring.
On the other hand, switching between brands of desktop PCs is a lot easier.
- Procedure and skills. People know how to handle the dependency, and get the most out of it.
New technology requires effort to retrain to. The VMware example comes to mind again. But if you are audited for something like an ISO/IEC 27001-based certification, many of the controls are specific to the technology, and have to be redesigned.
- Organizational inertia. It is easier to not change and endure the consequences in the short run than to
'rock the boat' for an uncertain long-term benefit.
Machiavelli, the 16th-century political writer said: "It must be considered that there is nothing more difficult to carry out,
nor more doubtful of success, nor more dangerous to handle, than to initiate a new order of things. For the reformer has enemies in all those who profit by the old order, and only lukewarm defenders in all those who would profit by the new order."
We see this in on-premises services as well, where technology lock-in also includes a lot of supporting staff.

Network effects can also make switching harder.
For example, the more systems, or people, or data, you can connect to with a certain technology, the more valuable that technology becomes, and the more you will lose by switching.
In 1997 the company I worked for had Steve Deering over for a presentation.
He was the lead designer of IPv6, solving many limitations of IPv4.
It was functional back then, and promising significant benefits in terms of administration ease.
Over the years I have participated in a few working groups and other activities to support that migration,
but it took almost two decades to reach even 5% penetration, and three decades for IPv6 to reach 50% penetration.
If the whole world, clients and servers, is on IPv4, you gain nothing by moving or even only adopting IPv6.
In this case, lock-in isn't even a deliberate strategy from a provider.

The same effect plays out in the consumer world.
The social media example is trying to move from X to Mastodon.
The value of X is mainly in the people you connect with, and they don't necessarily follow you to Mastodon.

While we understand lock-in as power that a provider has over a consumer,
this principle extends to open source.
Switching between open source options, or between open source and providers, also incurs lock-in costs.
You can change your datacenter from VMware to OpenStack or Proxmox, but it is an effort to do so, as the previous points illustrate.

### The game

We looked at switching as a game in [Games of value and power](/book/act2-value/game-theory/).
Let's get deeper in it.
The moves are adoption, the players are the provider and consumer, and the outcomes are the value you get and the price you pay.
Here is a list of game moves that apply to this situation, while making a few assumptions:

- The provider has a solution or service that is different from a competitive offering. Think of a SaaS offer or a mobile phone contract.
- You can stick to the provider's offering, with a price of X.
- You can also switch to a competitive offer, with a price of Y, probably because they look cheaper.
- Switching requires you to do work, and there will be additional expenses. Let's call that switching cost S.
- Assuming the two providers have the same cost Z, for the service,
neither of them will price below Z, or they will lose money.
- Assuming you have switching cost S, your current provider can price you Y+S before your move to switch to the provider with price Y is beneficial to you. In the VMware case that switching cost is high for many enterprise customers, which is why Broadcom can raise the price.
- Unless the competition is willing to price (Y) below their cost (Z), your current provider can make a profit equal to your switching cost. The higher your switching cost, the higher their profit.
- Lowering your switching cost gives you a better position to get a more competitive deal.

Once you see the game, you can choose your moves.

Choice is power.

### Reducing switching cost

The number one exercise that will help you reduce switching cost is to develop an 'exit strategy'.

Earlier we looked at [Aegon's Solvency II case](/book/act2-value/the-solvency-ii-deadline/), where they had a large workload running at a Managed Services Provider.
An essential component of that architecture was the configured virtual machine image.
They contractually required the provider to hand over those images.
That would save them the time to rebuild them should they want to exit the current relationship and find another provider.

The general approach to finding switching costs you can reduce is to take your [deployment diagrams](/book/act1-foundations/deployment-diagrams/) and
look for control boundaries, as Aegon did.
Almost by definition, these are places where you can switch providers and solutions.
Internal control boundaries represent architectural decisions.
External control boundaries point to external providers.
In both cases you can look at the lines that cross the boundaries and look at the contract, the [set of promises](/book/act1-foundations/promise-contract/) that are being kept.
Ask yourself how easily those promises can be made with an alternate provider, system component, application, or infrastructure.

As these boundaries are places where information crosses, the choice of standards and formats for that information makes a lot of difference.
The more it is an open and widely used standard, the less provider lock-in you will experience.

Don't get too hung up on switching costs.
Organizations switch their systems all the time, sometimes planned, sometimes as the result of disasters.
The major difference between a planned application migration and a disaster recovery is the timescale.
That timescale allows you to plan activities ahead and be prepared for them.
That is why I often say that application migration is like disaster recovery in slow motion.
Consequently, an application migration that lacks planning has a high chance of ending in a disaster.

The business case for switching is similar to the business case for any investment.
In the eighties I was developing research software with a team,
and every new research direction was increasingly more complex and
cumbersome in software development.
The underlying situation was that the software architecture no longer fit
our new insights and requirements.
So we had to switch the architecture and start from scratch again.
For three months we did not deliver a single new feature.
But when the redesign was done, we more than tripled our development speed.
That three months repaid for itself very quickly.

The switch is costing you time and money upfront in a variety of ways, which you can analyze and estimate by following the points mentioned earlier.
The benefits come later, and they can be analyzed with the principles in [Why the deal was good](/book/act2-value/), such as [process improvements](/book/act2-value/value-in-process-improvement/) and better control.

Understanding and lowering switching cost gives you power over your suppliers, because it can act as a [deterrent](/book/act5-risk/digital-autonomy-controls/) to their
ambitions to raise prices.

### Switching costs are inherent in automation

We don't just lock ourselves into specific providers.
As individuals, companies, and even society as a whole, we are locked into the technology of automation itself.
[Then the machines started promising](/book/act3-delegation/) dives a little deeper into the dynamics of our lock-in to automation.
