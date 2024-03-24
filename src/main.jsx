import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Blogs from './Pages/Blogs.jsx'
import Bookmarks from './Pages/Bookmarks.jsx'
import MainLayout from './Layouts/MainLayout.jsx'
import Home from './Pages/Home.jsx'
import Blog from './Pages/Blog.jsx'




const router = createBrowserRouter([
  {
    path: "/",
    element:<MainLayout></MainLayout>,
    children :[
      {
        path: "/",
        element:<Home></Home>,
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
        loader : ()=> fetch('https://dev.to/api/articles?per_page=21&top=7')
      },
      {
        path: "/blogs/:id",
        element: <Blog></Blog>,
      },
      {
        path: "/bookmarks",
        element: <Bookmarks></Bookmarks>,
      },
    ]
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
