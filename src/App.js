import { useState } from "react";
import NoteList from "./components/NoteList";
import { nanoid } from 'nanoid';
import Search from "./components/Search";

const App = () => {
  const [notes, setNotes] = useState([]);

  const [searchText, setSearchText] = useState('');



  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString()
    }
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  }

  return (<div className="container">
    <Search handleSearchNote={setSearchText}/>
    <NoteList notes={notes.filter((note) => note.text.toLowerCase().includes(searchText))} handleAddNote={addNote} handleDeleteNote={deleteNote}/>
  </div>);
}
export default App;