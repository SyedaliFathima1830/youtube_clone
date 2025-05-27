import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Body from './components/Body'
import store from './utils/store'
import {Provider} from "react-redux"
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import WatchPage from './components/WatchPage'
import MainContent from './components/MainContent'
const appRouter = createBrowserRouter([{
  path:'/',
  element: <Body/>,
  children:[
     {
      path:'/',
      element:<MainContent/>
     },
     {
      path:'watch',
      element:<WatchPage/>
     },
  ]
}])
function App() {

  return (
    <>
    <Provider store={store}>

      <div className=''>
      <Header/>
    <RouterProvider router={appRouter} />
      </div>
    </Provider>

    </>
  )
}

export default App
