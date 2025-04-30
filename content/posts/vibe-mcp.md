---
date: '2025-04-27T08:39:55Z'
draft: false
title: 'Vibe coding an MCP'
weight: 10
---
Model Context Protocols (MCP, see [my post on their security](/posts/mcp-risk/)) are the new glue between humans, chatbots, and old school IT.

Here is the step by step approach that I followed to '[vibe code](/posts/vibe-coding-real/)' a Model Context Protocol server for my CRM and mailing list manager.

I journaled this description, so I have included most of the detours and false starts.
For readability, I edited the description later, but the flow is as I went through it.

The CRM system is called [Autorespond](https://www.autorespond.nl), and the description of the API is [here](https://api.e-act.nl/api/apidocs/index.html).
The API doc is not in any standard format, but I had Claude Pro convert it to Markdown using the `fetch` MCP.
I also uploaded the doc to [context7](https://context7.com), an API documentation site for LLMs, but since Claude already had it in its context, I did not pursue that further, for the moment.

With that, I asked Claude:

>What do you need to know in order to write an pilot Model Context Protocol server in Python for retrieving the tags in an Autorespond administration?

It basically started reasoning and immediately writing code.
However, it was clear that it did not really have a clue on MCP, not surprising, since MCP was introduced just a couple of months ago.

I told it the doc could be found on [github](https://github.com/modelcontextprotocol/python-sdk), which it downloaded partially (because of robots.txt limitation).
It then basically parroted that documentation to create similar code for Autorespond.

I manually put the resulting code in a new git repo, though I could probably ask some AI assistant to do that for me.

In my workflow I like to set up a virtual environment based off a `requirements.txt` file.
I did not get that, so I wrote that myself.
However, as we see later, there is a more modern approach.

After fixing that, it runs, but throws an error

```text
Mismatch between URI parameters set() and function parameters {'ctx'}
```

Throwing the error message into Claude, and it changes two lines in the Python code to make this work.
Of course, I did a git commit before replacing the Python code.

Then I got a bit lost in the usage of `uv` in relation to registering this MCP at Claude desktop.
This is the new Python package manager, and it seems to be the default for almost all MCP server installations.
My Python instructor friend regards it very highly.
It appears that I did not have that setup done well.

The main benefit of `uv` here seems to be that it isolates the execution of a specific version of Python and its libraries.
You could use `venv` for that, but since the MCP runs from the context of Claude desktop, I am not sure if that would work well enough.
No time to figure that out, just follow the herd.
Another way of doing that is through the use of Docker, which isolates the code further.
I do that for most external MCPs, but for a local development I consider this good enough.

Rebuilding the virtual environment with `uv` worked a bit better, though I still have limited understanding of it.
Here is a snippet from the Claude config.

```json
      "command": "uv",
      "args": [
        "--directory",
        "/Users/peter/Documents/-----/AutorespondMCP/",
        "run",
        "autorespond-mcp-server.py"
      ],
      "env": {
        "AUTORESPOND_ADMIN_ID": "***",
        "AUTORESPOND_API_KEY": "***"
```

The good news is: the generated code runs.
The bad news is: setting up the package manager takes a bit more time.
The ugly: I should have set up environment secrets first, instead of hard coding them in the code.

We can now start to use the MCP server in Claude, but it looks like it hallucinates a few of the search functions.
It makes up function uses that are not in the Autorespond API, which therefore fail.

So I asked it to enumerate the read-only functions, which reduces the number of hallucinated functions.
It then still does not quite understand parameters in the MCP context.

```txt
ValueError: Mismatch between URI parameters set() and function parameters {'email'}
```

Sounds like it is time to tell Claude how MCP really works.

Off to a fresh start, with a new git repo, and a new Claude context window.
This time Context7 sounds like the proper way to ingest up to date libraries.
I added the MCP server for Context7, and added it to the coding conversation.

Autorespond was easy, I put it there myself.
For the Python SDK it took a detour, but it managed to find the doc through `/modelcontextprotocol/python-sdk`.

Back to `uv`.
This time around, this seems to be the best workflow for starting a new repo, even with VScode.

```bash
uv init
uv add "mcp[cli]" httpx
```

Claude gave the correct `uv` steps.

However, this error comes back:
`ValueError: Mismatch between URI parameters set() and function parameters {'ctx'}`

Claude still does not get it. So I told it:

>the problem is more generic. Here is the next message:
>ValueError: Mismatch between URI parameters set() and function parameters {'api_key', 'admin_id'}
>please check for all potential mismatches.

Claude kind of fixed it, but it appeared it did not understand the `fastmcp` library, which is referred to in the Python MCP SDK.
I had it include that from Context7.

It is tempting to try and fix the few lines of code that needed to be changed in my MCP server program.
However, one of my software engineering rules is that you don't manually fix automatically generated code.

So we `git commit` the Python code, and then *replace* it with a new version.
From the git diffs we can see that the changes are indeed quite local.
But I have seen sessions like these where instead of the local change that would be sufficient, large parts of the codebase are fully rewritten for no apparent reason.

OK, now it runs in Python:

```shell
% python autorespond-mcp-server.py
[04/29/25 10:34:06] INFO     Starting server "Autorespond API"...          
```

Let's look at how it runs in Claude.
It kind of works. But it did not understand that the authorization is in ENV variables. In the earlier version it did, by the way.
Now it thinks the authorization is an additional API parameter, and it then starts to hallucinate the actual values there.
It randomly generates API keys, quite amusing in fact.

We tell it to regenerate the code with the note:

>The admin key and api key are environment variables. Rewrite the code.

Now it works, as this Claude screenshot of a conversation shows:

![screenshot](/mcp-ar-image1.png)

But it has forgotten certain API calls (invoices, orders).
And some of the calls don't work, which seems related to the interpretation of the Autorespond API doc.
I am not an API specialist, but I have been told that this doc is generated from code annotations [https://apidocjs.com/](https://apidocjs.com/).
I believe these days you would do it the other way around, like what we did with Kimwitu a couple of decades ago.

Interestingly, Claude (the coder) decides to label certain calls as MPC resources, rather than tools.
An example would be getting all the tags or groups.
While this sounds fair, in Claude (the desktop) these will not be used unless explicitly added by the user.
This means they are excluded from the reasoning that Claude can do.

So far this took me a few hours, including the updates of my tooling, resulting in about 450 lines of code for the Autorespond MCP code.

Up next. Giving better instructions on the coverage of the API. And, should we be writing some test cases?
I have seen that explored in some of the meetups I visited recently. To do that well, we need a test instance of the Autorespond system.

Stay tuned for more ...

[Github](https://github.com/pve/mcp-autorespond)
