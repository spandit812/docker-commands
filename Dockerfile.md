<pre>
  mkdir test/
  tee test/Dockerfile 0<<EOF
  FROM docker.io/library/busybox:latest
  ENTRYPOINT sleep
  CMD: infinity
  EOF
</pre>

ENTRYPOINT: is the property of the Dockefile that specify to run the command within the container.
