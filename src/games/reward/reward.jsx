import React from "react";
import "./reward.css";
import { useEffect, useRef, useState } from "react";
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
      >
        <h1>IP : 197.879.198.1 </h1>
        <h1>Location : Atrantica </h1>
        <h1>Zip : 42069 </h1>
        <h1>N : 43.7262 </h1>
        <h1>W : 12.4818</h1>
        <h1>SS Number : 6079198516176524</h1>
        <h1>ipv6 : 2001:db8:3333:4444:5555:6666:7777:8888</h1>
        <h1>upnp : enabled </h1>
        <h1>dmz : 10.11.12.45</h1>
        <h1>mac : 5A:38:3e:b9:99</h1>
        <h1>dns : 8.8.8.8</h1>
        <h1>alt dns : 1.1.1.0</h1>
        <h1>ISP : SuperServer</h1>
        <h1>User Agent: Chrome/122.0.9.0</h1>
        <h1>Device: Desktop</h1>
        <h1>Architecture: 64 bits</h1>
        <h1>Browser: Chrome Generic</h1>
        <h1>Memory: 32684MB RAM</h1>
        <h1> Windows Dir: C:\WINDOWS</h1>
        <h1> DirectX Version: DirectX 12</h1>
        <h1>Native Mode: 1920 x 1080(p)</h1>
        <h1>
          Processor: Inter i7 14800U with GTX 1850 Mobile (16 CPUs), ~8.9GHz
          ~16gb vram
        </h1>
      </div>
    </>
  );
}

export default Reward;
