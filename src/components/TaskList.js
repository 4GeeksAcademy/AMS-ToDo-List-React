import React from 'react';
import Task from './Task';

function TaskList({ tasks, onDeleteTask }) {
  return (
    <div
      style={{
        backgroundColor: '#fff',
        width: '320px',
        padding: '10px',
        borderRadius: '8px',
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
        maxHeight: '400px',
        overflowY: 'auto',
      }}
    >
      {tasks.length === 0 ? (
        <p style={{ textAlign: 'center', color: '#888' }}>
          No hay tareas, añadir tareas
        </p>
      ) : (
        <>
          {tasks.map((task, index) => (
            <Task
              key={index}
              task={task}
              index={index}
              onDelete={onDeleteTask}
            />
          ))}
          <p style={{ margin: '10px 0 0', color: '#888', fontSize: '14px' }}>
            {tasks.length} item{tasks.length !== 1 ? 's' : ''} left
          </p>
        </>
      )}
    </div>
  );
}

export default TaskList;