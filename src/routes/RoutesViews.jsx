import React from 'react'
import {Route, Routes} from 'react-router-dom'
import HomePage from '../pages/HomePage'
import ContactPage from '../pages/ContactPage'
import AboutUsPage from '../pages/AboutUsPage'
const RoutesViews = () => {
  return (
    <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/contact' element={<ContactPage/>}/>
        <Route path='/aboutus' element={<AboutUsPage/>}/>
    </Routes>
  )
}

export default RoutesViews