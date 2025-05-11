import React, { useState, useEffect } from "react";

const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // ✅ Merr përdoruesin aktual nga localStorage
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    if (!currentUser) {
      alert("You need to log in to view your orders!");
      return;
    }

    // ✅ Merr porositë vetëm për përdoruesin aktual
    const userEmail = currentUser.email;
    const savedOrders = JSON.parse(localStorage.getItem(`orders_${userEmail}`)) || [];
    setOrders(savedOrders);
  }, []);

  return (
    <div className="py-16 bg-gray-900 text-center min-h-screen text-white">
      <h2 className="text-5xl font-extrabold mb-8">📦 Your Orders</h2>

      {orders.length === 0 ? (
        <p className="text-gray-400 text-xl mt-10">No orders have been placed yet.</p>
      ) : (
        <div className="max-w-5xl mx-auto bg-gray-800 p-6 rounded-lg shadow-lg">
          {orders.map((order) => (
            <div key={order.id} className="mb-6 p-4 bg-gray-700 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-2">
                Order ID: <span className="text-yellow-400">#{order.id}</span>
              </h3>
              <p className="text-lg text-gray-300"> Date: {order.date}</p>
              <div className="divide-y divide-gray-600 mt-4">
                {order.items.map((item, i) => (
                  <div key={i} className="flex justify-between items-center py-2">
                    <div className="flex items-center">
                      <img src={item.image} alt={item.title} className="w-16 h-16 object-cover rounded-lg shadow-md mr-4" />
                      <div className="text-left">
                        <h4 className="text-xl font-semibold">{item.title}</h4>
                        <p className="text-gray-300">${item.price} each</p>
                        <p className="text-gray-400 text-sm">Quantity: <span className="font-bold text-white">{item.quantity}</span></p> {/* ✅ Shfaq sasinë e produktit */}
                      </div>
                    </div>
                    <p className="text-green-400 font-bold">✔ Completed</p>
                  </div>
                ))}
              </div>
              <p className="text-lg font-bold text-yellow-400 mt-4"> Total: ${order.total}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Orders;
