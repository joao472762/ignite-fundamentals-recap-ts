import { Avatar } from "../Avatar";
import styles from './styles.module.css'

interface Author {
    name: string,
    avatarUrl: string,
    role: string
}

interface CommentContent  {
    type: string
    content: string 
} 

interface props{
    postProps:{
        author: Author,
        commentContent: CommentContent[],
        publishedAt: Date
    }
}




export function Post({postProps}:props){

    const {author ,commentContent,publishedAt} = postProps
  

    return(
        <article className={styles.post}>
            <header>
                <Avatar src="https://github.com/joao472762.png"/>
                <div className={styles.profile}>
                    <div className= {styles.author}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                     </div>

                    <time>Públicado há 1h</time>
                </div>
            </header>

            <section  className={styles.content}>
                {
                    commentContent.map(comment =>{
                        return(
                            comment.type === 'paragraph'
                            ? <p>{comment.content}</p>
                            : <p><a href="#">{comment.content}</a></p>
                        )
                    })
                }
            </section>
            
            <form>
                <strong>Deixe seu fedback</strong>
                <textarea/>

                <footer>
                    <button>
                        Publicar
                    </button>
                </footer>

            </form>
        </article>
    )
}