import { useState, useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";

import sig from "../../public/Frame 1000002379.png";

export default function Signup() {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg("");

    try {
      const res = await axios.post(
        "https://beta-ohxc.onrender.com/api/auth/register",
        {
          name: firstName + " " + lastName,
          email,
          password,
          confirmPassword,
        }
      );

      const userData = res.data.data.user;
      const tokenData = res.data.data.token;

      login(userData, tokenData);
      navigate("/signin");
    } catch (error) {
      setErrorMsg(error.response?.data?.message || "Signup failed");
    }

    setLoading(false);
  };

  useEffect(() => {
    /* global google */
    if (window.google) {
      google.accounts.id.initialize({
        client_id:
          "926647134050-ustihlu3vte1k4vt44q4j46311vv7ii0.apps.googleusercontent.com",
        callback: handleGoogleResponse,
      });

      google.accounts.id.renderButton(
        document.getElementById("google-button"),
        { theme: "outline", size: "large", width: "100%" }
      );
    }
  }, []);

  const handleGoogleResponse = async (response) => {
    console.log("Google JWT:", response.credential);

    try {
      setLoading(true);
      setErrorMsg("");

      const res = await axios.post(
        "https://beta-ohxc.onrender.com/api/auth/google",
        { token: response.credential }
      );

      const userData = res.data.data.user;
      const tokenData = res.data.data.token;

      login(userData, tokenData);
      navigate("/");
    } catch (error) {
      console.error(error);
      setErrorMsg(error.response?.data?.message || "Google login failed");
    }

    setLoading(false);
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      {/* Form Section */}
      <div className="flex-1 flex items-center justify-center px-6 py-12 bg-white">
        <div className="w-full max-w-md">
          <h1 className="text-2xl sm:text-3xl font-bold leading-tight text-gray-900">
            Join our community of home seekers and explore the possibilities
            that await.
          </h1>

          <p className="mt-2 text-gray-600 text-sm sm:text-base">
            Let’s get started by filling out the information below
          </p>

          {errorMsg && <p className="text-red-500 mt-4 text-sm">{errorMsg}</p>}

          <form className="mt-6 space-y-4" onSubmit={handleSignup}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block mb-1 text-sm font-medium">
                  First Name
                </label>
                <input
                  type="text"
                  placeholder="Enter Name"
                  className="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                />
              </div>

              <div>
                <label className="block mb-1 text-sm font-medium">
                  Last Name
                </label>
                <input
                  type="text"
                  placeholder="Enter Name"
                  className="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                />
              </div>
            </div>

            <div>
              <label className="block mb-1 text-sm font-medium">Email</label>
              <input
                type="email"
                placeholder="Enter your Email"
                className="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
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
                className="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <div>
              <label className="block mb-1 text-sm font-medium">
                Confirm Password
              </label>
              <input
                type="password"
                placeholder="Confirm your password"
                className="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-2 mt-2 text-sm">
              <input type="checkbox" className="w-4 h-4 accent-green-500" />
              <p className="text-gray-500">
                I agree to{" "}
                <a className="text-green-500 hover:underline">
                  Terms of Service
                </a>{" "}
                and{" "}
                <a className="text-green-500 hover:underline">
                  Privacy Policies
                </a>
              </p>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-green-600 text-white font-medium rounded-md hover:bg-green-700 transition"
              disabled={loading}
            >
              {loading ? "Creating account..." : "Sign up"}
            </button>
          </form>

          <div className="flex items-center my-4">
            <hr className="flex-1 border-gray-300" />
            <span className="px-2 text-gray-400 text-sm">or</span>
            <hr className="flex-1 border-gray-300" />
          </div>

          {/* Google login button */}
          <div id="google-button" className="w-full"></div>

          <p className="text-center mt-4 text-gray-500 text-sm">
            Already have an account?{" "}
            <Link
              to="/signin"
              className="text-green-500 hover:underline cursor-pointer"
            >
              Sign in
            </Link>
          </p>
        </div>
      </div>

      {/* Image Section */}
      <div className="hidden md:flex md:flex-1">
        <img
          src={sig}
          alt="Signup illustration"
          className="object-cover w-full h-full"
        />
      </div>
    </div>
  );
}
