<pre>
  <b>create custom bridge nework: In proction we should never create container in default network</b>
  docker network create --driver bridge custom-bridge
  docker network ls
  docker run --detach --name test-custom-bridge-01 --network custom-bridge --tty docker.io/library/busybox:latest
  docker run --detach --name test-custom-bridge-02 --network custom-bridge --tty docker.io/library/busybox:latest

  docker inspect custom-bridge --> you can check here container connected with custom-bridge

  docker exec test-bridge-custom-1 ping 172.18.0.3 -c1

  Now you can not connect to default bridge network.

  We can connect the containers by name, and not only by IP address. It only happen in custom bridge network not with default bridge     network. 
  you can connect custom bridge network to default network:
  
  docker network connect bridge test-bridge-custom-1

  <b>In the customer bridge, it also gives DNS resolver to call container by name.</b>
</pre>
