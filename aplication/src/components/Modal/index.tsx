import styles from './styles.module.css'

interface ModalPros {
    showModal: boolean
    handleChangeModalState: () => void,
}


export function Modal({showModal, handleChangeModalState}:ModalPros){
    
    return(
        <>
            {showModal
            && <div className={styles.modalContainer}>
                    <div className={styles.content}>
                        <strong>Excluir comentário</strong>
                        <p>Você tem certeza que gostaria de excluir este comentário?</p>

                        <footer>
                            <button
                                className={styles.cancel}
                                onClick={handleChangeModalState}
                                >
                                    Cancelar
                            </button>

                            <button 
                                className={styles.delete}
                                onClick={handleChangeModalState}
                            >
                                Sim, excluir
                            </button>
                        </footer>
                    </div>
                </div>
            } 
        </>  
    )
}