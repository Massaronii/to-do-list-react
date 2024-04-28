import styles from "./App.module.css"
import { Header } from './components/Header'
import { Input } from './components/Input'
import { Button } from './components/Button'
import { ListHeader } from "./components/List/ListHeader"
import {Empty} from "./components/List/Empty"
import { List } from "./components/List/List"

function App() {

  return (
    <>
      <Header />
      <section className={styles.container}>
        <div className={styles.taskInfo}>
          <Input />
          <Button />
        </div>
        <div>
          <ListHeader />
        </div>
        <List/>
      </section>
    </>
  )
}

export default App
