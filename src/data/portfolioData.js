// Portfolio Data Configuration
// EDIT THIS FILE with your actual data

export const portfolioData = {
  // Basic Info
  name: "Your Name",
  title: "Frontend Developer | UI/UX Enthusiast",
  tagline: "I build beautiful, performant web experiences",
  
  // About Section
  about: {
    bio: "Tell us about yourself - your background, passion, and what drives you as a developer.",
    image: "", // path to your photo
  },

  // Skills Section
  skills: [
    { name: "Laravel", level: 90 },
    { name: "PHP", level: 88 },
    { name: "MySQL", level: 85 },
    { name: "JavaScript", level: 85 },
    { name: "Vite", level: 80 },
    { name: "Tailwind CSS", level: 88 },
    { name: "Git", level: 82 },
    { name: "Midtrans", level: 78 },
  ],

  // Projects Section
  projects: [
    {
      title: "Project One",
      description: "Description of your amazing project goes here...",
      tech: ["React", "Tailwind", "Vite"],
      image: "", // path to project screenshot
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Project Two",
      description: "Another impressive project description...",
      tech: ["Next.js", "TypeScript"],
      image: "",
      liveUrl: "#",
      githubUrl: "#",
    },
  ],

  // Contact Section
  contact: {
    email: "your.email@example.com",
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourusername",
    twitter: "https://twitter.com/yourusername",
  },

  // Navigation Links
  navLinks: [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ],
};
