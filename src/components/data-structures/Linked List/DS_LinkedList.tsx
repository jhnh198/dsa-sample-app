import React, { useState } from 'react'

type ll_Node = {
  data: string
  dataLink: ll_Node
}

export function DS_LinkedList(){
  const [linkedList, setLinkedList] = useState({
    data: "start",
    dataLink: null,
  })

  function createNewNode(data: string, nextNode: ll_Node){
    return {
      data,
      dataLink: nextNode
    }
  }

  function displayAllNodes(){

  }

  function removeANode(){

  }

  function insertANode(){
    
  }

  return (
    <div>
      {linkedList.data}
      {linkedList.dataLink}
    </div>
  )
}

export default DS_LinkedList