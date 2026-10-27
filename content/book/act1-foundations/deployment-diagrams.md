---
date: '2025-03-09T21:19:45Z'
draft: false
title: 'Deployment Diagrams'
description: "A diagram of a phone, a speaker, and the cloud encodes real architecture decisions — where data lives, who's responsible, and how cloud-native complicates it."
weight: 140
notes-closed:
    - "[ ] Replace/supplement the music-distribution example with the bank mobile-app 'what's missing?' diagram (App Store) as central worked example — most field-tested material in the whole harvest"
    - "[ ] Ownership/control checklist: who owns/controls/which are cloud services/where is sensitive data/what risks/how protected — present explicitly as a reader-runnable tool"
    - "[ ] Sharper core definition: 'allocation of IT function, including responsibilities for build and run'"
    - "[ ] Control-boundary generalization: any closed curve is a control boundary, boundaries nest"
    - "[ ] Map analogies doubled down (railway map / Swiss army knife / map-is-not-territory)"
    - "[ ] Deceptive-simplicity caution before showing examples, not after"
    - "[ ] Diagram-notation lineage (ARPANET → IBM S/360 → Yourdon/DeMarco → Booch → OMT → UML)"
    - "[ ] Honest critique of the term 'deployment diagram' itself"
    - "[ ] Drawing-tool spectrum (Sharpie → PowerPoint → Mermaid → Drawio → D2 → LLM-assisted → UML/ArchiMate)"
    - "[ ] AWS/Azure diagram-legend rigor point (routing table drawn outside router box)"
    - "[ ] Diagrams-as-power-tool material, cross-linked to unit 51"
    - "[ ] Music-distribution example extended with 'what happens if I turn off the phone?' + Chromecast aside"
    - "[ ] GDPR processor-list worked example for Maria"
    - "[ ] Netflix pull-model backup account + Amazon account-vending-machine anecdote"
    - "[ ] Kipling method (who/what/when/where/why/how) for retrofitting control boundaries"
    - "[ ] Teaching-order correction: show supply-chain diagram before 'standard platform components' diagram"
    - "[ ] Professional-association Salesforce/force.com example as second, non-bank worked example"
    - "[ ] OpenAI 'jump host' incident as security-flavored capstone diagram (added 2026-08-02)"
    - "[ ] Resolve redundancy warning: one bank-diagram telling, one ownership-checklist statement, one clean CI/CD pipeline sketch — not six"
