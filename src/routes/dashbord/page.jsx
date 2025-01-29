import React from 'react'
import { FiCodesandbox } from 'react-icons/fi'
import { BiDollar, BiPackage } from "react-icons/bi";
import { MdPeopleAlt } from "react-icons/md";
import BordCard from '../../layouts/BordCard';
import Sales from '../../layouts/Sales';
import Products from '../../layouts/Products';
import Footer from '../../layouts/Footer';

function page() {

  const dash = [
    { id: 1, title: "Total Products", total: "25,154", icon: FiCodesandbox, range: "25" },
    { id: 2, title: "Total Customers", total: "15,100", icon: MdPeopleAlt, range: "75" },
    { id: 3, title: "Total Paid Orders", total: "$16,154", icon: BiDollar, range: "50" },
    { id: 4, title: "Sales", total: "25,154", icon: BiPackage, range: "55" },
  ]

  return (
    <div className='px-4 pt-6 bg-slate-900'>
      <h1 className='text-white text-2xl font-semibold'>Dashboard</h1>
      {/* cards */}
      <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 mt-5'>
        {dash.map((item) => <BordCard key={item.id} item={item} />)}
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 mt-5 gap-4">
        <Sales />
        <Sales />
      </div>
      <Products />
      <Footer />
    </div>
  )
}

export default page