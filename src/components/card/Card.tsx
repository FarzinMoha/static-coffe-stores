import React from 'react'
import style from '../../styles/components.module.scss'
import { CardType } from '@/types/Types'
import CardTitle from './CardTitle'
import Image from 'next/image'
import Link from 'next/link'

const Card = ({title , image , url}:CardType) => {
  return (
    <Link href={url}>
            <div className={style.card}>
                <CardTitle>{title}</CardTitle>
                {image && <Image className={style.cardImage} src={image} alt={title} width={400} height={200} />}
            </div>
    </Link>

  )
}

export default Card