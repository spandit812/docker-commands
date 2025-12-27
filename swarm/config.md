<pre>
  CONFIG copies index.php in all manager nodes.

  docker config inspect php-config
  echo PD9waHAgcGhwaW5mbygpOz8+Cg== | base64 -d
  config location is: sudo ls /var/lib/docker/swarm/raft/

  

</pre>
---
<pre>
  tee php/index.php 0<<EOF
  <?php phpinfo(); ?>
  EOF
    
  docker config create php-config php/index.php
  docker service create --config source=php-config, targe=index.php --publish 8080 docker.io/library/php:alpine -f index.php -S 0.0.0.0:8080

</pre>
