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
    <Stack direction="horizontal" gap={3} className="list-container">
      {/* add new concepts here */}
      <Stack direction='vertical' gap={3} className="list-buttons"> 
        <button onClick={() => handleOnClick(0)}>
          Node
        </button>
        <button onClick={() => handleOnClick(1)}>
          Linked List
        </button>
      </Stack>
    </Stack>  
    <div className='app-content'>
        {arrayOfSamples[index]}
      </div>
    </>   
  )
}

export default App