---
date: '2025-04-23T06:03:44Z'
draft: false
title: 'Look at MCP now to be ahead of AI risk'
weight: 10
---

If you are in security and not fully on top of AI risk, you want to look at MCP **now**, as this is going to be popular and risky.
Reach out to your development teams and beyond to offer your help in using them wisely, even if you know nothing about them yet.

MCP, Model Context Protocol, was introduced in November 2024 as a standardised way to feed AI chatbots with extra information.
You can extend Claude or OpenAI desktop with MCP servers, which are basically small programs that run on the desktop and have access to all information and services that the user has.

MCP servers are popping up like flowers in spring, and range from fetching up to date weather information to orchestrating your entire customer onboarding workflow.

As said, they have access to everything that the user has access to: the local machine, attached network files, the internet, you name it. Effectively, they are an insider threat on steroids. For example, an MCP could access sensitive corporate documents on the local network, and send them to an AI model, even if that is running on another continent.

Most MCP servers I have seen are written in node.js, which requires npm to be installed, which is not exactly known for its great security track record see [here](https://www.criticalstart.com/securing-the-ecosystem-navigating-the-risks-of-npm-packages-in-modern-software-development/) and [here](https://blog.checkpoint.com/securing-the-cloud/review-of-recent-npm-based-vulnerabilities/).

For a nice little example of MCP servers and clients, and their vulnerabilities, have a look at [this github repository](https://github.com/kenhuangus/mcp-vulnerable-server-demo).

MCP has tremendous potential in quickly creating useful workflows. As a security professional it is your choice if you want to stand in the way of that, or if you are going to help move it along a safe pathway.

For more background on the technology, its applications, and risks, I strongly recommend listening to [this podcast](https://podcasts.apple.com/nl/podcast/ai-cybersecurity-podcast/id1711183470?i=1000704052797) with Caleb Sima and Ashish Rajan.