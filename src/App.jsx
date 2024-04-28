import styles from "./App.module.css"
import { Header } from './components/Header'
import { Input } from './components/Input'


function App() {
  return (
    <>
      <Header />
      <section className={styles.container}>
        <div className={styles.taskInfo}>
          <Input  />
        </div>
      </section>
    </>
  )
}

export default App
