<pre>
1. Initialize the swarm with manager
  > docker swarm init --advertise-addr $(hostname -i)
2. run the give command to the workers.
  > docker swarm join --token <token> 
3. to create one more manager 
  > docker swarm join-token manager
</pre>
