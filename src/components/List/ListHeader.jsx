import styles from "./ListHeader.module.css"

export function ListHeader({ lengthTasks, completTasks }) {
  return (
    <header className={styles.container}>
      <div className={styles.flex}>
        <p className={styles.tarefasCriadas}>Tarefas criadas</p>
        <span className={styles.span}>{lengthTasks}</span>
      </div>

      <div className={styles.flex}>
        <p className={styles.tarefasConcluidas}>Concluidas</p>
        <span className={styles.span}>{completTasks}</span>
      </div>
    </header>
  )
}
