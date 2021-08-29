import React, { useState } from 'react'

import { Nav, Button } from './styles'
import { Link, useHistory } from 'react-router-dom'
import logo from '../../../assets/Logo_ML.png'
import searchIcon from '../../../assets/ic_Search.png'

export const SearchBox = (props) => {
  const history = useHistory()
  const [search, setSearch] = useState('')

  return (
    <Nav className='navbar navbar-light'>
      <div className='container d-flex justify-content-center align-items-center'>
        <Link className='navbar-brand' to='/'>
          <img
            src={logo}
            alt='Mercado Libre Logo'
          />
        </Link>
        <div className='col-md-9'>
          <div className='form'>
            <div className='input-group'>
              <input
                type='text'
                className='form-control'
                onChange={(e) => setSearch(e)}
                placeholder='Nunca dejes de buscar'
              />
              <Button className='btn' type='button' onClick={() => onClickHandler(search.target, history)}>
                <img
                  src={searchIcon}
                  alt='Search Icon'
                />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Nav>
  )
}

function onClickHandler (search, history) {
  if (search && search.value.length > 0) {
    history.push('/items?search=' + search.value)
  }
}
