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

