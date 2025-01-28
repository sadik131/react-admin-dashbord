import { useState } from 'react'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import './App.css'
import { ThemeProvider } from './contex/theam-contex'
import Layout from './routes/layout'
import DashbordPage from './routes/dashbord/page'

function App() {

  const route = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          index: true,
          element: <DashbordPage />
        },
        {
          path: "analytics",
          element: <h1 className='title'>Analytics</h1>
        },
        {
          path: "reports",
          element: <h1 className='title'>Reports</h1>
        },
        {
          path: "customers",
          element: <h1 className='title'>Customers</h1>
        },
        {
          path: "new-customers",
          element: <h1 className='title'>New Customers</h1>
        },
        {
          path: "verified-customers",
          element: <h1 className='title'>Verified Customers</h1>
        },
        {
          path: "products",
          element: <h1 className='title'>Products</h1>
        },
        {
          path: "new-products",
          element: <h1 className='title'>New Products</h1>
        },
        {
          path: "inventory",
          element: <h1 className='title'>Inventory</h1>
        },
        {
          path: "settings",
          element: <h1 className='title'>Settings</h1>
        }
      ]
    }
  ])

  return (
    <>
    <ThemeProvider storageKey='theme'>
      <RouterProvider router={route}>
      </RouterProvider>
    </ThemeProvider>
    </>
  )
}

export default App
