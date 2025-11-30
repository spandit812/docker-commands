<img width="789" height="477" alt="image" src="https://github.com/user-attachments/assets/1ab1f48c-fb6d-45ea-a282-dce060c1c1ad" />

<img width="701" height="483" alt="image" src="https://github.com/user-attachments/assets/2fec993d-f86d-47f0-97c0-63187c5bb06d" />

<img width="835" height="496" alt="image" src="https://github.com/user-attachments/assets/d7500104-3b47-4a42-9fb3-c64c4adce97b" />

<img width="890" height="514" alt="image" src="https://github.com/user-attachments/assets/f8f2230d-525b-4427-aae2-25dd7c3cc431" />
<pre>
  This CMD is metadata, when you run the docker container it will run by default. But if not added in the Dockerfile, you will have to      explicitly pass --entrypoint at the time of running the container. example:
  docker run --detach --entrypoint sleep --name test  docker.io/library/busybox:latest infinity
--  CMD is metadata because it specifies what command should run by default, but this does not run during image build time.
--  This metadata (CMD) can be overridden at runtime if a different command is provided during <b>docker run</b>
-- you can customize the entrypoint at the time of <b> docker run </b> by --entrypoint 
-- CMD is not a real layer, it is just a metadata.
-- docker inspect container-name ---> it gives the detail about the container.
</pre>
---
<pre>
  > service docker status ---> This is docker server information
  > docker version        ---> This is client information
</pre>
