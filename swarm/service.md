<pre>
  Service gives you high availability.
  <b>Create service:</b> 
 <b> Not published:</b>
  
  docker service create --entrypoint php --name php-svc-1 docker.io/library/php:alpine -f index.php -S 0.0.0.0:8088
  docker service ls
  docker service ps php-svc-1
  docker service logs php-svc-1

  <b>Published:</b>
  docker service create --entrypoint php --name php-svc-2 --publish 8080 docker.io/library/php:alpine -f index.php -S 0.0.0.0:8080


</pre>
--- 
