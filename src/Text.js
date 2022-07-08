import React, { useState } from 'react';

const InfiniteText =(props) => {
    return (
        <div> 
            <p onClick={ props.name }>I'm {props.clickParagraph} and I am a {props.profession} !</p>
            <p>{props.children}</p>
            <input type="text" onChange = {props.professionChanged} value={props.profession}/>
        </div>
    )
};