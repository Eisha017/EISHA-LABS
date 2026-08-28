function About() {
  return (
    <main className="about-page">

      {/* ================= HERO ================= */}

      <section className="about-hero">

        <div className="about-label">
          ABOUT / EISHA LABS
        </div>

        <h1>
          Building with
          <span> curiosity.</span>
        </h1>

        <p className="about-intro">
          I’m Eisha, a Computer Engineer focused on building
          modern digital experiences and continuously expanding
          my skills across frontend development, Python, and
          emerging AI technologies.
        </p>

      </section>


      {/* ================= ABOUT GRID ================= */}

      <section className="about-grid">

        {/* INTRO */}

        <div className="about-block about-main">

          <span className="about-number">01</span>

          <h2>
            A developer in
            <span> progress.</span>
          </h2>

          <p>
            My development journey started with the fundamentals
            of web development and gradually evolved into building
            complete interactive projects.
          </p>

          <p>
            I enjoy turning ideas into functional interfaces,
            experimenting with different technologies, and
            understanding how things work beyond just writing code.
          </p>

        </div>


        {/* CURRENT FOCUS */}

        <div className="about-block">

          <span className="about-number">02</span>

          <h3>Current Focus</h3>

          <div className="focus-list">

            <div>
              <strong>01</strong>
              <span>Frontend Development</span>
            </div>

            <div>
              <strong>02</strong>
              <span>Full-Stack Development</span>
            </div>

            <div>
              <strong>03</strong>
              <span>Python & Programming</span>
            </div>

            <div>
              <strong>04</strong>
              <span>AI & Machine Learning</span>
            </div>

          </div>

        </div>


        {/* TOOLKIT */}

        <div className="about-block">

          <span className="about-number">03</span>

          <h3>Developer Toolkit</h3>

          <div className="about-tech">

            <span>HTML</span>
            <span>CSS</span>
            <span>JavaScript</span>
            <span>React</span>
            <span>Python</span>
            <span>SQL</span>
            <span>Git</span>
            <span>GitHub</span>

          </div>

        </div>


        {/* DIRECTION */}

        <div className="about-block about-direction">

          <span className="about-number">04</span>

          <h3>Where I'm Heading</h3>

          <p>
            My long-term direction is toward becoming an
            AI-focused full-stack developer, combining strong
            software engineering foundations with artificial
            intelligence and machine learning.
          </p>

          <div className="direction-path">

            <span>Frontend</span>
            <i>→</i>
            <span>Backend</span>
            <i>→</i>
            <span>Full Stack</span>
            <i>→</i>
            <span>AI Engineering</span>

          </div>

        </div>

      </section>


      {/* ================= PHILOSOPHY ================= */}

      <section className="about-philosophy">

        <div className="about-label">
          DEVELOPMENT PHILOSOPHY
        </div>

        <h2>
          Learn.
          <span> Build.</span>
          <br />
          Improve.
        </h2>

        <p>
          Every project is an opportunity to understand something
          new, improve an existing skill, and build something
          better than the last one.
        </p>

      </section>

    </main>
  );
}

export default About;