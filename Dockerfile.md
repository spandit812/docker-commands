<pre>
  FROM docker.io/library/busybox:latest
  ENTRYPOINT sleep
  CMD: infinity
</pre>

Dockerfile is a manifest to create container file system.

<b>ENTRYPOINT</b>: is the property of the Dockefile that specify to run the command within the container. It is just the instruction to specify what is the command to run in the container.

<b>CMD</b> is the metadata, when you run the docker container it will run by default. But if not added in the Dockerfile, you will have to explicitly pass --entrypoint at the time of running the container. example:
docker run --detach --entrypoint sleep --name test  docker.io/library/busybox:latest infinity

<pre>
To create the docker file system with Dockerfile we run the command below:
docker build -t name-of-the-docker-image folder-where-Dockerfile-existing
<b>Example:</b> docker build --tag localhost/my_library/my_busybox:sleep test/
  :sleep is the version
</pre>

