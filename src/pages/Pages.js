import React from "react";
import Navbar from "../components/Navbar"; //  Shtojmë Navbarin

const Pages = () => {
  return (
    <>
      <Navbar /> {/*  Përfshijmë navbarin për navigim */}
      <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center text-center px-6">
        <div className="max-w-5xl p-8  ">
          <h1 className="text-5xl font-extrabold text-white mb-6">Explore Our Pages</h1>
          <p className="text-lg text-gray-600 mb-8">
            Discover more about our coffee shop, history, mission, and services. Navigate through different sections
            to learn more.
          </p>

          {/*  Lista e seksioneve të faqes Pages */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-200 p-6 rounded-lg shadow-md hover:bg-gray-300 transition">
              <h3 className="text-2xl font-semibold text-gray-900">📜 About Us</h3>
              <p className="text-gray-700 mt-2">Learn more about our coffee shop's history and mission.</p>
            </div>

            <div className="bg-gray-200 p-6 rounded-lg shadow-md hover:bg-gray-300 transition">
              <h3 className="text-2xl font-semibold text-gray-900">📍 Locations</h3>
              <p className="text-gray-700 mt-2">Find the nearest Corretto coffee shop and enjoy a great coffee.</p>
            </div>

            <div className="bg-gray-200 p-6 rounded-lg shadow-md hover:bg-gray-300 transition">
              <h3 className="text-2xl font-semibold text-gray-900">☕ Our Coffee</h3>
              <p className="text-gray-700 mt-2">Explore the variety of coffee blends and specialty drinks we offer.</p>
            </div>

            <div className="bg-gray-200 p-6 rounded-lg shadow-md hover:bg-gray-300 transition">
              <h3 className="text-2xl font-semibold text-gray-900">🛒 Order Online</h3>
              <p className="text-gray-700 mt-2">Browse our menu and place an order online for pickup or delivery.</p>
            </div>
          </div>

          {/* ✅ Buton për të shkuar te menuja e kafesë */}
          <div className="mt-10">
            <a href="/shop" className="px-6 py-3 bg-yellow-500 text-white font-semibold rounded-lg shadow-lg hover:bg-yellow-600 transition-all">
              ☕ Explore Our Menu
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pages;
