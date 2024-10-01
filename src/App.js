import React, { useState, useEffect } from 'react';
import './App.css';
import profilePhoto from './Assests/abhi.png';
import { IconButton, Button, Card, CardContent, Typography, Fab, TextField, Grid, Box } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { motion } from 'framer-motion';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Projects from './Components/Projects';

// SkillBar Component
const SkillBar = ({ skill, level, color = '#66fcf1' }) => {
  return (
    <motion.div 
      className="skill-item"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="skill-header">
        <Typography variant="code" className="skill-name">{skill}</Typography>
        <span className="skill-level">{level}%</span>
      </div>
      <div className="skill-bar-bg">
        <motion.div 
          className="skill-bar-fill"
          initial={{ width: 0 }}
          animate={{ width: `${level}%` }}
          transition={{ duration: 1, ease: "easeOut" }}
          style={{ backgroundColor: color }}
        />
      </div>
    </motion.div>
  );
};

// ExperienceCard Component
const ExperienceCard = ({ title, role, location, duration, points }) => {
  return (
    <motion.div 
      className="experience-item"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h4 className="exp-title">{title}</h4>
      <p className="exp-role">{role}</p>
      <p className="exp-location">{location}</p>
      <p className="exp-duration">{duration}</p>
      <ul className="exp-points">
        {points.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>
    </motion.div>
  );
};

// SkillsAndExperience Component
const SkillsAndExperience = () => {
  const skills = [
    { name: 'Python', level: 90, color: '#3776AB' },
    { name: 'Java', level: 80, color: '#007396' },
    { name: 'C', level: 75, color: '#A8B9CC' },
    { name: 'HTML', level: 95, color: '#E34F26' },
    { name: 'CSS', level: 90, color: '#1572B6' },
    { name: 'JavaScript', level: 85, color: '#F7DF1E' },
    { name: 'Flutter', level: 80, color: '#02569B' }
  ];

  const experiences = [
    {
      title: 'IEEE RIT-B',
      role: 'Web Resource Execom Member',
      location: 'Bangalore, India, Hybrid',
      duration: 'Jan 2024 – Present',
      points: ['Led a team in maintaining the IEEE RIT-B website, ensuring seamless user experience and functionality.']
    },
    {
      title: 'GirlScript Summer of Code',
      role: 'Open Source Contributor',
      location: 'India, Remote',
      duration: 'May 2023 – Aug 2023',
      points: [
        'Ranked 331 in quine.',
        'Contributed to the UI by writing media queries for the ISKCON-based project Moksh to make it responsive.'
      ]
    }
  ];

  return (
    <Grid container spacing={2} className="grid-wrapper">
      <Grid item xs={12} md={6}>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Card className="section-card skills-card">
            <CardContent>
              <Typography variant="h5" className="section-title">
                <span className="title-tag">&lt;</span> Technical Skills
                <span className="title-tag">/&gt;</span>
              </Typography>
              <Box className="skills-container">
                {skills.map((skill, index) => (
                  <SkillBar key={index} skill={skill.name} level={skill.level} color={skill.color} />
                ))}
              </Box>
            </CardContent>
          </Card>
        </motion.div>
      </Grid>

    <Grid item xs={12} md={6}>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Card className="section-card experience-card">
          <CardContent>
            <Typography variant="h5" className="section-title">
              <span className="title-tag">&lt;</span> Experience
              <span className="title-tag">/&gt;</span>
            </Typography>
            <div className="experience-container">
              {experiences.map((exp, index) => (
                <ExperienceCard key={index} {...exp} />
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </Grid>
  </Grid>

  );
};

// Section Component
const Section = ({ id, title, children }) => {
  return (
    <motion.section
      id={id}
      className="App-section"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="App-card">
        <CardContent>
          <Typography variant="h4" component="h2" gutterBottom>
            {title}
          </Typography>
          <div className="section-content">{children}</div>
        </CardContent>
      </Card>
    </motion.section>
  );
};

// Main App Component
function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [animatedText, setAnimatedText] = useState('');
  const [isFullStack, setIsFullStack] = useState(false);

  useEffect(() => {
    const texts = ['Hey There! This is Abhishek V K', 'Full Stack Developer', 'Proud Indian Programmer'];
    let currentText = '';
    let currentIndex = 0;
    let currentLetterIndex = 0;

    const interval = setInterval(() => {
      if (currentLetterIndex === 0) {
        currentText = texts[currentIndex];
        setIsFullStack(currentIndex === 1);
      }

      setAnimatedText(currentText.slice(0, currentLetterIndex + 1));
      currentLetterIndex++;

      if (currentLetterIndex === currentText.length) {
        currentLetterIndex = 0;
        currentIndex = (currentIndex + 1) % texts.length;
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value.toLowerCase());
  };

  const sections = [
    { title: 'About Me', id: 'about-me' },
    { title: 'Technical Skills & Experience', id: 'skills-and-experience' },
  ];
  
  const getSectionContent = (id) => {
    switch (id) {
      case 'about-me':
        return (
          <div className="about-me-section">
            <p className="left-align">
              Hi, I'm Abhishek V K, a Data Science and AI student with a strong foundation in programming, web development, and AI applications. Proven track record in leading projects, enhancing user experience, and contributing to award-winning solutions. Seeking to leverage skills in a challenging role within a dynamic organization.
            </p>
          </div>
        );
      case 'skills-and-experience':
        return (
          <div className="skills-and-experience-section">
            <SkillsAndExperience />
          </div>
        );
      default:
        return null;
    }
  };
  
  return (
    <Router>
      <motion.div
        className="App"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Header content */}
        <header className="App-header">
          <nav className="navbar">
            <motion.div
              className="logo"
              animate={{ color: isFullStack ? '#66fcf1' : '#ffffff' }}
              transition={{ duration: 0.5 }}
            >
              <h1>{animatedText}</h1>
            </motion.div>
            <div className="nav-buttons">
              <Button variant="text" color="inherit" component={Link} to="/">
                Home
              </Button>
              <Button variant="text" color="inherit" component={Link} to="/projects">
                Projects
              </Button>
              <Button
                variant="contained"
                color="secondary"
                href="https://drive.google.com/file/d/1tFKzuLA0SEMP8TVbkhYwiUPO9YCaZdDP/view?usp=sharing"
                target="_blank"
              >
                Resume
              </Button>
              <TextField
                label="Search"
                variant="outlined"
                onChange={handleSearchChange}
                size="small"
                InputProps={{
                  style: { color: 'white' },
                }}
                InputLabelProps={{
                  style: { color: 'white' },
                }}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': { borderColor: 'white' , borderRadius: '15px'},
                    '&:hover fieldset': { borderColor: 'lightblue' },
                    '&.Mui-focused fieldset': { borderColor: 'green' },
                  },
                }}
              />
            </div>
          </nav>
          <motion.img
            src={profilePhoto}
            className="App-photo"
            alt="Profile"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          />
          <div className="social-icons">
            <IconButton href="https://github.com/Abhishekvk04" target="_blank"><GitHubIcon /></IconButton>
            <IconButton href="https://www.linkedin.com/in/abhishek-v-k-574846248/" target="_blank"><LinkedInIcon /></IconButton>
            <IconButton href="mailto:vkabhishek04@gmail.com"><EmailIcon /></IconButton>
          </div>
        </header>

        {/* Main content */}
        <main>
          <Routes>
            <Route
              path="/"
              element={
                sections
                  .filter((section) => section.title.toLowerCase().includes(searchQuery))
                  .map((section) => (
                    <Section key={section.id} id={section.id} title={section.title}>
                      {getSectionContent(section.id)}
                    </Section>
                  ))
              }
            />
            <Route path="/projects" element={<Projects />} />
          </Routes>
          <Fab color="primary" aria-label="back to top" className="back-to-top" onClick={handleBackToTop}>
            <ArrowUpwardIcon />
          </Fab>
        </main>

        {/* Footer */}
        <footer>
          <div className="footer-content">
            <p>&copy; 2024 Abhishek V K</p>
            <p>Email: vkabhishek04@gmail.com</p>
            <p>
              GitHub: <a href="https://github.com/Abhishekvk04" target="_blank" rel="noopener noreferrer">Abhishekvk04</a> |
              LinkedIn: <a href="https://www.linkedin.com/in/abhishek-v-k-574846248/" target="_blank" rel="noopener noreferrer">Abhishek V K</a>
            </p>
          </div>
        </footer>
      </motion.div>
    </Router>
  );
}

export default App;