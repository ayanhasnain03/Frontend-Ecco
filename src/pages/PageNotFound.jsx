import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold text-red-600 mb-4">404</h1>
      <p className="text-lg  mb-8">Page Not Found</p>
   <Link to="/">
   <button className="bg-red-600  hover:bg-red-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
        Go Home
      </button>
   </Link>
    </div>
  );
};

export default PageNotFound;
