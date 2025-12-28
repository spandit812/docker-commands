<pre>
  Service is the group of identical containers that are running in the worker which 
  1. mounts the config created, with all files which are there in the config.
  example: 
  docker config create php-config php/index.php
  docker service create --config source=php-config, targe=index.php --publish 8080 docker.io/library/php:alpine -f index.php -S 0.0.0.0:8080

  
  Service gives you high availability.
  <b>Create service:</b> 
 <b>Create container whic port is Not published:</b>
  
  docker service create --entrypoint php --name php-svc-1 docker.io/library/php:alpine -f index.php -S 0.0.0.0:8088
  docker service ls
  docker service ps php-svc-1
  docker service logs php-svc-1

  <b>Create container whic port is Published:</b>
  docker service create --entrypoint php --name php-svc-2 --publish 8080 docker.io/library/php:alpine -f index.php -S 0.0.0.0:8080


</pre>
--- 
