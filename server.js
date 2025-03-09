import express from 'express';
import cors from 'cors';

const app = express();
const port = 8000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// Personal data
const educationData = [
  {
    degree: 'Diploma - Computer Program and Analysis',
    school: 'Humber Polytechnic, Co-op Stream',
    year: '2024',
    description: 'Dean\'s List Winter 2024, Summer 2024. Key Courses: Database Concepts, Database Programming, Systems Design'
  }
];

const experienceData = [
  {
    title: 'Data and AI Summer Trainee',
    company: 'EMS, Sao Paulo',
    period: 'Oct – Dec 2024',
    description: 'Developed SQL queries to analyze customer purchase patterns. Conducted data collection & analysis on customer behavior and market trends. Strengthened SQL and Python skills through hands-on experience in a real-world project. Collaborated with cross-functional teams to understand business data requirements'
  }
];

const overviewData = {
  name: 'GUILHERME BERNARDINO BERGAMO',
  title: 'Data & Software Developer',
  summary: 'Seeking a Data co-op Internship for Summer 2025 at Canada Life to apply expertise in data management, cleaning data, and data analysis. Data-driven problem solver with a strong foundation in statistics, data analysis, and consulting methodologies. Experience in programming, data visualization, and business intelligence. Strong communication and teamwork skills, adaptable to fast-paced environments.',
  hobbies: ['Gym', 'Gaming', 'Reading books', 'Light novels', 'Learning Japanese']
};

const skillsData = {
  technical: [
    'Programming Languages: HTML, CSS, Java, JavaScript, Python, SQL',
    'Data Management & Analysis: Microsoft SQL Server, Database Administration',
    'Frameworks and Libraries: Bootstrap, React, ReactNative',
    'Cloud and Platforms: AWS, Databricks, Oracle Developer, PowerBI, Github Version Control'
  ],
  soft: [
    'Excellent time management',
    'Adaptability under pressure',
    'Excellent Communication skills',
    'Problem Solving',
    'Team Collaboration'
  ]
};

const projectsData = [
  {
    title: 'Database Management System',
    description: 'Developed a system to manage student records with functions to add, update, clear, view, and delete entries in the database. Wrote optimized queries and scripts using Python and SQLite. Integrated error handling to ensure data integrity and improve usability.',
    technologies: ['Python', 'SQLite'],
    image: '/images/database-project.png',
    githubUrl: 'https://github.com/GuilhermeBergamo-SectionC/Student-Database-Managament-System'
  },
  {
    title: 'Futuristic Website',
    description: 'Designed a responsive website for a fictional company using HTML, CSS, and Bootstrap. Created a visually appealing layout and incorporated user-friendly navigation.',
    technologies: ['HTML', 'CSS', 'Bootstrap'],
    image: '/images/retro-nft.jpg',
    githubUrl: 'https://github.com/GuilhermeBergamo-SectionC/Assignament2-Web'
  }
];

// Routes
app.get('/getEdu', (req, res) => {
  res.json(educationData);
});

app.get('/getExp', (req, res) => {
  res.json(experienceData);
});

app.get('/getOverview', (req, res) => {
  res.json(overviewData);
});

app.get('/getSkills', (req, res) => {
  res.json(skillsData);
});

app.get('/getProjects', (req, res) => {
  res.json(projectsData);
});

// Start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
}); 