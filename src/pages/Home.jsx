import { Link } from "react-router-dom";
import profileImg from "../assets/profile/profile.jpeg";

function Home() {
  return (
    <div className="home">

      {/* Background */}
      <div className="hero-background">
        <div className="glow glow-one"></div>
        <div className="glow glow-two"></div>
        <div className="glow glow-three"></div>
      </div>

      {/* ================= HERO ================= */}
      <section className="hero-section">

        {/* LEFT */}
        <div className="hero-content">

          <div className="availability">
            <span></span>
            AVAILABLE FOR OPPORTUNITIES
          </div>

          <p className="hero-label">
            EISHA LABS / DEVELOPER PORTFOLIO
          </p>

          <h1>
            Code.
            <br />
            <span>Create.</span>
            <br />
            Evolve.
          </h1>

          <p className="hero-description">
            I'm Eisha, a Computer Engineer building modern web
            experiences and growing toward Full-Stack Development
            and AI Engineering.
          </p>

          <div className="hero-buttons">
            <Link to="/projects" className="btn btn-primary">
              Explore My Work
              <span>↗</span>
            </Link>

            <Link to="/contact" className="btn btn-secondary">
              Contact Me
            </Link>
          </div>

          <div className="hero-meta">

            <div>
              <span>FOCUS</span>
              <strong>Full-Stack + AI</strong>
            </div>

            <div>
              <span>ROLE</span>
              <strong>Computer Engineer</strong>
            </div>

            <div>
              <span>STATUS</span>
              <strong>Building</strong>
            </div>

          </div>

        </div>

        {/* RIGHT */}
        <div className="profile-area">

          <div className="orbit orbit-one"></div>
          <div className="orbit orbit-two"></div>

          <div className="profile-card">

            <div className="profile-card-top">

              <div className="window-controls">
                <span></span>
                <span></span>
                <span></span>
              </div>

              <span className="file-name">
                eisha.dev
              </span>

            </div>

            <div className="profile-image-wrapper">

              <img
                src={profileImg}
                alt="Eisha - Computer Engineer"
                className="profile-image"
              />

              <div className="image-overlay">
                <span>&lt;developer /&gt;</span>
              </div>

            </div>

            <div className="profile-info">

              <div>
                <h2>Eisha</h2>
                <p>Computer Engineer</p>
              </div>

              <span className="profile-index">
                01
              </span>

            </div>

            <div className="profile-tags">
              <span>React</span>
              <span>JavaScript</span>
              <span>Python</span>
              <span>AI</span>
            </div>

          </div>

          {/* Floating Elements */}

          <div className="floating-code code-one">
            <span>01</span>
            <code>build()</code>
          </div>

          <div className="floating-code code-two">
            <span>02</span>
            <code>learn()</code>
          </div>

          <div className="floating-code code-three">
            <span>03</span>
            <code>evolve()</code>
          </div>

        </div>

      </section>


      {/* ================= MARQUEE ================= */}

      <section className="marquee-section">

        <div className="marquee-track">

          <span>DEVELOPMENT</span>
          <i>✦</i>

          <span>ENGINEERING</span>
          <i>✦</i>

          <span>ARTIFICIAL INTELLIGENCE</span>
          <i>✦</i>

          <span>FULL-STACK</span>
          <i>✦</i>

          <span>DEVELOPMENT</span>
          <i>✦</i>

          <span>ENGINEERING</span>
          <i>✦</i>

          <span>AI ENGINEERING</span>
          <i>✦</i>

        </div>

      </section>


      {/* ================= TOOLKIT ================= */}

      <section className="stack-section">

        <div className="section-heading">

          <div>

            <p className="section-label">
              01 / TOOLKIT
            </p>

            <h2>
              Tools I use to turn
              <br />
              ideas into <span>products.</span>
            </h2>

          </div>

          <p>
            A growing toolkit built around modern frontend
            development, programming, and the foundations
            of AI engineering.
          </p>

        </div>


        <div className="stack-grid">

          <div className="stack-item">

            <span className="stack-number">
              01
            </span>

            <div>

              <div className="stack-icon">
                &lt;/&gt;
              </div>

              <h3>
                Frontend
              </h3>

              <p>
                HTML • CSS • JavaScript • React
              </p>

            </div>

          </div>


          <div className="stack-item">

            <span className="stack-number">
              02
            </span>

            <div>

              <div className="stack-icon">
                PY
              </div>

              <h3>
                Programming
              </h3>

              <p>
                Python • JavaScript • SQL
              </p>

            </div>

          </div>


          <div className="stack-item">

            <span className="stack-number">
              03
            </span>

            <div>

              <div className="stack-icon">
                AI
              </div>

              <h3>
                Exploring
              </h3>

              <p>
                Backend • AI • Machine Learning
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* ================= DIRECTION ================= */}

      <section className="direction-section">

        <div className="direction-number">
          02
        </div>

        <div className="direction-main">

          <p className="section-label">
            02 / THE DIRECTION
          </p>

          <h2>
            Not just building
            <br />
            interfaces.
            <br />
            <span>Building systems.</span>
          </h2>

        </div>


        <div className="direction-content">

          <p>
            My journey started with frontend development.
            Now I'm expanding toward backend systems,
            full-stack applications, and AI-powered software.
          </p>

          <p>
            Every project is a step toward becoming
            a stronger engineer.
          </p>

          <Link
            to="/about"
            className="text-link"
          >
            Discover my journey
            <span>→</span>
          </Link>

        </div>

      </section>


      {/* ================= CTA ================= */}

      <section className="home-cta">

        <div className="cta-glow"></div>

        <p className="section-label">
          03 / LET'S BUILD
        </p>

        <h2>
          Have an idea?
          <br />
          <span>
            Let's turn it into reality.
          </span>
        </h2>

        <Link
          to="/contact"
          className="btn btn-primary"
        >
          Start a Conversation
          <span>↗</span>
        </Link>

      </section>

    </div>
  );
}

export default Home;