import { Link } from "react-router-dom";
import registerImage from "../../assets/images/register-image.jpeg";
import { toast } from "react-toastify";

function Register() {

    const handleRegister = (e) => {
  e.preventDefault();

  toast.error("Please fill all required fields!");
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
              placeholder="Full Name"
              className="w-full border rounded-xl px-4 py-3"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="w-full border rounded-xl px-4 py-3"
            />

            <input
              type="password"
              placeholder="Password"
              className="w-full border rounded-xl px-4 py-3"
            />

            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full border rounded-xl px-4 py-3"
            />

            <label className="flex gap-2 text-sm">
              <input type="checkbox" />
              I agree to the Terms of Service & Privacy Policy
            </label>

            <button className="w-full bg-blue-900 text-white py-3 rounded-xl hover:bg-blue-800">
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