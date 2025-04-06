import React from "react";

const Quizzes = ({ quizzes, setCurrentQuiz }) => {
  return (
    <div className="text-center">
      <div className="mb-8">
        <h1>Choose a Quiz</h1>
      </div>
      {quizzes?.map((item) => (
        <button
          key={item?.id}
          className="block border border-gray-200 p-2 m-6 ml-auto mr-auto cursor-pointer hover:bg-gray-600 w-75"
          onClick={() => setCurrentQuiz(item)}
        >
          {item?.title}
        </button>
      ))}
    </div>
  );
};

export default Quizzes;
