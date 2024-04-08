import { useRef, useState } from 'react'
import './App.css'
import { Form, ListGroup, Stack } from 'react-bootstrap'
import { SampleLayout } from './components/SampleLayout';

function App() {
  const [data, setData] = useState([]);
  const textRef = useRef();

  return (
    <Stack direction="horizontal">
      {/* add new concepts here */}
      <ListGroup className='vr'>
        <ListGroup.Item className=''>Nodes</ListGroup.Item>
        <ListGroup.Item className=''>Linked List</ListGroup.Item>
      </ListGroup>

      {/* output of concept selection */}
      <SampleLayout />
    </Stack>      
  )
}

export default App
