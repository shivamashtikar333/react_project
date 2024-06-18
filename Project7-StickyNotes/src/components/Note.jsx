import React, { forwardRef } from 'react';

const Note = forwardRef(({ id, content, initialPos, onMouseDown, deleteNote }, ref) => {
  return (
    <div
      ref={ref}
      style={{
        position: 'absolute',
        left: `${initialPos?.x}px`,
        top: `${initialPos?.y}px`,
        border: '1px solid black',
        userSelect: 'none',
        padding: '10px',
        width: '200px',
        cursor: 'move',
        backgroundColor: 'lightyellow',
      }}
      onMouseDown={onMouseDown}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <span>📌 {content}</span>
        <button onClick={deleteNote} style={{ marginLeft: '10px' }}>
          🗑️
        </button>
      </div>
    </div>
  );
});

export default Note;
