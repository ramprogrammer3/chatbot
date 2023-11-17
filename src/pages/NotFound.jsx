import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="w-screen h-[90vh] flex justify-center items-center">
      <div className="flex flex-col gap-y-4">
        <p className="text-3xl text-red-500 tracking-wider">404 </p>
        <h1 className="text-2xl tracking-wider"> page not found  </h1>
        <Link to={"/"} className="bg-blue-500 text-center rounded-md hover:bg-blue-600 
        transition-all duration-200"> Got to home page </Link>
      </div>

    </div>
  );
};

export default NotFound;
