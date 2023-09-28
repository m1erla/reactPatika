import React from 'react'
import { useSelector } from 'react-redux'
import Product from './Product'

function Deneme() {
    const items = useSelector((state) => state.products.items)
  return (
    <div>
        {items.map((item) => (
                    <Product item={item} key={item.id}/>
                ))}
    </div>
  )
}

export default Deneme