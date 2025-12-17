<pre>
<b>There are different network drivers:</b>
1. Bridge network   -- This is default network, or local network which helps to communcate between the containers.
2. Host network     -- It is the network of the operating system, you can connect with the host network.-- This is not good idea, in case of network isolation.
3. Overlay network  -- It is capable of communicating different container in <b>different virtual machines.</b> It communiate through underlay network. (Combination of bridges and vlan to commnunicate different virtual machines.)
Overlay is vertual, uderlay is physical.
  
4. Macvlan network  -- When container wants to connect to the data center though vlan.
5. Third-party network plugins ---
</pre>
---
<pre>
  When we do <b>docker network ls</b> it gives below networks (Drivers):
  briged 
  host
  null --> when we use null network, your container will not have network.
</pre>

---
<pre>
  <b>Run container with null network</b>
  docker container run --detach --name test-none --network none --tty docker.io/library/busybox:latest
  docker exec test-none ifconfig
</pre>
