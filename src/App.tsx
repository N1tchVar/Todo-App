import { FC, useState, ChangeEvent } from 'react'
import { ITask } from './Components/Interfaces/Interfaces'
import TodoTask from './Components/TodoTask'

import { BsFillPlusCircleFill } from 'react-icons/bs'
import './index.css'

const TodoApp: FC = () => {

  const [task, setTask] = useState<string>("");
  const [todoList, setTodoList] = useState<ITask[]>([]);
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setTask(event.target.value);
  };

  const addTask = (): void => {
    if (task.trim() === "") {
      setErrorMessage("Please enter a task name.");
    } else {
      const newTask = { taskName: task };
      setTodoList([...todoList, newTask]);
      setTask("");
      setErrorMessage("");
    }
  };

  const deleteTask = (taskNameToDelete: string): void => {
    setTodoList(todoList.filter((task) => {
      return task.taskName != taskNameToDelete;
    }));
  }

  return (
    <div className='App'>
      <div className='container'>
        <h1 className='todo-name'>Todo App</h1>
        <div className='header'>
          <div className="input-container">
            <input
              type="text"
              className='todo-input'
              placeholder='Your Task Goes Here...'
              value={task}
              onChange={handleChange} />
            <button className='todo-button' onClick={addTask}><BsFillPlusCircleFill className="icon" /></button>
          </div>
          {errorMessage && <p className="error-message">{errorMessage}</p>}
        </div>
      </div>
      <div className="todolist">
        {todoList.map((task: ITask, key: number) => {
          return <TodoTask key={key} task={task} deleteTask={deleteTask} />
        })}
      </div>
    </div>
  )
}

export default TodoApp;