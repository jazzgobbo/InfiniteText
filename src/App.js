import { FirebaseError } from 'firebase/app';
import { ref } from 'firebase/database';
import React, { Component, useEffect, useState} from 'react';
import './App.css'
import { useData, setData, database } from './utilities/firebase.js';


const App = () => {

  // store input value in react state
  const [value, setValue] = useState("");

  

  // Push Function pushes value in textarea into database
  const Push = () => {
    setData(`/input`, {
      text : value,
    }).catch(alert);
  }


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


  window.addEventListener('load', () => {
    Fetch();
  });

  const Fetch = () => {
    var inputRef = database.ref('input');
    inputRef.on('value').then((snapshot) => {
      const data = snapshot.val()
    })
  }

  return (
      <div className="App">
        <div className="input">
          <textarea 
            id="text"
            name="text" 
            value={value}
            onChange={inputChangedHandler}>
          </textarea>
          <button id="save" onClick={Push}>Save</button>
        </div>
        <div className="texty">
          <p>{value}</p>
        </div>

      </div>
    );
};

export default App;