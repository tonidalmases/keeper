import React, { useState } from 'react';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';

function CreateArea(props) {
  const [note, setNote] = useState({ title: '', content: '' });
  const [isExpanded, setExpanded] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;
    setNote((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    props.addNote(note);
    setNote({ title: '', content: '' });
    setExpanded(false);
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="create-note">
        <input
          name="title"
          placeholder="Take a note..."
          onChange={handleChange}
          value={note.title}
          onClick={() => {
            setExpanded(true);
          }}
        />
        {isExpanded && (
          <textarea
            name="content"
            placeholder="Add more information..."
            rows="3"
            onChange={handleChange}
            value={note.content}
          />
        )}
        <Zoom in={isExpanded}>
          <Fab type="submit">
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
