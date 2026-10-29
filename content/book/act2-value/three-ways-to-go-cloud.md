---
date: '2018-06-03T17:06:57Z'
draft: false
title: 'Multiple ways to go cloud'
weight: 280
notes-closed:
    - "[ ] Dutch Olympic Committee OS2010-case (Flickr/Twitter-aggregatie i.p.v. half miljoen euro servers) nog niet verwerkt — aanbevolen als cloud-native case-opener"
    - "[ ] Netflix DVD→streaming-pivot als 'game changer'-voorbeeld nog niet verwerkt — check eerst of elders al gebruikt"
    - "[ ] 'Private infrastructure is dead, private platform (Kubernetes) is de weg' nog niet verwerkt"
    - "[ ] Lift-and-shift-gone-wrong-case ontbreekt nog altijd (4x onafhankelijk gesignaleerd gat, 2023-2024) — checklist bestaat al, needs één worked example (CFF-interview-materiaal kan die leveren)"
    - "[ ] Drie misconceptie-clusters ('het is er al', 'het kost niet veel', 'ik hoef niets te doen') + klantspijtverhalen nog niet verwerkt"
    - "[ ] Segmented-migration-case (spoorwegbedrijf, PCI-DSS-scope apart van elastische workloads) nog niet verwerkt"
    - "[ ] 'Resilience debt'-term (mainframe-achtig platform weerstaat migratie) nog niet verwerkt"
    - "[ ] Genoemde financiële-sector-caserooster (CapitalOne, BankInter, KBC, Davinci) nog niet verwerkt — check overlap met unit 19 (geen, bevestigd)"
    - "[ ] Drie klantposities (hybrid-by-necessity/on-prem-by-choice/middle lane) nog niet verwerkt"
    - "[ ] Cloud-repatriation als actuele trend nog niet verwerkt"
    - "[ ] Mechanisme waarom lift-and-shift business cases meestal falen (setup-kosten herhalen zich) nog niet verwerkt"
    - "[ ] Twee-lens-framing (cost-of-IT vs organizational-value-of-IT) nog niet verwerkt"
notes: |
    Verplaatst vanuit units-notes/unit-28.md (2026-10-28). Veruit de grootste
    harvest in Act 2 (63 items) — hier zwaar gegroepeerd, niets weggelaten maar veel
    bijna-duplicaten gebundeld. Unit is conceptueel compleet maar volledig
    voorbeeldvrij; de harvest is precies waar de unit nu niets heeft.

    Redundantiewaarschuwing: minstens vier onafhankelijke bronnen (2023-2024)
    signaleren hetzelfde onopgeloste "we moeten een lift-and-shift-gone-wrong-case
    schrijven" — behandel als één bevestigd gat, niet vier losse items. De "vijf
    antipatterns"-lijst en de "patroon→gevolg→tegenargument"-mindmap dekken hetzelfde
    terrein — gebruik er één. De drie-motieven-/drie-wegen-taxonomieën (deze unit's
    eigen drie wegen, de cost-of-IT/cost-of-business/game-changer-framing, en de
    substitution/optimization/innovation-framing uit unit 20) overlappen substantieel
    — één editorial pas nodig om te bepalen welke primair is.

    Cross-unit flags:
    - OS2010-case → ook genoemd in unit 19's bronnenlijst als secundair item.
    - Verzekeraar/Solvency-II-voorbeeld in de caserooster → opgelost: geen overlap
      met unit 19 (die bleef smal en Aegon-specifiek; generiek CSA-materiaal is vrij
      voor gebruik hier, zie unit 19's notes "cutting-room floor").
    - "Onze cloud is geen cloud" → primair thuis unit 10.
    - SaaS/IaaS-tweedeling (techneuten vs business) → ook unit 31.
    - Elderly-care "adoptie opgelost, use-case is bottleneck" → ook unit 20.
    - "Vijf stappen betere cloudprovider" → ook unit 27.
    - Docker-adopter-roll-call (Amsterdam, Turner, ING, PayPal, GE) → overweeg een
      technischer/latere infrastructuur-unit.
    - Build-vs-buy RAG/AI-framing → beter thuis in een latere AI-unit (Act III/IV).
---

Public cloud migrations come in different shapes and sizes, but I see three major approaches. Each of these brings value in its own way, and they all have very different technical and governance implications.

### Three approaches

Companies dying to get rid of their data centers often get started on a **‘lift and shift’** approach, where applications are moved from existing servers to equivalent servers in the cloud. The cloud service model consumed here is mainly IaaS (infrastructure as a service). Not much is outsourced to cloud providers here. Contrast that with SaaS.

The other side of the spectrum is adopting **SaaS solutions**. More often than not, these trickle in from the business side, not from IT. These could range from small meeting planners to full blown sales support systems.

More recently, developers have started to embrace cloud native architectures. Ultimately, both the target environment as well as the development environment can be cloud based. The cloud service model consumed here is typically PaaS.

I am not here to advocate the benefits of one over the other, I think there can be business case for each of these.

The categories also have some overlap. Lift and shift can require some refactoring of code, to have it better fit cloud native deployments. And hardly any SaaS application is stand alone, so some (cloud native) integration with other software is often required.

### Profound differences

The big point I want to make here is that there are **profound differences** in the issues that each of these categories faces, and the hard decisions that have to be made. Most of these decisions are about **governance and risk management**.

With lift and shift, the application functionality is pretty clear, but bringing that out to the cloud introduces data risks and technical risks. Data controls may be insufficient, and the application’s architecture may not be a good match for cloud, leading to poor performance and high cost.

One group of SaaS applications stems from **‘shadow IT’**. The people that adopt them typically pay little attention to existing risk management policies. These can also add useless complexity to the application landscape. The governance challenges for these are obvious: consolidate and make them more compliant with company policies.

Another group of SaaS applications is the reincarnation of the **‘enterprise software package’**. Think ERP, CRM or HR applications. These are typically run as a corporate project, with all its change management issues, except that you don’t have to run it yourself.

The positive side of SaaS solutions, in general, is that they are likely to be cloud native, which could greatly reduce their risk profile. Of course, this has to be validated, and a minimum risk control is to have a good exit strategy.

Finally, cloud native development is the most exciting, rewarding and risky approach. This is because it explores and creates new possibilities that can truly transform an organization.

One of the most obvious balances to strike here is between speed of innovation and independence of platform providers. The more you are willing to commit yourself to an innovative platform, the faster you may be able to move. The two big examples I see of that are big data and internet of things. The major cloud providers have very interesting offerings there, but moving a fully developed application from one provider to another is going to be a really painful proposition. And of course, the next important thing is for developers to truly understand the risks and benefits of cloud native development.

Again, big governance and risk management issues to address.
