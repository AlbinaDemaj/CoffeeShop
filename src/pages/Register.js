import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    // ✅ Kontrollon nëse të gjitha fushat janë plotësuar
    if (!name || !email || !password || !confirmPassword) {
      setError("❌ Please fill in all fields!");
      return;
    }

    // ✅ Kontrollon nëse fjalëkalimet përputhen
    if (password !== confirmPassword) {
      setError("❌ Passwords do not match!");
      return;
    }

    // ✅ Ruaj të dhënat e përdoruesit në `localStorage`
    const user = { name, email, password };
    localStorage.setItem("user", JSON.stringify(user));

    alert("🎉 Registration successful!");
    navigate("/login");
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="bg-gray-800 p-10 rounded-lg shadow-lg w-96 text-center">
        {/* ✅ Mesazhi i mirëseardhjes */}
        <h2 className="text-3xl font-bold text-yellow-400">New here?</h2>
        <p className="text-gray-300 text-lg mb-6">Create your free account</p>

        {error && <p className="text-red-400 text-center mb-4">{error}</p>}

        {/* ✅ Forma e regjistrimit */}
        <form onSubmit={handleRegister} className="space-y-4">
          <input
            type="text"
            placeholder="Username"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />

          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />

          <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-lg transition-all">
            Register
          </button>
        </form>

        {/* ✅ Opsioni për login nëse ke llogari */}
        <p className="text-center text-gray-400 mt-4">
          Already have an account?{" "}
          <span
            className="text-yellow-400 cursor-pointer hover:underline"
            onClick={() => navigate("/login")}
          >
            Log in here
          </span>
        </p>
      </div>
    </div>
  );
};

export default Register;
