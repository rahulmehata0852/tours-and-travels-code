import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Landing from './share/Landing'
import Navbar from './share/Navbar'
import Home from './Pages/Home'
import Register from './Pages/Register'
import Login from './Pages/Login'
import Destination from './Pages/Destination'
import Blog from './Pages/Blog'
import TourSearch from './Pages/TourSearch'
import AdminLogin from './Admin/pages/AdminLogin'
import "react-toastify/dist/ReactToastify.css"
import { ToastContainer } from 'react-toastify'
import AddTour from './Admin/pages/AddTour'
import AdminAllToursList from './Admin/pages/AdminAllToursList'
import AdHome from './Admin/pages/Home'
import AdminProtected from './Admin/pages/AdminProtected'
import ToursList from './Pages/ToursList'
import LoginProtected from './Pages/LoginProtected'
import BookTours from './Pages/BookTours'
import OrderSuccess from './Pages/OrderSuccess'
import TourTicket from './Pages/TourTicket'
import MyBookings from './Pages/MyBookings'
import { useSelector } from 'react-redux'
import Whishlist from './Pages/Whishlist'

const App = () => {

  const { loading } = useSelector(state => state.users)


  return <>

    <BrowserRouter>
      <ToastContainer
        autoClose="3000"
        position='bottom-left'
        theme='dark'
        progressClassName={undefined}
        progressStyle={undefined}

      />
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/destination' element={<LoginProtected compo={<Destination />} />} />
        <Route path='/blog' element={<LoginProtected compo={<Blog />} />} />
        <Route path='/tour-search' element={<TourSearch />} />
        <Route path='/admin-login' element={<AdminLogin />} />
        <Route path='/addTour' element={<AdminProtected compo={<AddTour />} />} />
        <Route path='/AdminAllTours' element={<AdminProtected compo={<AdminAllToursList />} />} />
        <Route path='/Admin-home' element={<AdminProtected compo={<AdHome />} />} />
        <Route path='/tours-list' element={<LoginProtected compo={<ToursList />} />} />
        <Route path='/book-tours' element={<LoginProtected compo={<BookTours />} />} />
        <Route path='/success' element={<LoginProtected compo={<OrderSuccess />} />} />
        <Route path='/ticket' element={<LoginProtected compo={<TourTicket />} />} />
        <Route path='/bookings' element={<LoginProtected compo={<MyBookings />} />} />
        <Route path='/whishlist' element={<LoginProtected compo={< Whishlist />} />} />

      </Routes>


    </BrowserRouter>



  </>
}

export default App