import React from 'react'
import styles from './styles.module.css'

import {ImgHTMLAttributes} from 'react'

interface ImageProps extends ImgHTMLAttributes<HTMLImageElement>{}

export function Avatar({...props}:ImageProps){
    return(
        <img 
            {...props}
            className= {styles.avatar}
        
         />
    )
}