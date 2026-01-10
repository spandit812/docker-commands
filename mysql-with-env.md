---
> docker run -d --name=mysql -e MYSQL_ROOT_PASSWORD=yourpassword -e MYSQL_DATABASE=yourdatabase docker.io/library/mysql:9.5.0
> 
> docker exec -it mysql bash
> 
> mysql -uroot -pyourpassword
