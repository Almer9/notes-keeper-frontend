import "../css/NotesArea.css"
import Note from "./Note";
import { useState } from 'react';
const NotesArea = (props) =>{
const [id, setID] = useState(0);
return(
<div className="notes">    
<div className="detailedNote">
    {props.notes[id].note}
</div>    
<div className="notesArea">
<hr/>    
{props.notes.map((e,i)=>
<> 
<Note note={e} key={i} onClick={()=>setID(i)}/>
<hr/>
</>)}
</div>
</div>
);
}
export default NotesArea