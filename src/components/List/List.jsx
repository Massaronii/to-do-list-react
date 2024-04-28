import styles from "./List.module.css"

export function List({ text, onDeleteTask, id }) {
  function handleDeleteTask() {
    onDeleteTask(id)
  }

  return (
    <div className={styles.container}>
      <div className={styles.flex}>
        <input type="checkbox" name="checkbox" className={styles.checkbox} />
        <p>{text}</p>
      </div>

      <button onClick={handleDeleteTask} title="Deletar task">
        <img src="lixo.svg" alt="lixo" />
      </button>
    </div>
  )
}