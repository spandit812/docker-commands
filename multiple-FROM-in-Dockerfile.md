<pre>
FROM  some-image as name1

FROM some-image as name2

COPY --from=name1

FROM some-image as name3
</pre>
---
<pre>
If we create docker file like this, by default it will create only one image that is last FROM and that is name3.
to specify the image should be created, you should mention like:

docker build --target name1
  OR
docker build --target name2

</pre>



