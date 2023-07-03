import React from "react";
import Header from "../Header/Header";
import background from "../../assets/All Images/P3OLGJ1 copy 1.png";
import CategoryList from "./CategoryList/CategoryList";
import FeaturedJob from "./FeaturedJobs/FeaturedJob";
import { useLoaderData } from "react-router-dom";
const Home = () => {
  return (
    <div>
      <div className="bg-gray-100">
        <div className="my-container p-5 lg:p-0 lg:flex-row flex-col flex items-center justify-between">
          <div className="lg:w-[570px] space-y-2 lg:space-y-6">
            <h1 className=" lg:text-5xl text-3xl  text-gray-800 font-semibold leading-tight">
            Hey, Let's Code {" "}
              <span className="text-pink-500 ">The Career</span>
            </h1>
            <p className="text-gray-700">
            Think out the box and build your career . Get all information you need. Let's found the job. Fly on the sky.
                We need to re brand hope. The era of everything in our lives fitting neatly in a box is done. That world is over. We need hope—but we need a hope that is robust enough to speak to real life.
            </p>
            <button className='font-bold text-white p-2 rounded-md bg-pink-500'>Get Started</button>
          </div>
          <div>
          <img className=' mt-5 w-25 h-25' src="https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />
          </div>
        </div>
      </div>
      <div className="my-container p-3">
        <CategoryList />
        <FeaturedJob />
      </div>
    </div>
  );
};

export default Home;
