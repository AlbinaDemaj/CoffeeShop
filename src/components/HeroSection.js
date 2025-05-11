import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; //  Import navigation hook

const slides = [
  {
    image: "/img/7.jpg",
    title: "Welcome to the World of Coffee",
    text: "Indulge in the finest coffee flavors, crafted with passion and perfection."
  },
  {
    image: "/img/3.jpg",
    title: "The Essence of Fresh Beans",
    text: "Our premium coffee beans are sourced from the best plantations worldwide."
  },
  {
    image: "/img/4.jpg",
    title: "Brewing Perfection in Every Cup",
    text: "Enjoy the perfect blend of aroma, taste, and freshness in every sip."
  },
  {
    image: "/img/123.jpg", 
    title: "Crafted with Love",
    text: "Every cup is carefully made to bring you joy with each sip."
  }
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000); //  Ndryshon çdo 4 sekonda
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-screen bg-cover bg-center flex items-center justify-center text-white transition-all duration-700"
      style={{ backgroundImage: `url('${slides[currentSlide].image}')` }}
    >
      {/*  Gradient overlay për kontrast më të mirë */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/*  Teksti qendror me animacion */}
      <div className="relative text-center px-6">
        <h1 className="text-6xl font-extrabold mb-4 drop-shadow-lg animate-fadeIn">
          {slides[currentSlide].title}
        </h1>
        <p className="text-lg mb-6 max-w-2xl mx-auto text-gray-200 drop-shadow-md animate-slideUp">
          {slides[currentSlide].text}
        </p>

        {/*  Buton për të shkuar te Shop */}
        <button 
          onClick={() => navigate("/shop")}
          className="px-8 py-3 bg-yellow-500 text-black font-semibold rounded-lg shadow-xl hover:bg-yellow-600 transition-all animate-bounce"
        >
          Explore More
        </button>
      </div>

      {/*  Kontrolli manual i sliderit */}
      <div className="absolute bottom-8 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              currentSlide === index ? "bg-yellow-500 scale-125" : "bg-gray-400"
            }`}
          ></button>
        ))}
      </div>

      {/*  CSS për animacionet */}
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(-10px); }
            to { opacity: 1; transform: translateY(0); }
          }

          @keyframes slideUp {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }

          .animate-fadeIn { animation: fadeIn 1s ease-in-out; }
          .animate-slideUp { animation: slideUp 1.2s ease-in-out; }
          .animate-bounce { animation: bounce 1.5s infinite; }
        `}
      </style>
    </div>
  );
};

export default HeroSection;
