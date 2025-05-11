import React, { useState, useEffect } from "react";

const testimonials = [
  {
    image: "/img/12.jpg",
    text: "Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum.",
    author: "MARGARET WAGNER, café manager"
  },
  {
    image: "/img/13.jpg",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis leo. Maecenas tempus, tellus eget.",
    author: "JOHN DOE, coffee lover"
  },
  {
    image: "/img/14.jpg",
    text: "Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros.",
    author: "ANNA SMITH, barista"
  }
];

const TestimonialsSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animatedText, setAnimatedText] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  //  Funksioni për animacionin e shkronjave një nga një
  useEffect(() => {
    const animateText = (fullText) => {
      setAnimatedText("");
      let index = 0;
      const interval = setInterval(() => {
        if (index < fullText.length) {
          setAnimatedText((prev) => prev + fullText[index]);
          index++;
        } else {
          clearInterval(interval);
        }
      }, 50); // Shfaq çdo shkronjë çdo 50ms
    };

    animateText(testimonials[currentIndex].text);
  }, [currentIndex]);

  return (
    <div
      className="relative h-96 bg-cover bg-center flex items-center justify-center text-white transition-all duration-500"
      style={{ backgroundImage: `url('${testimonials[currentIndex].image}')` }}
    >
      {/* Gradient Overlay për kontrast më të mirë */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      {/*  Përmbajtja e testimonialit */}
      <div className="relative text-center max-w-2xl transition-opacity duration-700">
        <h2 className="text-4xl font-bold mb-4 opacity-100">TESTIMONIALS</h2>
        <p className="text-lg mb-6 transition-opacity duration-700">{animatedText}</p>
        <p className="italic font-semibold text-yellow-400">{testimonials[currentIndex].author}</p>

        {/*  Butonat e ndryshimit të testimonialit */}
        <div className="mt-4 flex justify-center space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentIndex ? "bg-yellow-400 scale-125" : "bg-gray-400"
              }`}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSlider;
