import React from 'react'
import { Helmet } from 'react-helmet'

export const Layout = ({ title, desc }) => {
  return (
    <Helmet>
      {title && <title>{title} | Mercado Libre Colombia</title>}
      {desc && <meta name='description' content={desc} />}
    </Helmet>
  )
}
