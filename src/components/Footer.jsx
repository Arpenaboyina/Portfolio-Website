import React from 'react';
import '../styles/footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <p>&copy; 2024 Arpenaboyina Rakesh. All rights reserved.</p>
            <ul className="footer-links">
                <li>
                    <a
                        href="https://github.com/Arpenaboyina"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="footer-btn github-btn"
                    >
                        GitHub
                    </a>
                </li>
                <li>
                    <a
                        href="https://www.linkedin.com/in/arpenaboyina-rakesh-33394a29b/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="footer-btn linkedin-btn"
                    >
                        LinkedIn
                    </a>
                </li>
                <li>
                    <a
                        href="mailto:rakesharpenaboyina2004@gmail.com"
                        className="footer-btn email-btn"
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
