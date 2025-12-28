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
  tee php/index.php 0<<EOF
  <?php phpinfo(); ?>
  EOF
    
  docker config create php-config php/index.php
  docker service create --secret source=php-config, targe=/index.php --publish 8080 docker.io/library/php:alpine -f index.php -S 0.0.0.0:8080
</pre>
