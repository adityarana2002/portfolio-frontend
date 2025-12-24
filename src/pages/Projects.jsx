import "./Projects.css";
import { motion } from "framer-motion";
import { FaServer, FaReact, FaDatabase, FaUserShield } from "react-icons/fa";

const projects = [
  {
    title: "AI Resume Builder",
    heading: "AI-Powered Resume Generation Platform",
    category: "AI + Full Stack",
    description:
      "An intelligent resume builder that generates professional resumes using structured user inputs and AI-driven content generation.",
    features: [
      "AI-powered Resume Generation",
      "Ollama LLM Integration",
      "Spring Boot REST APIs",
      "Mobile-first UI with React Native"
    ],
    tech: ["Spring Boot", "React Native", "Ollama", "REST APIs"],
    icon: <FaReact />
  },
  {
    title: "E-Commerce Web Application",
    heading: "Secure Online Shopping & Order Management System",
    category: "Backend Focused",
    description:
      "A scalable e-commerce platform with authentication, authorization, and order lifecycle management.",
    features: [
      "JWT Authentication",
      "Role-based Authorization",
      "REST APIs",
      "Secure Payment Architecture"
    ],
    tech: ["Java", "Spring Boot", "MySQL", "Spring Security"],
    icon: <FaServer />
  },
  {
    title: "Student Management System",
    heading: "Academic Records & Student Data Management System",
    category: "Full Stack Application",
    description:
      "A complete system for managing student records, courses, and academic data efficiently.",
    features: [
      "Student CRUD Operations",
      "Spring MVC Architecture",
      "Server-side Validation",
      "Database Integration"
    ],
    tech: ["Java", "Spring Boot", "Thymeleaf", "MySQL"],
    icon: <FaDatabase />
  },
  {
    title: "Authentication & Authorization System",
    heading: "Role-Based Security & Access Control Module",
    category: "Security Module",
    description:
      "A robust authentication and authorization module designed using modern security best practices.",
    features: [
      "JWT-based Authentication",
      "Role & Permission Management",
      "Spring Security Filters",
      "Secure API Access"
    ],
    tech: ["Spring Boot", "Spring Security", "JWT", "REST APIs"],
    icon: <FaUserShield />
  },
  {
    title: "Gym Management Admin Dashboard",
    heading: "Membership, Payments & Admin Control System",
    category: "Management System",
    description:
      "An admin-focused dashboard for managing gym members, subscriptions, payments, and attendance.",
    features: [
      "Member & Subscription Management",
      "Admin Authentication",
      "Dashboard Analytics",
      "Scalable Backend Design"
    ],
    tech: ["Spring Boot", "MySQL", "REST APIs"],
    icon: <FaDatabase />
  },
  {
    title: "Personal Portfolio Website",
    heading: "Professional Portfolio with Backend Integration",
    category: "Frontend + Backend",
    description:
      "A modern portfolio website showcasing projects, skills, and contact functionality with real backend integration.",
    features: [
      "Modern UI with React",
      "Spring Boot Backend",
      "SMTP Email Integration",
      "Responsive & Accessible Design"
    ],
    tech: ["React", "Spring Boot", "CSS", "SMTP"],
    icon: <FaReact />
  }
];

function Projects() {
  return (
    <section className="projects-wrapper full-width">
      <div className="projects-container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Projects I’ve Built
        </motion.h2>

        <motion.p
          className="section-subtitle"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Well-structured applications designed with scalability, security,
          and real-world use cases in mind.
        </motion.p>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              className="project-card"
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -12 }}
            >
              {/* HEADER */}
              <div className="project-header">
                <div className="project-icon">{project.icon}</div>
                <span className="project-badge">{project.category}</span>
              </div>

              {/* TITLES */}
              <h3>{project.title}</h3>
              <h4 className="project-heading">{project.heading}</h4>

              <p className="project-desc">{project.description}</p>

              {/* FEATURES */}
              <ul className="feature-list">
                {project.features.map((f, i) => (
                  <li key={i}>✔ {f}</li>
                ))}
              </ul>

              {/* TECH */}
              <div className="tech-stack">
                {project.tech.map((t, i) => (
                  <span key={i}>{t}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
