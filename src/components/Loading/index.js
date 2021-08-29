import React from 'react'

export const Loading = () => {
  return (
    <div className='d-flex justify-content-center my-3'>
      <div className='spinner-border' role='status'>
        <span className='visually-hidden'>Cargando...</span>
      </div>
    </div>
  )
}
