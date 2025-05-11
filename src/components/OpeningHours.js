import React from "react";

const OpeningHours = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 h-96">
      {/* Left Side - Coffee Image */}
      <div 
        className="bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: "url('/img/8.jpg')" }}
      >
        <div className="text-white text-center text-4xl font-bold bg-black bg-opacity-50 p-6 rounded-lg">
          + COFFEE
          <p className="text-sm mt-2">Best Coffee in Town</p>
        </div>
      </div>

      {/* Right Side - Opening Hours & Reservations */}
      <div className="bg-black text-white flex flex-col justify-center items-center p-8">
        <h2 className="text-3xl font-bold mb-4">OPENING HOURS & RESERVATIONS</h2>
        <div className="text-lg text-center">
          <p>Monday - Friday // CLOSED</p>
          <p>Saturday // 10:00 - 01:00</p>
          <p>Sunday // CLOSED</p>
        </div>
        <div className="mt-6 text-center">
          <p className="text-lg font-semibold">Reservation numbers:</p>
          <p className="text-lg">+458-874-36-21</p>
          <p className="text-lg">+458-471-56-36</p>
        </div>
      </div>
    </div>
  );
};

export default OpeningHours;
