import React, { useEffect, useRef } from "react";

const AutoScrollComponent = () => {
  const containerRef = useRef(null);
  const directionRef = useRef(1); // 1 = down, -1 = up
  const animationRef = useRef(null);

  useEffect(() => {
    const scroll = () => {
      const el = containerRef.current;
      if (!el) return;

      el.scrollTop += directionRef.current;

      // When reaching bottom, scroll up
      if (el.scrollTop + el.clientHeight >= el.scrollHeight) {
        directionRef.current = -1;
      }

      // When reaching top, scroll down
      if (el.scrollTop <= 0) {
        directionRef.current = 1;
      }

      animationRef.current = requestAnimationFrame(scroll);
    };

    animationRef.current = requestAnimationFrame(scroll);

    // Cleanup on unmount
    return () => {
      cancelAnimationFrame(animationRef.current);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        height: "200px",
        overflowY: "auto",
        border: "1px solid #000",
        padding: "10px",
        fontFamily: "sans-serif",
      }}
    >
      {Array.from({ length: 50 }, (_, i) => (
        <p key={i}>Line {i + 1}</p>
      ))}
    </div>
  );
};

export default AutoScrollComponent;
