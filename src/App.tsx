import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, ListGroup, Stack } from 'react-bootstrap'
import { SampleLayout } from './components/SampleLayout';
import { DS_Node } from './components/data-structures/Node/DS_Node';
import DS_LinkedList from './components/data-structures/Linked List/DS_LinkedList';
import "./App.css"

function App() {
  const arrayOfSamples = [
    <DS_Node />,
    <DS_LinkedList />
  ];

  const [index, setIndex] = useState(1);
  function handleOnClick(i: number){
    setIndex(() => i)
  }

  return (
    <>
    <Stack direction="horizontal" gap={3} className=' container-fluid'>
      {/* add new concepts here */}
      <Stack direction='vertical' gap={3} className="w-l mw-50 align-self-center"> 
        <button onClick={() => handleOnClick(0)}>
          Node
        </button>
        <button onClick={() => handleOnClick(1)}>
          Linked List
        </button>
      </Stack>

      <div className='mw-50'>
        {arrayOfSamples[index]}
      </div>
    </Stack>  
    </>   
  )
}

export default App