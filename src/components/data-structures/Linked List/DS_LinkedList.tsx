import React from 'react'

type ll_Node = {
  data: string
  dataLink: ll_Node
}

export function DS_LinkedList(){

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
    <div>DS_LinkedList</div>
  )
}

export default DS_LinkedList