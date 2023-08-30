import React from 'react'
import ItemDetail from './ItemDetail'

const ItemDetailContainer = () => {
  const paquetes = [
    {id:1, nombre: "Patagonia", detalle:"Bariloche, El Calafate, Perito Moreno, Usuhaia", stock:10, category:"cat1"},
    {id:2, nombre: "Costa Argentina", detalle:"Mar del plata, Carilo, Miramar", stock:9,category:"cat2"},
    {id:3, nombre: "Norte Argentino", detalle:"Salta, Jujuy, Tilcara, Las Salinas, Hornocal", stock:6,category:"cat3"},
    {id:4, nombre: "Buenos Aires", detalle:"Recorrido por la gran ciudad, incluyendo los lugares mas atractivos", stock:12,category:"cat4"}
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
    <>
    <ItemDetail paquetes={paquetes}/>
    </>
  )
}

export default ItemDetailContainer