import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";

import goog from "../../public/🦆 icon _google_.png";
import sig from "../../public/Frame 1000002379.png";

export default function SignIn() {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg("");

    try {
      const res = await axios.post(
        "https://beta-ohxc.onrender.com/api/auth/login",
        { email, password }
      );

      const userData = res.data.data.user;
      const tokenData = res.data.data.token;

      login(userData, tokenData);
      navigate("/dashboard");
    } catch (error) {
      setErrorMsg(error.response?.data?.message || "Login failed");
    }
    setLoading(false);
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      {/* Form Section */}
      <div className="flex-1 flex items-center justify-center px-6 py-12 bg-white">
        <div className="w-full max-w-md">
          <h1 className="text-2xl sm:text-3xl font-bold leading-tight text-gray-900">
            Welcome Back to BetaHouse!
          </h1>

          <p className="mt-2 text-gray-600 text-sm sm:text-base">
            Let’s get started by filling out the information below
          </p>

          {/* Error message */}
          {errorMsg && <p className="text-red-500 mt-4 text-sm">{errorMsg}</p>}

          {/* Form */}
          <form className="mt-6 space-y-4" onSubmit={handleLogin}>
            <div>
              <label className="block mb-1 text-sm font-medium">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div>
              <label className="block mb-1 text-sm font-medium">Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="w-4 h-4 accent-green-500" />
                Remember Me
              </label>
              <Link to="#" className="text-red-500 hover:underline">
                Forgot Password?
              </Link>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-green-600 text-white font-medium rounded-md hover:bg-green-700 transition"
              disabled={loading}
            >
              {loading ? "Signing in..." : "Sign In"}
            </button>

            <div className="flex items-center my-4">
              <hr className="flex-1 border-gray-300" />
              <span className="px-2 text-gray-400 text-sm">or</span>
              <hr className="flex-1 border-gray-300" />
            </div>

            <button
              type="button"
              className="w-full flex items-center justify-center gap-3 py-2 border border-gray-600 rounded-md hover:bg-gray-100 transition"
            >
              <img src={goog} alt="Google" className="w-5 h-5" />
              Continue with Google
            </button>

            <p className="text-center mt-4 text-gray-500 text-sm">
              New User?{" "}
              <Link to="/signup" className="text-green-500 hover:underline">
                Sign up
              </Link>
            </p>
          </form>
        </div>
      </div>

      {/* Image Section */}
      <div className="hidden md:flex md:flex-1">
        <img
          src={sig}
          alt="Sign in illustration"
          className="object-cover w-full h-full"
        />
      </div>
    </div>
  );
}
