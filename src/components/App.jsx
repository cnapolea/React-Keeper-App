import React, {useState} from "react";
import {v4 as uuidv4} from "uuid";

import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {

  const [noteList, setList] = useState([]);
  
  function addNote(note){
    note.id=uuidv4();

    setList(prev => {
      return [...prev, note];
    });
  }

  function deleteNote(id){
    setList(prev => 
      prev.filter(note => id !== note.id)
    );
  }


  return (
    <div>
      <Header />
      <CreateArea submit={addNote}/>
      {noteList.map(note => {
        return <Note 
          id={note.id} 
          title={note.title} 
          content={note.content} 
          deleteNote = {deleteNote}  
        /> 
          
      })}
      
      <Footer />
    </div>
  );
}

export default App;
