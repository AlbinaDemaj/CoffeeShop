import React from "react";

const CoffeeFeatures = () => {
  const features = [
    { 
      title: "The Perfect Cup", 
      icon: "☕",
      description: "A rich and smooth blend crafted to perfection for coffee lovers."
    },
    { 
      title: "The Moka Pot", 
      icon: "🥤",
      description: "Classic brewing method that brings out intense flavors and aroma."
    },
    { 
      title: "Supreme Beans", 
      icon: "🌱",
      description: "Hand-picked, high-quality beans sourced from the best farms."
    },
    { 
      title: "The Coffee Machine", 
      icon: "🛠️",
      description: "Advanced technology for a barista-style coffee experience at home."
    },
    { 
      title: "French Press", 
      icon: "🫖",
      description: "A simple yet elegant way to extract the full essence of coffee."
    },
    { 
      title: "Coffee To Go", 
      icon: "🏃",
      description: "Freshly brewed coffee, ready whenever and wherever you are."
    },
  ];

  return (
    <div className="py-20 bg-gray-50 flex flex-col items-center">
      {/* Titulli kryesor */}
      <h2 className="text-4xl font-extrabold text-brown-800 mb-8 text-center">
        Discover the Art of Coffee
      </h2>
      <p className="text-gray-600 text-lg text-center max-w-3xl mb-12">
        "Great coffee is more than just a drink—it's an experience. From the perfect beans to the finest brewing methods, every cup tells a story."
      </p>

      {/* Rreshtimi i veçorive */}
      <div className="grid grid-cols-3 gap-8 items-center max-w-5xl">
        {/* Veçoritë në anën e majtë */}
        <div className="flex flex-col gap-6 text-right">
          {features.slice(0, 3).map((feature, index) => (
            <div key={index} className="flex items-center gap-4 group">
              <span className="text-3xl group-hover:text-brown-600 transition-all duration-300">{feature.icon}</span>
              <div>
                <h3 className="font-bold text-lg text-brown-900">{feature.title}</h3>
                <p className="text-gray-600 text-sm">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Imazhi në qendër */}
        <div className="flex justify-center">
          <img
            src="/img/61.png"
            alt="Coffee Package"
            className="w-64  hover:scale-105 transition-all duration-300"
          />
        </div>

        {/* Veçoritë në anën e djathtë */}
        <div className="flex flex-col gap-6 text-left">
          {features.slice(3, 6).map((feature, index) => (
            <div key={index} className="flex items-center gap-4 group">
              <div>
                <h3 className="font-bold text-lg text-brown-900">{feature.title}</h3>
                <p className="text-gray-600 text-sm">
                  {feature.description}
                </p>
              </div>
              <span className="text-3xl group-hover:text-brown-600 transition-all duration-300">{feature.icon}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoffeeFeatures;
