import React from 'react'
import Navabr from './Navabr'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
        <Navabr />
        <main className='container my-2'>
            <Outlet />
        </main>
    </>
  )
}

export default Layout
