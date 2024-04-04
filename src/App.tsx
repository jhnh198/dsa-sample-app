import { useState } from 'react'
import './App.css'
import { Form, ListGroup, Stack } from 'react-bootstrap'

function App() {


  return (
    <Stack direction="horizontal">
      {/* add new concepts here */}
      <ListGroup className='vr'>
        <ListGroup.Item className=''>Nodes</ListGroup.Item>
        <ListGroup.Item className=''>Linked List</ListGroup.Item>
      </ListGroup>

      {/* output of concept selection */}
      <Form>
        <Form.Control type="textarea" placeholder="Concept goes here..." readOnly />
      </Form>
    </Stack>      
  )
}

export default App
