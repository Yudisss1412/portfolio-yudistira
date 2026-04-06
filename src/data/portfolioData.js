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
      title: "Clothing Store",
      description: "E-commerce clothing store with product pages, login system, and shopping features. Built with modern UI/UX design.",
      tech: ["HTML", "CSS", "JavaScript", "UI/UX Design"],
      image: "/Screenshot (1895).png",
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Clothing Store - Product Detail",
      description: "Product detail page featuring outdoor and lifestyle products with interactive shopping experience.",
      tech: ["HTML", "CSS", "JavaScript", "Responsive Design"],
      image: "/Screenshot (1897).png",
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
