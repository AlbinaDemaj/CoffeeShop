import React, { useEffect, useState } from "react";
import { fetchCoffeeProducts } from "../services/api";

//  Rrugët e imazheve të ruajtura në "public/img/"
const coffeeImages = {
  "Special Coffee 1": "/img/1.jpg",
  "Special Coffee 2": "/img/1.1.jpg",
  "Special Coffee 3": "/img/1.2.jpg",
  "Special Coffee 4": "/img/4.jpg",
  "Special Coffee 5": "/img/2.0.jpg",
  "Special Coffee 6": "/img/1.9.jpg",
  "Special Coffee 7": "/img/7.jpg",
  "Special Coffee 8": "/img/1.1.jpg",
  "Special Coffee 9": "/img/1.2.jpg",
  "Special Coffee 10": "/img/1.3.jpg",
  "Special Coffee 11": "/img/1.1.jpg",
  "Special Coffee 12": "/img/1.2.jpg",
  "Special Coffee 13": "/img/1.3.jpg",
  "Special Coffee 14": "/img/1.4.jpg",
  "Special Coffee 15": "/img/1.5.jpg",
  "Special Coffee 16": "/img/1.6.jpg",
  "Special Coffee 17": "/img/1.7.jpg",
  "Special Coffee 18": "/img/1.8.jpg",
  "Special Coffee 19": "/img/6.jpg",
  "Special Coffee 20": "/img/5.jpg",
  
};

const CoffeeProducts = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart")) || []);

  useEffect(() => {
    const getProducts = async () => {
      const data = await fetchCoffeeProducts();

      //  Caktojmë imazhet sipas titullit ose vendosim një default
      const updatedProducts = data.map((product, index) => ({
        ...product,
        id: product.id || index,
        title: product.title || `Special Coffee ${index + 1}`,
        price: "5.99",
        image: coffeeImages[`Special Coffee ${index + 1}`] || coffeeImages.default, // ✅ Merr fotografinë e duhur
      }));

      setProducts(updatedProducts);
    };

    getProducts();
  }, []);

  //  Funksioni për të shtuar produktin në shportë
  const addToCart = (product) => {
    const updatedCart = [...cart, product];
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));

    alert(`${product.title} added to cart! 🛒`);
  };

  return (
    <div className="py-16 bg-gray-50 text-center">
      <h2 className="text-5xl font-extrabold mb-8 text-brown-900">Coffee Menu</h2>
      <p className="text-lg text-gray-600 mb-10">Discover our selection of premium coffee blends</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 max-w-7xl mx-auto px-4">
        {products.length > 0 ? (
          products.map((product) => (
            <div
              key={product.id}
              className="bg-white shadow-lg rounded-xl overflow-hidden p-5 flex flex-col items-center transition-transform transform hover:scale-105 hover:shadow-2xl"
            >
              {/*  Imazhi i produktit */}
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-52 object-cover rounded-lg transition-opacity duration-300 hover:opacity-90"
                onError={(e) => (e.target.src = coffeeImages.default)} // ✅ Nëse nuk ngarkohet imazhi, vendos default
              />

              {/*  Titulli dhe përshkrimi */}
              <h3 className="text-2xl font-semibold mt-4 text-gray-900">{product.title}</h3>
              <p className="text-gray-500 mt-2 text-sm px-3 text-center">{product.description || "No description available."}</p>

              {/*  Çmimi dhe butoni Add to Cart */}
              <div className="mt-4 flex items-center justify-between w-full px-4">
                <p className="text-lg font-bold text-brown-700">${product.price}</p>
                <button
                  onClick={() => addToCart(product)}
                  className="bg-yellow-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-yellow-600 transition-all flex items-center space-x-2"
                >
                  🛒 Add
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-600 text-xl">Loading coffee products...</p>
        )}
      </div>
    </div>
  );
};

export default CoffeeProducts;
