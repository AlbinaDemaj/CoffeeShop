import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { fetchCoffeeProducts } from "../services/api";
import Footer from "../components/Footer";  

// ✅ Rrugët e imazheve për produktet
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

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [flavorFilter, setFlavorFilter] = useState("All"); //
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6;
  const navigate = useNavigate();

  useEffect(() => {
    const loggedIn = localStorage.getItem("loggedIn");
    if (!loggedIn) {
      alert("Please log in to access the shop!");
      navigate("/login");
      return;
    }

    const getProducts = async () => {
      const data = await fetchCoffeeProducts();

      // ✅ Vendosim fotografitë sipas titullit ose default
      const updatedProducts = data.map((product, index) => ({
        ...product,
        id: product.id || index,
        title: product.title || `Special Coffee ${index + 1}`,
        price: "5.99",
        image: coffeeImages[`Special Coffee ${index + 1}`] || coffeeImages.default,
        flavor: product.flavor || "Unknown", // ✅ Merr shijen e kafesë
      }));

      setProducts(updatedProducts);
      setLoading(false);
    };

    getProducts();
  }, [navigate]);

  // ✅ Funksioni për të shtuar produktin në shportë
  const addToCart = (product) => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
    window.dispatchEvent(new Event("storage"));
    alert(`${product.title} added to cart! 🛒`);
  };

  // ✅ Filtrim sipas shijes (flavor)
  const filteredProducts = products.filter((product) => {
    return (
      (flavorFilter === "All" || product.flavor === flavorFilter) &&
      product.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  // ✅ Pagination
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  return (
    <div className="py-16 bg-gray-950 text-center text-white">
      <h2 className="text-5xl font-extrabold mb-8 mt-10">Coffee Menu</h2>

      {/* ✅ Search Bar & Flavor Filter */}
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center mb-6 px-4">
        <input
          type="text"
          placeholder="Search for coffee..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full md:w-1/2 p-3 rounded-lg border border-yellow-500 text-black"
        />
        <select
          value={flavorFilter}
          onChange={(e) => setFlavorFilter(e.target.value)}
          className="mt-4 md:mt-0 w-full md:w-1/4 p-3 rounded-lg border border-gray-300 text-black bg-yellow-500"
        >
          <option value="All">All Flavors</option>
          <option value="Vanilla">Vanilla</option>
          <option value="Caramel">Caramel</option>
          <option value="Hazelnut">Hazelnut</option>
          <option value="Mocha">Mocha</option>
          <option value="Chocolate">Chocolate</option>
        </select>
      </div>

      {loading ? (
        <p className="text-gray-400 text-xl">Loading coffee products...</p>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 max-w-7xl mx-auto px-4">
            {currentProducts.length > 0 ? (
              currentProducts.map((product) => (
                <div key={product.id} className="bg-white shadow-lg rounded-xl p-5 flex flex-col items-center transition-transform hover:scale-105 hover:shadow-2xl">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-52 object-cover rounded-lg"
                    onError={(e) => (e.target.src = coffeeImages.default)}
                  />
                  <h3 className="text-2xl font-semibold mt-4 text-gray-900">{product.title}</h3>
                  <p className="text-gray-500 mt-2 text-sm px-3 text-center">Flavor: {product.flavor}</p>
                  <div className="mt-4 flex items-center justify-between w-full px-4">
                    <p className="text-lg font-bold text-black">${product.price}</p>
                    <button
                      onClick={() => addToCart(product)}
                      className="bg-yellow-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-yellow-600 transition-all"
                    >
                      🛒 Add
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-gray-400 text-xl">No coffee products found.</p>
            )}
          </div>
        </>
      )}

      {/* ✅ Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center mt-10 space-x-4">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className={`px-6 py-2 rounded-lg font-semibold transition-all ${
              currentPage === 1 ? "bg-gray-700 text-gray-400 cursor-not-allowed" : "bg-yellow-500 text-white hover:bg-yellow-600"
            }`}
          >
            Previous
          </button>

          <span className="text-lg font-semibold px-4">
            Page {currentPage} of {totalPages}
          </span>

          <button
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={currentPage >= totalPages}
            className={`px-6 py-2 rounded-lg font-semibold transition-all ${
              currentPage >= totalPages ? "bg-gray-700 text-gray-400 cursor-not-allowed" : "bg-yellow-500 text-white hover:bg-yellow-600"
            }`}
          >
            Next
          </button>
        </div>
      
        )}

        {/* ✅ Footer në fund të faqes */}
        <div className="mt-20">
          <Footer />
        </div>
      </div> // ky është fundi i div-it kryesor të return-it
    );
  };
  
  export default Shop;
  

