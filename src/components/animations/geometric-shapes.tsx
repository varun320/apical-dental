"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

interface FloatingShape {
  size: number;
  x: string;
  y: string;
  rotation: number;
  delay: number;
  type: "square" | "diamond" | "line" | "circle" | "cross";
}

const shapes: FloatingShape[] = [
  { size: 60, x: "8%", y: "15%", rotation: 45, delay: 0, type: "diamond" },
  { size: 40, x: "85%", y: "20%", rotation: 0, delay: 0.5, type: "square" },
  { size: 80, x: "75%", y: "65%", rotation: 15, delay: 1.0, type: "cross" },
  { size: 30, x: "15%", y: "70%", rotation: -20, delay: 1.5, type: "circle" },
  { size: 100, x: "50%", y: "85%", rotation: 30, delay: 0.3, type: "line" },
  { size: 45, x: "92%", y: "45%", rotation: -45, delay: 0.8, type: "diamond" },
  { size: 35, x: "5%", y: "45%", rotation: 60, delay: 1.2, type: "square" },
  { size: 55, x: "35%", y: "10%", rotation: -15, delay: 0.7, type: "line" },
];

function ShapeSVG({ type, size }: { type: FloatingShape["type"]; size: number }) {
  const stroke = "rgba(58, 58, 78, 0.3)";
  const strokeWidth = 1;

  switch (type) {
    case "square":
      return (
        <rect
          x={strokeWidth}
          y={strokeWidth}
          width={size - strokeWidth * 2}
          height={size - strokeWidth * 2}
          fill="none"
          stroke={stroke}
          strokeWidth={strokeWidth}
        />
      );
    case "diamond":
      return (
        <polygon
          points={`${size / 2},${strokeWidth} ${size - strokeWidth},${size / 2} ${size / 2},${size - strokeWidth} ${strokeWidth},${size / 2}`}
          fill="none"
          stroke={stroke}
          strokeWidth={strokeWidth}
        />
      );
    case "circle":
      return (
        <circle
          cx={size / 2}
          cy={size / 2}
          r={size / 2 - strokeWidth}
          fill="none"
          stroke={stroke}
          strokeWidth={strokeWidth}
        />
      );
    case "cross":
      return (
        <g stroke={stroke} strokeWidth={strokeWidth}>
          <line x1={size / 2} y1={strokeWidth} x2={size / 2} y2={size - strokeWidth} />
          <line x1={strokeWidth} y1={size / 2} x2={size - strokeWidth} y2={size / 2} />
        </g>
      );
    case "line":
      return (
        <line
          x1={strokeWidth}
          y1={size / 2}
          x2={size - strokeWidth}
          y2={size / 2}
          stroke={stroke}
          strokeWidth={strokeWidth}
        />
      );
  }
}

export function GeometricShapes() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const shapeEls = el.querySelectorAll(".geo-shape");

    const ctx = gsap.context(() => {
      shapeEls.forEach((shape, i) => {
        const s = shapes[i];

        // Initial entrance
        gsap.from(shape, {
          opacity: 0,
          scale: 0.5,
          duration: 1.2,
          delay: s.delay + 0.5,
          ease: "power2.out",
        });

        // Continuous float
        gsap.to(shape, {
          y: "+=20",
          rotation: `+=${s.rotation > 0 ? 8 : -8}`,
          duration: 4 + i * 0.5,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
          delay: s.delay,
        });
      });
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="pointer-events-none absolute inset-0 overflow-hidden">
      {shapes.map((shape, i) => (
        <div
          key={i}
          className="geo-shape absolute opacity-0"
          style={{
            left: shape.x,
            top: shape.y,
            transform: `rotate(${shape.rotation}deg)`,
          }}
        >
          <svg width={shape.size} height={shape.size} viewBox={`0 0 ${shape.size} ${shape.size}`}>
            <ShapeSVG type={shape.type} size={shape.size} />
          </svg>
        </div>
      ))}
    </div>
  );
}
