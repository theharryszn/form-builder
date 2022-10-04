import React from "react";

const Question = ({ id, type, caption, options }) => {
  return (
    <div className='bg-indigo-50 p-4 rounded-md w-full'>
      <div className='p-4 font-medium text-xl'>{caption}</div>
      {type === "text" ? (
        <input
          type='text'
          className='p-4 bg-transparent outline-none'
          placeholder='Enter your answer'
        />
      ) : (
        <div className='p-4 flex flex-col space-y-4'>
          {options.map((option, i) => {
            return (
              <div key={i} className='flex items-center space-x-2'>
                <input
                  type={type === "checkbox" ? "checkbox" : "radio"}
                  name={type === "checkbox" ? option.toLowerCase() : id}
                  id={option.toLowerCase()}
                  className='accent-indigo-600'
                />
                <label htmlFor={id}>{option}</label>
              </div>
            );
          })}
        </div>
      )}
      {/*  */}

      {/* <div className='p-4 flex flex-col space-y-4'>
        <div className='flex items-center space-x-2'>
          <input
            type='radio'
            name='red'
            id='red'
            className='accent-indigo-600'
          />
          <label htmlFor='red'>Red</label>
        </div>
        <div className='flex items-center space-x-2'>
          <input
            type='radio'
            name='red'
            id='red'
            className='accent-indigo-600'
          />
          <label htmlFor='red'>Red</label>
        </div>
        <div className='flex items-center space-x-2'>
          <input
            type='radio'
            name='red'
            id='red'
            className='accent-indigo-600'
          />
          <label htmlFor='red'>Red</label>
        </div>
      </div> */}
    </div>
  );
};

export default Question;
