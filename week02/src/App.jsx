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

  console.log(editText);

  // 렌더링 방지
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  // 1. 추가하기
  const addTodo = () => {
    setTodos((prev) => [
      ...prev,
      { id: Math.floor(Math.random() * 100) + 2, task: text },
    ]);
    setText("");
  };

  //2. 삭제하기
  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((item) => item.id !== id));
  };

  //3. 수정하기 // 인자를 잘못받음 !!!!
  const updateTodo = (id, text) => {
    setTodos((prev) =>
      prev.map((item) => (item.id === id ? { ...item, task: text } : item))
    );
    setEditingId("");
  };

  // //  // 3. 수정하기
  // const updateTodo = (id, editText) => {
  //   setTodos(
  //     (prev) =>
  //       prev.map((item) =>
  //         item.id === id ? { ...item, task: editText } : item
  //       ) // editText를 사용
  //   );
  //   setEditingId("");
  //   setEditText(""); // 수정 후 입력값 초기화
  // };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button onClick={() => addTodo()} type="submit">
          할 일 등록
        </button>
      </form>
      <div>
        {todos.map((todo, _) => (
          <div style={{ display: "flex", gap: "20px" }}>
            {/* 수정이 아닐때 */}
            {editingId !== todo.id && (
              <div key={todo.id} style={{ display: "flex", gap: "7px" }}>
                <p>{todo.id}.</p>
                <p>{todo.task}</p>
              </div>
            )}
            {/* 수정 중일 때 */}
            {editingId === todo.id && (
              <div key={todo.id} style={{ display: "flex", gap: "7px" }}>
                <p>{todo.id}.</p>
                <input
                  defaultValue={todo.task}
                  onChange={(e) => setEditText(e.target.value)}
                />
              </div>
            )}
            <button onClick={() => setEditingId(todo.id)}>수정</button>
            <button onClick={() => deleteTodo(todo.id)}>삭제</button>

            {editingId === todo.id ? (
              <button onClick={() => updateTodo(editingId, editText)}>
                수정 완료
              </button>
            ) : (
              <button onClick={() => setEditingId(todo.id)}>수정 진행</button>
            )}
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
