---
date: '2025-04-07T11:21:31Z'
draft: true
title: 'Example Mermaid Client-Server'
---
```mermaid
architecture-beta
    group frontend(cloud)[Frontend]
        service client(internet)[Client Browser] in frontend
    
    group backend(cloud)[Backend]
        service app_server(server)[Application Server] in backend
        service database(database)[Database] in backend
    
    client:B -- L:app_server
    app_server:B -- T:database
```
