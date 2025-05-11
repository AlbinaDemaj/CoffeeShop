import React from "react";

const Footer = () => {
  return (
    <div
      className="relative h-auto bg-cover bg-center flex flex-col items-center justify-center text-white text-center p-12"
      style={{ backgroundImage: "url('/img/1.jpg')" }}
    >
      {/* Gradient Overlay për një efekt elegant */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/90"></div>

      {/* Logo & Description */}
      <div className="relative z-10 max-w-2xl mb-8">
        <div className="text-2xl font-bold bg-white text-black px-6 py-2 inline-block rounded-md mb-4 shadow-md">
          CORRETTO 
        </div>
        <p className="text-lg text-gray-300 italic">
          “A coffee break is a moment of peace in a fast-paced world.  
          At Corretto, every sip is a journey of taste, warmth, and tradition.”
        </p>
      </div>

      {/* Store Locations */}
      <div className="relative z-10 mb-6">
        <h3 className="text-lg font-semibold text-yellow-400">OUR LOCATIONS</h3>
        <p className="text-gray-300">Durasmuir Ave, Los Angeles, CA 90038, USA</p>
        <p className="text-gray-300">Atkins Ave, Brooklyn, NY 11208, USA</p>
      </div>

      {/* Newsletter Subscription */}
      <div className="relative z-10 flex flex-col items-center">
        <h3 className="text-lg font-semibold text-yellow-400 mb-3">STAY UPDATED WITH OUR COFFEE JOURNEY</h3>
        <div className="flex items-center border border-gray-400 px-4 py-2 rounded-md bg-black/50 backdrop-blur-md">
          <input
            type="email"
            placeholder="Enter your email"
            className="bg-transparent text-white outline-none placeholder-gray-300 w-64"
          />
          <button className="ml-4 text-yellow-400 hover:text-yellow-500 transition-all">
            📧
          </button>
        </div>
      </div>

      {/* Copyright */}
      <div className="relative z-10 text-gray-400 text-sm mt-8">
        <p>© {new Date().getFullYear()} Albina Demaj. All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
