import { useState } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([
    { id: 1, task: "투두 만들어보기" },
    { id: 2, task: "회원 혜원 혜윤 건 찬민" },
  ]);
  const [text, setText] = useState("");
  const [editingId, setEditingId] = useState("");
  const [editText, setEditText] = useState("");

  // 렌더링 방지
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  // 1. 추가하기
  const addTodo = () => {
    if (text.length.trim() === 0) {
      alert("ㄴㄴㄴ");
    }
    setTodos((prev) => [
      ...prev,
      { id: Math.floor(Math.random() * 100) + 2, task: text },
    ]);
    setText("");
  };

  // 2. 삭제하기
  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((item) => item.id !== id));
  };

  // 3. 수정하기
  const updateTodo = (id, text) => {
    setTodos((prev) =>
      prev.map((item) => (item.id === id ? { ...item, task: text } : item))
    );
    setEditingId("");
    setEditText("");
  };

  return (
    <>
      <form className="todo-form" onSubmit={handleSubmit}>
        <input
          className="todo-input"
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="새로운 할 일 입력"
        />
        <button className="add-btn" onClick={() => addTodo()} type="submit">
          할 일 등록
        </button>
      </form>
      <div className="todo-list">
        {todos.map((todo) => (
          <div className="todo-item" key={todo.id}>
            {/* 수정 중이 아닐 때 */}
            {editingId !== todo.id && (
              <div className="todo-text">
                <p>{todo.id}.</p>
                <p>{todo.task}</p>
              </div>
            )}
            {/* 수정 중일 때 */}
            {editingId === todo.id && (
              <div className="todo-edit">
                <p>{todo.id}.</p>
                <input
                  className="edit-input"
                  defaultValue={todo.task}
                  onChange={(e) => setEditText(e.target.value)}
                />
              </div>
            )}
            <div className="todo-actions">
              {editingId === todo.id ? (
                <>
                  <button
                    className="save-btn"
                    onClick={() => updateTodo(editingId, editText)}
                  >
                    수정 완료
                  </button>
                </>
              ) : (
                <>
                  <button
                    className="edit-btn"
                    onClick={() => {
                      setEditingId(todo.id);
                      setEditText(todo.task); // 수정 시 기존 텍스트를 설정
                    }}
                  >
                    수정 진행
                  </button>
                </>
              )}
              <button
                className="delete-btn"
                onClick={() => deleteTodo(todo.id)}
              >
                삭제
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
