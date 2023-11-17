import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import toast from "react-hot-toast";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [formdata, setFormdata] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
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
      toast.error("password at least 6 characters long");
      return;
    }

    if(formdata.password !== formdata.confirmPassword){
      toast.error("password and confirm password do not match!");
      return;
    }

    console.log(formdata);
  };

  return (
    <div>
      <div className="w-11/12 max-w-[500px] mx-auto  mt-14 border border-blue-300 p-10 rounded-md">
        <p className="text-center text-2xl tracking-wider">signup form </p>
        <form className="mt-5 flex flex-col gap-y-3" onSubmit={handleSubmit}>
          <label>
            <p>Name : </p>
            <input
              type="text"
              name="name"
              onChange={handleChange}
              value={formdata.name}
              placeholder="Enter your name  "
              className="w-full border border-blue-300
             focus:outline-blue-400 rounded-md text-center"
              required
            />
          </label>

          <label>
            <p>Email : </p>
            <input
              type="email"
              name="email"
              onChange={handleChange}
              value={formdata.email}
              placeholder="Enter email  "
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
              placeholder="password"
              className="w-full border border-blue-300
             focus:outline-blue-400 rounded-md text-center"
              required
            />
            <span
              className="absolute right-[10px] bottom-[5px] cursor-pointer"
              onClick={() => {
                setShowPassword(!showPassword);
              }}
            >
              {showPassword ? <IoMdEyeOff /> : <IoMdEye />}
            </span>
          </label>

          <label className="relative">
            <p>Confirm password : </p>
            <input
              type={showConfirmPassword ? "text" : "password"}
              name="confirmPassword"
              onChange={handleChange}
              value={formdata.confirmPassword}
              placeholder="confirmPassword"
              className="w-full border border-blue-300
             focus:outline-blue-400 rounded-md text-center"
              required
            />
            <span
              onClick={() => {
                setShowConfirmPassword(!showConfirmPassword);
              }}
              className="absolute right-[10px] bottom-[5px] cursor-pointer"
            >
              {showConfirmPassword ? <IoMdEyeOff /> : <IoMdEye />}
            </span>
          </label>

          <button
            type="submit"
            className="bg-blue-500 text-white rounded-md 
            cursor-pointer hover:bg-blue-600 transition-all duration-200"
          >
            Signup
          </button>
        </form>

        <div className="text-center mt-4">
          <span className="text-red-500">Already account ? </span>
          <Link to={"/login"} className="text-blue-600">
            {" "}
            login{" "}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
