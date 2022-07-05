import React, { useState } from 'react';
import InfiniteText from './Text.js'
import './App.css';

const App = () => {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    setText(e.target[0].value);
  };

  
  

  return (
    <div className="App">

      <div className="infinite-text">
          <form>
              <input type="text" onChange={handleChange} />
          </form>
      </div>
      <h1>{text}</h1>

    </div>
  );
}

export default App;
