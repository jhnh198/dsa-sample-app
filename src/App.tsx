import { useRef, useState } from 'react'
import './App.css'
import { Form, ListGroup, Stack } from 'react-bootstrap'
import { SampleLayout } from './components/SampleLayout';
import { DS_Node } from './components/data-structures/Node/DS_Node';
import DS_LinkedList from './components/data-structures/Linked List/DS_LinkedList';

function App() {
  const arrayOfSamples = [
    <DS_Node />,
    <DS_LinkedList />
  ];

  const [index, setIndex] = useState(0);
  function handleOnClick(i: number){
    setIndex(() => i)
  }

  return (
    <Stack direction="horizontal">
      {/* add new concepts here */}
      <button onClick={() => handleOnClick(0)}>
        Node
      </button>
      <button onClick={() => handleOnClick(1)}>
        Linked List
      </button>
      <div>
        {arrayOfSamples[index]}
      </div>

      {/* output of concept selection */}
      
    </Stack>      
  )
}

export default App
