import "./Contact.css";
import { useState } from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("Sending...");

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_BASE_URL}/api/contact`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(formData)
        }
      );

      if (response.ok) {
        setStatus("Message sent successfully 🚀");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("Failed to send message ❌");
      }
    } catch (error) {
      console.error(error);
      setStatus("Server error ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="contact-section">
      <motion.div
        className="contact-wrapper"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >

        {/* LEFT INFO */}
        <div className="contact-info">
          <span className="contact-badge">Contact</span>
          <h1>
            Let’s <span>Talk</span>
          </h1>

          <p className="contact-text">
            Whether it’s a project opportunity, collaboration, or a technical
            discussion — feel free to reach out.
          </p>

          <div className="contact-meta">
            <p><strong>Email:</strong> adityarana7780@gmail.com</p>
            <p><strong>Location:</strong> India</p>
          </div>
        </div>

        {/* FORM */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="field">
            <label>Your Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="field">
            <label>Your Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="field">
            <label>Your Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>

          <button
            type="submit"
            className="btn primary large"
            disabled={loading}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

          {status && <p className="form-status">{status}</p>}
        </form>
      </motion.div>
    </section>
  );
};

export default Contact;
