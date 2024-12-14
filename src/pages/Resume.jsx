import React from 'react';  
import '../styles/resume.css'
const Resume = () => {  
    return (  
        <div className="resume-section">  
            <h2>My Resume</h2>  
            <p>Click below to view or download my resume:</p>  
            <a  
                href="/resume/Rakesh_Arpenaboyina_Resume.pdf"  
                target="_blank"  
                rel="noopener noreferrer"  
                className="resume-link"  
            >  
                <button className="download-btn">Download Resume</button> 
            </a>  
        </div>  
    );  
};  

export default Resume;