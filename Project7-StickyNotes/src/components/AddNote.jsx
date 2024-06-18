import React, { useState } from 'react';

const AddNote = ({ addNote }) => {
  const [noteText, setNoteText] = useState('');

  const handleInputChange = (e) => {
    setNoteText(e.target.value);
  };

  const handleAddNote = () => {
    if (noteText.trim()) {
      addNote(noteText);
      setNoteText('');
    }
  };

  return (
    <div style={styles.container}>
      <input 
        type="text" 
        value={noteText} 
        onChange={handleInputChange} 
        placeholder="Enter your note here..." 
        style={styles.input}
      />
      <button onClick={handleAddNote} style={styles.button}>Add Note</button>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '20px',
  },
  input: {
    flex: 1,
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    marginRight: '10px',
    fontSize: '16px',
  },
  button: {
    padding: '10px 20px',
    backgroundColor: '#007BFF',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '16px',
  },
};

export default AddNote;
