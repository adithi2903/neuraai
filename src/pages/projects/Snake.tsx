"use client";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import "./SignLang.css";

export default function Snake() {
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
        {/* --- LEFT SIDE (INFO) --- */}
        <motion.div
          className="project-info"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="project-detail-title gradient-text">
            GESTURE CONTROL GAME
          </h1>

          <p className="project-detail-description">
            The <strong>Gesture Control Game</strong> uses computer vision to let
            players control gameplay entirely through hand movements — no keyboard
            or controller required! Built using <strong>OpenCV</strong> and{" "}
            <strong>Mediapipe</strong>, the camera tracks hand landmarks in
            real-time, translating your gestures into in-game actions. The first
            level challenges you to guide your hand toward donuts while avoiding
            snakes, and the second level puts you in control of a{" "}
            <strong>spaceship</strong> navigating through moving obstacles.
          </p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <h2 className="project-subtitle">Libraries Used</h2>
            <ul className="library-list">
              <li>OpenCV – for camera input and frame processing</li>
              <li>Mediapipe – for real-time hand tracking and gesture detection</li>
              <li>NumPy – for mathematical and spatial computations</li>
              <li>Pygame – for rendering visuals and managing game mechanics</li>
              <li>Random & Math – for obstacle generation and movement logic</li>
            </ul>
          </motion.div>
        </motion.div>

        {/* --- RIGHT SIDE (VIDEO) --- */}
        <motion.div
          className="project-demo"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <h2>Demo Video</h2>
          <video
            className="project-video"
            src="/assets/proj/snake.mp4"
            controls
            autoPlay={false}
          />
        </motion.div>
      </div>
    </section>
  );
}
