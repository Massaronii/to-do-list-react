import { useState } from "react"
import styles from "./ListHeader.module.css"

export function ListHeader({lengthTasks}) {
  const [lengthCompletedTasks, setLengthCompletedTasks] = useState(0)

  return (
    <header className={styles.container}>
      <div className={styles.flex}>
        <p className={styles.tarefasCriadas}>Tarefas criadas</p>
        <span className={styles.span}>{lengthTasks}</span>
      </div>

      <div className={styles.flex}>
        <p className={styles.tarefasConcluidas}>Concluidas</p>
        <span className={styles.span}>{lengthCompletedTasks}</span>
      </div>
    </header>
  )
}
