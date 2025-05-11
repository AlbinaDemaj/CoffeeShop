import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // ✅ Kontrollon nëse ka kredenciale të ruajtura
  useEffect(() => {
    const savedCredentials = JSON.parse(localStorage.getItem("rememberedUser"));
    if (savedCredentials) {
      setEmail(savedCredentials.email);
      setPassword(savedCredentials.password);
      setRememberMe(true);
    }
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    setError("");

    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (storedUser && storedUser.email === email && storedUser.password === password) {
      localStorage.setItem("loggedIn", "true");
      localStorage.setItem("currentUser", JSON.stringify(storedUser));

      // ✅ Ruaj kredencialet nëse është zgjedhur "Remember Me"
      if (rememberMe) {
        localStorage.setItem("rememberedUser", JSON.stringify({ email, password }));
      } else {
        localStorage.removeItem("rememberedUser");
      }

      alert("🎉 Logged in successfully!");
      navigate("/");
      window.location.reload();
    } else {
      setError("❌ Invalid email or password!");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="bg-gray-800 p-10 rounded-lg shadow-lg w-96 text-center">
        <h2 className="text-3xl font-bold mb-6 text-yellow-400">Login to CORRETTO</h2>

        {error && <p className="text-red-400 text-center mb-4">{error}</p>}

        {/* ✅ Forma e login-it */}
        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />

          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />

          {/* ✅ Checkbox për "Remember Me" */}
          <div className="flex items-center justify-between text-gray-300">
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={() => setRememberMe(!rememberMe)}
                className="w-4 h-4 text-yellow-500 focus:ring-yellow-400"
              />
              <span>Remember Me</span>
            </label>
          </div>

          <button className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-3 rounded-lg transition-all">
            🔑 Login
          </button>
        </form>

        <p className="text-gray-400 my-4">or login with</p>

        {/* ✅ Opsionet për login me rrjetet sociale */}
        <div className="space-y-3">
          <button className="w-full bg-white text-black font-semibold py-3 rounded-lg flex items-center justify-center space-x-2 hover:bg-gray-200 transition-all">
            <span>Continue with Google</span>
          </button>

          <button className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg flex items-center justify-center space-x-2 hover:bg-blue-700 transition-all">
            <span>Continue with Facebook</span>
          </button>

          <button className="w-full bg-blue-400 text-white font-semibold py-3 rounded-lg flex items-center justify-center space-x-2 hover:bg-blue-500 transition-all">
            <span>Continue with Twitter</span>
          </button>
        </div>

        <p className="text-center text-gray-400 mt-4">
          Don't have an account?{" "}
          <span
            className="text-yellow-400 cursor-pointer hover:underline"
            onClick={() => navigate("/register")}
          >
            Register here
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;

