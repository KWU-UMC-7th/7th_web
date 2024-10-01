import './App.css'
import { useState } from 'react';


function App() {

  const [todos,_setTodos] = useState([{id:1, task: 'make todo'},
    {id:2, task:'I am lydia'}
  ]);
  
  const [_text,_setText] = useState(''); //빈 문자열이 초기값

  const [editingId, setEditingId] =  useState('');

  const [editText, setEditText] =  useState('');


  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const addTodo = () =>{
    if(_text.trim().length===0){
      alert('입력해주십시오.');
    }
    _setTodos((prev) => [
      ...prev,
      {id: Math.floor(Math.random()*100)+2,task: _text}
    ]);
    _setText('');
  };

  const deleteTodo = (id)=>{
    _setTodos((prev) => prev.filter((item) => item.id !== id));
  };

  const updateTodo = (id,_text) =>{
    _setTodos((prev)=>
    prev.map((item) => (item.id === id ? {...item,task:_text}:item)))
    setEditingId('');
  };
  return (
    <>
     <form onSubmit={handleSubmit}>
      <input type='text' 
      value={_text} 
      onChange={(e) =>_setText(e.target.value)} 
      />
      <button onClick={()=>addTodo()}type='submit'>할 일 등록</button>
     </form>
     <div>
      {todos.map((todo,_) => (
        <div style={{display: 'flex', gap:'20px'}}>
          {/*수정이 아닐때 */}
          {editingId !== todo.id && (<div key={todo.id} style={{display: 'flex', gap:'20px'}}>
          <p>{todo.id}. </p>
          <p>{todo.task}</p>
          </div>)}
         {/*수정 중일때 */}
         {editingId === todo.id && (<div key={todo.id} style={{display: 'flex', gap:'20px'}}>
          <p>{todo.id}. </p>
          <input defaultValue={todo.task} 
          onChange={(e)=>{setEditText(e.target.value)}}/>
          </div>)}
        <button onClick={()=> deleteTodo(todo.id)}>삭제하기</button>
        {editingId === todo.id?(<button onClick={()=> updateTodo(editingId,editText)}>수정 완료</button>):
        (<button onClick={()=> setEditingId(todo.id)}>수정 진행</button>)}
        </div>
      ))}
     </div>
    </>
  );
}

export default App
