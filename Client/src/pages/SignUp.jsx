import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { addUser } from "../service/api";
import { toast } from "react-toastify";
const defaultValue = {
  name: "",
  email: "",
  password: "",
};
const SignUpPage = () => {
  const [user, setUser] = useState(defaultValue);

  const navigate = useNavigate();

  const handleChange = (e) => {
    // console.log(e.target.name, e.target.value)
    setUser({ ...user, [e.target.name]: e.target.value });
    // console.log(user)
  };

  const addUserSubmit = async (e) => {
    e.preventDefault();
    await addUser(user);
    toast.success("Welcome", {
      position: "top-center",
      autoClose: 1500,
      style: {
        backgroundColor: "#4CAF50", // Green background
        color: "#FFFFFF", // White text
      },
    });
    navigate("/home");
  };

  return (
    <div className={`flex flex-col items-center justify-center min-h-screen`}>
      {/* Sign-Up Form Section */}
      <div className="flex flex-col items-center justify-center w-full max-w-md p-6 bg-white rounded-lg shadow-md">
        <h2 className="mb-4 text-2xl font-semibold text-center">Sign Up</h2>
        <form className="flex flex-col w-full" onSubmit={addUserSubmit}>
          <input
            type="text"
            placeholder="Full Name"
            className="mb-4 p-2 border border-gray-300 rounded"
            id="name"
            onChange={(e) => handleChange(e)}
            name="name"
            required
          />
          <input
            type="email"
            placeholder="Email Address"
            className="mb-4 p-2 border border-gray-300 rounded"
            id="email"
            onChange={(e) => handleChange(e)}
            name="email"
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="mb-4 p-2 border border-gray-300 rounded"
            id="password"
            onChange={(e) => handleChange(e)}
            name="password"
            required
          />

          <button
            type="submit"
            className="p-2 bg-black text-white rounded hover:bg-gray-800 transition duration-300"
          >
            Sign Up
          </button>
        </form>
        <p className="mt-4 text-sm text-center">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-500 hover:underline">
            Log In
          </Link>
        </p>
      </div>
    </div>
  );
};

// SignUpPage.propTypes = {
//   className: PropTypes.string,
//   frameDivAlignSelf: PropTypes.any,
//   frameDivWidth: PropTypes.any,
// };

export default SignUpPage;
