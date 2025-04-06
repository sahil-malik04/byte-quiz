import React, { useEffect, useState } from "react";
import { getQuizzes } from "../../utils/quizData";
import Quizzes from "./Quizzes";
import { useNavigate } from "react-router-dom";

const Quiz = () => {
  const navigate = useNavigate();
  const [quizzes, setQuizzes] = useState([]);
  const [currentQuiz, setCurrentQuiz] = useState(null);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [correctAnswer, setCorrectAnswer] = useState("");

  const fetchQuizzes = async () => {
    const data = await getQuizzes();
    setQuizzes(data);
  };

  useEffect(() => {
    fetchQuizzes();
  }, []);

  if (!currentQuiz) {
    return <Quizzes quizzes={quizzes} setCurrentQuiz={setCurrentQuiz} />;
  }

  const handleAnswer = (answer) => {
    const correctAnswer = currentQuiz?.questions[questionIndex]?.correctAnswer;
    if (answer == correctAnswer) {
    } else {
      setCorrectAnswer(correctAnswer);
    }
  };

  const question = currentQuiz?.questions[questionIndex];
  const options = [...question.incorrectAnswers, question.correctAnswer].sort(
    () => Math.random()
  );

  return (
    <>
      <div className="text-center m-4 p-4">
        <h3 className="mb-8 text-lg">
          <strong> {question?.text}</strong>
        </h3>

        {options?.map((item) => (
          <div className="flex items-center justify-center mt-5">
            <button
              className={`p-2 w-50 ${
                correctAnswer ? "cursor-default" : "cursor-pointer"
              }  ${item === correctAnswer ? "bg-green-600" : "bg-purple-600"}`}
              onClick={() => handleAnswer(item)}
            >
              {item}
            </button>
            {item === correctAnswer && (
              <span className="ml-4 text-green-600 font-semibold">
                {" "}
                Correct Answer{" "}
              </span>
            )}
          </div>
        ))}

        {correctAnswer && (
          <button
            className="w-75 border border-gray-300 text-white mt-8"
            onClick={() => navigate("/")}
          >
            Go Back
          </button>
        )}
      </div>
    </>
  );
};

export default Quiz;
