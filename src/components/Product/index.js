import React from 'react'
import { Img, Price } from './styles'
import { Link } from 'react-router-dom'
import shipping from '../../../assets/ic_shipping.png'

export const Product = (props) => {
  const { item } = props

  return (
    <Link to={`/items/${item.id}`} className='text-decoration-none'>
      <div className='col-12'>
        <div className='row mx-3 py-3 border-bottom'>
          <div className='col-lg-2 px-0'>
            <Img
              className='card-img-right rounded'
              src={item.picture}
            />
          </div>
          <div className='col-lg-8 mt-3'>
            <Price className='mb-3 text-dark'>
              {currencyFormat(item.price.amount)}
            </Price>
            {item.free_shipping && <img src={shipping} className='mx-2' />}
            <div className='row'>
              <span className='mt-3 text-dark'>{item.title}</span>
              <span className='text-dark'>Estado {item.condition && item.condition.value_name}!</span>
            </div>
          </div>
          <div className='col-lg-2 align-items-lg-start d-flex mt-4'>
            <small className='mt-3 text-dark text-muted'>{item.city}</small>
          </div>
        </div>
      </div>
    </Link>
  )
}

function currencyFormat (number) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0
  }).format(number)
}
