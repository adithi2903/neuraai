"use client";

import React, { useEffect, useState } from "react";
import e1 from "../assets/events/e1.jpeg";
import e2 from "../assets/events/e2.jpeg";
import e3 from "../assets/events/e3.jpeg";
import e4 from "../assets/events/e4.jpeg";
import e5 from "../assets/events/e5.jpeg";
import e6 from "../assets/events/e6.jpeg";
import e7 from "../assets/events/e7.jpeg";

const eventImages = [e1, e2, e3, e4, e5, e6, e7];

const GAP_PX = 8; 
const MAX_IMG_SIZE = 420; // ⬅️ increased from 320 to 420

const Arrow = ({ dir = "left" }: { dir?: "left" | "right" }) => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    aria-hidden
    style={{ display: "block" }}
  >
    {dir === "left" ? (
      <path
        d="M15 18l-6-6 6-6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ) : (
      <path
        d="M9 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    )}
  </svg>
);

const EventSlideshow: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(3);

  // responsive: 1 on small, 2 on medium, 3 on large screens
  useEffect(() => {
    const update = () => {
      if (window.innerWidth < 640) setVisible(1);
      else if (window.innerWidth < 1024) setVisible(2);
      else setVisible(3);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const slideWidthPercent = 100 / visible;
  const maxIndex = Math.max(0, eventImages.length - visible);

  const prev = () => setIndex((i) => Math.max(0, i - 1));
  const next = () => setIndex((i) => Math.min(maxIndex, i + 1));

  return (
    <section
      aria-label="Past events"
      style={{
        width: "100%",
        padding: "40px 16px",
        boxSizing: "border-box",
        textAlign: "center",
      }}
    >
      <h2
        style={{
          fontSize: "3rem",
          margin: "0 0 24px",
          color: "#FFF",
          fontWeight: 700,
          fontFamily: '"Orbitron", sans-serif',
          letterSpacing: "1px",
        }}
      >
        Our Past Events
      </h2>

      <div
        style={{
          position: "relative",
          maxWidth: "1400px",
          margin: "0 auto",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* Track */}
        <div
          style={{
            display: "flex",
            gap: `${GAP_PX}px`,
            width: `${eventImages.length * slideWidthPercent}%`,
            transform: `translateX(-${index * slideWidthPercent}%)`,
            transition: "transform 420ms cubic-bezier(.2,.9,.2,1)",
          }}
        >
          {eventImages.map((img, i) => (
            <div
              key={i}
              style={{
                flex: `0 0 ${slideWidthPercent}%`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                src={img}
                alt={`Event ${i + 1}`}
                style={{
                  width: "100%",
                  maxWidth: `${MAX_IMG_SIZE}px`,
                  aspectRatio: "1/1",
                  objectFit: "cover",
                  borderRadius: 14,
                  border: "3px solid rgba(255,255,255,0.9)",
                  boxShadow: "0 10px 30px rgba(2,6,23,0.16)",
                  outline: "1px solid rgba(0,0,0,0.06)",
                }}
              />
            </div>
          ))}
        </div>

        {/* Prev button */}
        <button
          onClick={prev}
          disabled={index === 0}
          aria-label="Previous"
          style={{
            position: "absolute",
            left: 8,
            top: "50%",
            transform: "translateY(-50%)",
            height: 46,
            width: 46,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "50%",
            border: "none",
            background: index === 0 ? "rgba(0,0,0,0.12)" : "rgba(0,0,0,0.6)",
            color: "#fff",
            cursor: index === 0 ? "not-allowed" : "pointer",
            boxShadow: "0 6px 18px rgba(2,6,23,0.12)",
          }}
        >
          <Arrow dir="left" />
        </button>

        {/* Next button */}
        <button
          onClick={next}
          disabled={index >= maxIndex}
          aria-label="Next"
          style={{
            position: "absolute",
            right: 8,
            top: "50%",
            transform: "translateY(-50%)",
            height: 46,
            width: 46,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "50%",
            border: "none",
            background:
              index >= maxIndex ? "rgba(0,0,0,0.12)" : "rgba(0,0,0,0.6)",
            color: "#fff",
            cursor: index >= maxIndex ? "not-allowed" : "pointer",
            boxShadow: "0 6px 18px rgba(2,6,23,0.12)",
          }}
        >
          <Arrow dir="right" />
        </button>
      </div>
    </section>
  );
};

export default EventSlideshow;
