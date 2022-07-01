import { Avatar } from "../Avatar";
import styles from './styles.module.css'
import {format,formatDistanceToNow} from 'date-fns'
import ptBR from "date-fns/esm/locale/pt-BR/index.js";

import {Trash, ThumbsUp} from "phosphor-react"
import { Author } from "../Post";
import { SetStateAction, useState } from "react";

interface Comment {
    commentProps:{
        id: number,
        author: Author
        comment: string,
        publicationAtComment: Date,
    }
    onChangeModalState: () => void,
    setCommentIndexToDelete: React.Dispatch<SetStateAction<number>>,
    
    
}



export function Comment({
    commentProps,
    onChangeModalState,setCommentIndexToDelete}:Comment){

    const [likes,setLikes] = useState(0)

    const  {author,publicationAtComment} = commentProps

    const publacationAtOnlyCalendar =  format(publicationAtComment,"d'/'M'/'y")
    const publicationAtComplete  = publicationAtComment.toISOString() 
    const publacationAtDiferenceToNow = formatDistanceToNow(publicationAtComment,{
        locale: ptBR,
        addSuffix: true
    })

    function handleAddNewLike(){
        setLikes(state => {
            return state + 1
        })
    }
    function handleOpenModal(){
        onChangeModalState()
        setCommentIndexToDelete(commentProps.id)

        
    }

  

    return(
        <section className={styles.comment}>
            <Avatar src={author.avatarUrl}/>

            <div className={styles.commentContent}>
                <div className={styles.profile}>
                    <div className={styles.author}>
                        <strong> {author.name} </strong>
                        <span> (você) </span>
                        <time
                            dateTime={publicationAtComplete}
                            title={publacationAtOnlyCalendar}
                        >{publacationAtDiferenceToNow}</time>
                        <p>{commentProps.comment}</p>
                    </div>
                    <button
                        onClick={handleOpenModal}
                        title="Lixeira">
                        <Trash/>
                    </button>
                </div>
                <footer>
                    <button
                    onClick={handleAddNewLike}
                    >
                        <ThumbsUp/>
                        <p>Apaudir <span>{likes}</span></p>
                    </button>
                </footer>
            </div>
            
        </section>
    )
}