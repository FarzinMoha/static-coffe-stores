import React from 'react'
import style from '../../styles/components.module.scss'
import { CardType, childrenType } from '@/types/Types'
import CardTitle from './CardTitle'
import Image from 'next/image'

const Card = ({title , image}:CardType) => {
  return (
    <div className={style.card}>
        <CardTitle>{title}</CardTitle>
        {image && <Image className={style.cardImage} src={image} alt={title} width={900} height={300} />}
    </div>
  )
}

export default Card