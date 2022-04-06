import React, { useState } from 'react'
import './App.css'
import jsonData from './data.json'
import Table from 'react-bootstrap/Table'
import InputGroup from 'react-bootstrap/InputGroup'
import { FormControl } from 'react-bootstrap'

function App() {
  const [name, setName] = useState('')
  const [date, setDate] = useState('')

  const onNameChange = (e) => {
    setName(e.target.value)
  }

  const onDateChange = (e) => {
    setDate(e.target.value)
  }


  return (
    <div
      className="App"
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '40px' }}
    >
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'left' }}>
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
        <FormControl
          placeholder="Username"
          onChange={onNameChange}
          value={name}
        />
      </InputGroup>
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
        <FormControl
          placeholder="Date"
          onChange={onDateChange}
          value={date}
        />
      </InputGroup>
      </div>
      <Table striped bordered hover variant="dark" style={{width:"80%"}}>
        <thead>
          <tr>
            <th>timeSpent</th>
            <th>spentAt</th>
            <th>issue</th>
            <th>user</th>
          </tr>
        </thead>
        <tbody>
          {jsonData.data.timelogs.nodes.map((item, key) => {
            if (
              item.user.username.toUpperCase().indexOf(name.toUpperCase()) > -1 && item.spentAt.toString().indexOf(date) > -1
            ) {
              return (
                <tr key={key + 1}>
                  <td>{item.timeSpent}</td>
                  <td>{item.spentAt}</td>
                  <td>{item.issue.id}</td>
                  <td>{item.user.username}</td>
                </tr>
              )
            }
          })}
        </tbody>
      </Table>
    </div>
  )
}

export default App
