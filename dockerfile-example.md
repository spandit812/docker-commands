FROM node:4-slim
RUN npm install express && npm install redis@3.1.2
It is having 2 layer

Here are two layers. We could have broken line 2 into two more lines with FROM like:
FROM node:4-slim
RUN npm install express
RUN npm install redis@3.1.2

But this way, it will create 3 layers. so better to reduce the number of lines in the Dockerfile.

