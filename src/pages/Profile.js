import React, { useEffect, useState } from "react";

const Profile = () => {
  const [user, setUser] = useState({ name: "", email: "", password: "" });
  const [newName, setNewName] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    if (currentUser) {
      setUser(currentUser);
      setNewName(currentUser.name);
    }
  }, []);

  // ✅ Funksioni për përditësimin e profilit (emër dhe/ose fjalëkalim)
  const updateProfile = () => {
    let updatedUser = { ...user, name: newName };

    // ✅ Verifikimi i ndryshimit të fjalëkalimit
    if (currentPassword || newPassword || confirmPassword) {
      if (currentPassword !== user.password) {
        setMessage("❌ Current password is incorrect!");
        return;
      }
      if (newPassword !== confirmPassword) {
        setMessage("❌ New passwords do not match!");
        return;
      }
      updatedUser.password = newPassword;
    }

    localStorage.setItem("currentUser", JSON.stringify(updatedUser));
    setUser(updatedUser);
    setMessage("✅ Profile updated successfully!");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg text-center w-96">
        <h2 className="text-4xl font-bold text-yellow-400 mb-4">👤 Profile</h2>
        <p className="text-lg text-gray-300 mb-6">Manage your personal information</p>

        {message && <p className="text-center mb-4 font-semibold">{message}</p>}

        <div className="text-left">
          {/* ✅ Email - Nuk mund të ndryshohet */}
          <p className="text-gray-400 text-lg">Email:</p>
          <p className="text-white text-xl mb-4">{user.email}</p>

          {/* ✅ Ndryshimi i emrit */}
          <label className="text-gray-400 text-lg">Name:</label>
          <input
            type="text"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
            className="w-full p-3 mt-2 rounded-lg bg-gray-700 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          
          {/* ✅ Ndryshimi i fjalëkalimit */}
          <p className="text-gray-400 text-lg mt-6">Change Password:</p>

          <input
            type="password"
            placeholder="Current Password"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
            className="w-full p-3 mt-2 rounded-lg bg-gray-700 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />

          <input
            type="password"
            placeholder="New Password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            className="w-full p-3 mt-2 rounded-lg bg-gray-700 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />

          <input
            type="password"
            placeholder="Confirm New Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full p-3 mt-2 rounded-lg bg-gray-700 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
        </div>

        <button
          onClick={updateProfile}
          className="w-full mt-6 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-3 rounded-lg transition-all"
        >
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default Profile;
