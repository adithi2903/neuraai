"use client";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import "./SignLang.css";

export default function SignLang() {
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
          <h1 className="project-detail-title">SIGN LANGUAGE DETECTION</h1>

          <p className="project-detail-description">
            The <strong>American Sign Language Detection</strong> project aims to bridge
            communication gaps between the hearing and speech-impaired community
            and the general population. Using advanced computer vision and
            machine learning, it recognizes real-time hand gestures representing
            ASL letters or words and converts them into readable text or audible
            speech. This promotes inclusivity and accessibility through a smooth
            and interactive interface.
          </p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <h2 className="project-subtitle">Libraries Used</h2>
            <ul className="library-list">
              <li>OpenCV – for image processing and hand gesture tracking</li>
              <li>Mediapipe – for hand landmark detection and real-time tracking</li>
              <li>Scikit-learn – for gesture classification and model training</li>
              <li>Matplotlib – for visualization and performance analysis</li>
            </ul>
          </motion.div>
        </motion.div>

        <motion.div
          className="project-demo"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <h2>Demo Video</h2>
          <video
            className="project-video"
            src="/assets/proj/sign.mp4"
            controls
            autoPlay={false}
          />
        </motion.div>
      </div>
    </section>
  );
}
