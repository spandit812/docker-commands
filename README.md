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
