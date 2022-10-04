import { FloppyDisk, Plus, X } from "phosphor-react";
import React, { useCallback, useState } from "react";
import { Link } from "react-router-dom";
import Modal from "../components/Modal";
import Question from "../components/Question";

const CreateForm = () => {
  const [questions, setQuestions] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [newQuestion, setNewQuestion] = useState({
    caption: "",
    type: "text",
    options: [],
  });

  const handleSubmit = useCallback(() => {
    setQuestions([...questions, newQuestion]);
    setIsModalOpen(false);
    setNewQuestion({
      caption: "",
      type: "",
      options: [],
    });
  }, [newQuestion, questions]);
  return (
    <main>
      <div className='max-w-[90rem] mx-auto p-10 flex flex-col items-start space-y-10'>
        <div className='flex items-center justify-between w-full'>
          <div className='font-medium text-xl'>Create a new form</div>
          <Link
            to='/create-form'
            className='p-3 px-4 bg-indigo-600 rounded-md flex items-center space-x-4 text-white font-medium'
          >
            <FloppyDisk weight='bold'></FloppyDisk>
            <span>Save</span>
          </Link>
        </div>
        <p>
          To create a new form, add a title and click{" "}
          <span className='font-medium'>Add Questions</span> to add questions to
          your form . Once saved a url will be generated that can be shared.
        </p>
        <div>
          <input
            type='text'
            placeholder='Title - Click to Edit'
            className='text-3xl py-4 outline-none'
          />
        </div>
        <div className='flex flex-col space-y-4 w-full'>
          {questions.map((v, i) => {
            return <Question key={i} {...v} />;
          })}
        </div>
        <div>
          <div
            onClick={() => setIsModalOpen(true)}
            className='p-3 cursor-pointer px-4 bg-indigo-600 rounded-md flex items-center space-x-4 text-white font-medium'
          >
            <Plus weight='bold'></Plus>
            <span>Insert Question</span>
          </div>
        </div>
      </div>
      {isModalOpen && (
        <Modal>
          <div
            onSubmit={handleSubmit}
            className='flex flex-col space-y-4 w-full'
          >
            <div className='flex items-center justify-between mb-6'>
              <h3 className='font-medium text-lg'>Add Question</h3>
              <span
                className='p-2 bg-indigo-50 rounded-full cursor-pointer'
                onClick={() => setIsModalOpen(false)}
              >
                <X />
              </span>
            </div>
            <textarea
              type='text'
              placeholder='Caption'
              className='p-4 bg-indigo-50 rounded-md min-w-[24rem] outline-indigo-400 resize-y w-full'
              onChange={(e) =>
                setNewQuestion({ ...newQuestion, caption: e.target.value })
              }
            ></textarea>
            <div className='flex flex-col space-y-3 '>
              <label
                htmlFor='type'
                className='text-sm font-medium text-indigo-900'
              >
                Question Type
              </label>
              <select
                onChange={(e) => {
                  setNewQuestion({ ...newQuestion, type: e.target.value });
                }}
                name='type'
                id='type'
                className='p-4 bg-indigo-50 rounded-md min-w-[24rem] outline-indigo-400 w-full'
              >
                <option value='text'>Text</option>
                <option value='radio'>Multi-Choice</option>
                <option value='checkbox'>Checkbox</option>
              </select>
              <div>
                <ResolveType
                  newQuestion={newQuestion}
                  setNewQuestion={setNewQuestion}
                />
              </div>
              <button
                onClick={handleSubmit}
                className='p-4 bg-indigo-600 text-white font-medium rounded-md min-w-[24rem] outline-indigo-400'
              >
                Add
              </button>
            </div>
          </div>
        </Modal>
      )}
    </main>
  );
};

const ResolveType = ({ newQuestion, setNewQuestion }) => {
  if (newQuestion.type === "radio" || newQuestion.type === "checkbox") {
    return (
      <div className='flex flex-col space-y-3 '>
        <label htmlFor='type' className='text-sm font-medium text-indigo-900'>
          Options
        </label>
        <div className='p-4 bg-indigo-50 rounded-md flex items-center gap-2 flex-wrap'>
          {newQuestion.options.map((option, i) => {
            return (
              <span key={i} className='p-1 bg-indigo-100 rounded-md'>
                {option}
              </span>
            );
          })}
          <input
            type='text'
            onKeyDown={(e) => {
              if (e.target.value.trim().length > 0) {
                if (e.key === "Enter") {
                  e.preventDefault();
                  setNewQuestion({
                    ...newQuestion,
                    options: [...newQuestion.options, e.target.value],
                  });
                  e.target.value = "";
                }
              }
              if (e.target.value === "") {
                if (e.key === "Backspace") {
                  newQuestion.options.pop();
                  setNewQuestion({
                    ...newQuestion,
                    options: [...newQuestion.options],
                  });
                }
              }
            }}
            className='bg-transparent outline-none'
            placeholder={`Option ${newQuestion.options.length + 1}`}
          />
        </div>
        <p className='text-sm p-2 text-indigo-900 font-medium'>
          Click enter to add
        </p>
      </div>
    );
  } else {
    return null;
  }
};

export default CreateForm;
