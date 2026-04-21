---
date: '2026-04-17T00:00:00Z'
draft: true
title: 'Vibe Deploy'
weight: 10
---

Letting a coding agent such as Claude Code (CC) lose by dropping all constraints (dangerously skip permissions ... ) can be scary.
It can also be powerful (see this example- ttt)

I set out to create a secured environment for experiments and production alike. Here is the report on it.

The core idea is to run CC inside a container on a remote host. To me that sounds like more flexible and secure than on a VM in my laptop.

In the dev container, I want to let CC run wild with lots of access to logs, settings, skills and subagents.
I want it to just keep on going until it realizes the results that I want.

It will work on a Git branch, which gives us traceability, isolation, and backup/restore.

To speed up the feedback loop, it will not do much packaging of the software. It will be change->observe->fix in a rapid loop.

Once we feel we are ready to ship, we'll introduce packaging to deploy a container to an acceptance environment.
In that situation, there will be a build between change and observe.

However, I think that Test Driven Development, and a few other disciplines may also be needed, and they may lengthen the feedback loop too.
We'll get to that later.

The first objective is to get a container running on the remote host.
This too can be scripted through a local Claude code instance. 

Once we have the isolated container with its own CC, we need to give it a workflow.

We can talk to the CC in the container directly, but we may also let the CC for the container orchestrator do that.

The initial steps are:

- install nanobot in a feature branch, instructions are in README
- make `nanobot status` work, while updating the feature branch with any necessary changes
- make the initial test `nanobot agent -m hello-world` work, it should give an LLM answer, needs an LLM API key
- from here on record all necessary changes in the feature branch

Triggered by the user:

- start work on a user request
- record all necessary changes in the feature branch
- when done with the request, commit and push change, and summarize to the user

Understand that this container is very short lived.

For example, one of my requests would be: go figure out why this scenario does not give the intended results.

For that, the CC needs access to log files. This burns tokens fast by the way.

Can one CC talk to another CC (on a different environment)?

Another scenario might be: create a new feature, and make sure that it works in this environment.
Push a branch if it works.

Scenarios:

- does this feature branch work, and give the intended results? Read all logs to understand it.
- I want CC to be able to create a fully functional `nanobot` container somewhere that I can log in to, where I can also run CC locally in that container to control, develop and debug a `nanobot` server instance.

create a fresh nanobot container and kill the old one.
no. I just want a fresh container, no need to wipe the volumes.

claude@6c114476a90c:~/workspace$ claude --dangerously-skip-permissions
           Claude Code v2.1.114
 ▐▛███▜▌   Sonnet 4.6 with high effort · Claude API                                                     
▝▜█████▛▘  ~/workspace
  ▘▘ ▝▝    Welcome to Opus 4.7 xhigh! · /effort to tune speed vs. intelligence
                       
────────────────────────────────────────────────────────────────────────────────────────────────────────
❯ install the nightly build of nanobot, you have an OPENROUTER key, and perform the smoketest.        
────────────────────────────────────────────────────────────────────────────────────────────────────────
