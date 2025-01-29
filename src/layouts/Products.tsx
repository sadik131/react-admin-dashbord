import React from 'react';
import { topProducts } from '../constance';
import { FaStar, FaTrash } from 'react-icons/fa';
import { CiEdit } from 'react-icons/ci';

function Products() {
  return (
    <div className="bg-slate-800 border-slate-500 h-[500px] overflow-y-scroll border px-4 py-6 rounded-md w-full mt-5">
      <h3 className="text-xl text-white font-medium mb-2">Top Orders</h3>
      <table className="min-w-full border-collapse">
        {/* Table Header */}
        <thead>
          <tr className="bg-gray-700 text-left text-white">
            <th className="px-4 py-3">#</th>
            <th className="px-4 py-3">Product</th>
            <th className="px-4 py-3">Price</th>
            <th className="px-4 py-3">Status</th>
            <th className="px-4 py-3">Rating</th>
            <th className="px-4 py-3">Action</th>
          </tr>
        </thead>

        {/* Table Body */}
        <tbody>
          {topProducts.map((item) => (
            <tr key={item.number} className="text-white border-b last:border-b-0 border-gray-700">
              <td className="px-4 py-3">{item.number}</td>
              <td className="px-4 py-3 flex items-center gap-x-2">
                <div className="h-16 w-16">
                  <img src={item.image} className="h-full w-full rounded-xl object-cover" alt={item.name} />
                </div>
                <div className="flex flex-col">
                  <h4 className="font-medium">{item.name}</h4>
                  <p className="text-sm text-gray-400">{item.description}</p>
                </div>
              </td>
              <td className="px-4 py-3">{item.price}</td>
              <td className="px-4 py-3">{item.status}</td>
              <td className="px-4 py-3">
                <div className="flex items-center gap-x-1">
                <FaStar className="text-yellow-500" />
                {item.rating}
                </div>
              </td>
              <td className="px-4 py-3 items-center">
                <button className="mr-2">
                  <CiEdit className='text-blue-600' />
                </button>
                <button className="">
                  <FaTrash className='text-red-500' />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Products;
