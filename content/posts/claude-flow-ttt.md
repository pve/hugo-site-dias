---
date: '2025-08-25T10:09:31Z'
draft: false
title: 'Agentic coding, the next level'
weight: 10
---

My AI coding journey continues.

My [first version](fposts/ai-nocode/) of the Tic Tac Toe game took some time to get right
even though I already applied some serious automated top-down design.

As explained, it takes understanding of the feedback loops that help correct errors.
Part of this is using explicit tests for desirable outcomes.
A process for test-driven design would be even better.

The main question that comes out of that experience was: How can we let the AI check itself?

This is what *agentic coding*, or *swarm coding,* is all about.
There are a couple of approaches to that.

I found the most impressive system to be [claude-flow](https://github.com/ruvnet/claude-flow/blob/main/README.md).
The core idea is to have multiple dedicated agents work in parallel and check each other.
For example, you want the tester to be a separate agent from the coder.

While the feature space and the set of agents `claude-flow` has, feel a bit overwhelming, it was easy enough to get started.

Here is what I did:

```shell
npx claude-flow@alpha init --force

npx claude-flow@alpha hive-mind spawn "Create a simple single player web page where the user can play tic-tac-toe against the computer" --claude
```

With this, Claude starts doing the work.
Approximately 20 minutes later, it produced [a solution that worked](/ttt/tic-tac-toe.html) at the first attempt!

A couple of observations:

- it created a single static HTML page solution, in contrast to the more complicated front-end back-end solution that the earlier approach resulted in,
- it still over-engineered it a bit by including a human-to-human mode, which was not requested.

I found it impressive to see a solution that worked right the first time.
Sure, not having a back-end simplifies a lot.
But having the swarm generate a test set is likely to be the most important reason for this result.

It is clear to me that it no longer makes sense to try and write software at this level of complexity entirely by myself.
However, experiments with more complicated architectures did not all go very smoothly.
The tendency of AI coding assistants to be more creative than required can lead to a codebase or deployment architecture that irrecoverably goes off the rails.

My expectation is that more agents are required, with more embedded specialized knowledge, to stay on track.