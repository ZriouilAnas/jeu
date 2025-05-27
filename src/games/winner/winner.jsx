import React from "react";
import "./winner.css";
import { useNavigate } from "react-router-dom";
function Winner() {
  const navigate = useNavigate();
  return (
    <>
      <div className="winner-container">
        <h1>Who is a good boy</h1>
        <h3>whoof</h3>
        <h2>Yes you are!!</h2>
        <h4>You have won</h4>
        <button
          onClick={() => {
            navigate("/reward");
          }}
        >
          Click to cliam you reward
        </button>
      </div>
    </>
  );
}

export default Winner;
