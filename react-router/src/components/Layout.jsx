import React from 'react'
import Header from '../../../react-router/src/components/header/Header'

import {Outlet} from 'react-router-dom'
import Footer from './footer/Footer'

function Layout() {
  return (
    <div>
        <Header/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default Layout