import React from "react";
import { useNavigate } from "react-router-dom";

const BackBtn = () => {
  const navigate = useNavigate();
  return (
    <button
      className="w-75 border border-gray-300 text-white mt-4 d  cursor-pointer"
      onClick={() => navigate("/")}
    >
      Go Back
    </button>
  );
};

export default BackBtn;
