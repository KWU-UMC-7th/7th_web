import { useState } from 'react';
import MyInput from './components/MyInput';
import MyButton from './components/MyButton';


function App() {
  const [todos, setTodos] = useState([
    { id: 1, task: '투두 만들어보기' },
    { id: 2, task: '희연 혜원 혜윤 건 찬민' },
  ]);
  const [text, setText] = useState("");
  const [editingId, setEditingId] = useState("");
  const [editText, setEditText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo();
  };

  // 1. 추가하기
  const addTodo = () => {
    setTodos((prev) => [
      ...prev,
      { id: Math.floor(Math.random() * 100 + 2), task: text },
    ]);
    setText('');
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
    setEditingId('');
    setEditText(''); // 수정 완료 후 editText 초기화
  };


  return (
    <>
      <form onSubmit={handleSubmit} className='myForm'>
        <MyInput
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <MyButton type='submit' text="할 일 등록"/>
      </form>
      <div >
        {todos.map((todo) => (
          <div key={todo.id} style={{ display: 'flex', gap: '20px' }}className='listItem'>
            {editingId !== todo.id && (
              <div style={{ display: 'flex', gap: '5px' }}>
                <p>{todo.id}.</p>
                <p>{todo.task}.</p>
              </div>
            )}
            {editingId === todo.id && (
              <div style={{ display: 'flex', gap: '5px' }}>
                <p>{todo.id}</p>
                <MyInput
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                />
              </div>
            )}
            <MyButton onClick={() => deleteTodo(todo.id)} text="삭제하기"/>
            {editingId === todo.id ? (
              <MyButton onClick={() => updateTodo(editingId, editText)} text="수정 완료"/>
            ) : (
              <MyButton onClick={() => {
                setEditingId(todo.id);
                setEditText(todo.task); 
              }}
              text="수정 진행"/>

            )}
          </div>
        ))}
      </div>
    </>
  );
}

export default App;