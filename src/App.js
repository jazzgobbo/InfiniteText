import { FirebaseError } from 'firebase/app';
import { ref, get } from 'firebase/database';
import React, { useEffect, useState} from 'react';
import './App.css'
import { setData, database } from './utilities/firebase.js';


const App = (props) => {

  // Store input value in react state
  const [value, setValue] = useState("");

  // When input in textarea changes, store to react state 
  const inputChangedHandler = (e) => {
    setValue(e.target.value);
  };

  // Push Function pushes value in textarea into database
  // This is triggered by clicking the save button
  const Push = () => {
    setData(`/input`, {
      text : value,
    }).catch(alert);
  }

  // When component is mounted, get a snapshot of the
  // current database and setValue to that snapshot 
  useEffect(() => {
    const dbRef = ref(database, "/input/text");
    get(dbRef).then(snapshot => {
      setValue(snapshot.val())
    })
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
          <button id="save" onClick={Push}>Save</button>
        </div>
        <div className="texty">
          <p>{value}</p>
        </div>

      </div>
    );
};

export default App;