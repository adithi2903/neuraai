"use client";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import "./SignLang.css";

export default function SongRec() {
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
            AI SONG RECOMMENDER
          </h1>

          <p className="project-detail-description">
            The <strong>AI Song Recommender</strong> brings machine learning to your
            playlist — converting a Python-based model into a fully client-side web
            experience. The original recommender used <strong>Pandas</strong> and
            <strong> Scikit-learn</strong> to compare songs using cosine similarity
            based on their “musical DNA” (tempo, key, and acoustic features). This
            logic was re-implemented in <strong>JavaScript</strong> to enable
            instant, serverless recommendations within a responsive, modern UI.
          </p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <h2 className="project-subtitle">Libraries Used</h2>
            <ul className="library-list">
              <li>Pandas – for dataset preprocessing and feature extraction</li>
              <li>Scikit-learn – for similarity calculation and training</li>
              <li>NumPy – for numerical and vector operations</li>
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
            src="/src/assets/proj/song.mp4"
            controls
            autoPlay={false}
          />
        </motion.div>
      </div>
    </section>
  );
}
