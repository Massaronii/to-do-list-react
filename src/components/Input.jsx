import { useState } from "react"
import styles from "./Input.module.css"
import { List } from "./List/List"
import { Empty } from "./List/Empty"
import { v4 as uuidv4 } from "uuid"
import { ListHeader } from "./List/ListHeader"

export function Input(){
 
  const [newTaskText, setNewTaskText] = useState("")

  const [task, setTask] = useState([])

   function handleCreateNewTask() {
    event.preventDefault()

    setTask([...task, newTaskText])
    setNewTaskText("")
   }

   function handleNewTaskChange() {
    setNewTaskText(event.target.value)
   }

   function deleteTask(task){
    console.log(`deletar ${task}`)
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
        <ListHeader />
      </div>

      <div>
        {task.map((task) => {
          return (
            <List
              key={uuidv4()}
              id={uuidv4()}
              text={task}
              onDeleteTask={deleteTask}
            />
          )
        })}
      </div>
    </main>
  )
}