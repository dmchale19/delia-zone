"use client";
import React, { useMemo } from "react";


const ROWS = 25; 
const COLS = 28;

function Tile({ r, c }) {
  const edgeT = r === 0 ? " border-t" : "";
  const edgeL = c === 0 ? " border-l" : "";

  const colors = ["#ff375f", "#ffd60a", "#0dd3ff", "#7cfc00", "#ff8a00"]; // pink, yellow, cyan, lime, orange
  const color = colors[(r * 31 + c) % colors.length];
  const grad_color = `radial-gradient(ellipse, ${color}, #ffffff)`;

  const handleEnter = (e) => {
    e.currentTarget.style.backgroundImage = grad_color;
  };
  const handleLeave = (e) => {
    e.currentTarget.style.backgroundImage = "none";
  };

  return (
    <div
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      className={
        "border-r-2 border-b-1 border-black/90 transition-colors duration-75" +
        edgeT +
        edgeL
      }
    />
  );
}

export default function PerspectiveGridPrototype() {
  const tiles = useMemo(() => {
    const t = [];
    for (let r = 0; r < ROWS; r++) {
      for (let c = 0; c < COLS; c++) {
        t.push(<Tile key={`${r}-${c}`} r={r} c={c} />);
      }
    }
    return t;
  }, []);

  return (
    <div className="min-h-screen w-full flex flex-col bg-white">
      {/* Top half: whitespace */}
      
      <div className="flex-1" />
      <h1 className="text-center text-9xl text-black font-your-adobe"> Delia McHale </h1>
      {/* Bottom half: perspective floor */}
      
      
      
      <div className="relative h-[45vh] flex items-end justify-center overflow-hidden p-6">
        
        <div className="w-[min(100%,1500px)] h-full [perspective-origin:10%_0%]">
         
          <div
            className={
              "w-full h-full grid origin-top [transform-style:preserve-3d] " +
              // Use perspective() directly in the transform for stronger foreshortening
              "[transform:perspective(300px)_rotateX(75deg)] " +
              "[image-rendering:crisp-edges]"
            }
            style={{
              gridTemplateColumns: `repeat(${COLS}, 1fr)`,
              gridTemplateRows: `repeat(${ROWS}, 1fr)`,
            }}
          >
            {tiles}
          </div>
        </div>
      </div>
    </div>
  );
}
