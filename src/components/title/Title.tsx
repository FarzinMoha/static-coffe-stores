import { childrenType } from '@/types/Types'
import style from '../../styles/components.module.scss'
import React from 'react'

const Title = ({children}:childrenType) => {
  return (
    <h2 className={style.title}>{children}</h2>
  )
}

export default Title