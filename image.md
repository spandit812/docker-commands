<pre>
  images layers are stored at /var/lib/docker/overlay2 folder
  docker images
  docker rmi image-name
  docker inspect localhost/my-library/busybox:sleep | grep Layers -A2
  
  <b>To remove the image layers which are not used any more:</b>  docker image prune --force
  
  <b>Modify name of the image:</b>  docker tag localhost/my_library/my_php:alpine localhost:5000/my_library/my_php:alpine
  <br/>
  <b>To list the different layer of the registry:2 image:</b> docker inspect registry:2
</pre>
