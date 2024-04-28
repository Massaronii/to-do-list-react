import styles from "./List.module.css"
import { useState } from "react"


export function List({ text, onDeleteTask, id, onTaskComplete }) {
  const [isChecked, setIsChecked] = useState(false)

  function handleDeleteTask() {
    onDeleteTask(id, isChecked)
  }

  const toggleCheckbox = () => {
    setIsChecked(!isChecked)
    onTaskComplete(!isChecked)
  }

  return (
    <div className={styles.container}>
      <div className={styles.flex}>
        <input
          type="checkbox"
          name="checkbox"
          className={styles.checkbox}
          onChange={toggleCheckbox}
        />
        <p>{text}</p>
      </div>

      <button onClick={handleDeleteTask} title="Deletar task">
        <img src="lixo.svg" alt="lixo" />
      </button>
    </div>
  )
}
