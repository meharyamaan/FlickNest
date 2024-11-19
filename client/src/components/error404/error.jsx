import React from "react";
import ErrorImg from "./images/error404.jpg";

const Error = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800 px-4">
      <div className="text-center max-w-screen-lg mx-auto">
        <h1 className="text-8xl md:text-9xl font-bold text-blue-500">404</h1>
        <h2 className="text-3xl md:text-4xl font-semibold mt-4">
          Page Not Found
        </h2>
        <p className="text-lg mt-2 text-gray-600">
          Sorry, the page you are looking for does not exist.
        </p>
        <img
          src={ErrorImg}
          alt="404 Illustration"
          className="mt-6 w-80 md:w-96 lg:w-[500px] mx-auto"
        />
        <button
          onClick={() => (window.location.href = "/")}
          className="mt-6 px-6 py-3 bg-blue-500 text-white font-medium text-lg rounded-md hover:bg-blue-600 transition duration-200"
        >
          Go Back Home
        </button>
      </div>
    </div>
  );
};

export default Error;
