import React from "react";


import HeroSection from "../../Components/theme1/HeroSection";
import Services from "../../Components/theme1/Services";
import TopDestination from "../../Components/theme1/TopDestination";
import BookingSteps from "../../Components/theme1/BookingSteps";
import NewsLetter from "../../Components/theme1/NewsLetter";
import Header from "../../Components/header/Header";
const Home = () => {
  console.log(process.env.REACT_APP_BACKEND_URL)
  return (
    <div>

 <HeroSection/>
      
      <Services />
     
            {/* <TopDestination /> */}
            {/* <BookingSteps /> */}
            {/* <Testimonials />
            <Partners /> */}
            {/* <NewsLetter /> */}
      {/* <div className="homeContainer">
        <Featured />
        <h1 className="homeTitle">Browse by property type</h1>
        <PropertyList/>
        <h1 className="homeTitle">Homes guests love</h1>
        <FeaturedProperties/>
        <MailList/>
        <Footer/>
      </div> */}
    </div>
  );
};

export default Home;
