import React from 'react';  
import '../styles/projectDetails.css';

const projects = [  
    {  
        title: 'Security Checker - Student Security App',  
        description: 'Developed a tracking system for student outings with automated notifications using Node.js and MySQL. Integrated email services for sending alerts to users with pending reports.',  
        technologies: ['Node.js', 'MySQL', 'Notifications'],  
        link: 'https://github.com/Arpenaboyina/Security_Checker_project',  
    },
    {  
        title: 'Ensurance - Insurance Management Platform',  
        description: 'Built a platform for insurance claims and tracking, using Node.js, Express, and MySQL for secure data handling and report generation. Designed RESTful APIs for seamless integration with the frontend.',  
        technologies: ['Node.js', 'MySQL', 'REST APIs'],  
        link: 'https://github.com/Arpenaboyina/ensurance',  
    }  ,
    {  
        title: 'Weather App',  
        description: 'A React app fetching real-time weather data from OpenWeatherMap API. Includes interactive UI with animations.',  
        technologies: ['React.js', 'CSS', 'Axios'],  
        link: 'https://github.com/Arpenaboyina/Weather_API',  
    },  
    {  
        title: 'Tic-Tac-Toe',  
        description: 'A fun multiplayer game with real-time updates and winner announcement animations.',  
        technologies: ['React.js', 'CSS', 'JavaScript'],  
        link: 'https://github.com/Arpenaboyina/TIC-TAC-TOE',  
    }
];  

const ProjectDetails = () => {  
    return (  
        <div className="project-grid">  
            {projects.map((project, index) => (  
                <div key={index} className="project-card fade-in">  
                    <h3>{project.title}</h3>  
                    <p style={{ fontSize: '20px' }}>{project.description}</p>

                    <p><strong>Technologies:</strong> {project.technologies.join(', ')}</p>  
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="view-project-btn">View Project</a>  
                </div>  
            ))}  
        </div>  
    );  
};  

export default ProjectDetails;
