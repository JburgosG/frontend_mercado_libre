import React, { useState, useEffect } from 'react'

import { CallApi } from '../utils/ApiRest'
import { Detail } from '../components/Detail'
import { Layout } from '../components/Layout'
import { Loading } from '../components/Loading'
import { SearchBox } from '../components/SearchBox'
import { Breadcrumb } from '../components/Breadcrumb'

export default (props) => {
  const [product, setProduct] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (props.match.params && props.match.params.id) {
      getProduct(props.match.params.id).then((resp) => {
        setProduct(resp.data.data)
        setIsLoading(false)
      }).catch((err) => {
        console.log(err)
      })
    }
  }, [props.match.params])

  return (
    <section>
      <Layout
        title={!isLoading ? product.title : 'Mercado Libre Colombia'}
        desc={!isLoading ? product.description : 'Bienvenido a Mercado Libre Colombia'}
      />

      <SearchBox />
      <div className='mb-3'>
        <div className='container justify-content-center d-flex'>
          <div className='col-md-10'>
            {!isLoading && <Breadcrumb />}
            <div className='card mt-3'>
              {!isLoading ? <Detail item={product} /> : <Loading />}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

async function getProduct (search) {
  try {
    return await CallApi('/' + search)
  } catch (err) {
    console.log(err)
  }
}
