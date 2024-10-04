import './App.css'
import {useState} from 'react';

function App() {

  const [todo_list, setTodo] = useState([
    'mission_01 완성',
    'mission_02 완성',
  ]);

  const add_todo = () => {

  }

  const drop_todo = () => {
    alert("삭제됨")
  }

  const update_todo = () => {
    alert("수정됨")
  }

  return (
    <>
      <h1>UMC Week02 - mission_01</h1>
      <div className = "Input_Area">
        <input type="text"></input>
        <input type="button" value="할 일 등록" onClick={add_todo}></input>
      </div>
      <div>
        <ul>
          {todo_list.map((todo, index) => (
            <div className='todoElement'>
              <span key={index}> {todo}</span>
              <input type="button" value="삭제하기" onClick={drop_todo}></input>
              <input type="button" value="수정진행" onClick={update_todo}></input>
            </div>
          ))}
        </ul>
        
      </div>
    </>
  )
}

export default App;