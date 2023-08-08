import React from 'react'
import ItemList from './ItemList'
import { Flex } from '@chakra-ui/react'
import { useParams } from 'react-router-dom'

const ItemListContainer = () => {
  const {category} = useParams ()
  const paquetes = [
  {id:1, nombre: "Patagonia", detalle:"Bariloche, El Calafate, Perito Moreno, Usuhaia", stock:10},
  {id:2, nombre: "Costa Argentina", detalle:"Mar del plata, Carilo, Miramar", stock:9},
  {id:3, nombre: "Norte Argentino", detalle:"Salta, Jujuy, Tilcara, Las Salinas, Hornocal", stock:6},
  {id:4, nombre: "Buenos Aires", detalle:"Recorrido por la gran ciudad, incluyendo los lugares mas atractivos", stock:12}
] 

const getPaquetes = new Promise ((resolve, reject) => {
  if (paquetes.length > 0) {
    setTimeout (() => {
      resolve (paquetes)}, 2000
    )
  }
  else { reject (new Error("Agotado"))
  }
 } )

 getPaquetes
 .then ((res) => {
  console.log(res)
 })
 .catch ((error) => {
  console.log(error)
 })

  return (
    <Flex>
      <ItemList paquetes={paquetes} />
    </Flex>
  )
}

export default ItemListContainer