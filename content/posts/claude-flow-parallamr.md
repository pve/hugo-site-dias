---
date: '2025-10-15T20:01:08Z'
draft: true
title: 'How Claude Flow helped me create my next tool'
weight: 10
---

After [coding a demo application with Claude Flow](/posts/Claude-flow-ttt) it was time to do a larger project.

Claude Flow has an impressive set of features, supporting a very innovative approach to the agentic software development.
But even after a few projects, I still find it hard to grasp the subtleties and intricacies of its various agents, components and options.

So I decided to stop worrying and just dive in, while documenting the successes and edge cases.
This time my application is a tool to run batches of prompts through various models.
The primary use case is to analyze service descriptions against risk and control frameworks.
The core step is to give an LLM a question to answer with a lot of specific background, such as those service descriptions and frameworks.

We want this tool to help us review variations in the prompts, in the background information, the models, etcetera.
Most of the relevant text is tens of thousands of characters long, though the prompt is smaller.
So how do you run these evaluations?
While there are excellent LLM evaluation tools, I kind of got lost in the weeds reviewing them.

Instead, I decided to just prompt Claude Flow to create it.

By the way, those service descriptions are about LLM applications, so we are now talking about AI on three levels: the application under analysis, the analysis of its risks, and the generation of software to support in that process.

### Inits

So, how do we get started running this?

With agentic systems like these running around, I prefer to have a 'devcontainer' to run Claude in.
Based on a couple of examples, I am now using [this one](https://github.com/pve/parallamr/blob/main/.devcontainer/devcontainer.json).

Copy this to an empty directory, inside that run `git init` for version control, and commit the first addition (the devcontainer).
You may want to later publish this repository to e.g. GitHub.

The next step I did is to initialize Claude and Claude Flow, inside Visual Studio Code:

```sh
#claude --dangerously-skip-permissions
//
#init.. (notes in bujo p 62)
#Is this necessary?

npm install -g better-sqlite3
npx claude-flow@2.7.1 init --force
```

This sets up claude, and ends in a claude prompt.
Just quit it.

Now it is time to get specific.

I collected about 45 lines of notes on what I wanted the tool to be.
In my experience, the important elements of that description are:

- Functionality and the intentions behind that, e.g. what bigger context is this going to be used in. Focus on MVP, don't overdo the functionality. You will find that the coding assistants are eager enough to give you lots of suggestions.
- Tech stack, in particular the development environment.
- Deployment target, in this case just a local python program
- To use test driven design (TDD)

I fed this into Claude asking for the open ends in this specification.
It responded with a few questions for clarifications, such as level of sophistication in handling errors.
I answered those, and had it update the specification.

In my review of it I simplified a few things even more.
For example, it had added some additional input parameters that could be postponed to a later version.

I stored the 437-line result as a specification ([original version in git](https://github.com/pve/parallamr/blob/4ac273a6c28aaf10b381632d96f083bfda41a747/parallaxr-spec.md)).

The next step then simply is to run:

```sh
npx claude-flow@alpha hive-mind spawn "design an application based on parallaxr-spec.md" --claude
```

I told it to plan building the program, but it went ahead and delivered a working version in half an hour or so.
It included a feature to run a demo, which worked immediately after I had configured an LLM key.

The command above runs its course, and then shows the claude code prompt.
While I have used that situation to make minor changes, the hive-mind allows us to end that session, and start a new one with just enough context to proceed.

### OK, it works, now what?

Once you have a piece of software working, a sign of success is that you want more features.
The workflow I used for that runs through GitHub issues.
The hive-mind we are using preserves a lot of information on the project across Claude sessions, though I am still trying to figure out what information exactly.
We can therefore start each issue on a new session.
The command line then simply becomes, for example:

```sh
npx claude-flow@alpha hive-mind spawn "implement git issue 21" --claude
```

Git issues are not stored locally, but on GitHub, and Claude Flow accesses them by using the `gh` command.
(A minor snag can be that this needs to be authorized before Claude Flow can use it.)

I noticed some inconsistency in behavior when it comes to closing issues.
Sometimes it would go all the way, and sometimes it would just commit and not even push to the registry.
It also needed to be prodded to apply [semantic versioning](https://semver.org).

The root cause of this may be that I did not sufficiently specify the behavior I wanted.
In such cases the coding assistant falls back to whatever seems to be the typical thing to do, according to its training.
But there are diverging practices out there, which is reflected in the inconsistencies I observed.

I'll need to rethink the approach to acceptance testing and rollback procedures, and then spell it out.
For example, where do we do various levels of testing?
In this case, the program is planned to be used locally only, so there really is not much point in forcing the commit to a repository.
If, however, the production and acceptance versions are publicly deployed through a CI/CD pipeline, we will need to include that in the testing loop, and feed the results back to the LLM.

The exact opinionated workflow could be specified in the Claude.md file, but it may be a good use case to introduce an additional, well-tooled, agent for that.

I also, partly for the fun of it, asked for a refactoring plan.
This plan also exceeded my expectations, it was detailed and relevant.

