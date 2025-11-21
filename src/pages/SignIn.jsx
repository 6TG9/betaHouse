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
      const res = await axios.post("https://beta-ohxc.onrender.com/api/auth/login", {
        email,
        password,
      });

      const userData = res.data.data.user;
      const tokenData = res.data.data.token;

      // save user + token to context
      login(userData, tokenData);

      navigate("/dashboard"); // redirect after login
    } catch (error) {
      setErrorMsg(error.response?.data?.message || "Login failed");
    }

    setLoading(false);
  };

  return (
    <div className="sin flex">
      <div className="min-h-screen bg-white text-black mt-40 px-19 flex justify-center">
        <div className="w-full max-w-lg">
          <h1 className="text-3xl font-bold w-[445px] leading-tight">
            Welcome Back to BetaHouse!
          </h1>

          <p className="mt-3 text-black-300">
            Let’s get started by filling out the information below
          </p>

          {/* ERROR MESSAGE */}
          {errorMsg && <p className="text-red-500 mt-4 text-sm">{errorMsg}</p>}

          {/* Form */}
          <form className="mt-8 space-y-5" onSubmit={handleLogin}>
            <div>
              <label className="block mb-1 text-sm">Email</label>
              <input
                type="email"
                placeholder="Enter your Email"
                className="w-full px-4 py-3 border border-gray-200 bg-transparent rounded-md focus:outline-none"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div>
              <label className="block mb-1 text-sm">Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full px-4 py-3 border border-gray-200 bg-transparent rounded-md focus:outline-none"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <div className="flex items-center space-x-2 mt-2">
              <input type="checkbox" className="w-5 h-5 accent-green-500" />
              <div className="flex gap-45 items-center">
                <p className="text-gray-300 text-sm">Remember Me</p>
                <p className="text-[#EC5E5E]">Forgot Password</p>
              </div>
            </div>

            <button
              type="submit"
              className="w-full cursor-pointer py-4 mt-2 text-white bg-green-600 rounded-full text-lg font-medium hover:bg-green-700 transition"
              disabled={loading}
            >
              {loading ? "Signing in..." : "Sign In"}
            </button>

            <div className="flex items-center my-6">
              <div className="flex-1 h-px bg-gray-300"></div>
              <p className="px-4 text-gray-400">or</p>
              <div className="flex-1 h-px bg-gray-300"></div>
            </div>

            <button
              type="button"
              className="w-full cursor-pointer flex justify-center items-center gap-3 py-3 border border-gray-600 rounded-full text-lg hover:bg-gray-800 transition"
            >
              <img src={goog} alt="Google" className="w-6 h-6" />
              Continue with Google
            </button>

            <p className="text-center mt-6 text-gray-300">
              New User?{" "}
              <Link
                to="/signup"
                className="text-green-500 cursor-pointer hover:underline"
              >
                Sign up
              </Link>
            </p>
          </form>
        </div>
      </div>

      <div>
        <img src={sig} alt="" className="w-full h-full" />
      </div>
    </div>
  );
}
