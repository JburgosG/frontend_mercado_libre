import React from 'react'

import { Span, Title, Price } from './styles'

export const Detail = (props) => {
  const { item } = props

  return (
    <div className='row col-md-12 mt-5'>
      <div className='col-md-9'>
        <img className='mx-4' src={item.picture} />
      </div>
      <div className='col-md-3'>
        <small>{item.condition === 'new' ? 'Nuevo' : 'otro'} - {item.sold_quantity} vendidos</small>
        <Title className='mt-2 fw-bold'>
          <span>{item.title}</span>
        </Title>
        <Price className='mt-3'>
          {currencyFormat(item.price.amount)}
        </Price>
        <div className='d-grid gap-2 mt-4'>
          <button className='btn btn-primary' type='button'>Comprar</button>
        </div>
      </div>
      <div className='col-md-8 col-sm-10 mx-5 my-5'>
        <Span className='fw-bold'>Descripción del producto</Span>
        <p className='text-muted mt-3'>{item.description}</p>
      </div>
    </div>
  )
}

function currencyFormat (number) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0
  }).format(number)
}
