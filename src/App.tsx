import { Github, Linkedin, Mail, ExternalLink, Code2, Boxes, Trophy, Phone, MapPin, Calendar, Building, Download } from 'lucide-react';

function App() {
  const personalProjects = [
    {
      title: "Multi Step Form",
      description: "A Multi step form to purchase a subscription build with React, Redux using Vite builder and hosted on Vercel.",
      tech: ["React.js", "Redux", "React-Form-Hooks", "SCSS", "HTML", "CSS", "JavaScript"],
      challenges: "State Management, Validations.",
      solution: "Used Redux for State Management and used React-Form-Hooks for Validations.",
      links: {
        live: "https://multi-step-form-one-ebon.vercel.app/",
        github: "https://github.com/Ravinandanhv-hub/multi-step-form"
      }
    },
    {
      title: "JWT Authentication",
      description: "A simple JWT Authentication App using Node.js and MongoDB.",
      tech: ["Node.js", "Express", "MongoDB"],
      challenges: "Implementing a secure authentication system.",
      solution: "Used JWT for authentication.",
      links: {
        github: "https://github.com/Ravinandanhv-hub/jwt-working"
      }
    },
    {
      title: "Shipping-Box",
      description: "Application to track boxes to be shipped from india to abroad.",
      tech: ["React"],
      links: {
        github: "https://github.com/Ravinandanhv-hub/Shipping-Box",
        vercel: "https://shipping-box-pi.vercel.app/"
      }
    },
    {
      title: "tic-tac-toe",
      description: "Basic tic-tac-toe game.",
      tech: ["React"],
      links: {
        github: "https://github.com/Ravinandanhv-hub/tic-tac-toe",
        vercel: "https://tic-tac-toe-drab-tau-17.vercel.app/"
      }
    },
    {
      title: "Simple Calculator",
      description: "Works as simple calculator and hosted on Vercel and Firebase.",
      tech: ["Angular", "HTML", "CSS", "JavaScript"],
      challenges: "Creating a responsive design.",
      solution: "Used CSS Flexbox.",
      links: {
        vercel: "https://calculator-1-xi.vercel.app/",
        firebase: "https://calculator-5f1a1.web.app/calculator/",
        github: "https://github.com/Ravinandanhv-hub/Calculator"
      }
    },
    {
      title: "Data Manage",
      description: "A Crud Operations Application.",
      tech: ["Angular", "Node.js", "Express", "MongoDB", "HTML", "CSS", "JavaScript"],
      challenges: "Cross-Origin Resource Sharing and Hosting.",
      solution: "Used cors for Cross-Origin Resource Sharing and Firebase for Frontend hosting and Renderer for Backend hosting.",
      links: {
        firebase: "https://data-manage-a3a61.firebaseapp.com/create",
        github: "https://github.com/Ravinandanhv-hub/data-manage"
      }
    }
  ];

  const skills = [
    { 
      category: "Frontend Development",
      items: [
        "Angular",
        "React",
        "Redux",
        "HTML5",
        "CSS3",
        "JavaScript",
        "Angular Material",
        "Bootstrap",
        "RxJS"
      ]
    },
    { 
      category: "Backend & Database",
      items: [
        "Node.js",
        "MongoDB",
        "RESTful APIs",
        "System Design"
      ]
    },
    { 
      category: "Tools & Methodologies",
      items: [
        "Git",
        "GitHub",
        "Bitbucket",
        "Figma",
        "Jira",
        "Confluence",
        "Agile/Scrum"
      ]
    }
  ];

  const experience = [
    {
      company: "Datanimbus Technologies Pvt Ltd",
      position: "Technical Engineer",
      period: "Aug 2022 - Present",
      location: "Bengaluru, Karnataka, India",
      description: [
        "Implemented and maintained web applications using MERN/MEAN stack, with primary focus on frontend development",
        "Successfully integrated a React project into a primary Angular application using micro frontend architecture",
        "Contributed to 40+ new features and played a key role in designing product features",
        "Led POC projects, wrote migration scripts, and resolved UAT/production issues within deadlines",
        "Took complete UI responsibility for 4 months when team was divided into Agile rooms",
        "Worked on DataStack (B2B platform) for 7 months and currently contributing to UPP (Unified Payment Platform)",
        "Participated in code reviews and mentored junior developers to enhance code quality"
      ]
    },
    {
      company: "Wipro Technologies Pvt Ltd",
      position: "Internship Trainee",
      period: "Mar 2022 - May 2022",
      location: "Bengaluru, Karnataka, India",
      description: [
        "Completed a 3-month internship focused on IBM Mainframe technologies",
        "Gained hands-on experience with enterprise-level systems and processes"
      ]
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <header className="header">
        <div className="container">
          <div className="about-content">
            <h1>Ravinandan H V</h1>
            <p>Web Developer with a passion for creating beautiful, responsive web applications</p>
            <div className="social-links">
              <a href="https://github.com/Ravinandanhv-hub?tab=repositories" target="_blank" rel="noopener noreferrer" className="social-link">
                <Github size={24} />
              </a>
              <a href="https://www.linkedin.com/in/ravinandan-h-v-b02442219/" target="_blank" rel="noopener noreferrer" className="social-link">
                <Linkedin size={24} />
              </a>
              <a href="mailto:ravinandan599@gmail.com" className="social-link">
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Contact Details Section */}
      <section className="contact-details">
        <div className="container">
          <div className="contact-container">
            <div className="contact-item">
              <Mail className="text-blue-600" />
              <span>ravinandan599@gmail.com</span>
            </div>
            <div className="contact-item">
              <Phone className="text-blue-600" />
              <span>+91 7019675937</span>
            </div>
            <div className="contact-item">
              <MapPin className="text-blue-600" />
              <span>Bengaluru, Karnataka, India</span>
            </div>
            <a href="https://drive.google.com/file/d/10XVRHUWxgx6uEj_pue5dAxX1I4grUiAG/view?usp=drive_link" download className="download-button">
              <Download size={20} />
              <span>Download Resume</span>
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section">
        <div className="container">
          <div className="about-content">
            <h2 className="section-title">About Me</h2>
            <p className="project-description">
              I'm a frontend developer with experience in building modern web applications. 
              Specializing in React and Angular, I create responsive and user-friendly interfaces 
              that deliver exceptional user experiences. My journey started at Datanimbus Technologies, 
              where I've grown from a Node.js trainee to a full-stack developer with a strong focus on frontend development.
            </p>
            <div className="feature-grid">
              <div className="feature-card">
                <Code2 className="feature-icon" />
                <h3 className="skill-category">Clean Code</h3>
                <p>Writing maintainable and scalable code</p>
              </div>
              <div className="feature-card">
                <Boxes className="feature-icon" />
                <h3 className="skill-category">Modern Stack</h3>
                <p>Using latest technologies and best practices</p>
              </div>
              <div className="feature-card">
                <Trophy className="feature-icon" />
                <h3 className="skill-category">Problem Solver</h3>
                <p>Finding efficient solutions to complex problems</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="experience-section">
        <div className="container">
          <h2 className="section-title">Professional Experience</h2>
          <div className="about-content">
            {experience.map((job, index) => (
              <div key={index} className="experience-item">
                <div className="experience-header">
                  <Building className="text-blue-600" />
                  <h3 className="experience-company">{job.company}</h3>
                </div>
                <div className="experience-details">
                  <Calendar className="mr-2" size={16} />
                  <span>{job.period}</span>
                </div>
                <div className="experience-details">
                  <MapPin className="mr-2" size={16} />
                  <span>{job.location}</span>
                </div>
                <h4 className="experience-position">{job.position}</h4>
                <ul className="experience-description">
                  {job.description.map((item, itemIndex) => (
                    <li key={itemIndex}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Personal Projects Section */}
      <section className="projects-section">
        <div className="container">
          <h2 className="section-title">Personal Projects</h2>
          <div className="projects-grid">
            {personalProjects.map((project, index) => (
              <div key={index} className="project-card">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="tech-stack">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>

                {project.challenges && <div className="project-description">
                  <h4 className="skill-category">Challenges:</h4>
                  <p>{project.challenges}</p>
                </div>}

                {project.solution && <div className="project-description">
                  <h4 className="skill-category">Solution:</h4>
                  <p>{project.solution}</p>
                </div>}

                <div className="project-links">
                  {project.links.github && (
                    <a 
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link github"
                    >
                      <Github size={16} />
                      GitHub
                    </a>
                  )}
                  {project.links.live && (
                    <a 
                      href={project.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link live"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                  )}
                  {project.links.vercel && (
                    <a 
                      href={project.links.vercel}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link vercel"
                    >
                      <ExternalLink size={16} />
                      Vercel
                    </a>
                  )}
                  {project.links.firebase && (
                    <a 
                      href={project.links.firebase}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link firebase"
                    >
                      <ExternalLink size={16} />
                      Firebase
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="skills-section">
        <div className="container">
          <h2 className="section-title">Skills & Expertise</h2>
          <div className="skills-grid">
            {skills.map((skillGroup, index) => (
              <div key={index} className="skill-card">
                <h3 className="skill-category">{skillGroup.category}</h3>
                <div className="skill-tags">
                  {skillGroup.items.map((skill, skillIndex) => (
                    <span key={skillIndex} className="skill-tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <div className="container">
          <div className="about-content">
            <h2 className="section-title">Let's Work Together</h2>
            <p className="project-description">
              I'm always interested in hearing about new projects and opportunities.
            </p>
            {
            // <form className="contact-form">
            //   <div className="form-grid">
            //     <input
            //       type="text"
            //       placeholder="Your Name"
            //       className="form-input"
            //     />
            //     <input
            //       type="email"
            //       placeholder="Your Email"
            //       className="form-input"
            //     />
            //   </div>
            //   <input
            //     type="text"
            //     placeholder="Subject"
            //     className="form-input"
            //   />
            //   <textarea
            //     placeholder="Your Message"
            //     rows={6}
            //     className="form-input"
            //   ></textarea>
            //   <button
            //     type="submit"
            //     className="submit-button"
            //   >
            //     Send Message
            //   </button>
            // </form>
            }
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>© {new Date().getFullYear()} Ravinandan H V. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;