<pre>
  Run the compose file like:
  docker swarm init # only if swarm is not runnin.
  doker stack deploy -c compose.yml mystack
</pre>
---
<pre>
tee Dockerfile 0<< EOF
FROM docker.io/library/busybox:latest
CMD ["sleep","infinity"]
EOF
</pre>
---
<pre>
tee compose.yml 0<< EOF
services: 
 busybox:
  image: panditisbusy:latest
  build: .
  entrypoint: ["sleep", "infinity"]
EOF
                          
</pre>
---
<pre>
  docker stack deploy -c compose.yml
  This will throw error: No such image: panditisbusy
  because, stack deploy (docker swarm) does not create image like compose, it looks(it only pulls) for image created locally or registry.
</pre>
---
<pre>
WORKING COMMAND
Removed build: . from yml file
  
docker build -t panditisbusy:latest .

tee compose.yml 0<< EOF
services: 
 busybox:
  image: panditisbusy:latest
  entrypoint: ["sleep", "infinity"]
EOF
  
docker stack deploy -c compose.yml mystack
docker service ls
docker service ps mystack_busybox
  now, swarm will ignore build: .
</pre>
