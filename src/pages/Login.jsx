import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
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

  const handleSubmit = (e)=>{
    e.preventDefault();
    console.log(formdata)
  }

  return (
    <div>
      <div className="w-11/12 max-w-[500px] mx-auto  mt-14 border border-blue-300 p-10 rounded-md">
        <p className="text-center text-2xl tracking-wider">login page </p>
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

          <label>
            <p>Password : </p>
            <input
              type="password"
              name="password"
              onChange={handleChange}
              value={formdata.password}
              placeholder="Enter password "
              className="w-full border border-blue-300
             focus:outline-blue-400 rounded-md text-center"
              required
            />
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
