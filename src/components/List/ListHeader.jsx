import styles from "./ListHeader.module.css"

export function ListHeader() {
  return (
    <header className={styles.container}>
      <div className={styles.flex}>
        <p className={styles.tarefasCriadas}>Tarefas criadas</p>
        <span className={styles.span}>0</span>
      </div>

      <div className={styles.flex}>
        <p className={styles.tarefasConcluidas}>Concluidas</p>
        <span className={styles.span}>0</span>
      </div>
    </header>
  )
}