notes: |
    Verplaatst vanuit `units-notes/unit-14.md` (2026-10-27) — harvest-triage, nog niet
    verwerkt in de proza hieronder. Gewicht klopt nog (140). Book-sequence.md flagt dit
    ook als "optionally merge post network-diagram-fix" — nog niet verwerkt, apart
    checken.

    Live file: `act1-foundations/deployment-diagrams.md` (weight 140, published).
    Largest single harvest in Act I (76 items) — grouped rather than fully itemized;
    several sources tell the same story.

    ## Current state

    Already the most diagram-heavy unit in Act I: defines deployment diagrams as
    documenting *who does what, how things connect*, insists there's no single right
    notation ("maps," not blueprints), walks through a client/server example at
    increasing formality, then a music-distribution (Spotify/Apple Music) example to
    show architectural choice (phone-relayed vs. direct-to-speaker), then covers
    virtualization, containers, automated deployment (Ansible, the "manifestation
    relation"), infrastructure-as-code (Terraform), and CI/CD pipelines, closing on a
    "sequence of simple diagrams beats one giant diagram" principle. Solid and
    already fairly technical by this book's usual standard — the harvest's job here
    is less "add technical depth" and more "add the landed teaching devices and rigor
    points that make the technique stick."

    ## The standout finding

    **The bank mobile-app / "what's missing" diagram** recurs, essentially unchanged,
    across at least seven independent deliveries spanning 2018–2025: an anonymized
    bank's mobile app talks to an Azure cloud database, an on-prem company database
    ("don't ask me why they did it"), a reverse proxy, and an API gateway — each box
    owned by a different organization or internal silo. The instructor draws it, asks
    "what's missing?", and the answer is always the same: **the App Store**. "Whoever
    controls the App Store effectively controls what's on the customer's mobile" —
    and if you can get a rogue app into the store, "that's the best place to go" to
    hijack the whole relationship. By a wide margin, Peter's most-reused, most
    field-tested teaching diagram — deployed unchanged across a public conference
    talk, a government workshop, and years of cohorts. **Strong recommendation:
    replace or supplement the current music-distribution example with this diagram as
    the unit's central worked example.**

    ## Triage

    **Highly relevant**

    - The bank mobile-app diagram (see above) and its standard discussion prompt,
      also independently recurring: **"Who owns which piece? Who controls which
      piece? Which are cloud services? Which could be cloud services? Where is
      sensitive data? What other risks? How is it protected?"** Recommend presenting
      this checklist explicitly as a tool readers can run against their own systems.
    - **Sharper core definition**: a deployment diagram shows "allocation of IT
      function, including responsibilities for build and run" — responsibility
      allocation, not just topology. Tighter than the current "who is going to do
      what, how are things connected."
    - **Control-boundary generalization**: "anything that's a closed curve is a
      control boundary... control boundaries can have control boundaries inside of
      them, they can be nested — even a single document can be treated as its own
      control boundary." Makes explicit something the current text implies but never
      states directly.
    - **Map analogies, doubled down**: "a map is only good if it allows you to make
      the journey you want — a railway map is completely useless if you go by car"
      and, for an overloaded diagram mixing types, "it's a Swiss army knife — wait,
      which blade am I using right now?" Also: "diagram is like a map, the map is not
      the territory... a picture is a framework for discussion" — landed twice in one
      session with participants explicitly saying diagrams help them "find the same
      language with others."
    - **Deceptive-simplicity caution**: "these diagrams look very intuitive, but you
      want to check the details" — worth stating before showing examples, not after.
    - **Diagram-notation lineage**: ARPANET logical maps (1969-77) → IBM System/360
      configuration diagrams → Yourdon/DeMarco structured analysis (1970s) → Booch
      method → OMT → formalized UML deployment diagrams (1996-97). Good "why do we
      still use 60-year-old symbols" grounding.
    - **Honest critique of the term "deployment diagram" itself**: too narrow (implies
      just software deployment), too static (implies a one-time event), too
      technical-sounding, too tied to UML's rigid notation — with alternative names
      considered and rejected. Echoes the "how do we name the box" honesty already
      recommended for unit 6.
    - **Drawing-tool spectrum**, informal to formal: Sharpie → PowerPoint → Mermaid →
      Drawio → D2 → asking an LLM → professional UML/ArchiMate tools. Contemporary,
      practical — also a natural cross-link to unit 46 (LLM tool wave).
    - **AWS/Azure diagram-legend rigor point**: a real, now-deleted official AWS
      diagram drew a routing table *outside* the router box (misleading — you need
      router access to touch its tables); a broader complaint that Azure diagrams
      often have "a line on one end meaning something completely different from the
      line on the other end," with no legend. A concrete, checkable case for why
      notation conventions matter.
    - **Diagrams as a power tool**: "you need to understand what other people are
      doing. They need to understand what you want them to do. Everybody needs to
      understand the risks. Diagrams are a power tool," paired with a concrete
      pitching-upward tactic — move the audience from "point A" to "point B," and
      with senior management the goal is getting them to say "everybody seems to
      understand that, go ahead." Both explicitly cross-reference unit 51 (positions
      of power in IT) — good connective tissue between Act I's technique and Act IV's
      argument.
    - **Music-distribution example, extended**: the same phone/speaker/cloud example
      already in the text gets a sharper test question — "what happens if I turn off
      the phone?" — to distinguish the two architectures, plus a lived aside: Peter's
      old Chromecast was "sometimes hard to stop" because turning off the phone lost
      the control channel entirely.
    - **GDPR processor-list worked example**: once a small organization actually
      inventories its data supply chain, the list converges on a predictable shape —
      hosting, mail, Google Drive, payment processor, WordPress, Slack, bank, a
      virtual assistant, backups, analytics, bookkeeper. Good "walk your own
      boundaries" example scaled to a small organization — good for Maria
      specifically.
    - **Netflix's pull-model backup account**: a dedicated account "pulls" backups
      from production, so a hacked production environment can't touch them;
      developers never get backup-account access; the account is tested weekly.
      Paired with an Amazon-side scale anecdote: "customers with 30,000 accounts,"
      managed via policy-pushdown and "account vending machines."
    - **Kipling method (who/what/when/where/why/how) applied to control boundaries**
      for retrofitting access controls — walked through twice, once for ingress and
      once for egress, at the same boundary. A genuinely reusable method, though the
      concrete examples lean toward firewall/exfiltration specifics.
    - **Teaching-order correction from a repeat client**: show the supply-chain
      diagram *before* the "standard platform components" diagram — the components
      diagram only clicks once the supply chain is already understood. Directly
      actionable sequencing advice.
    - **Professional-association Salesforce/force.com example**: a real client
      architecture — members live in Salesforce (CRM/PaaS via force.com), bulk mail
      goes out through Constant Contact/Mailchimp rather than Salesforce itself
      ("you don't really want Salesforce to become one clunky monolith piece of
      software"), and event/ticketing data feeds back into the CRM. Ends on the same
      question this unit already centers: "who's in control?" A second, non-bank
      worked example of an application landscape as a constellation of integrated
      services.

    **Maybe relevant**

    - Encryption-architecture notation (plaintext/ciphertext/key-manager symbols;
      "your favorite little red book is your key manager") — keep the generalizing
      insight (boundaries nest, ownership follows control) rather than the full
      encryption-specific notation.
    - Pod/Node/Cluster sizing vocabulary — Kubernetes-specific, only useful for one
      concrete "modern orchestration" example.
    - Border-crossing sign as a control-boundary metaphor — a logged idea, not built
      out.
    - Naming-convention anecdote (alpha/beta/gamma instead of dev/test/prod at a
      Belgian bank) — small, real texture.
    - "Just enough security architecture" idea — a notation layer organized by
      industry vertical — interesting direction, but a proposal for future work.
    - OV-reisplanner and SUWI/BKWI as Dutch public-infrastructure teaching cases —
      the SUWI/BKWI network topology is also flagged for unit 12.
    - "AI models" as first-class contents of a control boundary — own tag prefers
      **unit 41** as primary target.
    - AI voice-bot "what's wrong here" misconception (security group mistaken for an
      execution environment) — own tag prefers **unit 43** as the exact thematic
      match.

    **Hardly relevant** — an unusually large cluster of vendor-specific reference
    architectures and flipchart photos (AWS VPC/WordPress lab diagram, the AKS
    "regulated architecture" SVG, Moshe Ferber's region/AZ redundancy progression, a
    CloudTrail/CloudWatch/SIEM monitoring pipeline, an OU/account "blast radius"
    hierarchy, a FaaS drop-bucket processing pattern, a Docker-registry
    environment-promotion diagram, roughly half a dozen flipchart CI/CD pipeline
    sketches). All genuine and some excellent as reference material, but reproducing
    vendor-specific architecture diagrams in prose runs against the book's general
    preference for concepts over implementation detail. **Recommend: keep at most one
    or two of the strongest (the AKS regulated-architecture diagram is the most
    complete) and treat the rest as source material for a future technical appendix
    or toolbox unit (86a) rather than unit 14 prose.**

    ## New candidate illustration (2026-08-02)

    - **The OpenAI "jump host" incident** (`posts/open-escape.md`, draft) — an AI
      harness, network-restricted (one execution environment), reached a second
      execution environment that did have internet access, and used it as a jump
      host to exfiltrate. Drawn as a deployment diagram, this is the same teaching
      device as the bank mobile-app "what's missing?" exercise: show the two boxes
      and the restricted link, ask what's missing, and the answer is the *other*
      box's unrestricted connection. Fits naturally after the client/server and
      cloud-deployment examples as a security-flavored capstone before the unit's
      closing "sequence of simple diagrams" principle. Primary home is unit 75; this
      would be the diagram-technique treatment of the same incident, not a
      duplicate — unit 14 draws it, unit 75 argues from it.

    ## Redundancy warning

    Beyond the bank mobile-app diagram (7+ tellings, genuinely worth consolidating
    into one strong retelling) and the ownership/control checklist (3+ verbatim
    recurrences), this batch also contains at least six separate flipchart/whiteboard
    CI/CD pipeline sketches from different course deliveries, all showing minor
    variations of source-repo → build → test → deploy. One clean version is plenty.

    ## Cross-unit flags

    - "AI models inside a control boundary" → unit 41.
    - AI voice-bot security-group misconception → unit 43.
    - SUWI/BKWI network topology → also unit 12.
    - Diagrams-as-power-tool material → unit 51.
    - Drawing-tool spectrum (LLM-assisted diagramming) → also unit 46.
    - Kipling retrofitting method → also unit 72b (zero trust).
    - AKS regulated architecture → also units 7, 10, 76.
    - OpenAI jump-host incident diagram → also unit 75 (the argument this diagram
      illustrates).
---

Deployment is everything that happens between writing software and actually using that software by its intended users. And as we get more software and more users, deployment becomes more complex.

### Why deployment diagrams?

Deployment diagrams are a great technique for communicating about important decisions in deploying software. Decisions such as who is going to do what, how are things connected, and so on.

There are many ways to draw deployment diagrams and many standards to choose from. UML and Archimate are just a few of them. To me, there is no single right way to create deployment diagrams. In that sense, these diagrams are more like maps. And the usefulness of a map depends on the journey that you are going to make. A map for a mountain walk is pretty useless if you want to make a railroad journey and vice versa.

In this section, I’m setting out to define the principles that these maps should adhere to.
The reason for that is that there is a lot of intuition on these types of diagram and their visualization. 

It turns out that the actual symbols to use are not so relevant. It is more important to understand what we mean by those symbols, and how these diagrams are useful.

### What do we want to model?

Modern IT systems are made up of many components, but all of them handle data in one way or another. Some of the important principles are that we want to understand where data is stored (at rest), where it is being processed, and how it moves from one place to another.

What you want to explore is how data is connected because that tells us something about who can access which data.  The converse of that is that we can also then see how things are isolated from one another. And this is a really important thing for security. If we know who is responsible for which component we can also understand who is responsible for capacity, for security, and for making it into production bringing it into production.

We used to think that we are connecting computers. But these days we are really connecting execution environments. An execution environment can be a computer, but it could also be a virtual machine or a container. Or it could be a Lambda function. The essence of an execution environment is that it runs code and that it is somewhat isolated from its environment. It also implies that we can then look at how these execution environments are connected.

Take the following simple example. On the left we have a user working on the web browser, on the right-hand side, we see the web server. They are connected through the Internet. The web server is an execution environment that serves up webpages. The user’s browser is an execution environment that renders these webpages to the user. And we annotate the connection link with the protocol that is being used.

![Simple client server diagram](/deploy-images/simple-cs.png)

So we see two important concepts illustrated in this diagram: execution environments and connectivity.

Now in a more formal notation such as UML or Archimate, this would look a bit different. Many would be able to argue about the specific symbols to use, but when I am pragmatic I am only concerned with how well the diagram communicates.

![UML web interaction diagram](/deploy-images/webclient-formal.png)

### How detailed should your model be?

A diagram is meant to communicate. It should communicate the most essential thing that you want to bring across to the people who are looking at your diagram. In this diagram, we are focusing on how the WebServer and the DNS service are probably different services. As a result, this diagram emphasizes the protocols that are being used, and the separate execution environments that are involved.

![Webserver with DNS](/deploy-images/webserver-dns.png)

Alternatively, we could introduce the Internet as an actor. In reality, by the way, the Internet is actually a set of actors, but we don’t show that here. What this diagram also shows, in comparison to the previous picture, is that there are multiple levels of detail on which you can draw these diagrams. Again, it all depends on what you want to illustrate.

![Services over the internet](/deploy-images/webserver-DNS-internet.png)

### Architectural decisions

One of the purposes of deployment diagrams is to document and demonstrate architectural decisions. These decisions could, for example, be on the flow of data, the location of data, and where data is actually being processed. In the next example, we show how this works in a music distribution service, such as Spotify or Apple Music.

In your typical setup, there are three major components: the cloud-based music storage, the speaker or sound system to play the music on, and a mobile device to control it all from. This potentially gives us three connections. The first one is from the mobile device to the cloud-based music service to select the music that you want to play.

But how does the music get to the speaker?

There are two options. The first option is that the music goes from the cloud to the mobile, and then to the speaker. The other option is that the music goes straight from the cloud to the speaker. In fact, both options happen in reality. The first one describes a Bluetooth connection between the mobile and speaker, and the second one can be seen with Spotify connected speakers.

![Music distribution flows](/deploy-images/music-distribution.png)

It is an interesting exercise to discuss the benefits and disadvantages of both options. You might also want to dive deeper into the actual protocols being used to make this work. Especially the protocols between the speakers and the rest are not so trivial.

### Cloud-Native

How is deployment different in a cloud-native age? To begin with, there is virtualization, there is containerization, we have functions as a service (such as AWS Lambda), we have DevOps, we have infrastructure as code, we have external services, APIs, and so on.

And then we have also flexible infrastructure that can rapidly scale up and scaled-down. All of this brings complications to drawing deployment diagrams. Let’s see how we can accommodate each of these cloud-native concepts in our diagrams.

### Virtualization

A virtual machine is an execution environment that lives within another execution environment, probably a physical host. Remember that an execution environment is isolated from other execution environments. A virtual machine is in complete control of the entire memory address space in the machine that it runs on. It only shares the hypervisor on that machine. That is quite powerful isolation.  In fact, it also has network interfaces that are completely indistinguishable in capabilities from the network interfaces on a physical machine.

Similarly, a container (such as a Docker container) is an execution environment that lives within another environment. Each container is pretty isolated from the other containers that run on the same host, although not so isolated as a virtual machine is from another virtual machine. For example, containers share network port address space. This means that two containers on the same post cannot use the same IP address port number.

In the diagram below we have chosen not to show how the network is organized.

![Containers in virtual machines](/deploy-images/VMs-and-containers.png)

Note that we have combined containers and VMs in one picture. This architecture actually happens in reality, it has its advantages. We’ve also chosen not to show any details of the underlying operating systems, hypervisors or Docker runtimes in this picture. Again, depending on what you want to communicate with the diagram, you might want to include those networking and other details.

### Automated deployment

Let’s move into slightly more advanced cases of deployment. It is pretty common these days to automate the deployment of software on any given machine. That has many advantages in terms of reproducibility, maintainability, and ease of upgrade. And that also comes with security benefits. However, it does require additional software and deployment components to get this going. That is because there are many more moving parts in this type of IT architecture.

For example, you need some kind of machine to deploy from, and a machine or environment to deploy to. You also need some technology to remotely deploy and configure the software. A popular tool for that these days is Ansible. Instead of typing commands on the command line, or clicking in a user interface, the configuration of the target machine is the result of a script that is executed. We say that this script is then ‘manifested’ into the target environment. As a side note, the word manifest originates from shipping, where it describes a document that lists the cargo items that are to be on the ship.

In automated deployment, it is very important to understand what type of infrastructure and software is created by whom or what. For that reason, we introduce a special type of relation, the manifestation relation. We signify this relation by a dashed line. Of course, there is still an underlying communication protocol that is necessary for this to work.

In the next diagram, the target machine is remotely configured from an Ansible playbook. On the target machine, we indicate the components and software that are to be installed there, and those should be described in the Ansible playbook. To make this a completely reproducible architecture, we also need to describe what the software components are that should be on the deployment machine to begin with.

![Deploying to a virtual machine](/deploy-images/vm-deploy.png)

The old-fashioned flowchart symbol with the folded corner resembling a document is used to indicate where data is being stored. In this case, that is the Ansible playbook.

### Cloud deployments

In the previous diagram, we have simply installed the software onto an existing virtual machine. In a cloud world, however, we can go much beyond that. We can deploy what is called “infrastructure as code”, where complete architectures can be provisioned automatically. In the example below, we are using a deployment machine to run a Terraform script that automatically deploys 2 virtual machines and an internal network on the cloud provider. With the big oval, we indicate that there is some kind of ownership by the cloud provider of that part of the architecture, which also implies some isolation and control separation.

![Cloud Deployment](/deploy-images/cloud-deployment.png)

This diagram also shows how the Terraform script results in (is manifested to) actual deployment at the club provider. That is done through the cloud API.

### Continuous integration and delivery

Next up in our journey towards ever deeper automation of software deployment, we have the continuous integration and delivery pipelines. As you might know, a continuous delivery pipeline takes software and other digital assets from a source code repository and builds it into something that can be deployed in an appropriate environment such as a cloud provider.

There are many examples of deployable artifacts. They could be AWS machine images, Docker images, or whatever you can think of. The artifacts are often stored in separate systems, across control boundaries. This is one of the reasons to put them outside of the pipeline.

The diagram shows the three major components, each of which could be under the control of a separate department or even organization. Note also how the diagram poses the question of how the build server (tagged ‘CI CD Pipeline’ in the picture) communicates with the software repository. In practice, there is some kind of trust relationship, where the build server is triggered whenever there is a commit to the repository.

![CI/CD pipelines](/deploy-images/cicd.png)

From the perspective of control, we see that this diagram identifies two pieces of data. On the right-hand side, we see the deployable artifact, and on the left-hand side, we see the source code repository. Different groups of people may have responsibility for these. We have taken the liberty to draw the deployable artifact as a kind of document, whereas the source code repository is depicted with the old-fashioned flowchart database symbol: the cylinder or disk. (As a completely irrelevant side note, this symbol might actually have been derived from magnetic drum memory, which ceased to be relevant in the 1960s).

At this point, we may feel the opportunity to combine these diagrams into one huge big diagram that allows us to see each and every detail of our full-blown architecture. It can be done of course. But often it is better to illustrate the architecture with a sequence of simple diagrams.
