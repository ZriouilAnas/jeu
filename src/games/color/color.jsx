import { useState, useRef } from "react";
import "./color.css";
import { useNavigate } from "react-router-dom";
function Color() {
  const [picked_colors, setPicked_color] = useState([]);
  const correct_colors = ["red", "blue", "green"];
  const bgRef = useRef(null);
  const lose = useRef(null);
  const navigate = useNavigate();

  const checkColor = (picked_colors, correct_colors) => {
    if (picked_colors.every((val, index) => val === correct_colors[index])) {
      bgRef.current.style.backgroundColor = "lightgreen";
      lose.current.style.display = "none";
      alert("you won");
      navigate("/word");
    } else {
      bgRef.current.style.backgroundColor = "Crimson";
      alert("you lose");
      resetColors();
      lose.current.style.display = "block";
    }
  };

  const addColor = (color) => {
    console.log(picked_colors.length);
    if (picked_colors.length < 3) {
      setPicked_color((prev) => [...prev, color]);
    } else {
      alert("Maximum of 3 items allowed");
    }
  };

  const resetColors = () => {
    setPicked_color([]);
  };

  return (
    <>
      <div className="color-container" ref={bgRef}>
        {picked_colors.map((color, index) => (
          <div
            key={index}
            role="presentation"
            style={{
              backgroundColor: color,
              width: "100px",
              height: "100px",
              borderRadius: "8px",
              border: "1px solid #ccc",
            }}
          />
        ))}
        <div className="button-container">
          <button onClick={() => addColor("red")}>Add Red</button>
          <button onClick={() => addColor("green")}>Add Green</button>
          <button onClick={() => addColor("blue")}>Add Blue</button>
          <button onClick={resetColors} style={{ marginLeft: "10px" }}>
            Reset
          </button>
          <button
            onClick={() => checkColor(picked_colors, correct_colors)}
            style={{ marginLeft: "10px" }}
          >
            CHECK
          </button>
        </div>
        <div style={{ display: "none" }} ref={lose}>
          Try Again Not_Please -_- just CLICK THE BUTTONS 👆🏻​ UwU its no hard no
          pressure
        </div>
      </div>
    </>
  );
}

export default Color;
