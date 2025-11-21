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

  // Handle normal signup
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

  // Handle Google login
  useEffect(() => {
    /* global google */
    if (window.google) {
      google.accounts.id.initialize({
        client_id: "926647134050-ustihlu3vte1k4vt44q4j46311vv7ii0.apps.googleusercontent.com", // <-- replace with your client ID
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

      // Send the Google token to your backend
      const res = await axios.post(
        "https://beta-ohxc.onrender.com/api/auth/google",
        { token: response.credential }
      );

      const userData = res.data.data.user;
      const tokenData = res.data.data.token;

      login(userData, tokenData);
      navigate("/"); // redirect to home after login
    } catch (error) {
      console.error(error);
      setErrorMsg(error.response?.data?.message || "Google login failed");
    }

    setLoading(false);
  };

  return (
    <div className="sup flex">
      <div className="min-h-screen bg-white text-black p-20 flex justify-center">
        <div className="w-full max-w-lg">
          <h1 className="text-3xl font-bold leading-tight">
            Join our community of home seekers and explore the possibilities
            that await.
          </h1>

          <p className="mt-3 text-black-300">
            Let’s get started by filling out the information below
          </p>

          {errorMsg && <p className="text-red-500 mt-4 text-sm">{errorMsg}</p>}

          <form className="mt-8 space-y-5" onSubmit={handleSignup}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block mb-1 text-sm">First Name</label>
                <input
                  type="text"
                  placeholder="Enter Name"
                  className="w-full px-4 py-3 border border-gray-200 bg-transparent rounded-md focus:outline-none"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                />
              </div>

              <div>
                <label className="block mb-1 text-sm">Last name</label>
                <input
                  type="text"
                  placeholder="Enter Name"
                  className="w-full px-4 py-3 border border-gray-200 bg-transparent rounded-md focus:outline-none"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                />
              </div>
            </div>

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

            <div>
              <label className="block mb-1 text-sm">Confirm password</label>
              <input
                type="password"
                placeholder="Confirm your password"
                className="w-full px-4 py-3 border border-gray-200 bg-transparent rounded-md focus:outline-none"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>

            <div className="flex items-center space-x-2 mt-2">
              <input type="checkbox" className="w-5 h-5 accent-green-500" />
              <p className="text-gray-300 text-sm">
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
              className="w-full cursor-pointer py-4 mt-2 text-white bg-green-600 rounded-full text-lg font-medium hover:bg-green-700 transition"
              disabled={loading}
            >
              {loading ? "Creating account..." : "Sign up"}
            </button>
          </form>

          <div className="flex items-center my-6">
            <div className="flex-1 h-px bg-gray-300"></div>
            <p className="px-4 text-gray-400">or</p>
            <div className="flex-1 h-px bg-gray-300"></div>
          </div>

          {/* Google login button */}
          <div id="google-button" className="w-full"></div>

          <p className="text-center mt-6 text-gray-300">
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

      <div>
        <img src={sig} alt="" className="w-full h-full" />
      </div>
    </div>
  );
}
