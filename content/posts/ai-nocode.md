---
date: '2025-07-19T12:22:13Z'
draft: false
title: 'AI Coding: "Look Ma, no hands!"'
weight: 10
---

Here is how I AI-coded a fully functional Tic-Tac-Toe web game *without* looking at a single line of code or manually identifying a GUI or logic error.
I ran Claude Code (Pro) in VS Code without any other IDE/AI tooling.

But it takes some effort and discipline to get there.
The core idea is to be very specific and use an opinionated environment that includes extensive automated testing.

### The Agentic AI way

Many people are researching this, all with slightly different approaches.
There are a variety of ways to do more or less the same thing.
Here are some of the interesting approaches I found.
Interestingly, they all popped up in the first half of 2025.

- Cole Medin [Github](https://github.com/coleam00/context-engineering-intro/tree/main)
- IndyDevDan [Home page](https://agenticengineer.com/principled-ai-coding)
- Ryan Carson [Github](https://github.com/snarktank/ai-dev-tasks/tree/main)
- Sean Matthew [YouTube](https://www.youtube.com/watch?v=OZej8sdVCP0)

The simplest is Sean Matthew's, and while it works, you can add some precision and handy workflow items and shortcuts from the others.
Again, there are often a variety of ways of doing more or less the same thing.

I'd start like this.

1. create a directory for your codebase
1. run Claude in your editor (e.g. VS Code)
1. inside Claude, run `/init`, this will also create a CLAUDE.md, which you probably want to adapt or override, see later.
1. run `git init`, and publish the folder to your git account
1. edit, establish or copy a `CLAUDE.md`, I have curated a 350 line opinionated version, which is adapted to this type of project

You could now start with your feature, as I will describe in a moment.
I chose to have it create the simplest application that would result in an actually running web page with all the test scaffolding that I requested in my CLAUDE.md, which is quite extensive and not application-specific.

This created 1180 lines of Python for what is effectively a 'Hello world!' application.

### Requirements

Now it's time to get your Product Requirements Document (PRD).
Starting from a small prompt you ask the AI to expand it to a PRD.
I put the feature description in a file called `tictactoe.md`.

>Create a simple single player web page where the user can play tic-tac-toe against the computer

The smallest prompt then is:

>Help me create a PRD for the feature in tictactoe.md, respecting the standards in CLAUDE.md, store it in file PRD-tictactoe.md

The other approaches mentioned above have a more extensive prompt to create the PRD, which presumably gives a more structured specification document, but this one works surprisingly well.
In this example, the PRD is over 300 lines long.
It has a variety of components, such as a set of user stories, but it also repeats a lot of information from the CLAUDE.md file.
Allegedly, it pays to review and repeat this process to make sure you are not wasting time later.

### Planning

The next steps are to translate this in a PLANNING and TASKS file.
The latter one will be edited by the AI to record progress.
Again, you can have a simple prompt to create these, or a more sophisticated one.
For this experiment I took the shortest one.
All these documents have some overlap.

Then it is showtime!

>Please read PLANNING.md, CLAUDE.md, and TASKS.md to understand the project.  Then complete the first task on TASKS.md
or pick up where we left.

Off to the races...

Claude Code chugs along nicely for a while.
Because we have instructed it to create test cases for each and everything, it will backtrack automatically and fix all errors until all tests pass.
This resulted in one commit and a locally working application.

We are now outside of the feedback loop of fixing the misunderstandings, shortcomings, and hallucinations of Claude Code.

In the end, this resulted in 1900 lines of Python for the core application, and more than 3200 lines of code for testing.
I touched none of them.

While this line count sounds big, understand that this includes a lot of monitoring and security features.
There is also extensive commenting in the code, and it would be interesting to see if we could refactor this to make it much shorter.

### Next level

Next, the opinionated prompt calls for a CI/CD pipeline.
While the AI created one, including a full test suite, it failed for a variety of reasons, though many had to do with a mismatch between the local environment and the environment that the pipeline runs in.

In the beginning, I was part of the feedback loop, so I screenshotted the Git Actions log and pasted these in Claude Code (really!).
I later installed `gh`, allowing the AI to actually see the error messages.
With this it could iterate until it was done.
Again, we are now outside that feedback loop.

### The final lesson

The final lesson here is that as a developer / software engineer, you will mainly be involved in fixing things where you are part of the feedback loop.
Your job should therefore be to engineer the AI *into* the loop, and yourself *out* of the loop.

You really don't want to babysit the AI for each error that it is perfectly capable of fixing itself.

The main techniques for that are:

- giving the AI clear objectives (e.g. 90% test coverage)
- giving the AI information to see if those objectives are met (e.g. proper error messages and log files).

In short, AI amplifies your capabilities, but if you don't have the high-level objectives clear, it can backfire, and you will end up in a rabbit hole.
