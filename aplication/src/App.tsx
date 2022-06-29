import styles from "./app.module.css"
import "../src/global/styles.module.css"

import { Post } from "./components/Post"
import { Header } from "./components/Header"
import { SideBar } from "./components/Sidebar"

function App() {
  
  const posts = [
    {
      id: 1,
      author:{
        name: 'Lais Belofa P',
        avatarUrl: 'https://github.com/joao472762.png',
        role: 'UI Designer'
      },
      commentContent:[ 
        { type: 'paragraph',content: 'Fala galeraa 👋'},
        { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
        { type: 'link', content: 'rafaBalerine'},
        { type: 'link', content: '#come on'}
       
     ],
     publishedAt: new Date('2022-6-15 20:30:20')

    }
  ]

  return (
    <div className="App">
      <Header/>
      
      <div className={styles.wrapper}>
        <SideBar/>
        <main>
          {
            posts.map(post =>{
              return(
                <Post
                  key={post.id}
                  postProps={post}
                />
              )
            })
          }
        </main>
      </div>
    </div>
  )
}

export default App
