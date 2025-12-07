<b>Docker client version:</b>  docker version </br>
<b>Docker demon or docker engine or doker server status:</b> service docker status
<br/>
Both are at the same location. 
<br/>
But in the procuction environment, docker demon goes in some other machine and client on anothe machine.
# docker-commands
---
- To access the docker container file system from the operating system:
  **sudo find /var/lib/docker/ | grep filename**
---

<pre>touch FILENAME
docker exec test touch filename
sudo find / 2> /dev/null | grep -E "FILENAME|filename"
docker exec test find / | grep -E "FILENAME|filename"
</pre>
---
<pre>
  MNT namespace isolates the mount point
</pre>
Superposition of Docker Image Layers

Docker image layers stacked on top of each other:

               ┌─────────────────────────────┐
               │   Layer 4: App Code         │
               │   (COPY app/, RUN pip ...)  │
               └─────────────────────────────┘
               ┌─────────────────────────────┐
               │   Layer 3: Dependencies     │
               │   (RUN apt install python)  │
               └─────────────────────────────┘
               ┌─────────────────────────────┐
               │   Layer 2: Updates          │
               │   (RUN apt update)          │
               └─────────────────────────────┘
               ┌─────────────────────────────┐
               │   Layer 1: Base (Ubuntu)    │
               └─────────────────────────────┘

                 ↓  Superposition (Union FS)

        ┌────────────────────────────────────────┐
        │      CONTAINER VIEW (merged FS)        │
        │  All layers appear as one filesystem   │
        └────────────────────────────────────────┘

👉 Explanation

Even though the filesystem is split into multiple layers, Docker merges them using a union filesystem (OverlayFS) so the container sees one combined filesystem.

**Copy-on-Write:**
Purpose of copy on write is to share layer between different containers.
