import { useState } from "react"
import styles from "./Input.module.css"
import { List } from "./List/List"
import { Empty } from "./List/Empty"
import { v4 as uuidv4 } from "uuid"
import { ListHeader } from "./List/ListHeader"

export function Input() {
  const [newTaskText, setNewTaskText] = useState("")
  const [completedTasks, setCompletedTasks] = useState(0)
  const [tasks, setTasks] = useState([])

  function handleCreateNewTask(event) {
    event.preventDefault()

    if (newTaskText.trim() !== "") {
      setTasks([...tasks, { id: uuidv4(), text: newTaskText, isComplet: false }])
      setNewTaskText("")
    }
  }

  const handleTaskComplete = (isComplete) => {
    if (isComplete) {
      setCompletedTasks(completedTasks + 1);
    } else {
      setCompletedTasks(completedTasks - 1);
    }
  }
  function handleNewTaskChange() {
    setNewTaskText(event.target.value)
  }

  function deleteTask(taskIdToDelete, isComplet) {
    const updatedTasks = tasks.filter((task) => task.id !== taskIdToDelete)
    
    setTasks(updatedTasks)
      if (isComplet) {
        setCompletedTasks(completedTasks - 1)
      }
  }

  return (
    <main>
      <form onSubmit={handleCreateNewTask}>
        <input
          className={styles.input}
          type="text"
          placeholder="Adicone uma  nova tarefa"
          value={newTaskText}
          onChange={handleNewTaskChange}
        />
        <button className={styles.button}>Criar +</button>
      </form>

      <div>
        <ListHeader lengthTasks={tasks.length} completTasks={completedTasks} />
      </div>

      {tasks.length > 0 ? (
        <div>
          {tasks.map((task) => {
            return (
              <List
                key={task.id}
                id={task.id}
                text={task.text}
                onDeleteTask={deleteTask}
                onTaskComplete={handleTaskComplete}
              />
            )
          })}
        </div>
      ) : (
        <Empty />
      )}
    </main>
  )
}
