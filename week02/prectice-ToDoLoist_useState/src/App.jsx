import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");
  const [editingId, setEditingId] = useState("");
  const [editText, setEditText] = useState("");

  // 렌더링 방지
  const handelSubmit = (e) => {
    e.preventDefault();
  };

  // 1. 추가하기
  const addTodo = () => {
    setTodos((prev) => [
      ...prev,
      { id: Math.floor(Math.random() * 100), text: text },
    ]);
    setText("");
  };

  // 2. 삭제하기
  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  // 3. 수정하기
  const updateTodo = (id, text) => {
    setTodos((prev) =>
      prev.map((todo) => (todo.id === id ? { ...todo, text: text } : todo))
    );
    setEditingId("");
  };

  return (
    <>
      <form onSubmit={handelSubmit}>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button onClick={addTodo}>할 일 등록</button>
      </form>
      <div>
        {todos.map((todo, _) => (
          <div style={{ display: "flex", gap: 10 }}>
            {editingId === todo.id ? (
              <div style={{ display: "flex", gap: 10 }}>
                <p style={{ margin: 0 }}>{todo.id}.</p>
                <input
                  type="text"
                  defaultValue={todo.text}
                  onChange={(e) => setEditText(e.target.value)}
                />
              </div>
            ) : (
              <div style={{ display: "flex", gap: 10 }}>
                <p style={{ margin: 0 }}>{todo.id}.</p>
                <p style={{ margin: 0 }}>{todo.text}</p>
              </div>
            )}

            <button onClick={() => deleteTodo(todo.id)}>삭제하기</button>
            {editingId === todo.id ? (
              <button onClick={() => updateTodo(editingId, editText)}>
                수정 완료
              </button>
            ) : (
              <button onClick={() => setEditingId(todo.id)}>수정하기</button>
            )}
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
