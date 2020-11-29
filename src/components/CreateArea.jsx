import React, {useState} from "react";


function CreateArea(props) {

  const [note, setNote] = useState({title:"", content:""});

  function handleNoteChange(e){
    const {name, value} = e.target;
    setNote(prev => {
      return {
        ...prev,
        [name]: value
      };
    });
  }

  return (
    <div>
      <form>
        <input name="title" placeholder="Title" onChange={handleNoteChange}/>
        <textarea name="content" placeholder="Take a note..." rows="3" onChange={handleNoteChange}/>
        <button type="button" onClick={() => props.submit(note)}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;