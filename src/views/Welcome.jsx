import { Plus } from "phosphor-react";
import React from "react";
import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <main>
      <div className='max-w-[90rem] mx-auto p-10 flex flex-col items-start space-y-10'>
        <div className='flex items-center justify-between w-full'>
          <div className='font-medium text-xl'>Welcome, Harry</div>
          <Link
            to='/create-form'
            className='p-3 px-4 bg-indigo-600 rounded-md flex items-center space-x-4 text-white font-medium'
          >
            <Plus weight='bold'></Plus>
            <span>Create New Form</span>
          </Link>
        </div>
        <div className='w-full flex items-center justify-center min-h-[24rem]'>
          <p className='font-medium opacity-50'>You currently have no forms</p>
        </div>
      </div>
    </main>
  );
};

export default Welcome;
