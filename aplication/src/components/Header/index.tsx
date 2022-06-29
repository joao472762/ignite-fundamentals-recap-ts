import styles from './styles.module.css'
import igniteLogo from '../../assets/igniteLogo.svg'

export function Header(){
    return(

        <header className={styles.header}>
            <img src={igniteLogo} alt="" />
            <h1>Ignite Feed</h1>
        </header>
    )
}