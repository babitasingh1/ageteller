import React, { useState } from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';
import './App.css';
import AgeStates from './AgeStates';

function App() {
  let birthday = '1991-05-09';

  const [newDate, setDate] = useState([]);

  function changeBirthday() {
    console.log(newDate);
  }

  return (
    <div className='App'>
      <Form inline>
        <h2> Input your Birthday!</h2>
        <FormControl
          type='date'
          onChange={(event) => setDate({ newDate: event.target.value })}
        ></FormControl>
        {''}

        <Button onClick={() => changeBirthday()}>Submit</Button>

        <AgeStates newDate={newDate} />
      </Form>
    </div>
  );
}

export default App;
