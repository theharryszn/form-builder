import axios from "axios";
import { Plus } from "phosphor-react";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Welcome = () => {
  const [forms, setForms] = useState([]);
  const navigate = useNavigate();

  React.useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      axios
        .get("https://demo-form12.herokuapp.com/forms", {
          headers: {
            authorization: `bearer ${token}`,
          },
        })
        .then((res) => {
          if (res.data.success === true) {
            setForms(res.data.data);
          }
        });
    } else {
      navigate("/", {
        replace: true,
      });
    }
  }, [navigate]);

  return (
    <main>
      <div className='max-w-[90rem] mx-auto p-10 flex flex-col items-start space-y-10'>
        <div className='flex items-center justify-between w-full'>
          <div className='font-medium text-xl'>Welcome</div>
          <Link
            to='/create-form'
            className='p-3 px-4 bg-indigo-600 rounded-md flex items-center space-x-4 text-white font-medium'
          >
            <Plus weight='bold'></Plus>
            <span>Create New Form</span>
          </Link>
        </div>
        {forms.map((form, i) => (
          <Link
            key={i}
            to={`/form/${form.slug}`}
            className='bg-indigo-50 rounded-md p-4'
          >
            <div>{form.name}</div>
          </Link>
        ))}
        {forms.length === 0 && (
          <div className='w-full flex items-center justify-center min-h-[24rem]'>
            <p className='font-medium opacity-50'>
              You currently have no forms
            </p>
          </div>
        )}
      </div>
    </main>
  );
};

export default Welcome;
