import styles from "./app.module.css"
import "../src/global/styles.module.css"

import { Author, Post } from "./components/Post"
import { Header } from "./components/Header"
import { SideBar } from "./components/Sidebar"
import { Modal } from "./components/Modal"
import { useState } from "react"

function App() {

  const posts = [
    {
      id: 1,
      author:{
        name: 'Lais Berlofa',
        avatarUrl: 'https://github.com/joao472762.png',
        role: 'UI Designer'
      },
      commentsContent:[ 
        { type: 'paragraph',content: 'Fala galeraa 👋'},
        { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
        { type: 'link', content: 'rafaBalerine'},
        { type: 'link', content: '#come on'}
       
     ],
     publishedAt: new Date('2022-6-15 20:30:20')

    },
    {
      id: 2,
      author:{
        name: 'Amanda Mendez',
        avatarUrl: 'https://github.com/joao472762.png',
        role: 'Diretora do Rh'
      },
      commentsContent:[ 
        { type: 'paragraph',content: 'olá eu sou amanda'},
        { type: 'paragraph', content: 'estou a preucura de uma nova oportunidade'},
        { type: 'link', content: 'rafaBalerine'},

       
     ],
     publishedAt: new Date('2022-6-30 07:30:20')

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
