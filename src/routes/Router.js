import React from 'react'
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom'
import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar';
import NavbarNew from '../components/Navbar/NavbarNew';
import Topbar from '../components/Topbar/Topbar';
import About from '../pages/About/About';
import Contact from '../pages/Contact/Contact';
import EnquiryPage from '../pages/EnquiryPage/EnquiryPage';
import Home from '../pages/Home/Home';
import Manufacturer from '../pages/Manufacturer/Manufacturer';
import Retailer from '../pages/Retailer/Retailer';
import { ROUTES } from './RouterConfig';

const Router = () => {

  const RouteWithRole = ({ Element }) => {

    const [showTopbar, setShowTopbar] = useState(true)

    return (
      <>
        {showTopbar ? <Topbar setShowTopbar={setShowTopbar} /> : false}
        <Navbar />
        {/* <NavbarNew /> */}
        <Element />
        <Footer />
      </>
    );
  }

  return (
    <div>
      <Routes>
        <Route exact path={ROUTES.Home} element={<RouteWithRole Element={Home} />}></Route>
        <Route exact path={ROUTES.About} element={<RouteWithRole Element={About} />}></Route>
        <Route exact path={ROUTES.Manufacturer} element={<RouteWithRole Element={Manufacturer} />}></Route>
        <Route exact path={ROUTES.EnquiryPage} element={<RouteWithRole Element={EnquiryPage} />}></Route>
        <Route exact path={ROUTES.Retailer} element={<RouteWithRole Element={Retailer} />}></Route>
        <Route exact path={ROUTES.Contact} element={<RouteWithRole Element={Contact} />}></Route>


      </Routes>
    </div>
  )
}

export default Router