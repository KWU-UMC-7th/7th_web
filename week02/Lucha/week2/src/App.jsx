import './App.css';
import { useState } from 'react';
import Button from './components/Button';
import Input from './components/Input';

function App() {
  const [todos, setTodos] = useState([
    { id: 1, task: '투두 만들기' },
    { id: 2, task: '영화 만들기' },
  ]);

  const [text, setText] = useState('');
  const [editingId, setEditingId] = useState('');
  const [editText, setEditText] = useState('');

  const addTodo = () => {
    if (text.trim().length === 0) {
      alert('할일을 작성해주세요!');
      return;
    }
    setTodos((prev) => [
      ...prev,
      { id: Math.floor(Math.random() * 100) + 2, task: text },
    ]);
    setText('');
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const updateTodo = (id, text) => {
    setTodos((prev) =>
      prev.map((item) => (item.id === id ? { ...item, task: text } : item))
    );
    setEditingId('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="todo-container">
      <form className="todo-form" onSubmit={handleSubmit}>
        <Input
          className="todo-input"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="새로운 할 일을 입력하세요"
        />
        <Button className="btn add-btn" onClick={addTodo} type="submit">
          할 일 등록
        </Button>
      </form>

      <div className="todo-list">
        {todos.map((todo) => (
          <div key={todo.id} className="todo-item">
            {editingId !== todo.id && (
              <div className="todo-text">
                <p className="todo-id">{todo.id}.</p>
                <p>{todo.task}</p>
              </div>
            )}
            {editingId === todo.id && (
              <div className="todo-edit">
                <p className="todo-id">{todo.id}.</p>
                <Input
                  className="edit-input"
                  defaultValue={todo.task}
                  onChange={(e) => setEditText(e.target.value)}
                />
              </div>
            )}

            <Button className="btn delete-btn" onClick={() => deleteTodo(todo.id)}>
              삭제하기
            </Button>

            {editingId === todo.id ? (
              <Button
                className="btn update-btn"
                onClick={() => updateTodo(editingId, editText)}
              >
                수정 완료
              </Button>
            ) : (
              <Button
                className="btn edit-btn"
                onClick={() => setEditingId(todo.id)}
              >
                수정 진행
              </Button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
