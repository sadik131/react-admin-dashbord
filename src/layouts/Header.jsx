import React from 'react'
import { CiSearch } from 'react-icons/ci'
import { FaRegMoon, FaMoon } from 'react-icons/fa'
import user from "../assets/user.jpg"
import { MdKeyboardDoubleArrowRight, MdNotificationsNone } from 'react-icons/md'
import { useGloble } from '../contex/theam-contex'

function Header() {
  const { open, setOpen, theme, setTheme } = useGloble()

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark')
    } else {
      setTheme('light')
    }
  }

  console.log(theme)
  return (
    <div className='dark:bg-slate-800 bg-white h-16 flex gap-4 items-center text-slate-800 dark:text-slate-200 p-4'>
      <div className='flex items-center justify-between w-full'>
        {/* left side */}
        <div className='flex items-center gap-3'>
          <button
            onClick={() => setOpen(!open)}
            className='text-2xl hover:bg-blue-500 p-2 rounded-md cursor-pointer'>
            <MdKeyboardDoubleArrowRight />
          </button>
          {/* search */}
          <div className='flex items-center gap-2 border border-slate-400 rounded-md p-2'>
            <CiSearch size={25} />
            <input type="text" placeholder='Search...' className='bg-transparent outline-none' />
          </div>
        </div>
        {/* right side */}
        <div className='flex items-center gap-5'>
          <button onClick={toggleTheme}>
            {theme === 'light' ? <FaRegMoon size={20} /> : <FaMoon size={20} />}
            </button>
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