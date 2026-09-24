---
date: '2025-08-29T09:33:34Z'
draft: false
title: 'OWASP LLM Risk Allocation'
weight: 10
---

Applications based on LLMs (Large Language Models) have risks too.
OWASP has made Top 10 lists for [LLM Applications](https://genai.owasp.org/resource/owasp-genai-llm-top-10-2026/) and for [Agentic AI systems](https://genai.owasp.org/resource/owasp-top-10-for-agentic-applications-for-2026/) .
These are a good start to gain awareness of these risks, and to being analyzing the risks of such a system.

For a more comprehensive treatment of AI and Agentic risks, you can review [OWASP AI](https://owaspai.org/).

These types of applications, like many others, are also cloud applications.
This means that there is a variety of parties responsible for controlling those risks.

But, who is supposed to do each control? And which role do they have?
For example, there are model providers, there is the AI consumer, and so on.
For a deeper story on these roles look at [AI roles](/book/diginfra/ai-roles/).

Combining those AI roles with the OWASP Top 10, gives us a list of more than 80 controls, by role.

You can review these controls with the [OLRA Navigator for LLM risks](/olra/navigator.html), and the [OLRA-A Navigator for Agentic AI risks](/olra/olra-a-navigator.html)

Note that OLRA is based on the 2025 version of the OWASP Top 10 for LLM Applications, while OWASP has since published a 2026 version.
OLRA-A is based on the 2026 version.

It is about allocation of risks and their controls to roles, and that is why this tool is called the OLRA navigator.
OLRA stands for **OWASP LLM Risk Allocation**.
It allows you to select them by role and category.
