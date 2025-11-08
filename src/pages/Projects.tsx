"use client";
import { motion } from "framer-motion";
import "./Projects.css";

type Project = {
  title: string;
  description: string;
  tech: string[];
  link?: string;
};

const projects: Project[] = [
  {
    title: "Sign Language Detection",
    description:
      "A real-time system that interprets sign language gestures using computer vision and machine learning models.",
    tech: ["OpenCV", "Mediapipe", "Scikit-learn", "Matplotlib"],
    link: "/projects/SignLang",
  },
  {
    title: "AI Song Recommender",
    description:
      "A personalized music recommendation system that analyzes emotion and user preferences to suggest suitable tracks.",
    tech: ["Python", "TensorFlow", "Flask"],
    link: "/projects/SongRec",
  },
  {
    title: "AERO CURSOR",
    description:
      "A computer vision–based system that uses hand gestures to control the mouse cursor and play an interactive path-following mini-game using real-time camera tracking.",
    tech: ["Python", "OpenCV", "Mediapipe", "Tkinter", "PyAutoGUI"],
    link: "/projects/Aero",
  },  
];

export default function Projects() {
  return (
    <section className="projects-section">
      <div className="projects-container">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="projects-title"
        >
          OUR <span className="highlight">PROJECTS</span>
        </motion.h2>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="project-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="project-header">
                <h3>{project.title}</h3>
              </div>
              <p className="project-description">{project.description}</p>

              <div className="project-tags">
                {project.tech.map((tech, i) => (
                  <span key={i} className="project-tag">
                    {tech}
                  </span>
                ))}
              </div>

              {project.link && (
                <a
                  href={project.link}
                  className="project-link"
                  rel="noopener noreferrer"
                >
                  View Project →
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
  