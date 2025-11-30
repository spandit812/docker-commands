---

<pre>
+----------------------------------------------------+
|                Physical / VM Host                  |
|   (Linux/Windows + Docker Engine / containerd)     |
+--------------------------+-------------------------+
|  Tenant A                |  Tenant B               |
|  (clientA)               |  (clientB)              |
|                          |                         |
|  +--------------------+  |  +--------------------+ |
|  | docker network A   |  |  | docker network B   | |
|  |  app-a container   |  |  |  app-b container   | |
|  |  db-a container    |  |  |  db-b container    | |
|  |  cache-a container |  |  |  cache-b container | |
|  +--------------------+  |  +--------------------+ |
|  volumes: data-a         |  volumes: data-b        |
+--------------------------+-------------------------+
Each tenant gets its own Docker network so containers for Tenant A cannot directly talk to Tenant B unless explicitly routed.​

Each tenant’s data is stored in separate volumes or separate paths, with access controlled by Docker and filesystem permissions.​
</pre>
---
---

<pre>
  +-------------------------------------------------------------+
|                       Docker Host                           |
+-------------------------------------------------------------+
|                     Reverse Proxy (nginx)                   |
|         - Routes clientA.example.com -> Tenant A network    |
|         - Routes clientB.example.com -> Tenant B network    |
+-----------------------------+-------------------------------+
| Tenant A stack              | Tenant B stack                |
| network: tenant-a-net       | network: tenant-b-net         |
|                             |                               |
|  [app-a] <--> [db-a]        |  [app-b] <--> [db-b]          |
|   vol: app-a-config         |   vol: app-b-config           |
|   vol: db-a-data            |   vol: db-b-data              |
+-----------------------------+-------------------------------+
A reverse proxy (or ingress) on the host looks at the hostname / path and forwards traffic to the correct tenant network.​
Resource limits (CPU/memory) and quotas can be set per container/stack to avoid one tenant starving others.
</pre>
