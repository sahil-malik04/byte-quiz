import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="text-center p-4">
      <h2 className=" font-semibold text-xl mb-2"> Quiz Application</h2>
      <p>
        We've got few quizzes you love to binge! Come on in and hunker down for
        the long haul.
      </p>
      <button
        className="bg-blue-400 p-2 w-28 mt-4 font-semibold cursor-pointer"
        onClick={() => navigate("/quiz")}
      >
        {" "}
        Start{" "}
      </button>
    </div>
  );
};

export default Home;
