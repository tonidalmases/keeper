import React, { useState } from 'react';
import Footer from './Footer';
import Header from './Header';
import Notes from './Notes';
import CreateArea from './CreateArea';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(note) {
    note.id = uuidv4();
    setNotes((prev) => [...prev, note]);
  }

  function deleteNote(id) {
    setNotes((prev) => prev.filter((note) => note.id !== id));
  }

  return (
    <div>
      <Header />
      <CreateArea addNote={addNote} />
      <Notes notes={notes} deleteNote={deleteNote} />
      <Footer />
    </div>
  );
}

export default App;
