import React from "react";
import "./word.css";
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

function Word() {
  const [centered, setCentered] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const word = "dog";
  const bone = useRef(null);
  const inp = useRef(null);
  const navigate = useNavigate();

  const boneHandler = () => {
    setTimeout(() => setCentered(true), 100);
    setTimeout(() => (bone.current.style.display = "none"), 500);
    setTimeout(() => (inp.current.style.display = "block"), 500);
  };

  const handleChange = (e) => {
    const value = e.target.value.trim().toLowerCase();
    setInputValue(value);
    if (value === "dog") {
      setTimeout(() => alert("you won"), 300);
      navigate("/winner");
    }
  };
  return (
    <>
      <div className="word-container">
        <div style={{ display: "none" }} ref={inp} className="wordtext">
          <h1>Who are you?</h1>
          <p>Click the dog to submit</p>
          <input
            type="text"
            placeholder="word"
            value={inputValue}
            onChange={handleChange}
          />
        </div>
        <div className="emoji-container">
          <div
            role="button"
            ref={bone}
            className="bone"
            onClick={() => {
              boneHandler();
            }}
          >
            🦴​
          </div>
          <div
            className="dog"
            role="button"
            style={{
              position: "absolute",
              top: centered ? "50%" : "0%",
              left: centered ? "50%" : "0%",
              transform: centered ? "translate(-50%, -50%)" : "translate(0, 0)",
              transition: "all 0.5s ease-in-out",
              fontSize: "3rem",
            }}
          >
            🐶
          </div>
        </div>
      </div>
    </>
  );
}

export default Word;
