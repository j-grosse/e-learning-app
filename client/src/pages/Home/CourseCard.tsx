import React from 'react';

const CourseCard = ({ id, image, title, text }) => {
  return (
    <div className="flex flex-wrap bg-gray-200 shadow-lg">
      <div className="w-60">
        <div className="">
          className="w-full object-cover h-24 aspect-w-1 aspect-h-1 p-2"
          <a href={`/details/${id}`}>
            <img
              className="w-full object-cover h-24 aspect-w-1 aspect-h-1 p-2"
              src={image}
              alt="image"
            />
          </a>
        </div>
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{title}</div>
          <p className="min-h-40 overflow-hidden text-gray-700 text-base">
            {text}
          </p>
        </div>
        <div className="flex justify-end  px-6 pt-4 pb-2">
          <button className="bg-gray-100 rounded-md border-1 px-3 py-1 text-blue-500 hover:text-blue-300">
            <a href={`/details/${id}`}>details</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
