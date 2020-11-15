import React from 'react';
import Note from './Note';

function Notes(props) {
  return (
    <div>
      {props.notes.map((note) => (
        <Note
          key={note.id}
          id={note.id}
          title={note.title}
          content={note.content}
          deleteNote={props.deleteNote}
        />
      ))}
    </div>
  );
}

export default Notes;
