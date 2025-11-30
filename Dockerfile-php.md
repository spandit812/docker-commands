<pre>
FROM docker.io/library/php:alpine
COPY index.php .
</pre>

<pre>
  docker build --tag myphp:alpine .
  docker images
  docker history myphp:alpine
  docker run --detach --publish 8080 --entrypoint php --name phpcontainer1 myphp:alpine  -f index.php -S 0.0.0.0:8080
  
  docker port phpcontainer1
  
  http://localhost:5432
  
</pre>
