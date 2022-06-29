import { Avatar } from "../Avatar";
import styles from './styles.module.css'

export function Post(){
    return(
        <article className={styles.post}>
            <header>
                <Avatar/>
                <div className={styles.profile}>
                    <div className= {styles.author}>
                        <strong> Lais Berlofa</strong>
                        <span>Dev Front-End</span>
                     </div>

                    <time>Públicado há 1h</time>
                </div>
            </header>

            <section  className={styles.content}>
                <p>Fala galeraa 👋</p>
                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
                <p>👉<a href="#">jane.design/doctorcare</a></p>
                <p>
                    <a href="#">#nlw</a>
                    <a href="#">#rocketseat</a>
                    <a href="#">#novoprojeto</a>
                </p>
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