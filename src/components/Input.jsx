import { useState } from "react"
import styles from "./Input.module.css"
import { List } from "./List/List"
import { Empty } from "./List/Empty"
import { v4 as uuidv4 } from "uuid"
import { ListHeader } from "./List/ListHeader"

export function Input(){
  const formatTask = {
    id: Number,
    isComplet:Boolean,
    content: String,
  }

  const [task, setTask] = useState([])

   function handleCreateNewTask() {
    event.preventDefault()

    const newTaskText = event.target.comment.value

    setTask([...task, newTaskText])
   }

   function createTask(task) {
    console.log(`${task}`)
   }

  return (
    <main>
      <form onSubmit={handleCreateNewTask}>
        <input
          className={styles.input}
          type="text"
          placeholder="Adicone uma  nova tarefa"
          name="comment"
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
              key={task.id}
              text={task}
              isComplete={task.isComplete}
            />
          )
        })}
      </div>
    </main>
  )
}