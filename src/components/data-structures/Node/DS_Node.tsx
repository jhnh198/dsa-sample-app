import {useRef, useState } from "react"
import "./DS_Node.css"

//todo: likely just make linked list and remove the node or address it in the ll
export function DS_Node(){
  const [nodeData, setNodeData] = useState('');
  const [nodeDataLink, setNodeDataLink] = useState('');

  const dataRef = useRef<HTMLInputElement>(null);

  function handleOnClick(){
    if(dataRef.current){
      setNodeData(dataRef.current.value)
      dataRef.current.value = '';
    } 
  }

  function addDataLink(){
    if(dataRef.current){
      setNodeDataLink(dataRef.current.value)
      dataRef.current.value = '';
    } 
  }
  
  return (
  <div>
    <p>A node is a basic unit of data that contains a value and a link to a new node.
      It is the building block of a Linked List and other data structures.
      This is a single node. A linked node is in the linked list sample.
    </p>
    <div className="output-container">
      <div className="output-controls">
        <input type="text" ref={dataRef}/>
        <button onClick={handleOnClick}> Set Node Data </button>
        <button onClick={addDataLink}> Add Data Link </button>
      </div>

      <div className="output-content">
        <p> Data: {nodeData} </p> 
        <p> Link: {nodeDataLink} </p>
      </div>
    </div>
  </div>
  )
}