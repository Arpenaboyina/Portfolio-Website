import React, { useState, useCallback } from 'react';
import '../styles/footer.css';
const Footer = () => {
  const [buttonStyles, setButtonStyles] = useState({
    github: '',
    linkedin: '',
    email: '',
  });

  const randomizeButtonStyles = useCallback(() => {
    const colors = ['#4caf50', '#03a9f4', '#ff5722', '#d32f2f', '#0077b5', '#333'];
    const randomColor = () => colors[Math.floor(Math.random() * colors.length)];

    setButtonStyles({
      github: randomColor(),
      linkedin: randomColor(),
      email: randomColor(),
    });
  }, []);

  // Call randomizeButtonStyles when component mounts
  React.useEffect(() => {
    randomizeButtonStyles();
  }, [randomizeButtonStyles]);

  return (
    <footer className="footer">
      <p>&copy; 2024 Arpenaboyina Rakesh. All rights reserved.</p>
      <ul className="footer-links">
        <li>
          <a
            href="https://github.com/Arpenaboyina"
            target="_blank"
            rel="noopener noreferrer"
            className={`footer-btn github-btn`}
            style={{ backgroundColor: buttonStyles.github }}
          >
            GitHub
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/arpenaboyina-rakesh-33394a29b/"
            target="_blank"
            rel="noopener noreferrer"
            className={`footer-btn linkedin-btn`}
            style={{ backgroundColor: buttonStyles.linkedin }}
          >
            LinkedIn
          </a>
        </li>
        <li>
          <a
            href="mailto:rakesharpenaboyina2004@gmail.com"
            className={`footer-btn email-btn`}
            style={{ backgroundColor: buttonStyles.email }}
          >
            Email
          </a>
        </li>
      </ul>
      <p className="contact-info">
        <strong>Phone:</strong> +91 9502508859
      </p>
    </footer>
  );
};

export default Footer;
