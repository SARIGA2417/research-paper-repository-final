import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import loginImage from "../../assets/images/login-image.jpeg";
import { toast } from "react-toastify";
import api from "../../services/api";

function Login() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    const { email, password } = formData;

    if (!email || !password) {
      return toast.error("Please fill all fields!");
    }

    try {

      const res = await api.post("/auth/login", {
        email,
        password,
      });

      toast.success(res.data.message);

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));

      navigate("/");

    } catch (error) {

      toast.error(
        error.response?.data?.message || "Login Failed"
      );

    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-6 py-10">
      <div className="bg-white rounded-3xl shadow-2xl overflow-hidden w-full max-w-6xl grid md:grid-cols-2">

        {/* Left Side */}
        <div className="p-12">

          <div className="flex items-center gap-2 mb-10">
            <div className="w-10 h-10 bg-blue-800 rounded-lg flex items-center justify-center text-white font-bold text-xl">
              📚
            </div>

            <h1 className="text-2xl font-bold text-blue-900">
              Research Repository
            </h1>
          </div>

          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            Welcome Back!
          </h2>

          <p className="text-gray-500 mb-8">
            Login to your account
          </p>

          <form className="space-y-5" onSubmit={handleLogin}>

            <div>
              <label className="block mb-2 text-gray-700">
                Email Address
              </label>

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-900"
              />
            </div>

            <div>
              <label className="block mb-2 text-gray-700">
                Password
              </label>

              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                className="w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-900"
              />
            </div>

            <div className="flex justify-between items-center text-sm">

              <label className="flex items-center gap-2">
                <input type="checkbox" />
                Remember me
              </label>

              <Link
                to="/forgot-password"
                className="text-blue-800 hover:underline"
              >
                Forgot Password?
              </Link>

            </div>

            <button
              type="submit"
              className="w-full bg-blue-900 text-white py-3 rounded-xl hover:bg-blue-800 transition"
            >
              Login
            </button>

          </form>

          <p className="text-center mt-8 text-gray-600">
            Don't have an account?{" "}
            <Link
              to="/register"
              className="text-blue-800 font-semibold"
            >
              Register Now
            </Link>
          </p>

        </div>

        {/* Right Side */}
        <div className="bg-blue-50 flex items-center justify-center overflow-hidden">
          <img
            src={loginImage}
            alt="Login Illustration"
            className="w-full h-full object-cover"
          />
        </div>

      </div>
    </div>
  );
}

export default Login;  