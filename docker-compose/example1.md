1. In this we are creating image from Dockerfile , which will be created from compose.yml file using build: .
2. docker compose up -d --> This command will only create & run the container which will use image(panditisbusy:latest) created.
3. There will not be service created using docker compose up as we create docker service create ....

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
 docker compose up -d 
</pre>
---
<pre>
 docker compose ps #This command will show the container running.
</pre>
---
<pre>
 docker compose down #This will delete container and network created but not image
</pre>
