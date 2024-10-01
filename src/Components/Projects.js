import React from 'react';
import { Card, CardContent, Typography, Grid, IconButton } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
//import projectImage1 from '../Assests/abhi.png';
import projectImage2 from '../Assests/abstract.jpg';
import projectImage3 from '../Assests/abstract1.jpg';
import { motion } from 'framer-motion';
import './css/Projects.css';

const projects = [
  {
    title: 'Tax Craft',
    description: 'Used LLM to read PDFs and help users with tax deduction methods.',
    technologies: 'Python, Jupyter notebook, Langchain, Streamlit, APIs',
    date: 'Oct 2023',
    image: projectImage3,
    link: 'https://github.com/Abhishekvk04/TaxCraft-CodeRanges'
  },
  {
    title: 'Club Fusion',
    description: 'Developed a platform for club recruitment and notifications.',
    technologies: 'Dart, Flutter',
    date: 'Oct 2023',
    image: projectImage2,
    link: 'https://github.com/Abhishekvk04/ClubFusion'
  },
  {
    title: 'Green Chips',
    description: 'Provided a solution for E-Waste management to maximize consumer profit.',
    technologies: 'HTML, CSS, JavaScript, Python',
    date: 'Aug 2023',
    image: projectImage3,
    link: 'https://github.com/Abhishekvk04/Techie-Titans-Green_Chips'
  },
  {
    title: 'BudgetBuddy',
    description: 'A website for tracking expenses with detailed analytics.',
    technologies: 'ReactJS, MongoDB, NodeJS, Mongoose, ExpressJS, Postman, TailwindCSS',
    date: 'July 2024',
    image: projectImage3,
    link: 'https://github.com/Abhishekvk04/BudgetBuddy'
  },
  {
    title: 'Personal Website',
    description: 'My personal website to showcase my skills and projects.',
    technologies: 'ReactJS, CSS3, TailwindCSS',
    date: 'July 2024',
    image: projectImage3,
    link: 'https://github.com/Abhishekvk04/Portfolio-website'
  },
  {
    title: 'Contributed to IEEE-RIT Website',
    description: 'Improved the user interface of the website.',
    technologies: 'NextJS, ReactJS, TailwindCSS',
    date: 'Aug 2023',
    image: projectImage3,
    link: 'https://github.com/Abhishekvk04/ieee-ritb-website'
  },
  {
    title: 'Diacure',
    description: 'Prediction of Diabetes through retinal images using an optimized neural network.',
    technologies: 'HuggingFace, Kaggle, Fastai, PyTorch',
    date: 'Aug 2023',
    image: projectImage3,
    link: 'https://github.com/Abhishekvk04/Diacure-Diabetics-Prediction'
  }
];

const Projects = () => {
  return (
    <div className="projects">
      <Typography variant="h2" className="projects-title" gutterBottom>
        Projects
      </Typography>
      <Grid container spacing={4}>
        {projects.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <motion.div
              className="project-card-wrapper"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="project-card">
                <div className="image-container">
                  <img src={project.image} alt={project.title} className="project-image" />
                </div>
                <CardContent className="card-content">
                  <Typography variant="h5" className="project-title">
                    {project.title}
                  </Typography>
                  <Typography variant="body2" className="project-technologies">
                    {project.technologies}
                  </Typography>
                  <Typography variant="body1" className="project-description">
                    {project.description}
                  </Typography>
                  <Typography variant="body2" className="project-date">
                    {project.date}
                  </Typography>
                  <IconButton href={project.link} target="_blank" className="github-icon">
                    <GitHubIcon />
                  </IconButton>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Projects;
