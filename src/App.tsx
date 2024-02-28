// import React from 'react'

import { Route, Routes } from "react-router"
import Home from "./pages/Home"
import LoginPage from "./pages/LoginPage"
import SignupPage from "./pages/SignupPage"
import ComingSoonPage from "./pages/ComingSoonPage"
import NewsPage from "./pages/NewsPage"
import AccountPage from "./pages/AccountPage"
import NewsPostPage from "./pages/NewsPostPage"
import MovieSchedulePage from "./pages/MovieSchedulePage"
import { useSelector } from "react-redux"
import SeatSelectionPage from "./pages/SeatSelectionPage"
import PaymentPage from "./pages/PaymentPage"
import PaymentSuccess from "./pages/PaymentSuccess"
import MyTicketPage from "./pages/MyTicketPage"
import TransactionDetailPage from "./pages/TransactionDetailPage"


const App = () => {

  const login = useSelector((state:any) => state.login);



  return (
    <div className="bg-white">
      {/* <Navbar/>


      <Movies/> */}
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/movie-schedule' element={<MovieSchedulePage/>} />
        <Route path='/movie-schedule/seat-selection' element={<SeatSelectionPage/>} />
        <Route path='/movie-schedule/seat-selection/confirm-payment' element={<PaymentPage/>} />
        <Route path='/payment-success' element={<PaymentSuccess/>} />
        <Route path="/login" element={ !login.isLoggedIn ? <LoginPage/> : (<AccountPage />)} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/account" element={<AccountPage />} />
        <Route path="/coming-soon" element={<ComingSoonPage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/news-post" element={<NewsPostPage />} />
        <Route path="/my-ticket" element={<MyTicketPage />} />
        <Route path="/my-ticket/:token" element={<TransactionDetailPage />} />
        {/* <Route path="/news/:spotlight" element={} />
        <Route path="/news/:news" element={} />
        <Route path="/news/:video" element={} /> */}
      </Routes>
    </div>
  )
}

export default App