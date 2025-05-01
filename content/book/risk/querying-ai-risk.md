---
date: '2025-05-01T07:40:07Z'
draft: true
title: 'Querying Ai Risk'
weight: 10
notes: whatever
---

While Artificial Intelligence, especially the generative type, is a really disruptive form of IT innovation, its risk management still follows the same basic principles.
We just need to extend those principles to new forms of data and software.

- What are the assets?
- What are the vulnerabilities and threats to it?
- What is the damage that this can bring, realistically?

So let's see how what the AI specifics are.

## AI Assets

Let's focus on the AI assets that are the product of deep learning.
Deep learning neural networks have represented a shift in AI technology.
Before that, symbolic AI was more common.

The reason to elaborate on this is that there is a fundamental difference between symbolic AI and neural network AI.
Symbolic AI works by following programmatic rules, and is fairly deterministic.
Neural networks are the result of training with large datasets.
They have enabled *generative AI* which is a lot less deterministic.

Furthermore, and this is really significant from a security perspective, in its operation, GenAI mixes data and instruction to operate on that data deeply.

For example, anything an external user inputs to the system as data, might also be interpreted as an instruction.
This represents a huge vulnerability for hackers to exploit.

The trained models represent a lot of information, and that information is often hard to identify, and therefore to see the classic information risks of.

Models are effectively software: you stick data in them, and data comes out.
But because they also embody a lot of data (we are talking Gigabytes, Terabytes, and beyond, of training data) they combine the risks of software with the risks of data.

An AI system has a few more traditional and less traditional data assets associated with it.
Base models, or foundational models, such as Llama, often get additional training or finetuning.
The data used for that may well include proprietary or sensitive data.

Then there are system prompts and additional data sources that are fed into those models, together with user input.
