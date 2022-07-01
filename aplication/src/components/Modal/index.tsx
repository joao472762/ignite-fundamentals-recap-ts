import styles from './styles.module.css'

interface ModalPros {
    showModal: boolean
    onChangeModalState: () => void,
    onDeleteOneComment : () => void,
}


export function Modal({showModal, onChangeModalState,onDeleteOneComment}:ModalPros){
    function handleChangeModal(){
        onChangeModalState()

    }
    
    function handleDeleteOnComment(){
        onDeleteOneComment()
        handleChangeModal()
    }
    
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
                                onClick={handleChangeModal}
                                >
                                    Cancelar
                            </button>

                            <button 
                                className={styles.delete}
                                onClick={handleDeleteOnComment}
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