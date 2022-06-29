import styles from "./app.module.css"
import "../src/global/styles.module.css"

import { Post } from "./components/Post"
import { Header } from "./components/Header"
import { SideBar } from "./components/Sidebar"

function App() {

  return (
    <div className="App">
      <Header/>
      
      <div className={styles.wrapper}>
        <SideBar/>
        <main>
          <Post/>
        </main>
      </div>
    </div>
  )
}

export default App
