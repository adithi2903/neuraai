"use client";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import "./SignLang.css"; // reuses same elegant styles

export default function Aero() {
  const navigate = useNavigate();

  return (
    <section className="project-detail-section">
      {/* --- Go Back Icon --- */}
      <motion.button
        className="go-back-btn"
        onClick={() => navigate(-1)}
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <ArrowLeft size={22} />
        <span>Back</span>
      </motion.button>

      <div className="project-detail-container">
        {/* --- Project Info --- */}
        <motion.div
          className="project-info"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="project-detail-title gradient-text">AERO CURSOR</h1>

          <p className="project-detail-description">
            <strong>AERO CURSOR</strong> is a computer vision–based system that
            enables complete cursor control using hand gestures. It tracks the
            user’s hand via the system camera and maps the movements to control
            the cursor in real time. Different gestures trigger specific
            actions, like clicks or freezing the cursor, providing a
            touch-free, AI-driven interface.
          </p>

          <h2 className="project-subtitle">Gesture Controls</h2>
          <ul className="library-list">
            <li>
              <strong>Open Palm:</strong> Moves the cursor according to hand
              motion.
            </li>
            <li>
              <strong>Pinch (Index + Thumb):</strong> Performs click actions.
            </li>
            <li>
              <strong>Fist:</strong> Freezes the cursor at its current
              position.
            </li>
            <li>
              <strong>Thumbs Up:</strong> Plays a predefined video file in full
              screen.
            </li>
          </ul>

          <h2 className="project-subtitle">Cursor Control Game</h2>
          <p className="project-detail-description">
            To make interaction more engaging, AERO CURSOR includes a mini game
            called the <strong>Cursor Path Challenge</strong>. The user must
            navigate a randomly generated on-screen path from a start point to
            an end point within a time limit, using only hand gestures. The game
            adds a fun, interactive twist to computer vision–based control.
          </p>

          <h2 className="project-subtitle">Tools & Frameworks</h2>
          <ul className="library-list">
            <li>
              <strong>OpenCV:</strong> Handles camera feed, displays frames, and
              manages the game window.
            </li>
            <li>
              <strong>Mediapipe:</strong> Detects and tracks hand landmarks for
              gesture recognition.
            </li>
            <li>
              <strong>PyAutoGUI:</strong> Controls system mouse movement and
              clicks.
            </li>
            <li>
              <strong>Tkinter:</strong> Provides a lightweight GUI for launching
              the Path Game.
            </li>
            <li>
              <strong>NumPy, ffpyplayer, threading, random, time:</strong>{" "}
              Handle math, media playback, parallel execution, and timers.
            </li>
          </ul>

          <h2 className="project-subtitle">Overview</h2>
          <p className="project-detail-description">
            This project combines computer vision, AI hand tracking, and
            real-time system control to create an interactive and intuitive
            experience. By blending OpenCV, Mediapipe, and PyAutoGUI, it offers
            gesture-based control along with an integrated mini game—bridging AI
            technology and entertainment seamlessly.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
