Dockerhub registry: https://hub.docker.com/

---
you can create the registry on premises.

---
<pre>
<b>Image layers are stored in the below folder:</b> sudo ls /var/lib/docker/overlay2/
<b>Volums are stored in the folder:</b> sudo ls /var/lib/docker/volumes/
<b>To check if registry created:</b> sudo find /var/lib/docker/volumes/registry/ -type f
</pre>
---
<b>docker pull mysql</b> is equivalent to <b>docker pull docker.io/library/mysql:latest</b>

---



