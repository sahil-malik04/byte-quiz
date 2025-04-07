import React, { useEffect, useState } from "react";
import { getMoreQuizzes, getQuizzes } from "../../utils/quizData";
import Quizzes from "../../components/quiz/Quizzes";
import FinishQuiz from "../../components/quiz/FinishQuiz";
import BackBtn from "../../components/BackBtn";

const Quiz = () => {
  const [quizzes, setQuizzes] = useState([]);
  const [currentQuiz, setCurrentQuiz] = useState(null);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [correctAnswer, setCorrectAnswer] = useState("");
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const fetchQuizzes = async () => {
    const data = await getQuizzes();
    setQuizzes(data);
  };

  useEffect(() => {
    fetchQuizzes();
  }, []);

  const loadMoreQuizzes = async () => {
    const data = await getMoreQuizzes();
    setQuizzes((prev) => [...prev, ...data]);
  };

  if (!currentQuiz) {
    return (
      <Quizzes
        quizzes={quizzes}
        setCurrentQuiz={setCurrentQuiz}
        loadMoreQuizzes={loadMoreQuizzes}
      />
    );
  }

  const handleAnswer = (answer) => {
    if (correctAnswer) return;
    const getCorrectAnswer =
      currentQuiz?.questions[questionIndex]?.correctAnswer;
    if (answer == getCorrectAnswer) {
      setScore((prev) => prev + 1);
      if (questionIndex + 1 < currentQuiz?.questions?.length) {
        setQuestionIndex((prev) => prev + 1);
      } else {
        setIsFinished(true);
      }
    } else {
      setCorrectAnswer(getCorrectAnswer);
    }
  };

  if (isFinished) {
    return <FinishQuiz score={score} currentQuiz={currentQuiz} />;
  }

  const question = currentQuiz?.questions[questionIndex];
  const options = [...question.incorrectAnswers, question.correctAnswer].sort(
    () => Math.random() - 0.5
  );

  return (
    <>
      <div className="text-center m-4 p-4">
        <h5 className="text-right text-xl text-yellow-400 font-semibold">
          {" "}
          {currentQuiz?.title}
        </h5>
        <h3 className="mb-8 text-lg">
          <strong> {question?.text}</strong>
        </h3>

        {options?.map((item) => (
          <div className="flex items-center justify-center mt-5" key={item}>
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
          <div className="mt-8">
            <h4 className="font-semibold"> Your final Score is: {score}</h4>
            <BackBtn />
          </div>
        )}
      </div>
    </>
  );
};

export default Quiz;
