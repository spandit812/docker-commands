
<pre>
  1. Docker image have to be secure
  When we create the docker image, we mention the tag, we should mention the digest also to avoid the issue.
  FROM php:alpine@sha...
  2. compose file: 
  use config and secret as much as possible, it's targe should be in custom folder not in root file system. with working_dir.
  3. Network:
  create custom network
  4. in the compose file mention the resource for memory and cup size, if attacker attacks only that much memory can be used.
  use resource with limit and reservation with the same amount.
  5. In the entrypoint of the compose file, rather than giving only entrypoint: php we should give exact path
  docker exec PHPINFO_php-svc.4.z51xlgdlmt1ifpjmjvemh8z1r which php
  entrypoint: /user/local/bin/php
  6. compose file container should be ready_only: true // if someone tries to write file, would not be able to write.

  https://github.com/sebastian-colomar/dca/blob/main/caltech_2022-08/2022-08-20.md
  
  
</pre>
