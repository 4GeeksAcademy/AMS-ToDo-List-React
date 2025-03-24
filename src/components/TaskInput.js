import React, { useState } from 'react';

function TaskInput({ onAddTask }) {
  const [inputValue, setInputValue] = useState('');

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && inputValue.trim()) {
      onAddTask(inputValue);
      setInputValue('');
    }
  };

  return (
    <input
      type="text"
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
      onKeyPress={handleKeyPress}
      placeholder="Add a new task..."
      style={{
        padding: '10px',
        fontSize: '16px',
        width: '300px',
        border: 'none',
        borderBottom: '1px solid #ccc',
        marginBottom: '10px',
        outline: 'none',
      }}
    />
  );
}

export default TaskInput;