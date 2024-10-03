import { useState } from "react";
import "./App.css";
import Button from "../components/button";
import Input from "../components/input";

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
    <section>
      <form onSubmit={handelSubmit}>
        <Input
          isValue={true}
          value={text}
          onChange={(e) => setText(e.target.value)}
          className={"add-input"}
        />
        <Button act={addTodo} text={"할 일 등록"} className={"add"} />
      </form>
      <div>
        {todos.map((todo) => (
          <div key={todo.id} className="todo-list">
            {editingId === todo.id ? (
              <div>
                <Input
                  isValue={false}
                  defaultValue={todo.text}
                  onChange={(e) => setEditText(e.target.value)}
                  className={"edit-input"}
                />
              </div>
            ) : (
              <div>
                <p>{todo.text}</p>
              </div>
            )}

            <div className="todo-buttons">
              <Button
                act={() => deleteTodo(todo.id)}
                text={"삭제하기"}
                className={"delete"}
              />
              {/* <button onClick={() => deleteTodo(todo.id)}>삭제하기</button> */}
              {editingId === todo.id ? (
                <Button
                  act={() => updateTodo(editingId, editText)}
                  text={"수정 완료"}
                  className={"update-success"}
                />
              ) : (
                <Button
                  act={() => setEditingId(todo.id)}
                  text={"수정하기"}
                  className={"update"}
                />
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default App;
