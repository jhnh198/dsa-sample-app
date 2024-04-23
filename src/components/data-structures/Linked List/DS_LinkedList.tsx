import React, { useState } from 'react'

type ll_Node = {
  data: string | null
  next: ll_Node | null
}

type dsa_linkedList = {
  head: ll_Node | null
}

export function DS_LinkedList(){
  const [linkedList, setLinkedList] = useState<dsa_linkedList>({ 
    head: null
  })

  function createNewNode(element: string){
    const temp: ll_Node = {
      data: element,
      next: null
    } 
    return temp;
  }

  function insertNode(head: ll_Node, element: string){
    const temp = createNewNode(element)

    if(head == null) {
      return temp;
    } else {
      //look for last node and add to end
      while(head.next != null){
        head = head.next;
      }

      head.next = temp;
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
  //todo: can't assign null to react element
  return (
    <>
      <div>
        A linked list is a chain of nodes. It starts with a single node, called the head node
        and this head node contains a link to another element. This next element also contains a 
        link to another element. 
      </div>
      <div>
        
        {}
        
      </div>
    </>

  )
}

export default DS_LinkedList