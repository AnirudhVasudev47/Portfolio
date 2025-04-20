import { db } from "./db";
import { sql, eq } from "drizzle-orm";
import { 
  users, projects, experiences, skills, messages,
  insertUserSchema, insertProjectSchema, insertExperienceSchema, insertSkillSchema
} from "@shared/schema";

// Sample data for the database
const sampleProjects = [
  {
    title: "Personal Portfolio Website",
    description: "A responsive personal portfolio website built with React, TypeScript and Tailwind CSS.",
    image: "/images/projects/portfolio.jpg",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Node.js", "PostgreSQL"],
    githubUrl: "https://github.com/anirudhvasudev/portfolio",
    demoUrl: "https://anirudhvasudev.com",
    featured: true
  },
  {
    title: "E-commerce Platform",
    description: "A full-stack e-commerce platform with product catalog, shopping cart, and payment integration.",
    image: "/images/projects/ecommerce.jpg",
    technologies: ["React", "Redux", "Node.js", "Express", "MongoDB", "Stripe"],
    githubUrl: "https://github.com/anirudhvasudev/ecommerce",
    demoUrl: "https://shop-demo.anirudhvasudev.com",
    featured: true
  },
  {
    title: "Task Management App",
    description: "A productivity app for managing tasks, projects and deadlines with team collaboration features.",
    image: "/images/projects/task-app.jpg",
    technologies: ["Vue.js", "Vuex", "Firebase", "Cloud Functions", "Progressive Web App"],
    githubUrl: "https://github.com/anirudhvasudev/task-manager",
    demoUrl: "https://tasks.anirudhvasudev.com",
    featured: false
  }
];

const sampleExperiences = [
  {
    company: "Tech Innovations Ltd",
    position: "Senior Frontend Developer",
    startDate: "2022-03",
    endDate: "Present",
    description: "Lead the frontend development team in building modern, responsive web applications using React and TypeScript. Implemented CI/CD pipelines and improved code quality through automated testing.",
    skills: ["React", "TypeScript", "Redux", "Jest", "CI/CD", "Team Leadership"],
    order: 1
  },
  {
    company: "Webscale Solutions",
    position: "Full Stack Developer",
    startDate: "2019-06",
    endDate: "2022-02",
    description: "Developed and maintained various web applications using React, Node.js and PostgreSQL. Collaborated with UX/UI designers to implement responsive designs and ensure accessibility compliance.",
    skills: ["React", "Node.js", "Express", "PostgreSQL", "Docker", "Agile"],
    order: 2
  },
  {
    company: "Digital Creators Agency",
    position: "Frontend Developer",
    startDate: "2017-09",
    endDate: "2019-05",
    description: "Created responsive and accessible websites for clients in various industries. Worked closely with designers to translate mockups into functional web pages.",
    skills: ["JavaScript", "HTML", "CSS", "Responsive Design", "jQuery"],
    order: 3
  }
];

// const sampleSkills = [
//   {
//     name: "JavaScript",
//     category: "Frontend",
//     icon: "SiJavascript",
//     level: 95
//   },
//   {
//     name: "TypeScript",
//     category: "Frontend",
//     icon: "SiTypescript",
//     level: 90
//   },
//   {
//     name: "React",
//     category: "Frontend",
//     icon: "SiReact",
//     level: 95
//   },
//   {
//     name: "Vue.js",
//     category: "Frontend",
//     icon: "SiVuedotjs",
//     level: 80
//   },
//   {
//     name: "HTML5",
//     category: "Frontend",
//     icon: "SiHtml5",
//     level: 95
//   },
//   {
//     name: "CSS3",
//     category: "Frontend",
//     icon: "SiCss3",
//     level: 90
//   },
//   {
//     name: "Tailwind CSS",
//     category: "Frontend",
//     icon: "SiTailwindcss",
//     level: 85
//   },
//   {
//     name: "Node.js",
//     category: "Backend",
//     icon: "SiNodedotjs",
//     level: 85
//   },
//   {
//     name: "Express",
//     category: "Backend",
//     icon: "SiExpress",
//     level: 85
//   },
//   {
//     name: "PostgreSQL",
//     category: "Backend",
//     icon: "SiPostgresql",
//     level: 80
//   },
//   {
//     name: "MongoDB",
//     category: "Backend",
//     icon: "SiMongodb",
//     level: 75
//   },
//   {
//     name: "GraphQL",
//     category: "Backend",
//     icon: "SiGraphql",
//     level: 70
//   },
//   {
//     name: "Docker",
//     category: "DevOps",
//     icon: "SiDocker",
//     level: 75
//   },
//   {
//     name: "Git",
//     category: "DevOps",
//     icon: "SiGit",
//     level: 90
//   },
//   {
//     name: "Jest",
//     category: "Testing",
//     icon: "SiJest",
//     level: 80
//   },
//   {
//     name: "Cypress",
//     category: "Testing",
//     icon: "SiCypress",
//     level: 75
//   },
//   {
//     name: "Figma",
//     category: "Design",
//     icon: "SiFigma",
//     level: 70
//   }
// ];

