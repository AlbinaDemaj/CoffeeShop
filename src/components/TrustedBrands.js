import React from "react";

const brands = [
  "/img/icon1.jpg",
  "/img/icon2.jpg",
  "/img/icon3.jpg",
  "/img/icon4.jpg",
  "/img/icon5.jpg",
  "/img/icon6.jpg",
  "/img/icon1.jpg", //  Shtojmë duplikime për një efekt më të butë
  "/img/icon2.jpg",
  "/img/icon3.jpg",
  "/img/icon4.jpg",
  "/img/icon5.jpg",
  "/img/icon6.jpg"
];

const TrustedBrands = () => {
  return (
    <div className="py-20 bg-white">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Left Side - Title & Button */}
        <div className="md:w-1/2 text-center md:text-left px-6">
          <h2 className="text-4xl font-bold mb-4">OUR TRUSTED BRANDS</h2>
          <p className="text-gray-600 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed tempus do eiusmod tempor incididunt ut.
          </p>
          <button className="px-6 py-3 border border-black text-black font-semibold rounded-lg hover:bg-black hover:text-white transition-all">
            VIEW MORE
          </button>
        </div>

        {/*  Right Side - Moving Brand Logos (Slider fillon nga e djathta) */}
        <div className="overflow-hidden w-full md:w-1/2 flex justify-end pr-10">
          <div className="flex space-x-10 animate-scroll">
            {brands.map((brand, index) => (
              <img
                key={index}
                src={brand}
                alt={`Brand ${index + 1}`}
                className="w-32 h-32 object-contain"
              />
            ))}
          </div>
        </div>
      </div>

      {/*  CSS për animacionin */}
      <style jsx>{`
        @keyframes scroll {
          from {
            transform: translateX(100%); /*  Nis nga ana e djathtë */
          }
          to {
            transform: translateX(-100%);
          }
        }
        
        .animate-scroll {
          display: flex;
          animation: scroll 15s linear infinite; /*  Lëvizje më e butë dhe e gjatë */
          width: max-content;
        }
      `}</style>
    </div>
  );
};

export default TrustedBrands;
