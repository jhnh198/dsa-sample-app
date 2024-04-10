import { useState } from "react"

export function DS_Node(){
  const [nodeData, setNodeData] = useState(0);
  const [nodeDataLink, setNodeDataLink] = useState(null);
  
  return (
    <div>
      Data: {nodeData} <br/>
      Link: {nodeDataLink}
    </div>
  )
}
