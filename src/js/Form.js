import { useRef } from "react";
import "../css/Form.css"
import axios from "axios";
const Form = (props) =>{
    const author = useRef('')
    const note = useRef('')
    const handleNoteSend = async(event)=>{
        event.preventDefault()
        const postnote ={
            author: author.current,
            note: note.current
        }
        await axios.post("http://localhost:8080/note",postnote).then(res =>{
             console.log(res)
        })
        
    }
 return(
    <form className="form" onSubmit={handleNoteSend}>
        <label htmlFor = "author" id="authorLabel">Author:</label><br/>
        <div className="row">
            <input type="text" 
            id="author" 
            name="author" 
            ref={author}
            onChange={(e) => author.current = e.target.value}/>
            <input type="submit" value="Submit"/>
        </div>
        <div className="row">
            <textarea id="note" 
            name="note" 
            ref={note}
            onChange={(e)=>note.current = e.target.value}/>
        </div>
    </form>
 );
}
export default Form