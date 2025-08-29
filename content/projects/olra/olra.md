---
date: '2025-08-29T09:33:34Z'
draft: false
title: 'OLRA'
weight: 10
---

OLRA stands for **OWASP LLM Risk Allocation**.

The [OWASP LLM top 10](https://owasp.org/www-project-top-10-for-large-language-model-applications/) risks are a good start for analyzing the risks of an LLM system.

But, who (which role) is supposed to do each control?

This is where allocation of risks and their controls to roles comes in.

We identify the following roles, based on the [CSA AICM](https://cloudsecurityalliance.org/artifacts/ai-controls-matrix). 

## AI Customer (AIC)

End users of AI applications.
This includes the actual users as well as their organizational units.

## Application Provider (AP)

These providers build and offer end-user applications that leverage generative AI models for specific tasks such as content creation, chatbots, code generation, and enterprise automation.  

These applications are often delivered as software-as-a-service (SaaS) solutions.  

These providers focus on user interfaces, application logic, domain-specific functionality, and overall user experience rather than underlying model development.

## Orchestrated Services Provider (OSP)

This refers to entities that create the technical building blocks and management tools that enable AI implementation.  

This can include platforms, frameworks, and tools that facilitate the integration, deployment, and management of AI models within enterprise workflows.  

These providers focus on model orchestration and offer services like API access, automated scaling, prompt management, workflow automation, monitoring, and governance rather than end-user functionality or raw infrastructure.  

They help businesses implement AI in a structured and efficient manner.

## Model Provider (MP)

Model Providers are entities that develop, train, and distribute foundational and fine-tuned AI models for various applications.  

They create the underlying AI capabilities that other actors build upon. Model Providers are responsible for model architecture, training methodologies, performance characteristics, and documentation of capabilities and limitations.  

They operate at the foundation layer of the AI stack and may provide direct API access to their models.

## Cloud Service Provider (CSP)

Non-AI specific cloud services.

## MORE

The [OLRA Navigator](/olra/artifact3.html) lists a very preliminary set of controls by actor.

More coming soon!
