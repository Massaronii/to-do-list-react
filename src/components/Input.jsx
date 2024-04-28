import { useState } from "react"
import styles from "./Input.module.css"
import { List } from "./List/List"
import { Empty } from "./List/Empty"
import { v4 as uuidv4 } from "uuid"
import { ListHeader } from "./List/ListHeader"

export function Input(){
 
  const [newTaskText, setNewTaskText] = useState("")

  const [tasks, setTasks] = useState([])

    function handleCreateNewTask(event) {
      event.preventDefault()

      if (newTaskText.trim() !== "") {
        setTasks([...tasks, { id: uuidv4(), text: newTaskText }])
        setNewTaskText("")
      }
    }

   function handleNewTaskChange() {
    setNewTaskText(event.target.value)
   }

   function deleteTask(taskIdToDelete) {
   const updatedTasks = tasks.filter((task) => task.id !== taskIdToDelete)
   setTasks(updatedTasks)
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
        <ListHeader lengthTasks={tasks.length} />
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
              />
            )
          })}
        </div>
      ) : (
        <Empty/>
      )}
    </main>
  )
}