<pre>
  1. Docker image have to be secure
  When we create the docker image, we mention the tag, we should mention the digest also to avoid the issue.
  FROM php:alpine@sha...
  2. compose file: 
  use config and secret as much as possible, it's targe should be in custom folder not in root file system. with working_dir.
  3. Network:
  create custom network
</pre>
