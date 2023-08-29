import React, { useState } from 'react';

function TodoList() {
  const [todos, setTodos] = useState([
    { text: "Buy groceries", checked: false },
    { text: "Clean the house", checked: true },
    { text: "Walk the dog", checked: false },
  ]);
  const [newTodo, setNewTodo] = useState('');

  const handleDeleteClick = (index) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
  };

  const handleInputChange = (event) => {
    setNewTodo(event.target.value);
  };

  const handleAddClick = () => {
    if (newTodo.trim() !== '') {
      const updatedTodos = [...todos, { text: newTodo.trim(), checked: false }];
      setTodos(updatedTodos);
      setNewTodo('');
    }
  };

  const handleCheckboxChange = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].checked = !updatedTodos[index].checked;
    setTodos(updatedTodos);
  };

  return (
    <div>
			<h2>Todo List</h2>
      {todos.length > 0 ? (
        <ul className="list-group">
          {todos.map((todo, index) => (
            <li
              key={index}
              className={`list-group-item`}
              style={{ display: 'flex', alignItems: 'center', paddingLeft: '4px', paddingRight: '4px' }}
            >
              <input
                type="checkbox"
                checked={todo.checked}
                onChange={() => handleCheckboxChange(index)}
                style={{ marginRight: '8px' }}
              />
              <span
                style={{
                  flex: '1',
                  marginRight: '8px',
                  textDecoration: todo.checked ? 'line-through' : 'none',
                }}
              >
                {todo.text}
              </span>
              <button
                className="btn btn-danger btn-sm"
                style={{ marginLeft: 'auto' }}
                onClick={() => handleDeleteClick(index)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No to-dos available.</p>
      )}

      <div style={{ marginTop: '16px' }}>
        <input
          type="text"
          value={newTodo}
          onChange={handleInputChange}
          placeholder="Enter a new item"
          style={{ marginRight: '8px' }}
        />
        <button className="btn btn-primary" onClick={handleAddClick}>
          Add
        </button>
      </div>
    </div>
  );
}

export default TodoList;