export const ROTATING_TITLES = [
  'Software Engineer',
  'Full Stack Developer',
  'Problem Solver',
  'AI Enthusiast',
]

export const STATS = [
  { value: '8.81', label: 'CGPA' },
  { value: '5+', label: 'Projects' },
  { value: '15+', label: 'Technologies' },
  { value: '4+', label: 'Certifications' },
]

export const STORY_CHAPTERS = [
  {
    index: 'Chapter 01',
    color: '#3B82F6',
    title: 'The Beginning',
    subtitle: 'Computer Science student - Nitte Meenakshi Institute of Technology - CGPA 8.81',
    description: 'A Computer Science foundation shaped by curiosity, consistency, and hands-on project work.',
  },
  {
    index: 'Chapter 02',
    color: '#8B5CF6',
    title: 'The Builder',
    subtitle: 'From HTML basics to full-stack applications',
    description: 'I moved from basic interfaces to projects with APIs, databases, authentication, and deployment workflows.',
  },
  {
    index: 'Chapter 03',
    color: '#22D3EE',
    title: 'The Engineer',
    subtitle: 'Projects that solve specific problems',
    description: 'Each build focuses on a clear problem, a usable solution, and practical implementation details.',
  },
  {
    index: 'Chapter 04',
    color: '#3B82F6',
    title: 'The Future',
    subtitle: 'AI-assisted systems, web platforms, and useful products',
    description: 'My next step is joining a team where I can keep learning while contributing to reliable software.',
  },
]

export type Project = {
  id: string
  title: string
  tag: string
  description: string
  problem: string
  solution: string
  architecture: string
  technologies: string[]
  achievements: string[]
  github: string
  live?: string
  accentColor: string
  bgGradient: string
}

export const PROJECTS: Project[] = [
  {
    id: 'edubridge',
    accentColor: '#3B82F6',
    bgGradient: 'from-blue-900/30 via-slate-950 to-indigo-900/20',
    tag: '01 - AI Education Platform',
    title: 'Edubridge AI',
    description: 'AI-assisted education and career recommendation system for learners.',
    problem: 'Students often need clearer learning paths and career guidance based on their strengths.',
    solution: 'Built a platform that turns profile data into learning roadmaps, career matches, and analytics dashboards.',
    architecture: 'React client -> Node.js API -> MongoDB -> AI recommendation engine.',
    technologies: ['React', 'Node.js', 'MongoDB', 'AI APIs', 'Express', 'TypeScript'],
    achievements: ['Personalized analytics dashboard', 'Career matching', 'Learning path generation', 'Progress tracking'],
    github: 'https://github.com/shabbirhnadaf/EduBridge',
  },
  {
    id: 'contextcore',
    accentColor: '#8B5CF6',
    bgGradient: 'from-purple-900/30 via-slate-950 to-violet-900/20',
    tag: '02 - AI Repository Intelligence',
    title: 'ContextCore',
    description: 'AI platform for analyzing GitHub repositories and documentation.',
    problem: 'Developers spend time gathering context from unfamiliar codebases and large documentation sets.',
    solution: 'Designed an AI layer that ingests repo structure, summarizes codebases, and answers targeted questions.',
    architecture: 'Repository ingestion -> doc parsing -> vector search -> query engine -> React Q&A interface.',
    technologies: ['React', 'Node.js', 'AI APIs', 'Vector DB', 'TypeScript', 'Express'],
    achievements: ['Documentation understanding', 'Repository summarization', 'Context-aware Q&A', 'Knowledge extraction'],
    github: '#',
  },
  {
    id: 'resume',
    accentColor: '#22D3EE',
    bgGradient: 'from-cyan-900/30 via-slate-950 to-teal-900/20',
    tag: '03 - ATS Optimization Tool',
    title: 'AI Assisted Resume Scanner & Builder',
    description: 'ATS analyzer, resume scorer, keyword matcher, and resume builder.',
    problem: 'Candidates need clearer feedback on how their resume matches a job description.',
    solution: 'Created a product that runs ATS analysis, scores resume-to-job alignment, highlights missing keywords, and provides a dynamic builder.',
    architecture: 'React workflow -> scoring modules -> keyword analysis -> AI generation -> export pipeline.',
    technologies: ['React', 'Node.js', 'AI APIs', 'Resume parsing', 'TypeScript'],
    achievements: ['ATS compatibility analysis', 'Resume-to-job scoring', 'Keyword gap identification', 'Interactive builder'],
    github: 'https://github.com/shabbirhnadaf/ATSAnalyzer-and-resume-builder',
    live: 'https://ats-analyzer-and-resume-builder.vercel.app',
  },
  {
    id: 'ecommerce',
    accentColor: '#3B82F6',
    bgGradient: 'from-blue-900/20 via-slate-950 to-slate-900/30',
    tag: '04 - Full-Stack Commerce',
    title: 'E-Commerce Platform',
    description: 'Commerce experience with authentication, admin dashboard, payments, and product management.',
    problem: 'Merchants need a storefront with inventory, checkout, and admin tools.',
    solution: 'Built a full-stack platform covering storefront, cart, checkout, admin inventory, and payments integration.',
    architecture: 'React storefront -> API service layer -> MongoDB -> admin dashboard -> payments gateway.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Payments API', 'Express', 'JWT Auth'],
    achievements: ['JWT authentication', 'Admin dashboard', 'Payments integration', 'Product management'],
    github: 'https://github.com/shabbirhnadaf/E-commerce',
    live: 'https://stylemods.vercel.app',
  },
  {
    id: 'movies',
    accentColor: '#8B5CF6',
    bgGradient: 'from-purple-900/20 via-slate-950 to-indigo-900/20',
    tag: '05 - Real-Time Booking Experience',
    title: 'Movie Ticket Booking System',
    description: 'Cinema booking experience with real-time seat selection, scheduling, and authentication.',
    problem: 'Users need a fast and visual way to choose seats and book tickets.',
    solution: 'Built a booking flow with interactive seat maps, seat locking, and scheduling.',
    architecture: 'Interactive seat map UI -> real-time state -> booking logic -> auth layer -> scheduling modules.',
    technologies: ['React', 'Node.js', 'MongoDB', 'WebSocket', 'Authentication', 'Express'],
    achievements: ['Real-time seat availability', 'Interactive seat map', 'Conflict-free booking', 'Authentication'],
    github: '#',
  },
]

