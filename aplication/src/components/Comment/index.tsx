import { Avatar } from "../Avatar";
import {Trash, ThumbsUp} from "phosphor-react"
import styles from './styles.module.css'

export function Comment(){
    return(
        <section className={styles.comment}>
            <Avatar src="https://pps.whatsapp.net/v/t61.24694-24/290302224_3343267319330684_1092135107733860274_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=c467d898c95839d9ebb56716705f58a6&oe=62CBCB5C"/>

            <div className={styles.commentContent}>
                <div className={styles.profile}>
                    <div className={styles.author}>
                        <strong> Devon Lane </strong>
                        <span> (você) </span>
                        <time>cecar de 2h</time>
                        <p>Muito bom Devon, parabéns!! 👏👏</p>
                    </div>
                    <button title="Lixeira">
                        <Trash/>
                    </button>
                </div>
                <footer>
                    <button>
                        <ThumbsUp/>
                        <p>Apaudir <span>3</span></p>
                    </button>
                </footer>
            </div>
        </section>
    )
}