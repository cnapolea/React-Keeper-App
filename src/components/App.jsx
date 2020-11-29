import React, {useState} from "react";

import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {

  const [noteList, setList] = useState([]);
  
  function addNote(note){
    setList(prev => {
      return [...prev, note];
    });
  }


  return (
    <div>
      <Header />
      <CreateArea submit={addNote}/>
      {noteList.map(note => {
        return <Note key={1} title="Note title" content="Note content" /> 
      })}
      
      <Footer />
    </div>
  );
}

export default App;
