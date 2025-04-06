import React from "react";

const Quizzes = ({ quizzes, setCurrentQuiz }) => {
  return (
    <div className="text-center">
      <div className="mb-8">
        <h1 className="text-2xl">Choose a Quiz</h1>
      </div>
      {quizzes?.length ? (
        quizzes?.map((item) => (
          <button
            key={item?.id}
            className="block border border-gray-200 p-2 m-6 ml-auto mr-auto cursor-pointer hover:bg-gray-600 w-75"
            onClick={() => setCurrentQuiz(item)}
          >
            {item?.title}
          </button>
        ))
      ) : (
        <p className="text-xl text-purple-600">Loading... </p>
      )}
    </div>
  );
};

export default Quizzes;
