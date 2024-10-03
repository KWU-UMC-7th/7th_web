import './App.css'
import { useState } from 'react';

function App() {
  const add_todo = () => {
    alert("추가됨");
  }

  const drop_todo = () => {
    alert("제거됨");
  }

  const update_todo = () => {
    alert("수정됨");
  }

  return (
    <>
      <div className='input_todo'>
        <input type='text'></input>
        <input type='button' value='할 일 등록' onClick={add_todo}></input>
      </div>
      <div className='list_todo'>
        <input type='button' value='수정' onClick={update_todo}></input>
        <input type='button' value='삭제' onClick={drop_todo}></input>
      </div>
    </>
  );
}

export default App;
