---
date: '2025-05-20T09:30:03Z'
draft: false
title: 'Vibe System Ops with MCP proof of concept'
weight: 10
---
Here is the story of how I started to use AI to help with running and securing my home network? I call it vibe ops, in analogy to vibe programming.

This post is going to be obsolete very soon, even though it is already the second version ...

My home network plays an additional role as a nice lab, and in the process of better securing it, preferably with Zero Trust Architectures, I am running some experiments.

Here is what I ran into.

I started with a Unifi MCP server connected to my Claude Desktop, running Claude 3.7 Sonnet.
This MCP server is cloned from [github](https://github.com/mikecutalo/unifi-mcp-server).
This allows us to query, from Claude Desktop, the Unifi Cloud Gateway that controls my internet connection as well as the WiFi access points.
It answers questions like:
> What are the connected clients?

>What are the active WiFi access points?

>Which clients are connected to the Attic access point?

This is interesting, but it gets more interesting if we combine this with other tools.
So I tried `nmap`.
The MCP server I used for that is cloned from https://github.com/himanshusanecha/mcp-osint-server.

This makes it possible to ask for:
>What are the open ports on all the Raspberry devices?

Which it does, except Claude hallucinates that a few machines with `wlan0` interfaces are Raspberry Pis.
In fact these are Tuya smart lights.
A bit of prompt engineering will solve that.

Here is a fragment of `claude_desktop_config.json`.
```json
    "osint": {
      "command": "docker",
      "args": [
        "run",
        "-i",
        "--rm",
        "mcp-osint-server"
      ]
    },
    "unifi-mcp-server": {
      "command": "uv",
      "args": [
        "--directory",
        "/Users/peter/....../unifi-mcp-server",
        "run",
        "main.py"
      ],

```

All good, but it does not work for local nodes, because of the way Docker Desktop implements isolation.

An example that works is:
> what are the open ports on domain digitalinfrastructures.nl?

It does the scan directly on the 2 IP addresses involved, and gives some more intelligence as well, involving tools from multiple MCP servers.

Notes:

- The MCP osint server does not advertise its capabilities very well, it seems. For example, Claude fails to understand that it cannot give `nmap` options, it only takes 1 argument. Seems easy to fix.
- Claude container invocations. Despite the `--rm` argument, some but not all of the containers started by Claude's MCP activity do not seem to go away automatically.
- We could create a more remote server for the nmap scan of the network. This could have a better vantage point than my personal laptop. We'd have to install a remote MCP server on a Linux box in the local network, advertising its services.
