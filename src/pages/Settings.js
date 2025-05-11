import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Settings = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState(true);
  const [language, setLanguage] = useState("English");
  const navigate = useNavigate();

  useEffect(() => {
    const savedMode = localStorage.getItem("darkMode");
    const savedNotifications = localStorage.getItem("notifications");
    const savedLanguage = localStorage.getItem("language");

    if (savedMode) setDarkMode(savedMode === "true");
    if (savedNotifications) setNotifications(savedNotifications === "true");
    if (savedLanguage) setLanguage(savedLanguage);
  }, []);

  // ✅ Ndryshimi i Dark Mode
  const toggleDarkMode = () => {
    localStorage.setItem("darkMode", !darkMode);
    setDarkMode(!darkMode);
  };

  // ✅ Ndryshimi i Njoftimeve
  const toggleNotifications = () => {
    localStorage.setItem("notifications", !notifications);
    setNotifications(!notifications);
  };

  // ✅ Ndryshimi i gjuhës
  const changeLanguage = (e) => {
    const newLanguage = e.target.value;
    localStorage.setItem("language", newLanguage);
    setLanguage(newLanguage);
  };

  // ✅ Fshirja e llogarisë
  const deleteAccount = () => {
    if (window.confirm("Are you sure you want to delete your account? This action cannot be undone!")) {
      localStorage.removeItem("currentUser");
      localStorage.removeItem("loggedIn");
      localStorage.removeItem("cart");
      localStorage.removeItem("orders");
      localStorage.clear();
      navigate("/register");
    }
  };

  return (
    <div className={`min-h-screen flex flex-col items-center justify-center ${darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"}`}>
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg text-center w-96">
        <h2 className="text-4xl font-bold text-yellow-400 mb-4">⚙️ Settings</h2>
        <p className="text-lg text-gray-300 mb-6">Customize your preferences</p>

        {/* ✅ Dark Mode Toggle */}
        <div className="flex justify-between items-center w-full mb-4">
          <p className="text-lg">Dark Mode</p>
          <button
            onClick={toggleDarkMode}
            className={`px-6 py-2 rounded-lg text-white font-semibold ${darkMode ? "bg-yellow-500" : "bg-gray-600 hover:bg-gray-700"}`}
          >
            {darkMode ? "ON" : "OFF"}
          </button>
        </div>

        {/* ✅ Notifications Toggle */}
        <div className="flex justify-between items-center w-full mb-4">
          <p className="text-lg">Enable Notifications</p>
          <button
            onClick={toggleNotifications}
            className={`px-6 py-2 rounded-lg text-white font-semibold ${notifications ? "bg-green-500" : "bg-gray-600 hover:bg-gray-700"}`}
          >
            {notifications ? "ON" : "OFF"}
          </button>
        </div>

        {/* ✅ Language Selection */}
        <div className="flex flex-col w-full mb-6">
          <label className="text-lg mb-2 text-gray-300">Language:</label>
          <select
            value={language}
            onChange={changeLanguage}
            className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
          >
            <option value="English">English</option>
            <option value="Albanian">Shqip</option>
            <option value="Italian">Italiano</option>
          </select>
        </div>

        {/* ✅ Delete Account Button */}
        <button
          onClick={deleteAccount}
          className="w-full mt-6 bg-red-500 hover:bg-red-600 text-white font-semibold py-3 rounded-lg transition-all"
        >
          Delete Account
        </button>
      </div>
    </div>
  );
};

export default Settings;
