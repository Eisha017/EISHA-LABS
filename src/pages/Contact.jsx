import { useState } from "react";


function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));

    setSubmitted(false);
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Enter a valid email address.";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required.";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message should be at least 10 characters.";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setSubmitted(true);

    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <main className="contact-page">
      <div className="contact-glow contact-glow-one"></div>
      <div className="contact-glow contact-glow-two"></div>

      {/* HEADER */}
      <section className="contact-header">
        <div>
          <p className="contact-label">04 / CONTACT</p>

          <h1>
            Have an idea? 
            <span> Let’s build it.</span>
          </h1>
        </div>

        <p className="contact-intro">
          Have a project idea, collaboration opportunity, or just want to
          connect? Send a message and let's start a conversation.
        </p>
      </section>

      {/* CONTACT CONTENT */}
      <section className="contact-grid">
        {/* LEFT */}
        <div className="contact-info">
          <div className="terminal-card">
            <div className="terminal-top">
              <div className="terminal-dots">
                <span></span>
                <span></span>
                <span></span>
              </div>

              <span>contact.js</span>
            </div>

            <div className="terminal-body">
              <p>
                <span className="code-purple">const</span>{" "}
                <span className="code-blue">developer</span> = {"{"}
              </p>

              <p className="indent">
                name: <span className="code-green">"Eisha"</span>,
              </p>

              <p className="indent">
                role: <span className="code-green">"Developer"</span>,
              </p>

              <p className="indent">
                focus: <span className="code-green">"AI + Full Stack"</span>,
              </p>

              <p className="indent">
                status: <span className="code-green">"open_to_build"</span>
              </p>

              <p>{"}"}</p>

              <p className="terminal-cursor">
                <span>_</span>
              </p>
            </div>
          </div>

          <div className="contact-details">
            <div className="detail-item">
              <span className="detail-number">01</span>

              <div>
                <small>EMAIL</small>
                <a href="mailto:eisha@example.com">
                  eishaa030@gmail.com
                </a>
              </div>
            </div>

            <div className="detail-item">
              <span className="detail-number">02</span>

              <div>
                <small>GITHUB</small>
                <a
                  href="https://github.com/Eisha017"
                  target="_blank"
                  rel="noreferrer"
                >
                  github.com/Eisha017
                </a>
              </div>
            </div>

            <div className="detail-item">
              <span className="detail-number">03</span>

              <div>
                <small>AVAILABILITY</small>
                <p>Open to opportunities</p>
              </div>
            </div>
          </div>
        </div>

        {/* FORM */}
        <div className="contact-form-card">
          <div className="form-heading">
            <div>
              <span>START A CONVERSATION</span>
              <h2>Send a message</h2>
            </div>

            <div className="form-status">
              <span></span>
              ONLINE
            </div>
          </div>

          <form onSubmit={handleSubmit} noValidate>
            <div className="form-group">
              <label htmlFor="name">YOUR NAME</label>

              <input
                id="name"
                name="name"
                type="text"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
              />

              {errors.name && (
                <small className="form-error">{errors.name}</small>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="email">EMAIL ADDRESS</label>

              <input
                id="email"
                name="email"
                type="email"
                placeholder="you@example.com"
                value={formData.email}
                onChange={handleChange}
              />

              {errors.email && (
                <small className="form-error">{errors.email}</small>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="message">MESSAGE</label>

              <textarea
                id="message"
                name="message"
                rows="6"
                placeholder="Tell me about your project..."
                value={formData.message}
                onChange={handleChange}
              ></textarea>

              {errors.message && (
                <small className="form-error">{errors.message}</small>
              )}
            </div>

            <button type="submit" className="contact-submit">
              <span>Send Message</span>
              <span className="submit-arrow">↗</span>
            </button>

            {submitted && (
              <div className="success-message">
                <span>✓</span>
                Message validated successfully. Thanks for reaching out.
              </div>
            )}
          </form>
        </div>
      </section>

      {/* BOTTOM STATEMENT */}
      <section className="contact-bottom">
        <span>LET'S CONNECT</span>

        <h2>
          Ideas become
          <span> products.</span>
        </h2>
      </section>
    </main>
  );
}

export default Contact;