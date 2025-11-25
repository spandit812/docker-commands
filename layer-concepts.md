---
<pre>Docker file systems are stored at /var/lib/docker/overlay2</pre> 
---
---
Copy on write:
<pre>
  All the layers are immutabe and all the containers can share the same layer to avoid the duplication
</pre>
<img width="968" height="375" alt="image" src="https://github.com/user-attachments/assets/f1f47f1f-3f54-4214-9546-60f543512b0d" />
<img width="566" height="396" alt="image" src="https://github.com/user-attachments/assets/9f4512c4-e54e-42f0-850a-d32ec1a005f1" />

---

Where are the layers stored?
sudo ls /var/lib/docker/overlay2/

---

How do we create layers?
<pre> Using Dockerfile </pre>
<pre>Dockerfile is the manifect of the creation of image layer.</pre>
When you create docker image with Dockerfile, you create layers.Below image having 6 layers.
<p></p>
<img width="682" height="346" alt="image" src="https://github.com/user-attachments/assets/541f3589-89b0-4052-9a61-c76bcdb6b12b" />

<p>

</p>

---
<pre>less number of layers in the Dockerfie will improve the performance of the container</pre>
