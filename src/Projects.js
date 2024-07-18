import React from 'react';
import { Card, CardContent, Typography, CardMedia, IconButton } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';

const projects = [
  {
    title: 'Tax Craft',
    description: 'Used LLM to read PDFs and help users with tax deduction methods.',
    techStack: 'Python, Jupyter notebook, Langchain, Streamlit, APIs',
    date: 'Oct 2023',
    image: 'path/to/taxcraft-image.jpg', // Update with actual image path
    github: 'https://github.com/vkabhishek04/tax-craft'
  },
  {
    title: 'Club Fusion',
    description: 'Developed a platform for club recruitment and notifications.',
    techStack: 'Dart, Flutter',
    date: 'Oct 2023',
    image: 'path/to/clubfusion-image.jpg', // Update with actual image path
    github: 'https://github.com/vkabhishek04/club-fusion'
  },
  {
    title: 'Green Chips',
    description: 'Provided a solution for E-Waste management to maximize consumer profit.',
    techStack: 'HTML, CSS, JavaScript, Python',
    date: 'Aug 2023',
    image: 'path/to/greenchips-image.jpg', // Update with actual image path
    github: 'https://github.com/vkabhishek04/green-chips'
  },
  {
    title: 'Green Chips',
    description: 'Provided a solution for E-Waste management to maximize consumer profit.',
    techStack: 'HTML, CSS, JavaScript, Python',
    date: 'Aug 2023',
    image: 'path/to/greenchips-image.jpg', // Update with actual image path
    github: 'https://github.com/vkabhishek04/green-chips'
  },
  {
    title: 'Green Chips',
    description: 'Provided a solution for E-Waste management to maximize consumer profit.',
    techStack: 'HTML, CSS, JavaScript, Python',
    date: 'Aug 2023',
    image: 'path/to/greenchips-image.jpg', // Update with actual image path
    github: 'https://github.com/vkabhishek04/green-chips'
  },
  {
    title: 'Green Chips',
    description: 'Provided a solution for E-Waste management to maximize consumer profit.',
    techStack: 'HTML, CSS, JavaScript, Python',
    date: 'Aug 2023',
    image: 'path/to/greenchips-image.jpg', // Update with actual image path
    github: 'https://github.com/vkabhishek04/green-chips'
  },
];

const Projects = () => {
  return (
    <div className="Projects">
      {projects.map((project, index) => (
        <Card key={index} className="Project-card">
          <CardMedia
            component="img"
            alt={project.title}
            height="140"
            image={project.image}
          />
          <CardContent>
            <Typography variant="h5" component="div">
              {project.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {project.description}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {project.techStack}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {project.date}
            </Typography>
            <IconButton href={project.github} target="_blank">
              <GitHubIcon />
            </IconButton>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default Projects;
