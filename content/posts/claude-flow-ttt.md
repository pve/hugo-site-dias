---
date: '2025-08-25T10:09:31Z'
draft: false
title: 'Agentic coding, the next level'
weight: 10
---

My AI coding journey continues.

My [first version](/posts/ai-nocode/) of the Tic-Tac-Toe game took some time to get right
even though I already applied some serious automated top-down design.

As explained, understanding feedback loops is crucial for correcting errors.
Part of this is using explicit tests for desirable outcomes.
A process for test-driven design would be even better.

The main question from that experience was: How can we let the AI check itself?

This is what *agentic-coding*, or *swarm coding*, is all about, and there are a couple of approaches to that.

I found the most impressive system to be [Claude-flow](https://github.com/ruvnet/claude-flow/blob/main/README.md).
The core idea is to have multiple dedicated agents work in parallel and check each other.
For example, you want the tester to be a separate agent from the coder.

`Claude-flow` has a lot of features and agents, which can feel a bit overwhelming.
Despite its complexity, getting started was easy.

Here is what I did:

```shell
npx claude-flow@alpha init --force

npx claude-flow@alpha hive-mind spawn "Create a simple single player web page where the user can play tic-tac-toe against the computer" --claude
```

With this, Claude starts doing the work.
Approximately 20 minutes later, it produced [a solution that worked](/ttt/tic-tac-toe.html) at the first attempt!

A couple of observations.

- It created a single static HTML page solution, in contrast to the more complicated front-end back-end solution that the earlier approach resulted in.
- I did not look at a single line of code.
- It still over-engineered it a bit by including a human-to-human mode, which was not requested.

I found it impressive that the solution worked immediately.
While the absence of a back-end simplifies matters, the swarm's ability to generate a test set likely drives this success.

It is clear to me that it no longer makes sense to try and write software at this level of complexity entirely by myself.

I also did some experiments at a higher level of architectural complexity, and those did not all go very smoothly.
AI coding assistants tend to be overly creative, leading to a codebase or deployment architecture that irrecoverably goes off the rails.

My expectation is that more agents are required, with more embedded specialized knowledge, to stay on track.
That is the next step in the journey.
