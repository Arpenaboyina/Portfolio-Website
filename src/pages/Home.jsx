import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProjectDetails from '../components/ProjectDetails';
import { Link } from 'react-router-dom';
import '../styles/home.css';

const Home = () => {
    return (
        <div className="fade-in">
            <Header />

            {/* About Section */}
            <section id="about" className="about-section">
                <h1 className="bounce">Hi, I'm  Arpenaboyina Rakesh</h1>
                <p>
                    I'm a Full-Stack Developer passionate about creating elegant solutions for
                    complex problems.
                </p>
            </section>

            {/* Image and About Me Section */}
            <section id="about-me" className="about-me-section">
                <div className="about-me-content">
                    {/* Image Section */}
                    <div className="about-me-image-container">
                        <img
                            src={require('../styles/images/rakeshimage1.jpg')} // Importing image dynamically
                            alt="Rakesh"
                            className="about-me-image"
                        />
                    </div>

                    {/* About Me Text Section */}
                    <div className="about-me-text">
                        <h2>About Me</h2>
                        <p>
    I’m <strong>Arpenaboyina Rakesh</strong>, a Computer Science student at the 
    <strong> Indian Institute of Information Technology, Dharwad</strong> with a passion for 
    <strong> coding, problem-solving</strong> , and developing<strong> efficient solutions</strong>.
</p>
<p>
    Skilled in both <strong>frontend</strong> and <strong> backend development</strong>, 
    I excel at creating <strong> scalable web applications</strong> and managing robust 
    <strong> backend systems</strong> with seamless <strong>database integration</strong>.
</p>
<p>
    As a <strong>Full-Stack Developer</strong>, I am committed to delivering impactful 
    <strong> user experiences</strong> and continuously enhancing my skills to craft 
    <strong> innovative and effective solutions</strong>.
</p>

                    </div>
                </div>
            </section>

            {/* Projects Section */}
            <section id="projects" className="projects-section">
                <h2>Projects</h2>
                <ProjectDetails />
            </section>

          

            {/* Contact Section */}
            <section id="contact" className="contact-section">
                <h2>Contact</h2>
                <p>If you have any questions or just want to say hello, feel free to reach out!</p>
                <Link to="/contact">
                    <button className="contact-btn">Go to Contact Form</button>
                </Link>
            </section>

            <Footer />
        </div>
    );
};

export default Home;
