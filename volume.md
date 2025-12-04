---
<pre>
It is to store the data
Volume is a folder that is not part of image layers.
<b>Volume is stored at</b>: /var/lib/docker/volumes
<b>To remove volume:</b>docker volume rm volume-name
<b>Create Volume</b>
docker run --name my_busybox --entrypoint sleep --volume my_volume:/data/:ro docker.io/library/busybox:latest infinity
</pre>

