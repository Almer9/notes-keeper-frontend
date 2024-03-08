import { useEffect, useRef, useState } from 'react';
import '../css/App.css';
import Form from '../js/Form.js'
import NotesArea from './NotesArea.js';
import axios from "axios";

function App() {
  const data = useRef('')
  const [isDataLoaded,setisDataLoaded] = useState(false)
  useEffect(()=>{
    axios.get("http://localhost:8080/note").then(res=>{
       data.current = res.data
       setisDataLoaded(true)
  });
  });
  return (
    <div className="container">
      <Form/>
      {isDataLoaded && <NotesArea notes = {data.current}/>}
    </div>
  );
}

export default App;
