import React, {useState} from "react";
import Message from './Message.js';
import './App.css';

function App() {
  let [count , setcount] = useState(0)
  let [isMorning , setMorning ] = useState(true)
  return (

    <div className={`box ${isMorning ? 'daylight' : ''}`}> 
      <h3>HAVE A GOOD = {isMorning ? 'Morning' : 'Night'}</h3>
      <Message counter={count} />

      <br />
      <button type="button" onClick={()=>setcount(count + 1)}>   
        click me
      </button>
      <button type="button" onClick={()=>setMorning(!isMorning)}> M/N</button>
    </div>
  );
}

export default App;
