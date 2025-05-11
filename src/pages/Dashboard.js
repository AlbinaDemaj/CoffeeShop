import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");

  //  Kontrollon nëse përdoruesi është i kyçur
  useEffect(() => {
    const loggedIn = localStorage.getItem("loggedIn");
    if (!loggedIn) {
      navigate("/login");
    } else {
      //  Merr emrin e përdoruesit nga localStorage
      const currentUser = JSON.parse(localStorage.getItem("currentUser"));
      setUserName(currentUser?.name || "Guest");
    }
  }, [navigate]);

  return (
    <div className="min-h-screen bg-gray-900 text-white p-10 flex flex-col items-center justify-center">
      {/*  Mesazhi i mirëseardhjes me efekt animacioni */}
      <h2 className="text-5xl font-extrabold text-center mt-10 animate-fadeIn">
        👋 Welcome, <span className="text-yellow-400">{userName}</span>!
      </h2>
      <p className="text-lg text-gray-300 text-center mt-4 max-w-xl">
        We're thrilled to have you here. Explore your orders, update your profile, or customize your settings below!
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mt-10">
        {/*  Orders Card */}
        <div
          className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition transform hover:scale-105 cursor-pointer"
          onClick={() => navigate("/orders")}
        >
          <h3 className="text-3xl font-bold mb-2">📦 Orders</h3>
          <p className="text-gray-300">View all your past orders.</p>
        </div>

        {/*  Profile Card */}
        <div
          className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition transform hover:scale-105 cursor-pointer"
          onClick={() => navigate("/profile")}
        >
          <h3 className="text-3xl font-bold mb-2">👤 Profile</h3>
          <p className="text-gray-300">Manage your profile information.</p>
        </div>

        {/*  Settings Card */}
        <div
          className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition transform hover:scale-105 cursor-pointer"
          onClick={() => navigate("/settings")}
        >
          <h3 className="text-3xl font-bold mb-2">⚙️ Settings</h3>
          <p className="text-gray-300">Adjust your preferences.</p>
        </div>
      </div>

      {/*  CSS për animacionin e mesazhit të mirëseardhjes */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 1.5s ease-out;
        }
      `}</style>
    </div>
  );
};

export default Dashboard;
