import React from 'react'
import { Layout } from '../components/Layout'
import { SearchBox } from '../components/SearchBox'

export default () => {
  return (
    <section>
      <Layout
        title='Mercado libre Colombia - Inicio'
        desc='La comunidad de compra y venta online más grande de América Latina.'
      />

      <SearchBox />
    </section>
  )
}
