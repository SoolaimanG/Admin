import React from "react";
import { useNavigate } from "react-router-dom";

function ButtonBack() {
  const Navigate = useNavigate();

  return (
    <button
      onClick={() => {
        Navigate("/Employee");
      }}
      className="clicker"
    >
      Back
    </button>
  );
}

export default ButtonBack;
