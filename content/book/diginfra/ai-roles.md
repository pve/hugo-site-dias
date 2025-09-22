---
date: '2025-08-26T15:56:05Z'
draft: false
title: 'AI Roles and Responsibilities'
weight: 80
---
AI systems, like most cloud systems, are composed of models, servers, software, and more, each of which can be provided by a different role.

We follow the roles outlined in the [CSA AI Controls Matrix (AICM)](https://cloudsecurityalliance.org/artifacts/ai-controls-matrix).

Together these run AI systems, from image recognition systems to Large Language Model based customer support systems.

## AI Customer (AIC)

End users of AI applications.
This includes the actual users as well as their organizational units.
Even though they are only providing a service to themselves, they are still responsible for certain security and control functions.
Some of responsibilities are in the interest of their providers, and those are typically included in an AUP (Acceptable Usage Policy).
For example, customers should maintain appropriate authorizations of users, and refrain from overloading their providers.

## Application Provider (AP)

These providers build and offer end-user applications that leverage generative AI models for specific tasks such as content creation, chatbots, code generation, and enterprise automation.  

These applications are often delivered as software-as-a-service (SaaS) solutions.  

Application providers focus on user interfaces, application logic, domain-specific functionality, and overall user experience rather than underlying model development.

## Orchestrated Services Provider (OSP)

This refers to entities that create the technical building blocks and management tools that enable AI implementation.  

This includes platforms, frameworks, and tools that facilitate the integration, deployment, and management of AI models within enterprise workflows.  

These providers focus on model orchestration and offer services like API access, automated scaling, prompt management, workflow automation, monitoring, and governance rather than end-user functionality or raw infrastructure.  

They help businesses implement AI in a structured and efficient manner.

While the lines can be a bit blurry, you can think of OSPs as being independent of specific applications and independent of specific models.

## Model Provider (MP)

Model Providers are entities that develop, train, and distribute foundational and fine-tuned AI models for various applications.  

They create the underlying AI capabilities that other actors build upon. Model Providers are responsible for model architecture, training methodologies, performance characteristics, and documentation of capabilities and limitations.  

They operate at the foundation layer of the AI stack and may provide direct API access to their models,
at least according to the AICM.
In the case of so-called open models, there is a clear case for distinguishing between the responsibilities of the model provider, who effectively just hands over a large file with the trained model, and the 'inferencing provider', who completes prompts, as described earlier.

## Cloud Service Provider (CSP)

Non-AI specific cloud services for servers, storage, messaging, and more.
If you can run a non-AI workload on it, it is probably a cloud service in this definition.
An example would be a Kubernetes cluster, or other container orchestration platform.

Beyond these AI specific roles, we can dig a bit deeper.
For example, the AP and OSP may be linking to distinct other services that are outside their direct control, such as document management systems.

## Data providers (DP)

AI runs on data, and the more specific the data is, the greater its potential in enhancing AI capabilities.
A typical use case is to provide access to large collections of company-internal text and images, some of which may be classified and, therefore, should only be accessible to authorized users.

These systems are known under that names of DMS (Document Management System), CMS (Content Management System), or intranets.

A popular approach for integrating text in an AI system is RAG (Retrieval Augmented Generation).
Based on a user query, a selection of documents is retrieved from a data provider and then used by the model to formulate a targeted response.

From a security perspective, it gets more interesting if not all data should be accessible to everybody.
That is why the service of a data provider includes promises such as:

- When asked for a document by an authenticated user, I promise to return the best matching answers.
- I promise to only return answers to with the user is authorized
- I promise to reveal the document classification to authorized users, but not to others.

This makes these data providers enforcers of policy (or PEP in the Zero Trust jargon).

<!-- Comments in markdown -->