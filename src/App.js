import React, { Component, useEffect, useState} from 'react';
import './App.css'


const App = () => {

  // store input value in react state
  const [value, setValue] = useState("")

  // when input changes, store to react state 
  // and local storage
  const inputChangedHandler = (e) => {
    setValue(e.target.value);
    localStorage.setItem("inputValue", e.target.value);
  };

  // when component is mounted, set initial state
  // of input to value in local storage
  useEffect(() => {
    setValue(localStorage.getItem("inputValue"));
  }, []);

  return (
      <div className="App">
        <div className="input">
          <textarea 
            id="text"
            name="text" 
            value={value} 
            onChange={inputChangedHandler}>
          </textarea>
        </div>
        <div className="texty">
          <p>{value}</p>
        </div>

      </div>
    );
};

export default App;