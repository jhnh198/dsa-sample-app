import React, { useState } from 'react'

type ll_Node = {
  data: string
  dataLink: ll_Node
}

export function DS_LinkedList(){
  const [linkedList, setLinkedList] = useState({
    data: "head",
    dataLink: null,
  })


  function createNewNode(data: string, nextNode: ll_Node){
    return {
      data,
      dataLink: nextNode
    }
  }

  //return all elements of the list to the screen
  function displayAllNodes(){

  }

  function removeFrom(index: number){
    //deleting the first index

    //iterate over list to find desired location

    //remove the element

    //return the element removed

  }

  function insertAt(element: ll_Node, index: number){
    //create a new node

    //check to add element to the first index

    //otherwise iterate through the list to find the location 

    //add the new node

  }

  // add controls for input and functions
  return (
    <div>
      {linkedList.data}
      {linkedList.dataLink}
    </div>
  )
}

export default DS_LinkedList