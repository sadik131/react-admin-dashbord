import React from 'react'
import user from "../assets/user.jpg"
import { recentSalesData } from '../constance'

function Sales() {
  return (
    <>
    <div className='bg-slate-800 border-slate-500 h-[350px] overflow-y-scroll border px-4 py-6 rounded-md '>
        <h3 className='text-xl text-white font-semibold mb-2'>Recent Sales</h3>
        {/* users */}
        {recentSalesData.map((sale) => (
        <div className='flex items-center justify-between pb-3 pt-3 last:pb-0' key={sale.id}>
            {/* left side */}
            <div className="flex items-center gap-x-2">
                <img src={user} className='size-14 rounded-full object-cover' alt="" />
                <div className='flex flex-col gap-2'>
                    <h3 className='text-lg font-semibold'>{sale.name}</h3>
                    <p className='text-sm text-slate-300'>{sale.email}</p>
                </div>
            </div>
            {/* right side */}
            <h3 className='text-lg font-semibold'>${sale.total}</h3>
        </div>
        ))}
    </div>
    </>
  )
}

export default Sales