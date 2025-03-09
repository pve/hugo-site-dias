---
date: '2025-02-27T09:09:43Z'
draft: false
title: 'A mermaid diagram example'
---

A diagram should automagically appear here.

```mermaid
%%  icons from https://iconify.design
architecture-beta
    group api(Storage)[API]

    service db(database)[Database] in api
    service disk1(disk)[Storage] in api
    service disk2(disk)[Storage] in api
    service server(server)[Server] in api

    db:L -- R:server
    disk1:T --> B:server
    disk2:T -- B:db

```

```mermaid
sequenceDiagram
 participant Alice
 Alice->>John: Hello John, how are you?
 John-->>Alice: Great!
 Alice->>John: How about you?
 John-->>Alice: Can't complain.
 participant Bob
  Alice->>Bob: Hi Bob, how are you today?
  Bob-->>Alice: Hi Alice, I'm doing well, thanks! How about you?
  Alice->>Bob: I'm great, thanks for asking! Do you have any plans for the weekend?
  Bob-->>Alice: Yes, I'm thinking of going hiking. Would you like to join me?
  Alice->>Bob: That sounds fun! Count me in.
  Bob-->>Alice: Great! I'll send you the details later.
```