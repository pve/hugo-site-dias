---
date: '2025-03-08T17:57:16Z'
draft: false
title: 'What are AI digital infrastructures?'
---

The AI landscape has many digital infrastructures.

Let's explain this step by step and focus on which data is stored where, and how it is processed.

A core element of AI systems is a trained model. At least that is true for the dominant AI form these days: deep learning neural networks.

A trained model is the result of processing a lot of training data by a specific neural network. These models are fixed in size, but typically very big. The smallest useful models are close to a Gigabyte, while recent public chat models run into multiple Terabytes. Training serious LLMs takes serious compute resources. In 2025, estimates for the cost of the largest foundational models run in the tens to hundreds of millions of dollars.

Smaller models can still take more training resources than the average company has in place.
That is why Training as a Service in the cloud exists.

```mermaid
%%{ init: {
    'theme': 'forest',
    'themeVariables':
        { 'fontSize': '12px'}
} }%%
block-beta

 space in space llm:2 space out space 
in["Training Data"] --> llm["LLM training"]
llm--> out["LLM"]
style in fill:#fff,color:#000,line:#000;stroke-width:0px,color:#000,stroke-dasharray: 5 5
style out fill:#fff,color:#000,line:#000;stroke-width:0px,color:#000,stroke-dasharray: 5 5
```

A trained language model is effectively a piece of software. You feed it text, and text comes out. This is called inferencing, and for good performance it requires that the entire model fit into RAM memory. Only for the most minimal cases is this possible on a high end laptop. For more interesting use cases you'll need a lot more hardware. Therefore there is a good business case for sharing this across many users.

```mermaid
%%{ init: {
    'theme': 'forest',
    'themeVariables':
        { 'fontSize': '12px'}
} }%%
block-beta

space in space llm space out space
in["Prompt"] --> llm["LLM"]
llm--> out["Completion"]

style in fill:#fff,color:#000,line:#000;stroke-width:0px,color:#000,stroke-dasharray: 5 5
style out fill:#fff,color:#000,line:#000;stroke-width:0px,color:#000,stroke-dasharray: 5 5
   
```

In cloud terms, we would call this Inferencing as a Service. In the NIST model, we'd call this SaaS or PaaS, depending on whether is it consumed directly or as part of a larger application.

This gives us the option to look for this on the market, or create a shared service inside an organisation or group of organisations (e.g. private / community cloud). It also implies that we need to have a clear definition of the service and related service level objectives. This includes any allocation of security responsibilies.

More at: <https://www.cloudsecuritynewsletter.com/p/securing-ai-applications-in-cloud-what-are-we-really-securing>
