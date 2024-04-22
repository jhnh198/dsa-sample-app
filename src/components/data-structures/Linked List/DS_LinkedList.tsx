import React, { useState } from 'react'

type ll_Node = {
  data: string | null
  next: ll_Node | null
}

export function DS_LinkedList(){
  const [linkedList, setLinkedList] = useState<ll_Node>(
  { 
    data: null,
    next: null
  })


  function createNewNode(head: ll_Node, element: string){
    const temp : ll_Node = {
      data: element,
      next: null
    }

    if(head == null) {
      return temp;
    } else {
      //look for last node and add to end
      while(head.next != null){

      }
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
    const temp : ll_Node = {
      data: element.data,
      dataLink: {
        data: '',
        dataLink: '',
      }
    }

    //check to add element to the first index

    //otherwise iterate through the list to find the location 

    //add the new node

  }

  // add controls for input and functions
  return (
    <>
      <div>
        A linked list is a chain of nodes
      </div>
      <div>
        {linkedList.data}
        {linkedList.next}
      </div>
    </>

  )
}

export default DS_LinkedList