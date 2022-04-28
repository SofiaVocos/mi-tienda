import React from 'react'
import ItemCount from '../ItemCount/ItemCount'

const ItemListContainer = ({greeting}) => {

  const onAdd = (cantidad) => {
    console.log (`Seleccionaste ${cantidad}`)
  }

  return (
    <>
      <div className='container bg-secundary'>
        <h2>{greeting}</h2>
      </div>
      <ItemCount
        stock={5}
        initial={1}
        onAdd={onAdd}/>
    </>
  )
}

export default ItemListContainer