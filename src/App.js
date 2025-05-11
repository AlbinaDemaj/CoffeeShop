import React, { useState, useEffect } from "react"; // Importon React dhe hooks `useState` dhe `useEffect` për menaxhimin e gjendjes dhe efekteve anësore.
import { Routes, Route, Navigate, useLocation } from "react-router-dom"; // Importon komponentët për menaxhimin e rrugëve (routes) në React.
import Home from "./pages/Home"; // Importon komponentin për faqen kryesore.
import Login from "./pages/Login"; // Importon komponentin për faqen e hyrjes.
import Register from "./pages/Register"; // Importon komponentin për faqen e regjistrimit.
import Shop from "./pages/Shop"; // Importon komponentin për dyqanin.
import Cart from "./pages/Cart"; // Importon komponentin për shportën.
import Orders from "./pages/Orders"; // Importon komponentin për porositë.
import Navbar from "./components/Navbar"; // Importon shiritin e navigimit.
import Pages from "./pages/Pages"; // Importon një faqe të përgjithshme.
import Dashboard from "./pages/Dashboard"; // Importon panelin e administratorit.
import Profile from "./pages/Profile"; // Importon faqen e profilit të përdoruesit.
import Settings from "./pages/Settings"; // Importon faqen e cilësimeve.
import "./index.css"; // Importon stilizimet globale të aplikacionit.

function App() {
  const [currentUser, setCurrentUser] = useState(false); // Përdor `useState` për të ruajtur statusin e përdoruesit (nëse është i kyçur apo jo).

  useEffect(() => {
    const loggedIn = localStorage.getItem("loggedIn"); // Kontrollon në `localStorage` nëse përdoruesi është i kyçur.
    setCurrentUser(!!loggedIn); // Përditëson gjendjen e përdoruesit bazuar në këtë informacion.
  }, []);

  return <MainContent currentUser={currentUser} />; // Kalon `currentUser` te komponenti `MainContent`.
}

const MainContent = ({ currentUser }) => {
  const location = useLocation(); // Merr vendndodhjen aktuale të përdoruesit në aplikacion.
  const hideNavbarRoutes = ["/login", "/register"]; // Rrugët ku nuk duhet të shfaqet `Navbar`.
  const shouldShowNavbar = !hideNavbarRoutes.includes(location.pathname); // Vendos nëse `Navbar` duhet të shfaqet apo jo.

  return (
    <>
      {shouldShowNavbar && <Navbar />} {/* Shfaq navbar vetëm nëse përdoruesi nuk është në `login` ose `register`. */}
      <Routes>
        <Route path="/" element={<Home />} /> {/* Rruga për faqen kryesore. */}
        <Route path="/shop" element={<Shop />} /> {/* Rruga për dyqanin. */}
        <Route path="/cart" element={<Cart />} /> {/* Rruga për shportën. */}
        <Route path="/login" element={currentUser ? <Navigate to="/" /> : <Login />} /> {/* Nëse përdoruesi është i kyçur, e ridrejton në faqen kryesore. */}
        <Route path="/register" element={currentUser ? <Navigate to="/" /> : <Register />} /> {/* E njëjta logjikë si `login`. */}
        <Route path="/orders" element={<Orders />} /> {/* Rruga për porositë e përdoruesit. */}
        <Route path="/pages" element={<Pages />} /> {/* Rruga për faqet tjera. */}
        <Route path="/dashboard" element={<Dashboard />} /> {/* Rruga për panelin e administratorit. */}
        <Route path="/profile" element={<Profile />} /> {/* Rruga për profilin e përdoruesit. */}
        <Route path="/settings" element={<Settings />} /> {/* Rruga për cilësimet. */}
      </Routes>
    </>
  );
};

export default App; // Eksporton `App` për t’u përdorur në `index.js`.
