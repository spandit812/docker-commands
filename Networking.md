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
  <b>Run container with null network, we use this when you want to make your container isolated from containers and attackers, ex: Certificate authority, cryptography engine</b>
  docker container run --detach --name test-none --network none --tty docker.io/library/busybox:latest
  docker exec test-none ifconfig
  docker exec test-none ping localhost  --> I can only access local network
  docker exec test-non ping 8.8.8.8     --> I can not access real network
</pre>
---
<pre>
  To connect to the bridge network for none container. It is not possible.
  docker network connect bridge test-none
  
</pre>
---
<pre>
<b>Run container in bridge network:</b>
  docker container run --detach --name test-bridge --network bridge --tty docker.io/library/busybox:latest
  docker exec test-bridge ifconfig
  docker exec test-bridge ping localhost -c1  --> I can access local network
  docker exec test-bridge ping 8.8.8.8 -c1     --> I can access real network
</pre>
