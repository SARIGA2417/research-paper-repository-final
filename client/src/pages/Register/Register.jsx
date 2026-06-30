import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import registerImage from "../../assets/images/register-image.jpeg";
import { toast } from "react-toastify";
import api from "../../services/api";

function Register() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    const { name, email, password, confirmPassword } = formData;

    if (!name || !email || !password || !confirmPassword) {
      return toast.error("Please fill all fields!");
    }

    if (password !== confirmPassword) {
      return toast.error("Passwords do not match!");
    }

    try {
      const res = await api.post("/auth/register", {
        name,
        email,
        password,
      });

      toast.success(res.data.message);

      navigate("/login");

    } catch (error) {
      toast.error(
        error.response?.data?.message || "Registration Failed"
      );
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-6 py-10">
      <div className="bg-white rounded-3xl shadow-2xl overflow-hidden w-full max-w-6xl grid md:grid-cols-2">

        {/* Left */}
        <div className="p-12">

          <div className="flex items-center gap-2 mb-8">
            <div className="w-10 h-10 bg-blue-800 rounded-lg flex items-center justify-center text-white">
              📚
            </div>

            <h1 className="text-2xl font-bold text-blue-900">
              Research Repository
            </h1>
          </div>

          <h2 className="text-3xl font-bold mb-2">
            Create Your Account
          </h2>

          <p className="text-gray-500 mb-8">
            Join our research community today.
          </p>

          <form className="space-y-5" onSubmit={handleRegister}>

            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Full Name"
              className="w-full border rounded-xl px-4 py-3"
            />

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address"
              className="w-full border rounded-xl px-4 py-3"
            />

            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              className="w-full border rounded-xl px-4 py-3"
            />

            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm Password"
              className="w-full border rounded-xl px-4 py-3"
            />

            <label className="flex gap-2 text-sm">
              <input type="checkbox" />
              I agree to the Terms of Service & Privacy Policy
            </label>

            <button
              type="submit"
              className="w-full bg-blue-900 text-white py-3 rounded-xl hover:bg-blue-800"
            >
              Register
            </button>

          </form>

          <p className="mt-8 text-center">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-blue-800 font-semibold"
            >
              Login
            </Link>
          </p>

        </div>

        {/* Right */}
        <div className="bg-blue-50 flex items-center justify-center overflow-hidden">

          <img
            src={registerImage}
            alt="Register"
            className="w-full h-full object-cover"
          />

        </div>

      </div>
    </div>
  );
}

export default Register;