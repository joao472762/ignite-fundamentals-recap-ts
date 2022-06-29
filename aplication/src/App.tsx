import "../src/global/styles.module.css"
import styles from "./app.module.css"
import { Header } from "./components/Header"
import { SideBar } from "./components/Sidebar"

function App() {

  return (
    <div className="App">
      <Header/>
      
      <div className={styles.wrapper}>
        <SideBar/>
        <main>
            content
        </main>
      </div>
    </div>
  )
}

export default App
