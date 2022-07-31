import { initializeApp } from 'firebase/app';
import { getDatabase, ref, set} from 'firebase/database';
import React, { useEffect, useState } from 'react';

const firebaseConfig = {
    apiKey: "AIzaSyCdqUtp-IMG0RltQdHb5ho6Mw5dygDrxjQ",
    authDomain: "mythoughtsonascreen.firebaseapp.com",
    databaseURL: "https://mythoughtsonascreen-default-rtdb.firebaseio.com",
    projectId: "mythoughtsonascreen",
    storageBucket: "mythoughtsonascreen.appspot.com",
    messagingSenderId: "1040905084618",
    appId: "1:1040905084618:web:aa485cd72ae36862d15e33",
    measurementId: "G-EE227G9CG6"
  };

export const firebase = initializeApp(firebaseConfig);
export const database = getDatabase(firebase);

//export const useData = (path, transform) => {
//    const [data, setData] = useState();

//    useEffect(() => {
//        const dbRef = ref(database, path);
//        const devMode = !process.env.NODE_ENV || process.env.NODE_ENV === 'development';
//        if (devMode) { console.log(`loading ${path}`); }
//        return onValue(dbRef, (snapshot) => {
//          const val = snapshot.val();
//          if (devMode) { console.log(val); }
//          setData(transform ? transform(val) : val);
//        }, (error) => {
//          setData(null);
//        });
//      }, [path, transform]);
    
//      return [data];
//};


export const setData = (path, value) => (
    set(ref(database, path), value)
  );

