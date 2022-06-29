import styles from './styles.module.css'

import { Avatar } from "../Avatar";
import {Pencil} from "phosphor-react"


export function SideBar(){
    return(
        <aside className={styles.sideBar}>
            <img src="https://images.unsplash.com/photo-1563089145-599997674d42?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=60"
                className= {styles.cover}
            />
            <div className={styles.avatarContent}>
                <Avatar/>
            </div>
            
            <div className={styles.authorInfo}>
                <strong>Lais Berlofa</strong>
                <span>
                    UI Designer
                </span>
            </div>

            <footer>
                <button >
                    <Pencil/>
                    <span>Editar Perfil</span>
                </button>
            </footer>
        </aside>
    )
}