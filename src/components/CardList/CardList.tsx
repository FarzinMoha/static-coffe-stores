import React from 'react'
import Card from '../card/Card'

const CardList = ({data}:any) => {
  return (
    <>{data.map((item:any)=>{
        return <Card title={item?.name} image={item?.imgUrl} url={`coffe-store/${String(item.id)}`}/>
    })}</>
  )
}

export default CardList