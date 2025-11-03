---
date: '2025-10-15T20:01:08Z'
draft: false
title: 'How Claude Flow helped me create my next tool'
weight: 10
---

After [coding a demo application with Claude Flow](/posts/Claude-flow-ttt) it was time to do a larger project.

Claude Flow allows the distribution of coding work over a variety of agents.
Each of the agents has a specific role in the project, such as coder, tester, analyst, and others.

These agents create stuff, inform each other, and check each other's results.

But even after a few projects, I still find it difficult to grasp the subtleties and intricacies of its various agents, components and options.

So I decided to stop worrying and just dive in, while documenting the successes and edge cases.
This time my application is a tool to run batches of prompts through various models.
The primary use case is to analyze service descriptions against risk and control frameworks.
The core step in that risk analysis is to give an LLM a question to answer with a lot of specific background, such as those service descriptions and frameworks.

An example would be a question like: "Given the way this service is set up, what is the evidence that model provenance checking is operational?".

But the LLM is not automatically going to give the best answer to that.
It needs to be told what is important, how it should reason, and so on.
This is part of what is called 'prompt engineering', or 'context engineering'.

We want this tool to help us review variations in the prompts, in the background information, the models, et cetera.
Most of the relevant text is tens of thousands of characters long.
So how do you run these evaluations?
While there are excellent LLM evaluation tools, I kind of got lost in the weeds reviewing them.

Instead, I decided to just prompt Claude Flow to create it.

By the way, those service descriptions are about LLM applications, so we are now talking about AI on three levels: the application under analysis, the analysis of its risks, and the generation of software to support in that process.

### Getting started

So, how do we get started running this?

With agentic systems like these running wild on my local computer, I prefer to have a 'devcontainer' to run Claude in,
and reduce any chances of mishaps.
Based on a couple of examples, I am now using [this one](https://github.com/pve/parallamr/blob/main/.devcontainer/devcontainer.json).

Copy this to an empty directory, inside that run `git init` for version control, and commit the first addition (the devcontainer).
You may later want to publish this repository to e.g. GitHub.

The next step I did is to initialize Claude inside Visual Studio Code:

```sh
claude --dangerously-skip-permissions
```

This sets up authorization for Claude Code, and other minor configurations.
If not installed already in the devcontainer, use `npm install -g @anthropic-ai/claude-code`. Quit Claude Code.

Next up, the initialization of Claude Flow:

```sh
npm install -g better-sqlite3
npx claude-flow@2.7.1 init --force
```

The sqlite installation is probably inadvertently left out of claude-flow, and you might want a different Claude Flow version.

Now it is time to get specific.

I collected about 45 lines of notes on what I wanted the tool to be.
In my experience, the important elements of that description are:

- Functionality and the intentions behind that, e.g. what bigger context is this going to be used in. Focus on MVP, don't overdo the functionality. You will find that the coding assistants are eager enough to give you lots of suggestions.
- Tech stack, in particular the development environment.
- Deployment target, in this case just a local Python program
- To use test driven design (TDD)

I fed this into Claude (the chatbot, not the coder) asking for the open ends in this specification.
It responded with a few questions for clarifications, such as level of sophistication in handling errors.
I answered those, and had it update the specification.

In my review of it I simplified a few things in the specification.
For example, it had added some additional input parameters that could be postponed to a later version.

I stored the 437-line result as a specification ([original version in git](https://github.com/pve/parallamr/blob/4ac273a6c28aaf10b381632d96f083bfda41a747/parallaxr-spec.md)).

The next step is simply to run:

```sh
npx claude-flow@alpha hive-mind spawn "design an application based on parallaxr-spec.md" --claude
```

I told it to just plan building the program, but it went ahead and delivered a working version in half an hour or so.
It included a feature to run a demo, which worked immediately after I had configured an LLM key.

The command above runs its course, and then shows the Claude Code prompt.
While I have used that situation to make minor changes, the hive-mind allows us to end that Claude Code session, and start a new one with just enough context to proceed.

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

As you can see in the [repository](https://github.com/pve/parallamr/issues?q=is%3Aissue) I iterated through a number of issues, each one improving the functionality.
Every now and then I asked for refactoring suggestions, and told it to implement some of them.

I noticed some inconsistency in behavior when it comes to closing issues.
Sometimes Claude Flow would go all the way, and sometimes it would just commit and not even push to the registry.
It also needed to be prodded to apply [semantic versioning](https://semver.org).

The root cause of this may be that I did not sufficiently specify the behavior I wanted.
In such cases the coding assistant falls back to whatever seems to be the typical thing to do, according to its training.
But the training data includes diverging practices when it comes to handling commits and versions, which is reflected in the inconsistencies I observed.

Maybe adding a dedicated agent to that will help.

### Conclusion

It does the job, if you specify what the job is.
With just a few commands you can create realistic software, no need to touch, or even read the code.
What is more, you can evolve it through a defined workflow involving GitHub.
There is a tendency of the assistants to create more functionality than is asked for.
You can counter that through prompting, and through reviewing intermediate results (such as specifications).

I see no reason why this cannot scale further, and I will do most of my developments through this process.

### What is next?

Moving beyond simply running software locally, as in this case, to deploying it in a more robust context with proper CI/CD pipelines raises new questions.

For example:

- where are various levels of testing (such as acceptance testing) done?
- how do we actually deploy the software assets?
- how will a rollback work when a new version fails?
- how can the coding assistant keep track of the results?

If the coding assistant is not aware of these choices, the human will be in the feedback loop, trying to fix things.
That is not a good approach, as I [wrote about earlier](/posts/monkey-coding/).

These test and deploy workflows are rather opinionated so they need to be specified.
The question then becomes, can you specify this in the Claude.md file, or is it a good use case for an additional, well-tooled, agent?

Finally, what is required for professional software development teams to adopt this, and what are the implications for management and governance?

What do you think? Please let me know.
