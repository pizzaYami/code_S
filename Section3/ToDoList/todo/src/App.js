import React, { useState } from 'react';

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("")

  const todoChanger = () => {
    if (newTodo.length !== 0) {
      setTodos([...todos, newTodo])
      setNewTodo("")
    }
  }

  return (
    <div className="App">
      <input
        placeholder='New Todo'
        vlaue={todos}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button onClick={todoChanger}>생성</button>
      <ul>
        {todos.map((todo, index) =>
          <li 
          key={index}
          // 클릭할때 박스가 체크되고 가로선 생기게 하기
          >
            {todo}
          </li>
        )}
      </ul>
    </div>
  );
}


export default App;