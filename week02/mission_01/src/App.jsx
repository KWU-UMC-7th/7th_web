import './App.css'
import {useState} from 'react';

function App() {

  //todo list 세팅
  const [todoElement, setTodo] = useState([
    'mission_01 완성',
    'mission_02 완성',
  ]);

  //todo text박스에서 입력받기 위한 useState
  const [inputTodo, setInputTdo] = useState();

  //todo list에 새로운 값 추가
  const add_todo = () => {
    setTodo((prev) => [
      ...prev,        //이전에 있던 todo 그대로 가져오기
      inputTodo, 
    ]);
  }

  //todo list에 값 삭제
  const drop_todo = (index) => {
    //alert(`${index}가 삭제됨`)
    alert(`(${todoElement[index]}) 삭제됨`);
    setTodo((prev) => 
      prev.filter((_, i) => i !== index
    )); // 해당 인덱스를 제외한 새 배열 생성
  }

  //todo list의 값 수정
  const update_todo = (index) => {
    alert(`(${todoElement[index]}) 수정됨`); // 수정할 항목의 이름
    
};

  //보여지는 화면
  return (
    <>
      <h1>UMC Week02 - mission_01</h1>
      <div className = "Input_Area">
        <input type="text" value={inputTodo}></input>
        <input type="button" value="할 일 등록" onClick={add_todo}></input>
      </div>
      <div>
        <ul>
          {todoElement.map((todo, index) => (
            <div className='todoElement'>
              <span key={index}>{index} : {todo}</span>
              <input type="button" value="삭제하기" onClick={() => drop_todo(index)}></input> 
              <input type="button" value="수정진행" onClick={() => update_todo(index)}></input>
            </div>
          ))}
        </ul>
        
      </div>
    </>
  )
}

export default App;