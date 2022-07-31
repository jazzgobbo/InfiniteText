import { ref, get, onValue } from 'firebase/database';
import React, { useEffect, useState} from 'react';
import './App.css'
import { auth, setData, database, useUserState } from './utilities/firebase.js';
import {SignInButton, SignOutButton} from './Authentication.js'


const App = () => {

  // Store input value in react state
  const [value, setValue] = useState("");
  
  // Push Function pushes value in textarea into database
  // This is triggered every time user types something
  const Push = (e) => {
    setData(`/input`, {
      text : e,
    }).catch(alert);
  };

  // Gets a snapshot of the current
  // database and setValue to that snapshot 
  const updateText = () => {
    const dbRef = ref(database, "/input/text");
    get(dbRef).then(snapshot => {
      setValue(snapshot.val());
    })
  }
  
  // When input in textarea changes, store to react state
  // Push to database, and updateText 
  const inputChangedHandler = (e) => {
    setValue(e.target.value);
    Push(e.target.value);
    updateText();
  };

  // When component is mounted, updateText
  useEffect(() => {
    updateText();
  }, []);

  // Store user state in user state
  const [state, setState] = useUserState();

  var user = auth.currentUser
  if (user != null) {

    if (user.uid === "6unh3FClWIck3JbaXe9HLt2sGwV2" || user.uid === "MChHPOb5NZhSSIckdT4l65EG22C3") {
      return (
        <div className="App">
          <div className="editor">
          
          { user ? <SignOutButton /> : <SignInButton /> }
          
          <div className="input">
            <textarea 
              id="text"
              name="text" 
              value={value}
              onChange={inputChangedHandler}>
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
                id="invalid"
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
            id="invalid"
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