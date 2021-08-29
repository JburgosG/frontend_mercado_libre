import React from 'react'
import { Ol, Li } from './styles'

export const Breadcrumb = (props) => {
  const { categories } = props

  return (
    <nav>
      <Ol className='breadcrumb mt-3 mb-0'>
        {categories && categories.map(item => <Li key={item} className='breadcrumb-item text-muted'>{item}</Li>)}
      </Ol>
    </nav>
  )
}
