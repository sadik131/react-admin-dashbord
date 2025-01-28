import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../layouts/Sidebar'
import Header from '../layouts/Header'

function layout() {
  return (
    <div className='h-screen bg-slate-800 flex dark:bg-slate-800'>
        <Sidebar></Sidebar>
        <div>
            <Header></Header>
            <div>
                <Outlet />
            </div>
        </div>
    </div>
  )
}

export default layout