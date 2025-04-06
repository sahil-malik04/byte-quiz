import React from "react";
import BackBtn from "../BackBtn";

const FinishQuiz = ({ score, currentQuiz }) => {
  return (
    <div className="text-center mt-4">
      <h2>Quiz Finished!</h2>
      <h3 className="text-3xl text-green-500 m-4"> Congratulations!!!</h3>
      <p>
        Score: {score} / {currentQuiz.questions.length}
      </p>
      <BackBtn />
    </div>
  );
};

export default FinishQuiz;
