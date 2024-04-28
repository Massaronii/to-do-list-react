import styles from "./List.module.css"

export function List() {
  return (
    <div className={styles.container}>
      <div className={styles.flex}>
      <input type="checkbox" name="checkbox" className={styles.checkbox}/>
      <p>
        Integer urna interdum massa libero auctor neque turpis turpis semper.
        Duis vel sed fames integer.
      </p>
      </div>
     
     <button>
      <img src="lixo.svg" alt="lixo" /> 
     </button>
    </div>
  )
}