import React from "react";
import "./home.css";
import Navbar from "../../Components/Navbar/Navbar";
import Header from "../../Components/header/Header";
import Featured from "../../Components/featured/Featured";
import PropertyList from "../../Components/propertyList/PropertyList";
import FeaturedProperties from "../../Components/featuredProperties/FeaturedProperties";
import MailList from "../../Components/mailList/MailList";
import Footer from "../../Components/footer/Footer";
const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <div className="homeContainer">
        <Featured />
        <h1 className="homeTitle">Browse by property type</h1>
        <PropertyList/>
        <h1 className="homeTitle">Homes guests love</h1>
        <FeaturedProperties/>
        <MailList/>
        <Footer/>
      </div>
    </div>
  );
};

export default Home;
