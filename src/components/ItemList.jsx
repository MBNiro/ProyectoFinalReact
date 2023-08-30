import React from 'react'
import Item from './Item'

const ItemList = ({paquetes}) => {
  return (
    <>
    {paquetes.map ((p) => {
  return (
<Item
key={p.id}
id={p.id}
nombre={p.nombre}
detalle={p.detalle}
stock={p.stock}
/>
)})}
    </> 
  )
}

export default ItemList