import { useState } from "react"

export function DS_Node(){
  const [nodeData, setNodeData] = useState({
    data: '1',
    dataLink: null
  })
  return (
    <div>
      Data: {nodeData.data} <br/>
      Link: {nodeData.dataLink}
    </div>
  )
}
