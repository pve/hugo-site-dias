---
date: '2025-05-13T13:29:23Z'
draft: true
title: 'Promise Multiparty'
weight: 40
---

Intermediaries, brokers. 3 actortypes (or more)

An intermediary adds value between client/server, source/sink
I.e. index, filter, conversion, (de)couple
(e.g. Relate to ’broker’)
Indexen
Gebruikersadministratie, ten behoeve van autorisatie en TTP diensten
Abonnementadministratie, welke afnemers of belangstellenden zijn er?
Bronindex, welke bronnen hebben informatie over een bepaald sofinummer (search engine)?
Functionaliteit
formaat conversie, filtering
vraag/aanbod matching
Performance
verdelen en routeren van berichten, multicasting
aggregatie
caching
bundeling van afspraken (bijv. SLA)
- distributor/directory
authorization
choice / arbitration / load balancer
service integration
pubsub. Intermediary holds source and subscriber directories. Notice the various commitments that can be made. Examples: newsletter, podcast subscription
multicast

subscription toepassing: chatbots streaming?

Pattern composition: Tell me the current state, 
subject to authorization intermediary, 
then subscribe me to changes

indexesEen bronindex houdt bij waar welke informatie beschikbaar is
Een abonnementindex houdt bij waar afnemers van informatie zijn

Chain gang: 
CEO Aaron to CEO Betty: please promise to me that Alice can talk to Bob when I have a service request

CEO Betty to Bob: please promise to me that you promise to Alice to pick up the phone when she calls


Composition and supply chain. (restaurant waiter, chef)
Dynamics of supply chain, jeff sussna.

Service management is organising the keeping of promises.
What is the role?
Which promise does it keep?
What are its clients and providers?

I.e. Change management (ITIL)
Promise to keep an asset inventory
Promise to process change requests on the basis of a change policy

Change management (ITIL)
Promise to process change requests on the basis of a change policy
”I promise to allow changes that meet change policy requirements to promote to production”
Can be manual or automatic or automatic with exceptions

