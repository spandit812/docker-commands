<pre>
  <b>create custom bridge nework: In proction we should never create container in default network</b>
  docker network create --driver bridge custom-bridge
  docker network ls
  docker run --detach --name test-custom-bridge-01 --network custom-bridge --tty docker.io/library/busybox:latest
  docker run --detach --name test-custom-bridge-02 --network custom-bridge --tty docker.io/library/busybox:latest
  
</pre>
