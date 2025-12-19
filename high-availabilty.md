<pre>
  <b>1. How would you keep high availabity for a system<b> 
  If you have containers runnin on one machine, and you want to update machin, that might cause the down the containers for few minutes.
  To keep containers running, you will have to move the containers from one machine to another.
  <img width="490" height="200" alt="image" src="https://github.com/user-attachments/assets/9ac68647-8bdf-42dd-80e4-7526e19af3e2" />
  <b>2.Other Way</b>
    For high availability, you need orchastrator and overlay network for container. and underlay network (vlan) will be connecting two machines
    
    Underlay network is typically VLAN of the data enter.
    <img width="490" height="200" alt="image" src="https://github.com/user-attachments/assets/198dbf64-6f4f-49af-bce8-aa67a1981a56" />
    MACVLAN:
    <img width="938" height="584" alt="image" src="https://github.com/user-attachments/assets/17bf8d77-cc28-4734-bfc8-a5254288cc0a" />

</pre>
