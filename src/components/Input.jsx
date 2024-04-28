import { useState } from "react"
import styles from "./Input.module.css"
import { List } from "./List/List"
import { Empty } from "./List/Empty"
import { v4 as uuidv4 } from "uuid"
import { ListHeader } from "./List/ListHeader"

export function Input(){


  const tasks = [
    {
      id: uuidv4(),
      title: "terminar desafio",
      isComplete: false,
    },
    {
      id: uuidv4(),
      title: "terminar de estudar",
      isComplete: false,
    },
    {
      id: uuidv4(),
      title: "terminar ",
      isComplete: false,
    },
  ]

  const [task, setTask] = useState([
  ])

   function handleCreateNewTask() {
    event.preventDefault()

    setTask([...task, task.length +1 ])
    console.log(task)
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
        />
        <button className={styles.button}>Criar +</button>
      </form>

      <div>
        <ListHeader />
      </div>

      <div>
        {tasks.map((task) => {
          return (
            <List
              key={task.id}
              text={task.title}
              isComplete={task.isComplete}
            />
          )
        })}
      </div>
    </main>
  )
}