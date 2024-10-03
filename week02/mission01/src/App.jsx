import './App.css'
import { useState } from 'react'
import Button from './Button';
import Input from './Input';

function App() {

  const [todos, setTodos] = useState([
    {
      id: 1,
      task: '할일1',
    }
  ])

  const [text, setText] = useState('')

  const [editngId, setEditingId] = useState('')
  const [editingText, setEditingText] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  const addTodo = () => {
    setTodos((prev) => [
      ...prev,
      { id: Math.floor(Math.random() * 100) * 2, task: text }
    ])
    setText('')
  }

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id))
  }

  const updateTodo = (id, text) => {
    setTodos((prev) => prev.map((item) =>
      (item.id === id ? { ...item, task: text } : item)
    ))
    setEditingId('')
  }

  return (
    <div className='container'>
      <form onSubmit={handleSubmit} className="form-container">
        <Input value={text} onChange={(e) => setText(e.target.value)} placeholder="할 일을 입력하세요" />
        <Button onClick={addTodo} className="todo-button">할 일 등록</Button>
      </form>
      <div>
        {todos.map((todo, _) => (
          <div key={todo.id} className="todo-container">
            {editngId !== todo.id && (
              <div key={todo.id} className="todo-item">
                <p className="todo-id">{todo.id}.</p>
                <p className="todo-task">{todo.task}</p>
              </div>
            )}
            {editngId === todo.id && (
              <div key={todo.id} className="todo-item">
                <p className="todo-id">{todo.id}.</p>
                <Input defaultValue={todo.task} onChange={(e) => setEditingText(e.target.value)} />
              </div>
            )}
            <Button onClick={() => deleteTodo(todo.id)} className="todo-button">삭제하기</Button>

            {editngId === todo.id ? (
              <Button onClick={() => updateTodo(editngId, editingText)} className="todo-button">수정 완료</Button>
            ) : (
              <Button onClick={() => {
                setEditingId(todo.id)
                setEditingText(todo.task)
              }} className="todo-button">수정 진행</Button>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default App;
