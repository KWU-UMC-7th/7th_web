import { useState } from 'react'
import './App.css'

// Button, Input component 추가
import Button from './components/Button'; 
import Input from './components/Input';

function App() {
  // todolist, 화면에 출력되는 (추가, 삭제, 수정)
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState('');
  const [editingId, setEditingId] = useState('');
  const [editText, setEditText] = useState('');

  // 렌더링 방지
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  // 1. 추가하기
  const addTodo = () => {
    if(text.trim().length === 0){
      alert('할 일을 입력하세요!');
      return;
    }
    setTodos((prev) => [
      ...prev,
      {id: Math.floor(Math.random() * 100) + 2, task: text},
    ]);
    setText('');
  }

  // 2. 삭제하기
  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((item) => item.id !== id));
  };

  // 3. 수정하기
  const updateTodo = (id, text) => {
    setTodos((prev) =>
      prev.map((item) => (item.id === id ? {...item, task:text}:item))
    );
    setEditingId('');
    setEditText('');
  }

  return (
    <>
     <form onSubmit={handleSubmit} className="container">
      <Input
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="input"
      />
      <Button onClick={addTodo} className="button">
        할 일 등록
      </Button>
     </form>
     <div>
      {todos.map((todo, _) => (
        <div key={todo.id} className="display">
          {/* 수정이 아닐 때 */}
          {editingId !== todo.id && (
            <div key={todo.id} className="item">
            <p className="todo-number">{todo.id}.</p>
            <p className="todo-task">{todo.task}</p>
            </div>
          )}

          {/* 수정 중 상태일 때 */}
          {editingId === todo.id && (
            <div key={todo.id} className="item">
              <p>{todo.id}.</p>
              <Input
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
                className="edit_input"
              />
            </div>
          )}
          <Button onClick={() => deleteTodo(todo.id)} className="button">삭제하기</Button>

          {/* editingId !== todo.id 수정이 아닌 상태 */}
          {/* editingId === todo.id 수정 중인 상태 */}
          {editingId === todo.id ? (
            <Button onClick={() => updateTodo(editingId, editText)} className="button">수정 완료</Button>
          ) : (
            <Button onClick={() => setEditingId(todo.id)} className="button">수정 진행</Button>
          )}
        </div>
      ))}
     </div>
    </>
  );
}

export default App