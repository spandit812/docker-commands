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
