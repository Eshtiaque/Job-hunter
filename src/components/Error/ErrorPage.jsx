import React from "react";
import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const { error, status } = useRouteError();
  return (
    <section className="flex items-center h-screen p-16 bg-gray-100 text-gray-900">
      <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
      <div className=' mt-10 p-10 font-extrabold text-9xl text-pink-500 '>
            <h1 className="text-center">404</h1>
            <h3 className="text-center">Error</h3>
        </div>
          <Link
            to="/"
            className="text-center px-8 py-3 font-semibold rounded bg-pink-500 text-white">
            Back to homepage
          </Link>
        
      </div>
    </section>
  );
};

export default ErrorPage;
