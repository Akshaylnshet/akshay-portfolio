import React from "react";
import "./App.css";
import profileImg from "./assets/profile.jpeg";

function Navbar() {
  const [open, setOpen] = React.useState(false);

  return (
    <header className="navbar">
      <div className="nav-logo">
        Akshay<span>Shet</span>
      </div>
      <nav>
        <ul className={`nav-links ${open ? "open" : ""}`}>
          <li><a href="#home" onClick={() => setOpen(false)}>Home</a></li>
          <li><a href="#about" onClick={() => setOpen(false)}>About</a></li>
          <li><a href="#skills" onClick={() => setOpen(false)}>Skills</a></li>
          <li><a href="#projects" onClick={() => setOpen(false)}>Projects</a></li>
          <li><a href="#contact" onClick={() => setOpen(false)}>Contact</a></li>
        </ul>
        <button className="nav-toggle" onClick={() => setOpen(!open)}>☰</button>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <p className="hero-tag">Hello, I'm</p>
        <h1>Akshay L N Shet</h1>
        <h2>Data Science & Full-Stack Developer</h2>
        <p className="hero-desc">
          Data Science graduate with strong experience in machine learning,
          analytics, and full-stack web development.
        </p>

        <div className="hero-actions">
  <a href="#projects" className="btn primary">
    View Projects
  </a>

  <a
    href="/Akshay_LN_Shet_Resume.pdf"
    className="btn secondary"
    download
  >
    Download Resume
  </a>

  <a href="#contact" className="btn outline">
    Contact Me
  </a>
</div>


        <div className="hero-socials">
          <a href="https://github.com/Akshaylnshet" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/akshay-l-n-shet" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="mailto:akshaylnshet@gmail.com">Email</a>
        </div>
      </div>

      <div className="hero-image">
        <div className="avatar-ring">
          <div className="avatar-inner">
            <img src={profileImg} alt="Akshay L N Shet" className="hero-photo" />
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="section">
      <div className="section-header">
        <h2>About Me</h2>
        <p>Professional Summary</p>
      </div>
      <div className="section-body about-body">
        <p>
          I am a Bachelor of Engineering graduate in Information Science &
          Engineering from Visvesvaraya Technological University with a CGPA of 8.5.
        </p>
        <p>
          My interests include data science, machine learning, and building scalable
          full-stack applications. I have completed internships in ML and software
          development and actively contribute to open-source projects.
        </p>
      </div>
    </section>
  );
}

const skills = [
  { title: "Programming", text: "Python, Java, JavaScript, C, SQL" },
  { title: "Data Science", text: "Pandas, NumPy, Feature Engineering, Model Evaluation" },
  { title: "Machine Learning", text: "Regression, Classification, Random Forest, XGBoost, SHAP" },
  { title: "Visualization", text: "Matplotlib, Seaborn, Plotly, EDA" },
  { title: "Web & Backend", text: "React, Node.js, Express.js, REST APIs" },
  { title: "Databases & Tools", text: "MongoDB, MySQL, Git, Docker (Basics), Google Cloud" }
];

function Skills() {
  return (
    <section id="skills" className="section alt">
      <div className="section-header">
        <h2>Skills</h2>
        <p>Technical Expertise</p>
      </div>
      <div className="section-body skills-grid">
        {skills.map(skill => (
          <div key={skill.title} className="skill-card">
            <h3>{skill.title}</h3>
            <p>{skill.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

const projects = [
  {
    title: "SmartShelf – Retail Analytics & Object Detection",
    description:
      "Smart retail shelf analytics system using YOLO and OpenCV to detect stock levels and generate automated alerts.",
    tags: ["Python", "YOLO", "OpenCV", "Pandas"],
    links: { code: "https://github.com/Akshaylnshet/SmartShelf" }
  },
  {
    title: "House Price Prediction",
    description:
      "Regression-based ML project with feature engineering, model comparison, and RMSE optimization.",
    tags: ["Python", "Scikit-Learn", "EDA"],
    links: { code: "#" }
  },
  {
    title: "Hotel Booking App",
    description:
      "Full-stack booking platform with REST APIs, MongoDB, and Express.js, deployed on Render.",
    tags: ["Node.js", "MongoDB", "Express"],
    links: { code: "#" }
  },
  {
    title: "Weather App",
    description:
      "React application using OpenWeather API to display real-time weather data.",
    tags: ["React", "API"],
    links: { code: "#" }
  }
];

function Projects() {
  return (
    <section id="projects" className="section">
      <div className="section-header">
        <h2>Projects</h2>
        <p>Academic & Personal Work</p>
      </div>
      <div className="section-body projects-grid">
        {projects.map(project => (
          <article key={project.title} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-meta">
              {project.tags.map(tag => <span key={tag}>{tag}</span>)}
            </div>
            {project.links.code && (
              <a href={project.links.code} target="_blank" rel="noreferrer">GitHub</a>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="section alt">
      <div className="section-header">
        <h2>Contact</h2>
        <p>Get In Touch</p>
      </div>

      <div className="section-body contact-body">
        <div className="contact-info">
          <a href="mailto:akshaylnshet@gmail.com">
            akshaylnshet@gmail.com
          </a>

          <a
            href="https://www.linkedin.com/in/akshay-l-n-shet"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>

          <a
            href="https://github.com/Akshaylnshet"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}


function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Akshay L N Shet. All rights reserved.</p>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}
