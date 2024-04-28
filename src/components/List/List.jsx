import styles from "./List.module.css"

export function List({text}) {
  return (
    <div className={styles.container}>
      <div className={styles.flex}>
      <input type="checkbox" name="checkbox" className={styles.checkbox}/>
      <p>
        {text}
      </p>
      </div>
     
     <button>
      <img src="lixo.svg" alt="lixo" /> 
     </button>
    </div>
  )
}