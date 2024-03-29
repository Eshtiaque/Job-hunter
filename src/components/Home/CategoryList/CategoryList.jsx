import React from "react";
import { useLoaderData } from "react-router-dom";

const CategoryList = () => {
  const { categories } = useLoaderData();
  return (
    <div className="py-14">
      <h1 className="text-center font-semibold text-3xl text-gray-800">
        Job Category List
      </h1>
      <p className="text-center py-5 text-gray-700">
      Let's change the every single day and build your career
      </p>
      <div className="card-container grid-cols-2 grid lg:grid-cols-4 gap-3 font-semibold">
          <div className='text-left'>
                    <img className='w-25 h-20' src="https://img.icons8.com/nolan/256/laptop-settings.png" alt="" />
                    <h3>Software Developer</h3>
                    <p>400 Jobs Available</p>
                </div>
                <div className='text-left'>
                    <img className='w-25 h-20' src="https://img.icons8.com/external-inipagistudio-mixed-inipagistudio/256/external-cyber-web-programmer-inipagistudio-mixed-inipagistudio.png" alt="" />
                    <h3>Cyber Security</h3>
                    <p>555 Jobs Available</p>
                </div>
                <div className='text-left'>
                    <img className='w-25 h-20' src="https://img.icons8.com/color/256/slr-camera.png" alt="" />
                    <h3>Photographer</h3>
                    <p>250 Jobs Available</p>
                </div>
                <div className='text-left'>
                    <img className='w-25 h-20' src="https://img.icons8.com/external-ddara-lineal-color-ddara/256/external-web-developer-business-elements-ddara-lineal-color-ddara.png" alt="" />
                    <h3>Web Developer</h3>
                    <p>150 Jobs Available</p>
                </div>
      </div>
    </div>
  );
};

export default CategoryList;
