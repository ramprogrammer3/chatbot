import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import toast from "react-hot-toast";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formdata, setFormdata] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormdata((prevData) => {
      return {
        ...prevData,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if(formdata.password.length < 6){
      toast.error("password must be at least 6 characters long ");
      return;
    }

    console.log(formdata);
  };

  return (
    <div>
      <div className="w-11/12 max-w-[500px] mx-auto  mt-14 border border-blue-300 p-10 rounded-md">
        <p className="text-center text-2xl tracking-wider">login form </p>
        <form className="mt-5 flex flex-col gap-y-3" onSubmit={handleSubmit}>
          <label>
            <p>Email : </p>
            <input
              type="email"
              name="email"
              onChange={handleChange}
              value={formdata.email}
              placeholder="Enter email "
              className="w-full border border-blue-300
             focus:outline-blue-400 rounded-md text-center"
              required
            />
          </label>

          <label className="relative">
            <p>Password : </p>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              onChange={handleChange}
              value={formdata.password}
              placeholder="Enter password "
              className="w-full border border-blue-300
             focus:outline-blue-400 rounded-md text-center"
              required
            />
            <span
              onClick={() => {
                setShowPassword(!showPassword);
              }}
              className="absolute right-[10px] bottom-[5px] cursor-pointer"
            >
              {showPassword ? <IoMdEyeOff /> : <IoMdEye />}
            </span>
          </label>
          <button
            type="submit"
            className="bg-blue-500 text-white rounded-md 
            cursor-pointer hover:bg-blue-600 transition-all duration-200"
          >
            Login
          </button>
        </form>
        <div className="text-center mt-4">
          <span className="text-red-500">Not account ? </span>
          <Link to={"/signup"} className="text-blue-600">
            {" "}
            signup{" "}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
