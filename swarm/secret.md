<pre>
  To store something secretly, secrets are mounted in the memory where as configs are mounted in the disk.
  docker secret create php-secret php/index.php
  docker secret ls
  
</pre>

---
<pre>
  tee php/index.php 0<<EOF
  <?php phpinfo(); ?>
  EOF
    
  docker config create php-config php/index.php
  docker service create --secret source=php-config, targe=index.php --publish 8080 docker.io/library/php:alpine -f index.php -S 0.0.0.0:8080
</pre>
