import React, { useState } from 'react';
import './App.css';
import profilePhoto from './abhi.png';
import { Drawer, List, ListItem, ListItemText, IconButton, Switch, Button, Card, CardContent, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Projects from './Projects';

function App() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const sections = [
    { title: 'About Me', id: 'about-me' },
    { title: 'Education', id: 'education' },
    { title: 'Technical Skills', id: 'technical-skills' },
    { title: 'Experience', id: 'experience' },
    /*{ title: 'Projects', id: 'projects' },*/
    { title: 'Certifications', id: 'certifications' },
    { title: 'International Membership', id: 'international-membership' },
    { title: 'Honors and Awards', id: 'honors-awards' },
    { title: 'Contact', id: 'contact' },
  ];

  return (
    <Router>
      <div className={`App ${darkMode ? 'dark-mode' : 'light-mode'}`}>
        <header className="App-header">
          <div className="header-content">
            <IconButton onClick={toggleDrawer(true)} className="MenuButton">
              <MenuIcon style={{ color: darkMode ? 'white' : 'black' }} />
            </IconButton>
            <Switch checked={darkMode} onChange={toggleDarkMode} color="default" className="DarkModeSwitch" />
          </div>
          <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
            <List>
              {sections.map((section) => (
                <ListItem button key={section.id} onClick={() => {
                  document.getElementById(section.id).scrollIntoView({ behavior: 'smooth' });
                  setDrawerOpen(false);
                }}>
                  <ListItemText primary={section.title} />
                </ListItem>
              ))}
              <ListItem button component={Link} to="/projects" onClick={() => setDrawerOpen(false)}>
                  <ListItemText primary="Projects" />
                </ListItem>
              <ListItem>
                <Button variant="contained" color="primary" href="https://drive.google.com/file/d/1Y1HxzhSOdSD4h-qkjbwQZ9UtspICCVLH/view?usp=sharing" target="_blank">
                  View Resume
                </Button>
              </ListItem>
            </List>
          </Drawer>
          <img src={profilePhoto} className="App-photo" alt="Profile" />
          <h1>Hey There! This is Abhishek V K</h1>
          <p>Flutter dev | GenAI | Machine Learning</p>
          <div className="social-icons">
            <IconButton href="https://github.com/Abhishekvk04" target="_blank"><GitHubIcon /></IconButton>
            <IconButton href="https://www.linkedin.com/in/abhishek-v-k-574846248/" target="_blank"><LinkedInIcon /></IconButton>
            <IconButton href="mailto:vkabhishek04@gmail.com"><EmailIcon /></IconButton>
          </div>
        </header>
        <main>
            <Routes>
              <Route path="/" element={
                sections.map((section) => (
                  <Section key={section.id} id={section.id} title={section.title}>
                    {getSectionContent(section.id)}
                  </Section>
                ))
              } />
              <Route path="/projects" element={<Projects />} />
            </Routes>
          </main>
      </div>
    </Router>
  );
}

const Section = ({ id, title, children }) => {
  return (
    <section id={id} className="App-section">
      <Card className="App-card">
        <CardContent>
          <Typography variant="h4" component="h2" gutterBottom>
            {title}
          </Typography>
          <div className="section-content">{children}</div>
        </CardContent>
      </Card>
    </section>
  );
};

