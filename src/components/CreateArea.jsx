import React, {useState} from "react";

import { Grow } from '@material-ui/core';
import { Zoom } from '@material-ui/core';
import { Fab } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

function CreateArea(props) {

  const [note, setNote] = useState({title:"", content:""});
  const [shouldExpand, setExpand] = useState(false);

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
      <form className="create-note">
        <input name="title" placeholder="Title" onChange={handleNoteChange} hidden={shouldExpand?false:true}/>
        <textarea name="content" placeholder="Take a note..." rows={shouldExpand?"3":"1"} onChange={handleNoteChange} onClick={ () => setExpand(prev => !prev) }/>

        <Zoom in={shouldExpand?true:false}>
          <Fab onClick={() => props.submit(note)}><AddIcon /></Fab> 
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;