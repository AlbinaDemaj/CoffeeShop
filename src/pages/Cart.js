import React, { useState, useEffect } from "react"; // Importon React dhe hooks për menaxhimin e gjendjes dhe efekteve anësore.
import { useNavigate } from "react-router-dom"; // Importon `useNavigate` për navigim mes faqeve.

const Cart = () => {
  // Gjendjet për menaxhimin e shportës, modalit dhe mesazhit të modalit
  const [cartItems, setCartItems] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    // Merr të dhënat e shportës nga `localStorage` dhe shton një `quantity` default për çdo produkt
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    const updatedCart = savedCart.map(item => ({
      ...item,
      quantity: item.quantity ? item.quantity : 1,
    }));
    setCartItems(updatedCart);
  }, []);

  // Funksioni për të hequr një produkt nga shporta
  const removeFromCart = (id) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    window.dispatchEvent(new Event("storage"));
  };

  // Funksioni për të ndryshuar sasinë e një produkti në shportë
  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return;

    const updatedCart = cartItems.map((item) =>
      item.id === id ? { ...item, quantity: newQuantity } : item
    );

    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  // Llogarit çmimin total të produkteve në shportë
  const totalPrice = cartItems.reduce(
    (total, item) => total + (parseFloat(item.price) * item.quantity),
    0
  ).toFixed(2);

  // Funksioni për të bërë porosinë
  const placeOrder = () => {
    if (cartItems.length === 0) {
      setModalMessage("Your cart is empty!");
      setModalOpen(true);
      return;
    }

    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    if (!currentUser) {
      setModalMessage("You need to log in to place an order!");
      setModalOpen(true);
      return;
    }

    const userEmail = currentUser.email;
    const existingOrders = JSON.parse(localStorage.getItem(`orders_${userEmail}`)) || [];
    const orderId = existingOrders.length + 1;

    const newOrder = {
      id: orderId,
      items: cartItems,
      total: totalPrice,
      date: new Date().toLocaleString(),
    };

    const updatedOrders = [...existingOrders, newOrder];
    localStorage.setItem(`orders_${userEmail}`, JSON.stringify(updatedOrders));

    setModalMessage(`🎉 Your order (ID: ${orderId}) has been placed successfully!`);
    setModalOpen(true);

    setCartItems([]);
    localStorage.removeItem("cart");

    window.dispatchEvent(new Event("storage"));

    setTimeout(() => {
      setModalOpen(false);
      navigate("/orders");
    }, 2000);
  };

  return (
    <div className="py-16 bg-gray-900 text-center min-h-screen text-white">
      <h2 className="text-5xl font-extrabold mt-10">🛒 Your Shopping Cart</h2>

      {cartItems.length === 0 ? (
        <p className="text-gray-400 text-xl mt-10">Your cart is empty.</p>
      ) : (
        <div className="max-w-4xl mx-auto bg-black p-6 rounded-lg shadow-lg mt-10">
          <div className="divide-y divide-gray-600">
            {cartItems.map((item) => (
              <div key={item.id} className="flex justify-between items-center py-4">
                <div className="flex items-center">
                  <img src={item.image} alt={item.title} className="w-20 h-20 object-cover rounded-lg shadow-md mr-4" />
                  <div className="text-left">
                    <h3 className="text-2xl font-semibold">{item.title}</h3>
                    <p className="text-gray-300 text-lg">${item.price} each</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="px-3 py-2 bg-gray-600 text-white rounded-l-lg hover:bg-gray-700 transition"
                  >
                    ➖
                  </button>
                  <span className="px-4 py-2 bg-gray-800 text-white">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="px-3 py-2 bg-gray-600 text-white rounded-r-lg hover:bg-gray-700 transition"
                  >
                    ➕
                  </button>
                </div>

                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-all shadow-md"
                >
                  ❌ Remove
                </button>
              </div>
            ))}
          </div>

          <div className="mt-6 p-4 bg-gray-700 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-2">
              Total: <span className="text-yellow-400">${totalPrice}</span>
            </h3>
            <button
              onClick={placeOrder}
              className="w-full bg-green-500 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-green-300 transition-all shadow-md"
            >
              ✅ Place Order
            </button>
          </div>
        </div>
      )}

      {/* Modal për mesazhe */}
      {modalOpen && (
        <div className="fixed bottom-10 right-10 bg-gray-800 text-white p-4 rounded-lg shadow-lg flex items-center">
          <p className="text-lg">{modalMessage}</p>
        </div>
      )}
    </div>
  );
};

export default Cart;
