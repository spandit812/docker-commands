<pre>
  1. Managere contains the database of cluster, docker demon internally have database which stores all details of cluster.
  2. Database of the cluster is stored at /var/lib/docker/swarm  --> at this location raft file creates at manager location whichi is database.
</pre>
---
<pre>
1. Initialize the swarm with manager
  > docker swarm init --advertise-addr $(hostname -i)
2. run the give command to the workers.
  > docker swarm join --token <token> 
3. to create one more manager 
  > docker swarm join-token manager
</pre>
<pre>
1. To list number of machines running, run below command
  > docker node ls
</pre>
