<pre>
  Secret is docker object, which is stored in docker engine and contains in of the secret files. Difference is not much between docker  config and docker secret, places are different where they are kept.
  Limitation: file size should be 500kb. If file size exceeds this size, you need to create external docker volume / docker register which can contain more size files.
  
  To store something secretly, secrets are mounted in the memory(temp ) where as configs are mounted in the disk (overlay2 folder).
  docker secret create php-secret php/index.php
  docker secret ls
  docker secret is by default mounted to /run/secrets folder
  where as config is mounted to / folder by default.
</pre>
---
<pre>
  with --workdir
  docker service create --name secret_container --secret source=my_secret,target=/php/index.php --entrypoint php --workdir /php --publish 30005:8088 docker.io/library/php:alpine -S 0.0.0.0:8088
</pre>
---
<pre>
  <b>This will not work because of relative path of index.php</b>
  tee php/index.php 0<<EOF
  <?php phpinfo(); ?>
  EOF
    
  docker config create php-config php/index.php
    
  docker service create --secret source=php-config, targe=index.php --publish 8080 docker.io/library/php:alpine -f index.php -S 0.0.0.0:8080
</pre>
---
<pre>
  with --workdir
  docker service create --name secret_container --secret source=my_secret,target=/php/index.php --entrypoint php --workdir /php --publish 30005:8088 docker.io/library/php:alpine -S 0.0.0.0:8088
</pre>
---
<pre>
  <b>This will work add absolute path is mentioned /index.php</b>
  tee php/index.php 0<<EOF
  <?php phpinfo(); ?>
  EOF
    
  docker config create php-config php/index.php
  docker service create --secret source=php-config, targe=/index.php --publish 8080 docker.io/library/php:alpine -f index.php -S 0.0.0.0:8080
</pre>
---
<pre>
  Better to check the command of removing/adding by docker service update --help
  <b>Remove and add the secret at the service:</b>
  docker service update --secret-rm secret_container
  <b>To add other secret:</b>
  docker service update --secret-add secret_container
</pre>
