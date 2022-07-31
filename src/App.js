import { ref, get } from 'firebase/database';
import React, { useEffect, useState} from 'react';
import './App.css'
import { auth, setData, database, useUserState } from './utilities/firebase.js';
import {SignInButton, SignOutButton} from './Authentication.js'


const App = () => {

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

  // Store user state in user state
  const [state, setState] = useUserState();

  var user = auth.currentUser
  if (user != null) {

    if (user.uid === "6unh3FClWIck3JbaXe9HLt2sGwV2" || user.uid === "MChHPOb5NZhSSIckdT4l65EG22C3") {
      return (
        <div className="App">
          <div className="editor">
          <div className="buttons">
          { user ? <SignOutButton /> : <SignInButton /> }
          <button id="save" onClick={Push}>Save</button>
          </div>
          <div className="input">
            <textarea 
              id="text"
              name="text" 
              value={value}
              onChange={inputChangedHandler}
              hidden={false}>
            </textarea>
          </div>
          </div>
          <div className="texty">
            <p>{value}</p>
          </div>

        </div>
      ); } else {
        return (
          <div className="App">
            <div className="viewer">
              { user ? <SignOutButton /> : <SignInButton /> }
            </div>
            <div className="input">
              <textarea 
                id="text"
                name="text" 
                value={value}
                onChange={inputChangedHandler}
                hidden={true}>
              </textarea>
            </div>
            <div className="texty">
              <p>{value}</p>
            </div>

          </div>
        );}
  } else {
    return (
      <div className="App">
        <div className="viewer">
            { user ? <SignOutButton /> : <SignInButton /> }
        </div>
        <div className="input">
          <textarea 
            id="text"
            name="text" 
            value={value}
            onChange={inputChangedHandler}
            hidden={true}>
          </textarea>
        </div>
        <div className="texty">
          <p>{value}</p>
        </div>

      </div>
    );

  }
  

};

export default App;