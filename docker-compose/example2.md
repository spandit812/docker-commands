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
