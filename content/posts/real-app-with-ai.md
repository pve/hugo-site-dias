---
date: '2025-07-29T21:28:51Z'
draft: true
title: 'Real App With Ai'
weight: 10
---

Taking it for a spin.

After my playful tic-tac-toe app (blog post, the actual app) I moved on to create a real application.

I restarted the experiments I did earlier (https://digitalinfrastructures.nl/posts/monkey-coding/)
Real app now.
track 1. claude-flow.

biggest lesson: understand nested feedback loops.

method: learning from myself (DRY in prompting)

dont hesitate to start all over. 

challenge: explaining to claude code what a good result is, and the means to check that.
gh will help

target is to get to production MVP as fast as possible, prioritizing short feedback loops.

quota problemen en compacting maakt nog al eens dat het geheugen kwijt raakt.

│ > you should ALWAYS validate passing. If you can't fix it yourself, escalate to user. Tips: the production server's IP address is in git secret  │
│   HETZNER_HOST. Deployment at the server should also include a git pull. And the deploy scripts seem to be hiding errors for you.   

Priority is end 2 end testing, then refactor and clean up.
All before you run out of quota...