const sampleSkills = [
  //Frontend Skills
  {
    name: "JavaScript",
    category: "Frontend",
    icon: "SiJavascript",
    level: 95
  },
  {
    name: "TypeScript",
    category: "Frontend",
    icon: "SiTypescript",
    level: 90
  },
  {
    name: "React",
    category: "Frontend",
    icon: "SiReact",
    level: 90
  },
  {
    name: "Next.js",
    category: "Frontend",
    icon: "SiNextdotjs",
    level: 85
  },
  {
    name: "HTML5",
    category: "Frontend",
    icon: "SiHtml5",
    level: 95
  },
  {
    name: "CSS3",
    category: "Frontend",
    icon: "SiCss3",
    level: 90
  },
  {
    name: "Tailwind CSS",
    category: "Frontend",
    icon: "SiTailwindcss",
    level: 85
  },

  //Backend Skills
  {
    name: "Node.js",
    category: "Backend",
    icon: "SiNodedotjs",
    level: 90
  },
  {
    name: "Express",
    category: "Backend",
    icon: "SiExpress",
    level: 85
  },
  {
    name: "MongoDB",
    category: "Backend",
    icon: "SiMongodb",
    level: 85
  },
  {
    name: "MySQL",
    category: "Backend",
    icon: "SiMysql",
    level: 75
  },

  //DevOps Skills
  {
    name: "Git",
    category: "DevOps",
    icon: "SiGit",
    level: 90
  },
  {
    name: "Docker",
    category: "DevOps",
    icon: "SiDocker",
    level: 75
  },
  {
    name: "Kubernetes",
    category: "DevOps",
    icon: "SiKubernetes",
    level: 70
  },

  // Devops Skills
  {
    name: "Docker",
    category: "DevOps",
    icon: "SiDocker",
    level: 70
  },
  {
    name: "GCP",
    category: "DevOps",
    icon: "SiGooglecloud",
    level: 65
  },
  {
    name: "AWS",
    category: "DevOps",
    icon: "SiAmazonaws",
    level: 70
  },

  // Design Skills
  {
    name: "Figma",
    category: "Design",
    icon: "SiFigma",
    level: 80
  },
  {
    name: "Photoshop",
    category: "Design",
    icon: "SiAdobephotoshop",
    level: 70
  },
  

  // CMS Skills
  {
    name: "WordPress",
    category: "CMS",
    icon: "SiWordpress",
    level: 80
  },
  {
    name: "Elementor",
    category: "CMS",
    icon: "SiElementor",
    level: 75
  },
  
];

// Seed the database with sample data
async function seed() {
  console.log("Seeding database...");

  try {
    // Create admin user
    const adminUser = {
      username: "admin",
      password: "adminpassword", // In a real app, this would be hashed
      firstName: "Anirudh",
      lastName: "Vasudev",
      email: "admin@example.com",
      role: "admin"
    };

    // Check if user already exists
    const existingUser = await db.select().from(users).where(eq(users.username, "admin"));
    if (existingUser.length === 0) {
      await db.insert(users).values(adminUser);
      console.log("Admin user created");
    } else {
      console.log("Admin user already exists");
    }

    // Insert projects if they don't exist
    const existingProjects = await db.select().from(projects);
    if (existingProjects.length === 0) {
      await db.insert(projects).values(sampleProjects);
      console.log(`${sampleProjects.length} projects created`);
    } else {
      console.log("Projects already exist");
    }

    // Insert experiences if they don't exist
    const existingExperiences = await db.select().from(experiences);
    if (existingExperiences.length === 0) {
      await db.insert(experiences).values(sampleExperiences);
      console.log(`${sampleExperiences.length} experiences created`);
    } else {
      console.log("Experiences already exist");
    }

    // Insert skills if they don't exist
    const existingSkills = await db.select().from(skills);
    if (existingSkills.length === 0) {
      await db.insert(skills).values(sampleSkills);
      console.log(`${sampleSkills.length} skills created`);
    } else {
      console.log("Skills already exist");
    }

    console.log("Database seeding completed successfully");
  } catch (error) {
    console.error("Error seeding database:", error);
  }
}

// Run the seed function
seed().catch(console.error);