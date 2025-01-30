import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../layouts/Sidebar'
import Header from '../layouts/Header'
import { useGloble } from '../contex/theam-contex'

function layout() {
  const {open} = useGloble()
  return (
    <div className='h-screen bg-gray-100 flex dark:bg-slate-800'>
      <Sidebar></Sidebar>
      <div className={`w-full h-full text-slate-200 ${open ? 'ml-[72px]' : 'ml-64'}`}>
        <Header></Header>
        <div className=''>
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default layout