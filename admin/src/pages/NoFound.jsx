import React from "react";
import { Link } from "react-router-dom";

const NoFound = () => {
  return (
    <section className="flex items-center h-full p-16 ">
      <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
        <div className="max-w-md text-center">
          <h2 className="mb-8 font-extrabold text-9xl">
            <span className="sr-only">Error</span>404
          </h2>
          <p className="text-2xl font-semibold md:text-3xl mb-5">
            Sorry, we couldn't find this page.
          </p>
          <Link
            to="/"
            className="px-8 py-4 my-6 font-semibold rounded "
          >
            Back to home
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NoFound;
