---
date: '2025-08-29T09:33:34Z'
draft: false
title: 'OWASP LLM Risk Allocation'
weight: 10
---

Applications based on LLMs (Large Language Models) have risks too.
The [OWASP Top 10 for LLM Applications](https://owasp.org/www-project-top-10-for-large-language-model-applications/) risks are a good start for analyzing the risks of such a system.

These types of applications, like many others, are also cloud applications.
This means that there is a variety of parties responsible for controlling those risks.

But, who is supposed to do each control? And which role do they have?
For example, there are model providers, there is the AI consumer, and so on.
For a deeper story on these roles look at [AI roles](/book/diginfra/ai-roles/).

Combining those AI roles with the OWASP Top 10, gives us a list of more than 80 controls, by role.

You can review these controls with the [OLRA Navigator](/olra/navigator.html).

It is about allocation of risks and their controls to roles, and that is why this tool is called the OLRA navigator.
OLRA stands for **OWASP LLM Risk Allocation**.
It allows you to select them by role and category.
