import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const navigate = useNavigate();

  //  Kontrollon nëse përdoruesi është i kyçur
  useEffect(() => {
    const loggedIn = localStorage.getItem("loggedIn");
    setIsLoggedIn(!!loggedIn);
  }, []);

  //  Merr numrin e produkteve në shportë nga `localStorage`
  useEffect(() => {
    const updateCartCount = () => {
      const cart = JSON.parse(localStorage.getItem("cart")) || [];
      setCartCount(cart.length);
    };

    updateCartCount(); // Thirret kur hapet për herë të parë

    // Dëgjo ndryshimet në `localStorage`
    window.addEventListener("storage", updateCartCount);
    return () => window.removeEventListener("storage", updateCartCount);
  }, []);

  //  Funksioni për Logout
  const handleLogout = () => {
    localStorage.removeItem("loggedIn");
    localStorage.removeItem("currentUser"); //  Fshijmë përdoruesin aktual
    alert("Logged out successfully!");
    setIsLoggedIn(false);
    navigate("/");
    window.location.reload(); //  Rifreskon Navbar-in pas logout
  };

  return (
    <nav className="absolute top-0 left-0 w-full flex justify-between items-center p-6 text-white z-10">
      <div className="text-2xl font-bold">CORRETTO</div>
      
      <ul className="flex gap-6">
        <li><Link to="/" className="hover:underline">Home</Link></li>
        <li><Link to="/shop" className="hover:underline">Shop</Link></li>
        <li><Link to="/pages" className="hover:underline">Pages</Link></li>  {/*  Pages Link */}
        <li><Link to="/dashboard" className="hover:underline text-yellow-400">Dashboard</Link></li>
      

        {/*  Shfaq "Orders " vetëm nëse përdoruesi është i kyçur */}
        {isLoggedIn && (
          <li><Link to="/orders" className="hover:underline text-yellow-400">Orders 📦</Link></li>
        )}
      </ul>

      <div className="flex gap-4 items-center">
        {/*  Ikona e shportës me numrin e produkteve, shfaqet vetëm kur përdoruesi është loguar */}
        {isLoggedIn && (
          <Link to="/cart" className="relative">
            <span className="text-2xl hover:text-gray-300">🛒</span>
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                {cartCount}
              </span>
            )}
          </Link>
        )}

        {isLoggedIn ? (
          <>
            <span className="text-gray-300 mr-4">Logged in as: <b>{JSON.parse(localStorage.getItem("currentUser"))?.name}</b></span>
            <button onClick={handleLogout} className="bg-yellow-500 px-4 py-2 rounded">Logout</button>
          </>
        ) : (
          <>
            <Link to="/login" className="bg-green-500 px-4 py-2 rounded">Login</Link>
            <Link to="/register" className="bg-blue-500 px-4 py-2 rounded">Register</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
