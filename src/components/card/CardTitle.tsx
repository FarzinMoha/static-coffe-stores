import { childrenType } from '@/types/Types'
import style from '../../styles/components.module.scss'
import React from 'react'

const CardTitle = ({children}:childrenType) => {
  return (
    <h3 className={style.cardTitle}>
        {children}
    </h3>
  )
}

export default CardTitle