import React, { useState, useRef } from "react";

import "./case.css";
import { useNavigate } from "react-router-dom";

const Case = () => {
  const [inputValue, setInputValue] = useState("");
  const [isMatch, setIsMatch] = useState(false);
  const alertShown = useRef(false);
  const navigate = useNavigate();

  const secret = 1234;

  const handleChange = (e) => {
    const value = e.target.value.trim();
    if (/^\d{0,4}$/.test(value)) {
      setInputValue(value);
      alertShown.current = false;
    } else {
      setInputValue(value.replace(/\D/g, "").slice(0, 4));
    }
  };

  const checkSecret = () => {
    if (alertShown.current) return;
    alertShown.current = true;

    if (parseInt(inputValue) === secret) {
      setIsMatch(true);
      alert("You won!");
      navigate("/color");
    } else if (inputValue.toString().length !== 4) {
      setIsMatch(false);
      alert("Please enter a 4-digit code.");
    } else {
      alert(`❌ You lose. Input: ${inputValue}, Secret: ${secret}`);
    }
  };

  return (
    <div className="chest-container">
      <input
        className="chest-input"
        type="number"
        value={inputValue}
        onChange={handleChange}
        placeholder="Type the secret..."
        maxLength={4}
        inputMode="numeric"
        pattern="\d*"
      />
      <div className="chest-lid"></div>
      <div className="chest"></div>
      <p>{isMatch ? "✅ Match!" : "❌ No match"}</p>
      <button className="checkSecret" onClick={checkSecret}>
        CLICK ME
      </button>
    </div>
  );
};

export default Case;
