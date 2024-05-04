import { useRef, useState } from 'react'
import { DS_LinkedListNode } from './DS_LinkedListNode'
import React from 'react'

export type ll_Node = {
  data: string
  next?: ll_Node | null 
}

type dsa_linkedList = {
  head?: ll_Node | null
}

//todo: implement useEffect to run the while loop when linkedList changes
export function DS_LinkedList(){
  const test_node: ll_Node = {
    data: "head",
  }

  const [linkedList, setLinkedList] = useState<dsa_linkedList>({ 
    head: test_node
  })

  const dataRef = useRef<HTMLInputElement>();
  const linkedListRef = React.useRef<HTMLInputElement>();

  function createNewNode(element: string){
    const temp: ll_Node = {
      data: element,
      next: null
    } 
    return temp;
  }

  function insertNode(temp : ll_Node){
    if(dataRef.current?.value == null) return  

    if(linkedList?.head == null) {
      return temp;
    } else {
      let currentNode = linkedList.head
      while(currentNode.next != null){
        currentNode = currentNode.next;
      }

      currentNode.next = temp;
    }
  }

  //return all elements of the list to the screen
  function displayAllNodes(){
    if(linkedList.head == null || linkedListRef.current == null) return
    while(linkedList.head != null){
      linkedListRef.current.appendChild(<div> Linked List Node {linkedList.head.data} </div>);

    }
  }

  //todo: variable names can be better; multiple deleted nodes
  function deleteMatchingValues(value: string){
    if(!linkedList.head) return null

    let deletedNode = null;

    //process list to remove head and other values
    while (linkedList.head && linkedList.head.data === value){
      deletedNode = linkedList.head
      linkedList.head = linkedList.head.next
    }

    let currentNode = linkedList.head

    //todo: re-evaluate this; 
    if (currentNode !== null){
      while(currentNode?.next){
        if(currentNode.next.data === value){
          deletedNode = currentNode.next;
          currentNode.next = currentNode.next.next;
        } else {
          currentNode = currentNode.next;
        }
      }
    }    

    return deletedNode;
  }

  function insertAt(element: string, index: number){
    //create a new node
    const temp = createNewNode(element);

    //check to add element to the first index

    //otherwise iterate through the list to find the location 

    //add the new node

  }

  displayAllNodes();

  // add controls for input and functions
  return (
    <>
      <div>
        A linked list is a chain of nodes. It starts with a single node, called the head node
        and this head node contains a link to another element. This next element also contains a 
        link to another element. 
      </div>
      <div>
        
        {linkedList.head &&  
          <>
            <div ref={linkedListRef}>
            </div>
          </>
        }
        <div>
          <button> Create Node </button>
          <button onClick={insertNode}>Insert Node</button>
          <button> Remove Node </button>
          <button> Insert Node At Index </button>
          <button> Display all nodes </button>
        </div>
        <input type="text" ref={dataRef}/>
      </div>
    </>
  )
}

export default DS_LinkedList