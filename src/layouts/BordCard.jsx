import React from 'react'
import { MdTrendingUp } from 'react-icons/md'

function BordCard({ item }) {
  return (
    <div className='p-4 rounded-lg border border-slate-600 bg-slate-800'>
            {/* header */}
            <div className='flex items-center gap-x-2'>
              <span className='p-3 rounded-md bg-[#142c65]'>
                {React.createElement(item.icon, { className: "text-2xl" })}
              </span>
              <h4 className='text-xl text-white font-semibold'>Total Products</h4>
            </div>
            {/* body */}
            <div className='mt-4 p-5 bg-slate-900'>
              <h1 className='text-2xl text-white font-bold mb-2'>25,154</h1>
              <span className='p-3 w-fit rounded-full flex items-center gap-x-2 text-blue-600 border border-blue-600'>
                <MdTrendingUp className='text-xl' />
                {item.range}%
              </span>
            </div>
          </div>
  )
}

export default BordCard