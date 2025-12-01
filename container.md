---

<pre>
docker ps
docker ps --all
docker start <'container-name'> example: docker start test
docker top test
docker exec --interactive --tty test top
docker rm --force test test1 
docker run -d --name test --entrypoint sleep docker.io/library/busybox:latest test infinity

docker inspect test | grep Entrypoint -A2
docker logs test
docker stop containe-name
docker restart container-name


</pre>
