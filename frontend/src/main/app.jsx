import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'

import React from 'react'
import Menu from '../template/menu'
import Routes from './routes'
export default props => (
  <div>
    <header><Menu /></header>
    <div className='container'>
      <Routes />
    </div>
  </div>
)