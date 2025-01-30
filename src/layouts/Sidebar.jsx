import React, { useContext } from 'react'
import { navbarLinks } from '../constance'
import { NavLink } from 'react-router-dom'
import { useGloble } from '../contex/theam-contex'

function Sidebar() {

    const { open  ,theme} = useGloble()

    return (
        <div className={`h-full fixed ${open ? "w-[70px]" : "w-[240px]"} bg-white dark:bg-slate-800 border-r border-slate-600 p-3 overflow-y-scroll transition-all duration-300 ease-in-out`}>
            {/* logo */}
            {/* links */}
            {navbarLinks.map((link, index) => (
                <nav className='flex flex-col ' key={index}>
                    <p className='text-sm text-slate-800 dark:text-slate-400 font-medium mb-2 whitespace-nowrap text-ellipsis overflow-hidden'>{link.title}</p>
                    {link.links.map((item, index) => (
                        <NavLink to={item.path} className={({ isActive }) => `${isActive ? "bg-blue-500" : ""} flex items-center gap-3 ${open ? "p-2" : "p-3"} text-slate-800 dark:text-slate-100 hover:bg-blue-100 hover:text-slate-800 rounded-md`} key={index}>
                            <item.icon size='20' />
                            {!open && <span>{item.label}</span>}
                        </NavLink>
                    ))}
                </nav>
            ))}
        </div>
    )
}

export default Sidebar