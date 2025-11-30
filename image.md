<pre>
  docker images
  docker rmi image-name
  docker inspect localhost/my-library/busybox:sleep | grep Layers -A2
  
  <b>To remove the image layers which are not used any more:</b>  docker image prune --force
</pre>