export const SKILLS: Record<string, string[]> = {
  Frontend: ['React', 'Tailwind CSS', 'Framer Motion', 'Three.js', 'TypeScript'],
  Backend: ['Node.js', 'Express', 'REST APIs', 'JWT Auth'],
  Databases: ['MongoDB', 'MySQL', 'Firebase'],
  Languages: ['JavaScript', 'TypeScript', 'Java', 'Python', 'R'],
  Tools: ['Git', 'Postman', 'Vite', 'GSAP', 'Figma'],
}

export const SKILL_COLORS: Record<string, string> = {
  Frontend: '#3B82F6',
  Backend: '#22D3EE',
  Databases: '#8B5CF6',
  Languages: '#34D399',
  Tools: '#F59E0B',
}

export const CERTIFICATIONS = [
  { title: 'MongoDB Node.js Developer Path', org: 'MongoDB University', icon: 'DB' },
  { title: 'Springboard Java Foundation', org: 'Springboard', icon: 'JV' },
  { title: 'R Programming Certification', org: 'Coursera', icon: 'R' },
  { title: 'Smart India Hackathon Participant', org: 'SIH - Government of India', icon: 'SIH' },
]

export const DSA_TOPICS = [
  { name: 'Data Structures', progress: 88 },
  { name: 'Algorithms', progress: 82 },
  { name: 'Graph Problems', progress: 74 },
  { name: 'Dynamic Programming', progress: 68 },
  { name: 'Competitive Programming', progress: 71 },
]

export const TERMINAL_COMMANDS: Record<string, string[]> = {
  help: ['Available commands: about, skills, projects, education, contact, clear'],
  about: [
    'Name: Shabbir Husensab Nadaf',
    'Role: Computer Science Engineering student',
    'CGPA: 8.81 | Bengaluru, Karnataka',
    'Focus: Full-stack systems and AI-powered products.',
  ],
  skills: [
    'Frontend: React, Tailwind, TypeScript, Three.js',
    'Backend: Node.js, Express, REST APIs',
    'Databases: MongoDB, MySQL, Firebase',
    'Languages: JavaScript, TypeScript, Java, Python',
    'Tools: Git, Vite, Postman, GSAP',
  ],
  projects: [
    '1. Edubridge AI - AI-powered education platform',
    '2. ContextCore - GitHub repository intelligence',
    '3. AI Resume Scanner & Builder - ATS optimization',
    '4. E-Commerce Platform - Full-stack commerce',
    '5. Movie Ticket Booking - Real-time seat booking',
  ],
  education: [
    'Institution: Nitte Meenakshi Institute of Technology',
    'Degree: Computer Science Engineering',
    'CGPA: 8.81',
  ],
  contact: [
    'Email: shabbirhnadaf@gmail.com',
    'Location: Bengaluru, Karnataka',
    'GitHub: github.com/shabbir-nadaf',
  ],
  clear: ['__CLEAR__'],
}
