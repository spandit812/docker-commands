---
docker build --tag localhost:5000/my_php:alpine .

---
---
docker run --name secure_php2 --detach --entrypoint php --publish 40000:8080 --restart always --user nobody:nogroup --workdir /my_app/ localhost:5000/my_php:alpine -f /index.php -S 0.0.0.0:8080

---
