import styles from "./App.module.css"
import { Header } from './components/Header'
import { Input } from './components/Input'
import { Button } from './components/Button'
import { ListHeader } from "./components/List/ListHeader"
import {Empty} from "./components/List/Empty"

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
        <Empty/>
      </section>
    </>
  )
}

export default App
