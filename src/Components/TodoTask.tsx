import { ITask } from "./Interfaces/Interfaces";
import '../index.css' 
import { BsFillTrashFill } from 'react-icons/bs'

interface Props {
    task: ITask;
    deleteTask(taskNameToDelete: string): void;
}

const TodoTask = ({task, deleteTask}: Props) => {
  return (
    <div className="tasks">
        <div className="task-container">
            <span className="task">{task.taskName}</span>
            <button className="task-button" onClick={() =>
             {deleteTask(task.taskName);
            }}><BsFillTrashFill className="task-icon"/></button>
        </div>
    </div>
  )
}

export default TodoTask;
