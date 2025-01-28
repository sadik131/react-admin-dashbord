import React from 'react'
import { navbarLinks } from '../constance'
import { NavLink } from 'react-router-dom'

function Sidebar() {
  return (
    <div className='h-full w-[240px] border-r border-s-slate-600 p-3 overflow-y-scroll'>
        {/* logo */}
        {/* links */}
        {navbarLinks.map((link, index) => (
            <nav className='flex flex-col ' key={index}>
                <p className='text-sm text-slate-400 font-medium mb-2'>{link.title}</p>
                {link.links.map((item, index) => (
                    <NavLink to={item.path} className='flex items-center gap-3 py-3 text-slate-100 hover:bg-blue-100 hover:text-slate-800 px-3 rounded-md' key={index}>
                        <item.icon size='20' />
                        <span>{item.label}</span>
                    </NavLink>
                ))}
            </nav>
        ))}
    </div>
  )
}

export default Sidebar