export const portfolioData = {
  hero: {
    name: "ARYAN SINGH",
    title: "B.Tech CSE Student | Data Science & Machine Learning",
    description: "B.Tech CSE student specializing in Data Science & Machine Learning, passionate about technology, AI and building practical solutions.",
    github: "https://github.com/adiiibot321",
    linkedin: "https://www.linkedin.com/in/aryan-singh-a34811376/",
    email: "aryansingh06267@gmail.com",
    // We'll require the user to drop the image in src/assets/profile.jpg
    image: "./profile.png"
  },
  about: {
    label: "// ABOUT",
    title: "About Me",
    text1: "I am a B.Tech Computer Science Engineering student at Lovely Professional University, specializing in Data Science and Machine Learning.",
    interests: [
      "Data Science",
      "Artificial Intelligence",
      "Machine Learning",
      "Programming",
      "Web technologies",
      "Building practical technology solutions",
      "Problem solving"
    ],
    text2: "My learning focus is to continuously improve my programming, data and AI skills by working on practical projects.",
    text3: "I also enjoy working in teams, communicating ideas and taking leadership responsibilities."
  },
  education: {
    label: "// EDUCATION",
    title: "Academic Background",
    degree: "B.Tech — Computer Science Engineering",
    specialization: "Data Science & Machine Learning",
    institution: "Lovely Professional University",
    currentYear: "2nd Year",
    graduation: "2029",
    additionalLearning: "Data Science & Machine Learning with UpGrad"
  },
  skills: {
    label: "// SKILLS",
    title: "Technical Skills",
    categories: [
      {
        title: "Languages",
        items: ["Python", "Java", "C", "SQL", "JavaScript"]
      },
      {
        title: "Technologies",
        items: ["HTML", "CSS", "ESP32", "Embedded Systems", "Data Science", "Machine Learning"]
      },
      {
        title: "Tools",
        items: ["MySQL", "Git", "GitHub", "VS Code", "Proteus"]
      },
      {
        title: "Soft Skills",
        items: ["Leadership", "Communication", "Team Collaboration", "Problem Solving"]
      }
    ]
  },
  projects: {
    label: "// PROJECTS",
    title: "Things I've Built",
    items: [
      {
        title: "CAREERLENS AI",
        type: "Hackathon Project",
        description: "AI platform for career readiness, portfolio verification, and roadmap insights.",
        features: [
          { title: "Career Analysis", description: "Automated resume & GitHub verification." },
          { title: "Readiness Insights", description: "Portfolio gap analysis & career roadmaps." },
          { title: "Interactive UI", description: "Responsive dashboard with analytics & dark mode." }
        ],
        contribution: [
          { title: "Frontend & UI", description: "Built the responsive interface and visual system." },
          { title: "User Flow", description: "Designed the interactive dashboard experience." }
        ],
        technologies: [
          "React", "TypeScript", "Vite", "Tailwind CSS", "Recharts", "Framer Motion", "Python", "FastAPI", "SQLite", "Gemini API", "GitHub API"
        ],
        github: "https://github.com/aaditya-kumar666/careerlens-AI"
      },
      {
        title: "SMART WASTE SEGREGATION",
        type: "Embedded Systems",
        description: "Automated offline system that classifies wet/dry waste at the source.",
        features: [
          { title: "Detection", description: "IR & moisture sensors classify incoming waste." },
          { title: "Segregation", description: "ESP32 & servo motor auto-direct waste to bins." },
          { title: "Monitoring", description: "OLED display shows real-time bin status." }
        ],
        hardware: [
          { title: "Processing", description: "ESP32-32S, SG90 Servo, Comparator." },
          { title: "Sensors", description: "IR Sensors, Moisture Sensor, OLED SSD1306." }
        ],
        technologies: [
          "ESP32", "Arduino", "IR Sensors", "Moisture Sensor", "Servo Motor", "OLED", "Proteus"
        ]
      },
      {
        title: "MOVIE DATASET ANALYSIS",
        type: "Data Analysis",
        description: "Exploratory data analysis and preprocessing on a 5,000+ record dataset.",
        features: [
          { title: "Exploration", description: "Inspected 28 attributes including budget & gross." },
          { title: "Data Cleaning", description: "Calculated and handled missing value percentages." },
          { title: "Preprocessing", description: "Processed financial data for predictive modeling." }
        ],
        technologies: [
          "Python", "Pandas", "NumPy", "Jupyter Notebook"
        ]
      }
    ]
  },
  experience: {
    label: "// EXPERIENCE",
    title: "Community & Experience",
    role: "Computer Education Volunteer",
    organization: "Prerna NGO / Study Hall",
    type: "Community Development Project",
    date: "2026",
    description: "Designed and conducted structured computer education sessions for school students. Focused on foundational digital literacy, teaching practical software skills such as Microsoft Word and Mail Merge, empowering students with hands-on computer experience."
  },
  certifications: {
    label: "// CERTIFICATIONS",
    title: "Certifications",
    items: [
      {
        title: "Python Programming — Microsoft",
        issuer: "Skill India Digital Hub",
        details: "40 Hours",
        date: "November 16, 2025",
        link: "./certificates/python-programming.pdf"
      },
      {
        title: "Custom Reports in Google Analytics",
        issuer: "Coursera",
        details: "Project Certificate",
        date: "November 15, 2025",
        link: "./certificates/google-analytics.pdf"
      },
      {
        title: "Artificial Intelligence Certification",
        issuer: "Infosys Springboard",
        details: ""
      },
      {
        title: "Data Science & Machine Learning Specialization",
        issuer: "UpGrad",
        details: ""
      }
    ]
  },
  achievements: {
    label: "// ACHIEVEMENTS",
    title: "Milestones",
    items: [
      "Participated in a Hackathon and contributed to the development/presentation of CareerLens AI.",
      "Completed Microsoft's 40-hour Python Programming course through Skill India Digital Hub.",
      "Completed a Community Development Project involving computer education sessions for school students."
    ]
  },
  careerGoal: {
    label: "// GOAL",
    title: "What's Next",
    text: "To build a strong career in Data Science, Artificial Intelligence and Machine Learning while continuously learning, developing practical projects and creating technology that solves real-world problems."
  },
  resume: {
    label: "// RESUME",
    title: "Curriculum Vitae",
    description: "View my full resume inline or download a copy for your records.",
    fileUrl: "./resume.pdf"
  },
  contact: {
    label: "// CONTACT",
    title: "Get In Touch",
    text: "Have a project in mind or want to collaborate? Let's connect.",
    email: "aryansingh06267@gmail.com",
    github: "https://github.com/adiiibot321",
    linkedin: "https://www.linkedin.com/in/aryan-singh-a34811376/"
  },
  navLinks: [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Resume", href: "#resume" },
    { name: "Certificates", href: "#certificates" },
    { name: "Education", href: "#education" },
    { name: "Experience", href: "#experience" },
    { name: "Achievements", href: "#achievements" },
    { name: "Contact", href: "#contact" },
  ]
};
