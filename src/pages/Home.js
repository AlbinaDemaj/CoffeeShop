import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import CoffeeFeatures from "../components/CoffeeFeatures";
import CoffeeProducts from "../components/CoffeeProducts";
import CoffeeBlog from "../components/CoffeeBlog";  
import TestimonialsSlider from "../components/TestimonialsSlider";  
import OpeningHours from "../components/OpeningHours";  
import TrustedBrands from "../components/TrustedBrands";  
import Footer from "../components/Footer";  

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <CoffeeFeatures />
      <CoffeeProducts />
      <CoffeeBlog/>
      <TestimonialsSlider/>
      <OpeningHours/>
      <TrustedBrands/>
      <Footer/>
     
    </div>
  );
};

export default Home;
