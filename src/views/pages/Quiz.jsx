import React, { useEffect, useState } from "react";
import { getQuizzes } from "../../utils/quizData";
import Quizzes from "./Quizzes";

const Quiz = () => {
  const [quizzes, setQuizzes] = useState([]);
  const [currentQuiz, setCurrentQuiz] = useState(null);

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

  return (
    <>
      <div>Quizzes</div>
    </>
  );
};

export default Quiz;
