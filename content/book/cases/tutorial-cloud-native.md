---
title: A Small Example of Cloud Native Development
date: '2020-02-10T23:29:51'
draft: false
---

Cloud-native software development enables new practices. But it also requires them. It is a new level of working. However, putting all these new practices together requires integrating a lot of pieces.
To illustrate this new approach, I have started to develop a minimal application. Although minimal, I run it in production. Its basic function is to regularly pull out data from an air quality sensor into a cloud-based database. Together it is a few hundred lines of code.
Here are the major features of the example:

* API programming examples (Foobot, io.adafruit.com)
* 'Server-less' architecture
* Google Cloud Platform focussed
* Continuous delivery through Google Cloud Build
* Version control
* Automated unit, integration and security testing
* BigQuery
* Continuous monitoring through StackDriver
* Slack integration for build and run notifications
* Secrets and credentials management in a DevSecOps world
* Workflow for Python-based development (atom, pyenv, pytest, bandit)

You should be able to replicate this setup yourself.
More tutorial explanation is in my [GitHub repository](<https://github.com/pve/foobotapi/blob/master/README.md>). There you can find the code as well as a [more detailed explanation](<https://github.com/pve/foobotapi/blob/master/main.md>). In that, I dissect the full approach theme by theme, topic by topic.
