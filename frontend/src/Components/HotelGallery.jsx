import React, { useContext } from 'react';
import { HotelCardContainer } from './HotelCardContainer';
import { HotelContext } from '../context/HotelContext';


function HotelGallery() {
  const {hotels} =useContext(HotelContext)
  console.log(hotels)
  return (
    <section id="stats-counter" className="stats-counter">
      
      <div className="content ps-0 ps-lg-5 text-center our-hotel">
              <h1 className='text-white'>Our Hotels</h1>
              <p className='text-white'>
                ChardhamStay Hotels is a renowned name in the hotel industry,
                offering laudable services and opulent accommodation to guests.
                
              </p>
            </div>
    <HotelCardContainer/>
    </section>
   
  );
}

export default HotelGallery;
