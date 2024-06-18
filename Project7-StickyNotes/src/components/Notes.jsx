import React, { useEffect, useRef, useCallback, useState } from 'react';
import Note from './Note';
import AddNote from './AddNote';

const Notes = () => {
  const [notes, setNotes] = useState(() => {
    // Load notes from local storage initially
    const savedNotes = JSON.parse(localStorage.getItem('notes')) || [];
    return savedNotes.map((note) => ({
      ...note,
      position: note.position || { x: 0, y: 0 }
    }));
  });

  const noteRefs = useRef({});

  useEffect(() => {
    // Update local storage whenever notes change
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  const determinePosition = () => {
    const maxX = window.innerWidth - 250;
    const maxY = window.innerHeight - 250;

    return {
      x: Math.floor(Math.random() * maxX),
      y: Math.floor(Math.random() * maxY),
    };  
  };

  const addNote = (text) => {
    const newNote = {
      id: Date.now().toString(),
      text,
      position: determinePosition(),
    };
    const updatedNotes = [...notes, newNote];
    setNotes(updatedNotes);
  };

  const handleDragStart = (note, e) => {
    const { id } = note;
    const noteRef = noteRefs.current[id];

    if (noteRef) {
      const rect = noteRef.getBoundingClientRect();
      const offsetX = e.clientX - rect.left;
      const offsetY = e.clientY - rect.top;

      const startPos = note.position;

      const handleMouseMove = (e) => {
        const newX = e.clientX - offsetX;
        const newY = e.clientY - offsetY;

        noteRef.style.left = `${newX}px`;
        noteRef.style.top = `${newY}px`;
      };

      const handleMouseUp = () => {
        document.removeEventListener("mousemove", handleMouseMove);
        document.removeEventListener("mouseup", handleMouseUp);

        const finalRect = noteRef.getBoundingClientRect();
        const newPosition = { x: finalRect.left, y: finalRect.top };

        if (checkForOverlap(id)) {
          // Check for overlap
          noteRef.style.left = `${startPos.x}px`;
          noteRef.style.top = `${startPos.y}px`;
        } else {
          updateNotePosition(id, newPosition);
        }
      };

      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
    }
  };

  const checkForOverlap = (id) => {
    const currentNoteRef = noteRefs.current[id];
    const currentRect = currentNoteRef.getBoundingClientRect();

    return notes.some((note) => {
      if (note.id === id) return false;

      const otherNoteRef = noteRefs.current[note.id];
      if (!otherNoteRef) return false;

      const otherRect = otherNoteRef.getBoundingClientRect();

      const overlap = !(
        currentRect.right < otherRect.left ||
        currentRect.left > otherRect.right ||
        currentRect.bottom < otherRect.top ||
        currentRect.top > otherRect.bottom
      );

      return overlap;
    });
  };

  const updateNotePosition = useCallback((id, newPosition) => {
    const updatedNotes = notes.map((note) =>
      note.id === id ? { ...note, position: newPosition } : note
    );
    setNotes(updatedNotes);
  }, [notes]);

  const deleteNote = useCallback((id) => {
    const updatedNotes = notes.filter((note) => note.id !== id);
    setNotes(updatedNotes);
  }, [notes]);

  return (
    <div>
      <AddNote addNote={addNote} />
      {notes.map((note) => (
        <Note
          key={note.id}
          id={note.id}
          ref={(el) => (noteRefs.current[note.id] = el)}
          initialPos={note.position}
          content={note.text}
          onMouseDown={(e) => handleDragStart(note, e)}
          deleteNote={() => deleteNote(note.id)}
        />
      ))}
    </div>
  );
};

export default Notes;
