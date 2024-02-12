import React from 'react'
import Header from '../Components/Header'
import Gallery from '../Components/Gallery'
import HotelBookingForm from '../Components/HotelBookingForm'
import Parrallex from '../Components/Parrallex'
import Features from '../Components/Features'
import Gallery1 from '../Components/Gallery1'
import HotelGallery from '../Components/HotelGallery'
import Testimonials from '../Components/Testimonials'
import Contact from '../Components/Contact'
import Footer from '../Components/Footer'

export const Home = () => {
  return (
    <>
    <Gallery/>
    <HotelBookingForm/>
    <Parrallex service={"about"}/>
    <HotelGallery/>
    <Features/>
    <Gallery1/>
    <Testimonials/>
    {/* <Parrallex service={"mission"}/> */}
   
    </>
  )
}
