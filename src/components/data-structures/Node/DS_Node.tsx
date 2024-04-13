import {useRef, useState } from "react"

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
    <input type="text" ref={dataRef}/>
    <button onClick={handleOnClick}> Set Node Data </button>

    {/*todo: set up button to add a data link with the input */}
    <button onClick={addDataLink}> Add Data Link </button>
      Data: {nodeData} <br/>
      Link: {nodeDataLink}
  </div>
  )
}