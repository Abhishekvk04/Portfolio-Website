import React from 'react';
import { Card, CardContent, Typography, Grid, IconButton } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import projectImage1 from '../Assests/abhi.png';
import projectImage2 from '../Assests/abstract.jpg';
import projectImage3 from '../Assests/abstract1.jpg';
import './css/Projects.css'
const projects = [
  {
    title: 'Tax Craft',
    description: 'Used LLM to read PDFs and help users with tax deduction methods.',
    technologies: 'Python, Jupyter notebook, Langchain, Streamlit, APIs',
    date: 'Oct 2023',
    image: projectImage1,
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
    description: 'It is the website for people who track their expenses and want to get the detailed analytics.',
    technologies: 'ReactJS, MongoDB, NodeJS, mongoose, expressjs, postman, tailwindcss',
    date: 'July 2024',
    image: projectImage3,
    link: 'https://github.com/Abhishekvk04/BudgetBuddy'
  },
  {
    title: 'Personal Website',
    description: 'My personal Website to showcase my skills and projects.',
    technologies: 'ReactJS, CSS3, TailwindCSS',
    date: 'July 2024',
    image: projectImage3,
    link: 'https://github.com/Abhishekvk04/Portfolio-website'
  },
  {
    title: 'Contributed to IEEE-RIT Website',
    description: 'Improvised the User Interface of the website.',
    technologies: 'NextJS, ReactJS, TailwindCSS',
    date: 'Aug 2023',
    image: projectImage3,
    link: 'https://github.com/Abhishekvk04/ieee-ritb-website'
  },
  {
    title: 'Diacure',
    description: 'Prediction of Diabetics through Retinal Images using Optimized Neural Network',
    technologies: 'HuggingFace, Kaggle, Fastai, Pytorch',
    date: 'Aug 2023',
    image: projectImage3,
    link: 'https://github.com/Abhishekvk04/Diacure-Diabetics-Prediction'
  }

];

const Projects = () => {
  return (
    <div className="Projects">
      <Typography variant="h2" component="h2" gutterBottom>
        Projects
      </Typography>
      <Grid container spacing={4}>
        {projects.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card>
              <img src={project.image} alt={project.title} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
              <CardContent>
                <Typography variant="h5" component="h3">
                  {project.title}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {project.technologies}
                </Typography>
                <Typography variant="body1" component="p" style={{ marginTop: '8px' }}>
                  {project.description}
                </Typography>
                <Typography variant="body2" color="textSecondary" style={{ marginTop: '8px' }}>
                  {project.date}
                </Typography>
                <IconButton href={project.link} target="_blank">
                  <GitHubIcon />
                </IconButton>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Projects;
