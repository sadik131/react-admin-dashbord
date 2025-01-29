import React from 'react'
import { CiSearch } from 'react-icons/ci'
import { FaRegMoon, FaMoon } from 'react-icons/fa'
import user from "../assets/user.jpg"
import { MdKeyboardDoubleArrowRight, MdNotificationsNone } from 'react-icons/md'

function Header() {
  return (
    <div className='bg-slate-800 h-16 flex gap-4 items-center text-slate-200 p-4'>
      <div className='flex items-center justify-between px-5 w-full'>
        {/* left side */}
        <div className='flex items-center gap-3'>
          <div className='text-2xl hover:bg-blue-500 p-2 rounded-md cursor-pointer'>
            <MdKeyboardDoubleArrowRight />
          </div>
          {/* search */}
          <div className='flex items-center gap-2 border border-slate-400 rounded-md p-2'>
            <CiSearch size={25} />
            <input type="text" placeholder='Search...' className='bg-transparent outline-none' />
          </div>
        </div>
        {/* right side */}
        <div className='flex items-center gap-5'>
          <FaRegMoon size={20} />
          <MdNotificationsNone size={25} />
          <div className='h-10 w-10'>
            <img src={user} className='w-full h-full object-cover rounded-full' alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header