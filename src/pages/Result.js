import React, { useEffect, useState } from 'react'

import queryString from 'query-string'
import { CallApi } from '../utils/ApiRest'
import { Layout } from '../components/Layout'
import { Loading } from '../components/Loading'
import { SearchBox } from '../components/SearchBox'
import { Breadcrumb } from '../components/Breadcrumb'
import { ProductList } from '../components/ProductList'

export default (props) => {
  const [keyword, setKeyword] = useState(null)
  const [isEmpty, setIsEmpty] = useState(false)
  const [products, setProducts] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [categories, setCategories] = useState(null)

  useEffect(() => {
    setIsEmpty(false)
    setIsLoading(true)

    const keyword = queryString.parse(props.location.search).search

    searchProducts(keyword).then((resp) => {
      if (resp.data.data.items.length === 0) {
        setIsEmpty(true)
      } else {
        setCategories(resp.data.data.categories)
        setProducts(resp.data.data.items)
        setKeyword(keyword)
      }

      setIsLoading(false)
    }).catch((err) => {
      console.log(err)
    })
  }, [props.location.search])

  return (
    <section>
      <Layout
        title={keyword ? keyword + ' | Mercado Libre Colombia' : 'Mercado Libre Colombia'}
        desc='Encuentra en MercadoLibre.com.co! Entre y conozca nuestras increíbles ofertas y promociones. Descubre la mejor forma de comprar online.'
      />

      <SearchBox />
      <div className='mb-3'>
        <div className='container justify-content-center d-flex'>
          <div className='col-md-10'>
            {!isLoading && <Breadcrumb categories={categories} />}
            <div className='card mt-3'>
              {isEmpty && (
                <div className='d-flex justify-content-center my-3'>
                  <h5>No se encontraron coincidencias.</h5>
                </div>
              )}
              {!isLoading ? <ProductList items={products} /> : <Loading />}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

async function searchProducts (search) {
  try {
    return await CallApi('?q=' + search)
  } catch (err) {
    console.log(err)
  }
}
