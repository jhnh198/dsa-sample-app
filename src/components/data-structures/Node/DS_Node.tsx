import { useEffect, useRef, useState } from "react"

/* type sampleNode = {
  nodeData: string | undefined
  nodeDataLink: sampleNode | undefined
  nodes: <sampleNode>[]
}

type inputData = {
  data: string | undefined
}
*/

//todo: add node data link and input for it
export function DS_Node(){
  const [nodeData, setNodeData] = useState('');
  const [nodeDataLink, setNodeDataLink] = useState(null);
  const [nodes, setNodes] = useState([]);

  const dataRef = useRef<HTMLInputElement>(null);

  //todo: clear these warnings
  function handleOnClick(){
    setNodeData(() => dataRef.current?.value)
    dataRef.current?.value = null;
  }
  
  return (
  <div>
    <p>A node is a basic unit of data that contains a value and a link to a new node.
      It is the building block of a Linked List and other data structures.
    </p>
    <input type="text" ref={dataRef}/>
    <button onClick={handleOnClick}> Set Node Data </button>
      Data: {nodeData} <br/>
      Link: {nodeDataLink}
    </div>
  )
}
