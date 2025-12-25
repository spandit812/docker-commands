<pre>
run > docker info --> check if swarm is active --> if active you should see swarm: active

> docker swarm init --> to initialize the docker swarm.
</pre>
---
<pre>
  when we initialize swarm: we will have overlay network
  > docker network ls --> it will show you overlay network and one more  docker_gwbridge
</pre>
---

<pre>
  run this command on manager machine 
  docker swarm join-token worker

  then run the next suggested command on the worker. then this machine will work as worker machine of the master/manager machine.
</pre>
