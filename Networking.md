<pre>
<b>There are different network drivers:</b>
1. Bridge network   -- This is default network, or local network which helps to communcate between the containers. Any container in the bridge network, can connect to each other.
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

  <b>Disconnet container from bridge network to make it none/loopback network:</b>
  docker network disconnect --force bridge test-bridge
  docker exec test-bridge ping localhost -c1  --> I can access local network
  docker exec test-bridge ping 8.8.8.8 -c1     --> I can not access real network
  
  <b>Connect the bridge network: this time it will work</b>
  docker network connect bridge test-bridge
  docker exec test-bridge ping localhost -c1  --> I can access local network
  docker exec test-bridge ping 8.8.8.8 -c1     --> I can access real network

</pre>
<pre>
  <b>Host Network: Same networks like host network</b>
  docker run --detach --name test-host --network host --tty docker.io/library/busybox:latest
  docker exec test-bridge ifconfig
  <img width="710" height="372" alt="image" src="https://github.com/user-attachments/assets/c6dec86f-a33b-46be-9668-488a0ee5354f" />
</pre>
<pre>
  <b>You can check, how many containers connected with bridge network:</b>
  docker network inspect bridge
</pre>
<pre>
  Connect from one bridge container to another bridge container like:
  docker exec registry ping 172.17.0.4 -c  --- Here IP is container IP.
</pre>
