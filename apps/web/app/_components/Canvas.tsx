"use client";

import { useEffect, useRef, useState } from "react";
import { Stage, Layer, Rect, Text } from "react-konva";

export default function Canvas() {
  const stageRef = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    // Set initial dimensions
    const resizeCanvas = () => {
      setDimensions({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <Stage
      ref={stageRef}
      width={dimensions.width}
      height={dimensions.height}
      className="bg-gray-100"
    >
      <Layer>
        {/* Example: Blue rectangle */}
        <Rect x={100} y={100} width={100} height={100} fill="blue" draggable />

        {/* Example: Text element */}
        <Text x={250} y={100} text="Hello!" fontSize={30} draggable />
      </Layer>
    </Stage>
  );
}
