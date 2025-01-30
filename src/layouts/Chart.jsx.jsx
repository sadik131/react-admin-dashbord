import React from 'react'
import user from "../assets/user.jpg"
import { overviewData } from '../constance'
import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import { useGloble } from '../contex/theam-contex'

function Chart() {

    const {theme} = useGloble()
    console.log(theme)

    return (
        <>
            <div className='bg-white dark:bg-slate-800 border-slate-500 h-[400px] border px-4 py-6 rounded-md '>
                <h3 className='text-xl text-gray-800 dark:text-white font-semibold mb-2'>OverView</h3>
                {/* chart */}
                <ResponsiveContainer width="100%" height={300}>
                    <AreaChart data={overviewData} margin={{ top: 0, bottom: 0, left: 0, right: 0 }}>
                        <defs>
                            <linearGradient id="color" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#2563eb" stopOpacity={0.8} />
                                <stop offset="95%" stopColor="#2563eb" stopOpacity={0} />
                            </linearGradient>
                        </defs>
                        <Tooltip cursor={false} formatter={(value) => `$${value}`} />
                            <XAxis dataKey="name" strokeWidth={0} stroke={theme === "light" ? "#475569" : "#94a3b8"} tickMargin={6} />
                            <YAxis dataKey="total" strokeWidth={0} stroke={theme === "light" ? "#475569" : "#94a3b8"} tickMargin={6} />
                            <Area type="monotone" dataKey="total" stroke="#2563eb" fill="url(#color)" />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </>
    )
}

export default Chart