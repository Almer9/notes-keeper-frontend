import "../css/Note.css"
const Note = (props) =>{
return(
<div className="note" onClick={props.onClick}>    
    <div className="noteCol">
    <div className="text">{props.note.author}</div>
    <div className="text">{new Date(props.note.localDateTime).toUTCString()}</div>
    </div>
    <div className="noteCol">
    <div className="text">{props.note.note.length>13 ? props.note.note.slice(0,10)+"...": props.note.note}</div>  
    </div>
</div>
);
}
export default Note