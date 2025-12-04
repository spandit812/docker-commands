Dockerhub registry: https://hub.docker.com/

---
Registry is used to store the image. you can create the registry on premises.

---
<pre>
<b>Image layers are stored in the below folder:</b> sudo ls /var/lib/docker/overlay2/
<b>Volums are stored in the folder:</b> sudo ls /var/lib/docker/volumes/
<b>To check if registry created:</b> sudo find /var/lib/docker/volumes/registry/ -type f
</pre>
---
<b>docker pull mysql</b> is equivalent to <b>docker pull docker.io/library/mysql:latest</b>

---
<pre>
Lets create one container with image registry, which helps us to push, tag and apis related to registry.

<b> to create container which suppots registry:</b>

docker run --detach --name registry --publish 5000:5000 --restart always --volume my_volume:/var/lib/registry:rw docker.io/library/registry:2

<b>Push image into registry</b>
docker push localhost:5000/my_library/myphp:alpine
</pre>
---
<pre>
  docker volume ls
  docker inspect my_volume
</pre>
---
---

When we push the image it goes into /var/lib/docker/volume folder
when we pull: immage goes to /var/lib/docker/overlay2 folder.

---
---
<pre>
<b>If you want to delete the images pushed in the local registry by api add -e REGISTRY_STORAGE_DELETE_ENABLED=true</b>
docker run --detach --name registry --publish 5000:5000 --volume my_registry:/var/lib/registry:rw --restart always -e REGISTRY_STORAGE_DELETE_ENABLED=true docker.io/library/registry:2
</pre>
---
---
<pre>
docker pull busybox:latest
docker tag busybox:latest localhost:5000/my_busybox1:infinity
docker push localhost:5000/my_busybox1:infinity

docker run --detach --name sleep1 --entrypoint sleep --volume my_data:/data1/:rw localhost:5000/my_busybox1:infinity infinity
docker run --detach --name sleep2 --entrypoint sleep --volume my_data:/data1/:rw localhost:5000/my_busybox1:infinity infinity

docker exec sleep1 touch /data1/shashi.txt
docker exec sleep2 touch /data1/shashi2.txt
  
Both containers pointing to same volume

docker exec sleep1 ls /data1/
docker exec sleep2 ls /data1/
</pre>
