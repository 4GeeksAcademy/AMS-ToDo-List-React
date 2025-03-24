import React, { useState } from 'react';

function Task({ task, onDelete, index }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px 0',
        width: '300px',
        borderBottom: '1px solid #eee',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span>{task}</span>
      {isHovered && (
        <button
          onClick={() => onDelete(index)}
          style={{
            background: 'none',
            border: 'none',
            color: 'red',
            cursor: 'pointer',
            fontSize: '16px',
          }}
        >
          ✕
        </button>
      )}
    </div>
  );
}

export default Task;