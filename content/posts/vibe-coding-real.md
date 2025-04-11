---
date: '2025-04-08T14:34:54Z'
draft: false
title: 'Vibe Coding in Reality'
weight: 10
---

How does vibe coding work in the real? Vibe coding is having AI write your software. Coined by Andrej Karpathy, the hype is all over the map, with companies that are rethinking their hiring strategies for programmers. Sounds like disaster for software engineers and programmers.

Not so fast.

Curious to learn more about it, I reached out to an old friend who is an experienced software engineer. He was a co-founder in a SaaS company in the monitoring space. After a successful exit he now has a bit more time to pursue hobbies. But he is still professionally busy.

Here is his workflow for using AI for creating software. Understand that this is quite opinionated, but it does match my own experiences.

First of all, don't rely on Co-pilot and other assistants.
Before you know it, you have lost control over your codebase.

Don't start to code immediately.
A lot of AI assisted code editors start off by immediately generating code.
Not with this guy.

He starts with an analysis in Anthropic's chatbot, Claude 3.7 Sonnet, Pro account. Important settings are'extended thinking', 'style explanatory', and allow it to create artefacts.

He first discusses the architecture of the solutions, and asks the bot to generate a few alternatives with pros and cons.
If relevant, he asks for more explanation of alternatives.
Claude still has a tendency to generate code, but you should include 'no code' in the prompt a few times.
Apparently it can take a while for Claude to get that message.

Once you have some overview of the software you want to create, you can start asking for code.
Ask it for 10 lines max at a time, to implement specific parts and functions. My friend just copy/pastes this into a code editor, and then syncs it to github.

Claude Pro has a feature called Projects, in which you put the project knowledge, and a link to your github repository.

While I did not discuss this with him, I think it is a great idea to also use Claude to generate unit tests.

One of the complications of vibe coding in general is that the model can have trouble staying on track with libraries.
For a variety of reasons, you want to pin libraries to a specific version. If not, the model can hallucinate its own version.
Especially with more recent versions of libraries and frameworks, the models aren't always up to date, and they don't like to admit that.

Often there is a set of markdown text files with an SDK or library that has all the documentation. 
If not, his approach is to use OpenAI Deep Research to create a markdown file with all the relevant documentation on the specific library he is using.
The idea is to not pollute the Claude history with irrelevant information on the libraries. This then goes into the Claude Project. One of the nice things is that you can then also 'chat' with the documentation.

Sometimes the chat with Claude becomes too long, and a warning is issued. The approach then is to ask Claude for a summary of the chat, and use that as the beginning of a new chat.

For debugging there is the Claude Code command line, which can look directly at files in the code directory.
This has faster feedback than going back to the github repository.

In summary, if you know what you are doing and apply some structure, using AI to support you in software construction has a lot of potential to increase productivity.
