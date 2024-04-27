import { useRef, useState } from 'react'

type ll_Node = {
  data: string
  next?: ll_Node 
}

type dsa_linkedList = {
  head?: ll_Node
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
  const linkedListRef = useRef<HTMLDivElement>();

  function createNewNode(element: string){
    const temp: ll_Node = {
      data: element,
      next: null
    } 
    return temp;
  }

  function insertNode(){
    if(dataRef.current.value == null) return  

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
    if(linkedList.head == null) return
    while(linkedList.head != null){
      linkedListRef.current.appendChild(<div> Linked List Node {linkedList.head.data} </div>);

    }
  }

  function removeFrom(index: number){
    //deleting the first index

    //iterate over list to find desired location

    //remove the element

    //return the element removed

  }

  function insertAt(element: string, index: number){
    //create a new node
    const temp = createNewNode(element);

    //check to add element to the first index

    //otherwise iterate through the list to find the location 

    //add the new node

  }

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