import "./About.css";
import { motion } from "framer-motion";


const About = () => {
  return (
    <section className="about-section">
      <motion.div
        className="about-wrapper"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
      >
        {/* LEFT IMAGE */}
        <div className="about-image">
          <div className="image-frame">
            <img src="/Profile.png" alt="Aditya Rana" />
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="about-content">
          <span className="about-badge">About Me</span>

          <h1>
            I’m <span>Aditya Rana</span>
          </h1>

          <p className="about-main">
            A passionate <strong>Java & Full Stack Developer</strong> who believes
            in building software that is not just functional, but reliable,
            scalable, and future-ready.
          </p>

          <p className="about-story">
            I completed my <strong>Diploma in Computer Science in 2023</strong>
            from <strong>Ambedkar Institute of Technology</strong>, where I built
            a strong foundation in programming, problem-solving, and software
            fundamentals.
          </p>

          <p className="about-story">
            Currently, I am pursuing my <strong>B.Tech in Computer Science</strong>
            from <strong>Gurukul Kangri Vishwavidyalaya</strong>, continuously
            sharpening my skills through real-world projects, internships, and
            hands-on development.
          </p>

          <p className="about-story highlight">
            My core strength lies in backend development using
            <strong> Java, Spring Boot, MySQL, and Spring Security</strong>,
            combined with modern frontend technologies to deliver complete,
            production-ready applications.
          </p>

          <p className="about-vision">
            I don’t just write code — I design systems, think in architecture,
            and focus on performance, security, and clean code practices.
          </p>

          <div className="about-actions">
             <Link to="/projects" className="btn primary">
              View My Work
            </Link>
             <Link to="/contact" className="btn primary">
              Let's Connect
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
