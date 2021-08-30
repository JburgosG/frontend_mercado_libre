import React, { useEffect } from 'react'
import { Product } from '../Product'

export const ProductList = (props) => {
  const { items, categories } = props

  useEffect(() => {
    categories && setLocalStorage(categories)
  }, [categories])

  const setLocalStorage = value => {
    try {
      window.localStorage.setItem('breadcrumb', JSON.stringify(value))
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <section>
      {items && items.map(item => (<Product key={item.id} item={item} />))}
    </section>
  )
}
