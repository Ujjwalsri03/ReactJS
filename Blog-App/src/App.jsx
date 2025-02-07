import { useState } from 'react'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import './App.css'
import Login from './containers/Login/login'

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <></>
    },
    {
      path:"/create",
      element:<></>
    },
    {
      path:"/login",
      element:<></>
    }
  ])
 
  return (
    <>
      
      <ReactProvider router={router}/>
    </>
  )
}

export default App