const getSectionContent = (id) => {
  switch (id) {
    case 'about-me':
      return <p className="left-align">Hi, I'm Abhishek V K, an aspiring developer with a passion for Flutter, GenAI, and Machine Learning.</p>;
    case 'education':
      return (
        <div className="left-align">
          <h3>Ramaiah Institute of Technology, Bengaluru</h3>
          <p>B.E- Artificial Intelligence and Data Science</p>
          <p>CGPA(3rd Sem): 9.03/10</p>
          <p>Dec 2022 – Mar 2026</p>
          <h3>Indraprastha P U College, Uppinangady</h3>
          <p>PCMB-(physics chemistry mathematics biology)</p>
          <p>Percentage: 93.33%</p>
          <p>March 2020 – April 2022</p>
        </div>
      );
    case 'technical-skills':
      return (
        <div className="left-align">
          <p><strong>Programming Languages:</strong> Python, Java, C</p>
          <p><strong>Web Development Technologies:</strong> HTML, CSS, JavaScript, Flutter</p>
          <p><strong>Software & Tools:</strong> Linux, SQL, PyTorch, Numpy, Pandas, fastai, ML, Deep Learning, NLP</p>
        </div>
      );
    case 'experience':
      return (
        <div className="left-align">
          <h3>IEEE RIT-B</h3>
          <p>Web Resource Execom Member</p>
          <p>Bangalore, India, Hybrid</p>
          <p>Jan 2024 – Present</p>
          <ul>
            <li>Led a team in maintaining the IEEE RIT-B website, ensuring seamless user experience and functionality. Contributed
significantly to the website’s UI by leveraging advanced frameworks like ReactJS, Tailwind CSS, and NextJS, resulting in
a more intuitive and visually appealing interface.</li>
          </ul>
          <h3>GirlScript Summer of Code</h3>
          <p>Open Source Contributor</p>
          <p>India, Remote</p>
          <p>May 2023 – Aug 2023</p>
          <ul>
            <li>Ranked 331 in quine.</li>
            <li>Contributed to the UI by writing media queries for the ISKON-based project Moksh to make it responsive.</li>
          </ul>
        </div>
      );
    /*case 'projects':
      return (
        <div className="left-align">
          <h3>Tax Craft</h3>
          <p>Python, Jupyter notebook, Langchain, Streamlit, APIs</p>
          <p>Oct 2023</p>
          <ul>
            <li>Used LLM to read PDFs and help users with tax deduction methods.</li>
          </ul>
          <h3>Club Fusion</h3>
          <p>Dart, Flutter</p>
          <p>Oct 2023</p>
          <ul>
            <li>Part of an intra-internship at Ramaiah Institute of Technology.</li>
            <li>Developed a platform for club recruitment and notifications.</li>
          </ul>
          <h3>Green Chips</h3>
          <p>HTML, CSS, JavaScript, Python</p>
          <p>Aug 2023</p>
          <ul>
            <li>Developed as part of Smart India Hackathon.</li>
            <li>Provided a solution for E-Waste management to maximize consumer profit.</li>
          </ul>
        </div>
      );*/
    case 'certifications':
      return (
        <div className="left-align">
          <h3>ISRO: Geodata Processing using Python</h3>
          <p>Jan 2024</p>
          <p>Skills: Pandas, Geopandas, Numpy, Matplotlib</p>
          <h3>The Arcade - Google Cloud</h3>
          <p>April 2023</p>
          <p>Skills: Kubernetes, Identity and Access Management (IAM), Google Sheets</p>
          <h3>Python for Data Science, AI and Development</h3>
          <p>June 2023</p>
          <p>Skills: Numpy, Python, Pandas</p>
        </div>
      );
    case 'international-membership':
      return (
        <div className="left-align">
          <p>IEEE Membership | Feb 2024</p>
          <p>IEEE Computer Society | Feb 2024</p>
        </div>
      );
    case 'honors-awards':
      return (
        <div className="left-align">
          <div className="honor-award">
            <span className="award-title">Rajyapuraskar Award</span>
            <span className="award-date"> | June 2019</span>
          </div>
          
          <div className="honor-award">
            <span className="award-title">INCEF Gold Medal</span>
            <span className="award-date"> | May 2019</span>
          </div>
        </div>
      );
    case 'contact':
      return (
        <div className="left-align">
          <p>Feel free to reach out via <a href="mailto:vkabhishek04@gmail.com">email</a> or connect with me on <a href="https://www.linkedin.com/in/abhishek-v-k-574846248/">LinkedIn</a>.</p>
        </div>
      );
    default:
      return null;
  }
};

export default App;
