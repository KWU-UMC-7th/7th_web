import {useState} from 'react';
import './App.css';
import Button from './Button'; // Button 컴포넌트 임포트
import Input from './Input'; // Input 컴포넌트 임포트

function App() {

  const [todos, setTodos] = useState([
    { id: 1, task: '위의 순서대로 할일을 하시오'}, 
    { id: 2, task: '수행한 작업들은 삭제하시오'},

  ]);
  const [text, setText] = useState('');
    
  const [editingId, setEditingId] = useState('');
  const [editText, setEditText] = useState('');

  //렌더링 방지
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  //추가하기 함수 
  const addTodo = () => {
    if (text.trim().length === 0) {
      alert('오류 : 글자를 입력하시오!');
    }
    setTodos((prev) => [
      ...prev,
      { id: Math.floor(Math.random() * 100) + 2, task: text },
    ]);
    setText('');
  };

  // 삭제하기 함수
  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((item) => item.id !== id));
  };

  // 수정하기 함수
  const updateTodo = (id, text) => {
    setTodos((prev) =>
      prev.map((item) => (item.id === id ? { ...item, task: text} : item))
    );
    setEditingId('');

  };

  return(
    <>
      <h1 className="Title">할 일 목록</h1>
      <form onSubmit={handleSubmit}>
        <input type='text' value={text} onChange={(e) => setText(e.target.value)}
        />
        <button onClick={() => addTodo()} type='submit'>할 일 등록</button>
      </form>
      <div>
        {todos.map((todo, _) => (
          <div style={{ display:'flex', gap: '10px'}}>
            {editingId !== todo.id && (
              <div key={todo.id} style={{ display:'flex', gap: '15px'}}>
                <p>{todo.id}. </p>
                <p>{todo.task}</p>
              </div>
            )}
            {editingId === todo.id && (
                <div key={todo.id} style={{ display:'flex', gap: '15px'}}>
                  <p>{todo.id}. </p>
                  <input 
                    defaultValue={todo.task} 
                    onChange={(e) => setEditText(e.target.value)}
                  />
                </div>
            )}
            <button 
              onClick={() => deleteTodo(todo.id)}>삭제하기
            </button>
            <button onClick={() => setEditingId(todo.id)}>수정 진행</button>
            {editingId === todo.id ? (
              <button onClick={() => updateTodo(editingId, editText)}>수정완료</button>):(<button onClick={() => setEditingId(todo.id)}>수정 진행</button>
            )}
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
