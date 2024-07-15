import React from 'react'
import Task from "../components/Task"

const Todo = () => {
    const [todoList, setToDoList] = React.useState([])
    const [inputValue, setInputValue] = React.useState("")
  return (
    <div className=''>
      <h1 className=''>TO-DO</h1>
      <input
        type="text"
        className='input'
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
      />
      <button
        onClick={() => {
          setToDoList([...todoList, inputValue])
          setInputValue("")
        }}
      >
        Add
      </button>
      <ul>
        {todoList.map((todo, index) => (
          <li key={index}>
            <Task task={todo} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Todo