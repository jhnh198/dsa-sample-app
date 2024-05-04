import { ll_Node } from "./DS_LinkedList"

export function DS_LinkedListNode(data: string, next: ll_Node){
  return (
    <>
      <p>{data}</p>
      <DS_LinkedListNode next={next} />
    </>

  )
}