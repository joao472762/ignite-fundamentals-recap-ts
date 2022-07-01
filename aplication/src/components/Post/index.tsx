import {format,formatDistanceToNow} from 'date-fns'
import ptBR from 'date-fns/esm/locale/pt-BR/index.js';
import React, { FormEvent, useState, ChangeEvent  } from 'react';

import { Avatar } from "../Avatar";
import { Comment } from "../Comment";
import { Modal } from '../Modal';

import styles from './styles.module.css'

export interface Author {
    name: string,
    avatarUrl: string,
    role?: string
}

interface Comments {
    id: number
    author: Author
    comment: string,
    publicationAtComment: Date
    
}

interface CommentsContent  {
    type: string
    content: string 
} 

interface props{
    postProps:{
        author: Author,
        commentsContent: CommentsContent[],
        publishedAt: Date
    },
 
}




export function Post({postProps}:props){

    const {author ,commentsContent,publishedAt} = postProps
    const [comments,setComments] = useState<Comments[]>([])
    const [showModal, setShowModal] = useState(false)
    const [commentIndexToDelete, setCommentIndexToDelete] = useState(0)


    

    
    const [textComment,setTextComment] = useState('')
    const [commentId, setCommentId] = useState(0)
    
    const publacationAtOnlyCalendar =  format(publishedAt,"d'/'M'/'y")
    const publicationAtComplete  = publishedAt.toISOString() 
    const publacationAtDiferenceToNow = formatDistanceToNow(publishedAt,{
        locale: ptBR,
        addSuffix: true
    })

    const isDisable = textComment === ''

    function handleAddNewComment(event: FormEvent){
        event.preventDefault()

        const newComment = {
            id: commentId,
            author: {
                name: 'Pamela',
                avatarUrl: 'https://pps.whatsapp.net/v/t61.24694-24/290302224_3343267319330684_1092135107733860274_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=c467d898c95839d9ebb56716705f58a6&oe=62CBCB5C'
            },
            comment: textComment,
            publicationAtComment: new Date()
        }
        setComments(state =>{
            return [...state,newComment]
        })
        setCommentId(state =>{
            return state + 1
        })
        setTextComment(state => {
            return ''
        })

    }

    function handleChangeComment(event: ChangeEvent<HTMLTextAreaElement>){
        const textAreaValue = event.target.value
        setTextComment(state =>{
            return (textAreaValue)
        })
    }
    function deleteOneComment(){
        const commentListWithoutOne = comments.filter(comment =>{
            return comment.id != commentIndexToDelete
        })

        setComments(state => {
            return commentListWithoutOne
        })

    }
    function ChangeModalState(){
        showModal 
        ? setShowModal(state => {
          return false
        }) 
        : setShowModal(state=>{
          return true
        })
      }



  

    return(
        <article className={styles.post}>
            <header>
                <Avatar 
         
                src="https://github.com/joao472762.png"/>
                <div className={styles.profile}>
                    <div className= {styles.author}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                     </div>

                    <time title={publacationAtOnlyCalendar}
                        dateTime={publicationAtComplete}>
                            {publacationAtDiferenceToNow}
                    </time>
                </div>
            </header>

            <section  className={styles.content}>
                {
                    commentsContent.map(commentContent =>{
                        return(
                            
                            commentContent.type === 'paragraph'
                            ? <p key={commentContent.content}>{commentContent.content}</p>
                            : <p key={commentContent.content }><a href="#">{commentContent.content}</a></p>
                        )
                    })
                }
            </section>
            
            <form onSubmit={handleAddNewComment}>

                <strong>Deixe seu fedback</strong>
                <textarea
                    required
                    value={textComment}
                    onChange={handleChangeComment}
                />
                <footer>
                    <button 
                    type='submit'
                    disabled={isDisable}>
                        Publicar
                    </button>
                </footer>

            </form>
            {
                comments.map(comment =>{
                    return(
                        <>
                            
                            <Comment
                                key={comment.id}
                                commentProps={comment}
                                setCommentIndexToDelete = {setCommentIndexToDelete}
                                onChangeModalState = {ChangeModalState}
                            />
                            { 
                                comments[0].id === comment.id
                                && <Modal
                                      
                                        showModal = {showModal}
                                        onChangeModalState = {ChangeModalState}
                                        onDeleteOneComment = {deleteOneComment}
                                    />
                            }
                        </>
                    )
                })
            }
        </article>
    )
}