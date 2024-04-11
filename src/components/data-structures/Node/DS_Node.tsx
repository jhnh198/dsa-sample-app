import { useEffect, useRef, useState } from "react"

export function DS_Node(){
  const [nodeData, setNodeData] = useState(0);
  const [nodeDataLink, setNodeDataLink] = useState(null);
  const [nodes, setNodes] = useState([]);

  const dataRef = useRef()

  function handleOnClick(){
  }
  
  return (
  <div>
    <p>A node is a basic unit of data that contains a value and a link to a new node.
      It is the building block of a Linked List and other data structures.
    </p>
    {/* <input type="text" ref={dataRef}/> */}
    <button onClick={handleOnClick}> Set Node Data </button>
      Data: {nodeData} <br/>
      Link: {nodeDataLink}
    </div>
  )
}
