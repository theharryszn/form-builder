import React, { useState } from "react";
import Question from "../components/Question";

const Form = () => {
  const [form, formData] = useState({});

  return (
    <main>
      <div className='max-w-[90rem] mx-auto p-10 flex flex-col items-start space-y-10'>
        <div className='flex items-center justify-between w-full'>
          <div className='font-medium text-xl'>text-3xl</div>
        </div>
        <div className='flex flex-col space-y-4 w-full'>
          {form.questions.map((v, i) => {
            return <Question key={i} {...v} />;
          })}
        </div>
        <div>
          <div className='p-3 cursor-pointer px-4 bg-indigo-600 rounded-md flex items-center space-x-4 text-white font-medium'>
            <span>Submit</span>
          </div>
        </div>
      </div>
    </main>
  );
};
export default Form;
