import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <h1 className="text-6xl font-bold text-red-600 mb-4">404</h1>
      <h2 className="text-2xl text-gray-800 mb-6">Oops! Page not found.</h2>
      <p className="text-gray-600 mb-8">
        The page you are looking for doesn't exist or another error occurred.
      </p>
      <Link
        to="/"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-400"
      >
        Go to Home
      </Link>
    </div>
  );
};

export default ErrorPage;
