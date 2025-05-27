import React from "react";
import "./reward.css";
import { useEffect, useRef } from "react";
import mySong from "./rewardcut.mp3";

function Reward() {
  const containerRef = useRef(null);
  const directionRef = useRef(1);
  const animationRef = useRef(null);
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  }, []);

  useEffect(() => {
    const scroll = () => {
      const el = containerRef.current;
      if (!el) return;

      el.scrollTop += directionRef.current * 1; // Adjust speed here

      // Reached bottom
      if (el.scrollTop + el.clientHeight >= el.scrollHeight - 1) {
        directionRef.current = -1;
      }

      // Reached top
      if (el.scrollTop <= 0) {
        directionRef.current = 1;
      }

      animationRef.current = requestAnimationFrame(scroll);
    };

    animationRef.current = requestAnimationFrame(scroll);

    return () => {
      cancelAnimationFrame(animationRef.current);
    };
  }, []);
  return (
    <>
      <audio src={mySong} ref={audioRef} autoPlay hidden />
      <div
        ref={containerRef}
        style={{
          height: "96vh",
          overflowY: "hidden",
          border: "2px solid #444",
          padding: "10px",
        }}
        className="reward-container"
      ></div>
    </>
  );
}

export default Reward;
