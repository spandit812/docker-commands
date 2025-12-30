<pre>
<b>To scale number of containers for the service:</b>
  > docker service create --name busybox-svc --entrypoint sleep docker.io/library/busybox:latest infinity
  > docker service scale busybox-svc=5
  This will run 5 container for service busybox-svc
</pre>
