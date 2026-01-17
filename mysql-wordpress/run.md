```bash
## Create bridge network for mysql and wordpress
docker network create --driver bridge net_mysql_workpress
## run mysql
docker run -d --name=mysql-wordpress -e MYSQL_ROOT_PASSWORD=spandit -e MYSQL_DATABASE=tyfa docker.io/library/mysql:9.5.0
## connect mysql-wordpress with the network bridge net_mysql_workpress
docker network connect net_mysql_workpress mysql-wordpress
##Run wordpress and connect with the same network as mysql 
docker run -d --name my-wordpress --network net_mysql_workpress -p 8093:80 -e WORDPRESS_DB_HOST=mysql-wordpress -e WORDPRESS_DB_USER=root -e WORDPRESS_DB_PASSWORD=spandit -e WORDPRESS_DB_NAME=tyfa docker.io/library/wordpress:latest
```
