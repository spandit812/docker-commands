<pre>
<b>To scale number of containers for the service:</b>
  > docker service create --name busybox-svc --entrypoint sleep docker.io/library/busybox:latest infinity
  > docker service scale busybox-svc=5    --> This will run 5 container for service busybox-svc
  > docker service ls                     --> This will show the list of service where busybox-svc having 5 containers
  > docker service ps busybox-svc         --> This shows number of running containers for the service
  If you have service exposed at port, request will reach to different container every request.
</pre>
