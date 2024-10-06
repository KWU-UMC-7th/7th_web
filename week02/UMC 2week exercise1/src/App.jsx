import './App.css';
import { useState } from 'react';
import Button from './components/Button';
import Input from './components/Input';


function App() {
  const [todos, setTodos] = useState([
    { id: 1, task: '투두 만들어보기' },
    { id: 2, task: '영화 exercise' },
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

  const handleeSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="app-container">
      <form className="todo-form" onSubmit={handleeSubmit}>
        <Input
          className="todo-input"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="새로운 할 일을 입력하세요"
        />
        <Button className="add-btn" onClick={addTodo} type="submit">
          할 일 등록
        </Button>
      </form>

      <div className="todo-list">
        {todos.map((todo) => (
          <div key={todo.id} className="todo-item">
            {editingId !== todo.id && (
              <div className="todo-text">
                <p>{todo.id}.</p>
                <p>{todo.task}</p>
              </div>
            )}
            {editingId === todo.id && (
              <div className="todo-edit">
                <p>{todo.id}.</p>
                <Input
                  className="edit-input"
                  defaultValue={todo.task}
                  onChange={(e) => setEditText(e.target.value)}
                />
              </div>
            )}

            <Button className="delete-btn" onClick={() => deleteTodo(todo.id)}>
              삭제하기
            </Button>

            {editingId === todo.id ? (
              <Button
                className="update-btn"
                onClick={() => updateTodo(editingId, editText)}
              >
                수정 완료
              </Button>
            ) : (
              <Button
                className="edit-btn"
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
