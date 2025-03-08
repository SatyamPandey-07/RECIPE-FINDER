import { useState } from "react";
import { Link } from "react-router-dom";

const SignupPage = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Sign-Up Data:", formData);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#0f172a] text-white">
      <div className="p-8 rounded-lg shadow-lg w-full max-w-md bg-[#1e293b] border border-[#00eaff]">
        <h2 className="text-3xl font-bold text-[#00eaff] text-center neon-glow">Create an Account</h2>
        <p className="text-gray-400 text-center mt-2">Join us for exclusive recipes! 🍽️</p>

        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
            className="w-full p-3 bg-[#334155] text-white rounded-md focus:outline-none focus:ring-2 focus:ring-[#00eaff]"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 bg-[#334155] text-white rounded-md focus:outline-none focus:ring-2 focus:ring-[#00eaff]"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full p-3 bg-[#334155] text-white rounded-md focus:outline-none focus:ring-2 focus:ring-[#00eaff]"
            required
          />
          <button
            type="submit"
            className="w-full py-3 bg-[#00eaff] text-black font-bold rounded-md shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_15px_#00eaff]"
          >
            Sign Up
          </button>
        </form>

        <p className="text-gray-400 text-center mt-4">
          Already have an account?{" "}
          <Link to="/login" className="text-[#00eaff] hover:underline">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignupPage;
