<pre>
<b>Lets say you have 4 nodes running and you want to drain or unavailable one of the nodes, execute below command:</b>
    docker node update --help
    docker node update --availability drain node-name-goes-here
    Tasks runnig in the node, will be restart another task in the other node
<b>To make is available again:</b>
    docker node update --availability active node-name-goes-here
</pre>
