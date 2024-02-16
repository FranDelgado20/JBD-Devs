import React from 'react'
import {Route, Routes} from 'react-router-dom'
import HomePage from '../pages/HomePage'
import ContactPage from '../pages/ContactPage'
const RoutesViews = () => {
  return (
    <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/contact' element={<ContactPage/>}/>
    </Routes>
  )
}

export default RoutesViews