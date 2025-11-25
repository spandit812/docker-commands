<pre>
FROM node:4-slim
RUN npm install express && npm install redis@3.1.2
</pre>
It is having 2 layer

<pre>
Here are two layers. We could have broken line 2 into two more lines with FROM like:
FROM node:4-slim
RUN npm install express
RUN npm install redis@3.1.2
</pre>

But this way, it will create 3 layers. so better to reduce the number of lines in the Dockerfile.

---

<pre>If any another container, having FROM node:4-slim, use the same layer as the another container</pre>

---

<pre>Dockerfile you configer the layer / file system of your docker container. Docker image is the super position of file system layers.</pre>
