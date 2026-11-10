---
date: '2026-11-10T15:00:40Z'
draft: true
title: 'The cyborg system admin'
weight: 10
---

I see the rise of the cyborg system admin.
Historically, the system admin controlled systems by typing commands in the command line.
Automation came through shell scripts, Perl scripts and what have you.
More sophisticated systems such as Ansible made the system admin a tiny bit more autonomous.

The pinnacle of this automation is the CI/CD pipeline, where code comes in at the left end and production systems are deployed on the right-hand side of the pipeline.
But the role of the system administrator has changed from actually deploying the systems to overseeing automated scripts that do the deployment.

AI is taking this a step further.
The pattern that I see is that the description of the system including its automated scripts and the entire CI/CD pipeline lives in a set of Markdown files that are readable by an AI agent.
The system administrator then talks to the AI to describe their intended future state of the infrastructure and its deployed applications.
In my experience, the description in Markdown files of the infrastructure, the design decisions and the historical record of interventions and their effects become a little too complicated for a human admin to easily understand.
Instead of simplifying the infrastructure to a humanly understandable level, which would either slow down its deployment or reduce its scope, it is far more effective to let the AI summarize the interventions and their possible consequences.

The challenge in this model is to determine the amount of human oversight that is required, the way in which this oversight can be formulated in executable policies or other guard rails and where these guard rails and policies actually live.
For example, it is very easy to give an AI access to a command line shell prompt with root access and let it figure out the intended configuration, but for anything other than a development environment this is probably a little too risky.
At the same time, when debugging complicated production problems, for example determining which components are overloaded or malfunctioning in a complex environment, I find that an AI can do this a lot quicker than I can.
I still challenge its conclusions and keep asking for evidence of them.
The AI can be fairly good at suggesting courses of action, especially if we can draw from the library of interventions that we have developed together.
But as professionals, we are still figuring out how to have effective oversight over an environment we do not understand in detail.

We cannot trust the AI to read our minds when it comes to our intentions.
At the same time, the AI can be an immense help in increasing our efficiency and effectiveness.
The role that is controlling our infrastructure is now a mix of a human and an AI: a cyborg system admin.
