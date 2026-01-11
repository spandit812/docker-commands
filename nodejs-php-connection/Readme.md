> docker network create mynet # This will create a mynet bridge network
> 
> docker network ls

######
> docker run -d --name mysql-db -p 3307:3306 --network mynet -e MYSQL_ROOT_PASSWORD=rootpassword -e MYSQL_DATABASE=testdb docker.io/library/mysql:9.5.0
> 
> docker ps

######

> docker build -t node-api-image .
> 
> sleep 5 # wait for 5 seconds to start node-api container
> 
> docker run -d --name node-api -p 8091:3000 --network mynet node-api-image

######
> sleep 10

> docker exec -it mysql-db bash

######
**Run the below commad and query inside the mysql container:**

<pre>
mysql -uroot -prootpassword

CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(50)
);

INSERT INTO users VALUES (1,'Shashikant'), (2,'Pandit');
</pre>

> curl localhost:8091/users
