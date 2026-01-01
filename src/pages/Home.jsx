import "./Home.css";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { useRef } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6 }
  })
};

function Home() {
  const navigate = useNavigate();
  const tiltRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = tiltRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;

    card.style.transform = `
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      scale(1.05)
    `;
  };

  const handleMouseLeave = () => {
    if (!tiltRef.current) return;
    tiltRef.current.style.transform =
      "rotateX(0deg) rotateY(0deg) scale(1)";
  };

  return (
    <section className="home-wrapper">

      {/* HERO */}
      <div className="hero-container">

        {/* LEFT CONTENT */}
        <motion.div
          className="hero-content"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >
          <span className="badge">JAVA BACKEND • MODERN FRONTEND ✨</span>

          <h1>
            Hi, I’m <span>Aditya</span>
          </h1>

          <h2>Java & Spring Boot Developer</h2>

          <p>
            I design and build scalable backend systems using Java & Spring Boot,
            and craft clean, responsive web interfaces with React.
            I care deeply about performance, architecture, and user experience.
          </p>

          <div className="hero-actions">
            <Link to="/projects" className="btn primary">
              View Projects
            </Link>

            <motion.a
              href="/resume/Aditya_Rana_Resume.pdf"
              download
              className="btn outline"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Download Resume
            </motion.a>
          </div>

          <div className="socials">
            <a
              href="https://www.linkedin.com/in/aditya-rana-48657a240/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>

            <a
              href="https://github.com/adityarana2002"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>

            <a href="https://www.instagram.com/affable__aadi?igsh=bGlicmRrZXd2dm9r" aria-label="Instagram">
              Instagram
            </a>
          </div>
        </motion.div>

        {/* RIGHT IMAGE WITH 3D TILT */}
        <motion.div
          className="hero-image"
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        >
          <div
            className="image-tilt"
            ref={tiltRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <div className="image-frame">
              <img src="/Profile.png" alt="Aditya Rana" />
            </div>
          </div>
        </motion.div>

      </div>

      {/* TECH STACK */}
      <section className="stack">
        <h2 className="section-title">Tech Stack</h2>

        <div className="stack-list">
          {["Java", "Spring Boot", "React", "MySQL", "Hibernate", "REST APIs"].map(
            (tech, index) => (
              <motion.span
                key={tech}
                custom={index}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                whileHover={{ scale: 1.15 }}
              >
                {tech}
              </motion.span>
            )
          )}
        </div>
      </section>

      {/* SERVICES */}
      <section className="services">
        <h2 className="section-title">What I Do</h2>

        <div className="service-grid">
          {[
            {
              title: "Backend Development",
              desc: "Scalable and secure REST APIs using Java, Spring Boot, and MySQL."
            },
            {
              title: "Frontend Development",
              desc: "Modern, responsive UI using React with clean UX principles."
            },
            {
              title: "System Design",
              desc: "Designing maintainable architectures focused on performance."
            }
          ].map((item, i) => (
            <motion.div
              className="service-card"
              key={i}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              whileHover={{ y: -12 }}
            >
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* BRANDING */}
      <section className="branding">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Why Hire Me?
        </motion.h2>

        <p>
          I combine strong backend fundamentals with modern frontend skills.
          I write clean, maintainable code and focus on solving real-world
          problems that scale.
        </p>
      </section>

      {/* CTA */}
      <section className="cta">
        <motion.h2
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          Let’s Build Something Great Together 🚀
        </motion.h2>

        <motion.button
          className="btn primary large"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate("/contact")}
        >
          Contact Me
        </motion.button>
      </section>

    </section>
  );
}

export default Home;
