import React from 'react'
import { Product } from '../Product'

export const ProductList = (props) => {
  const { items } = props

  return (
    <section>
      {items && items.map(item => (<Product key={item.id} item={item} />))}
    </section>
  )
}
