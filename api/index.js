// api/index.js - Vercel compatible API handler for serverless deployment
const express = require('express');
const { Pool, neonConfig } = require('@neondatabase/serverless');
const { drizzle } = require('drizzle-orm/neon-serverless');
const { eq } = require('drizzle-orm');
const ws = require('ws');

// Setup for serverless environment
neonConfig.webSocketConstructor = ws;

// Define schema directly to avoid module import issues
const { pgTable, text, serial, timestamp, boolean, array } = require('drizzle-orm/pg-core');

// Define tables directly
const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
  firstName: text("first_name"),
  lastName: text("last_name"),
  email: text("email"),
  role: text("role").default("user"),
  createdAt: timestamp("created_at").defaultNow()
});

const projects = pgTable("projects", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  image: text("image"),
  technologies: array(text("technologies")),
  githubUrl: text("github_url"),
  demoUrl: text("demo_url"),
  featured: boolean("featured").default(false),
  createdAt: timestamp("created_at").defaultNow()
});

const experiences = pgTable("experiences", {
  id: serial("id").primaryKey(),
  company: text("company").notNull(),
  position: text("position").notNull(),
  startDate: text("start_date").notNull(),
  endDate: text("end_date"),
  description: text("description").notNull(),
  logoUrl: text("logo_url"),
  order: serial("order"),
});

const skills = pgTable("skills", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  category: text("category").notNull(),
  proficiency: serial("proficiency").notNull(),
  icon: text("icon"),
});

const messages = pgTable("messages", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  subject: text("subject"),
  message: text("message").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
  read: boolean("read").default(false),
});

// Create Express app
const app = express();
app.use(express.json());

// API handler for serverless function
const handler = async (req, res) => {
  // Check for database URL
  if (!process.env.DATABASE_URL) {
    return res.status(500).json({ error: "DATABASE_URL environment variable is not set" });
  }

  try {
    // Setup database connection
    const pool = new Pool({ connectionString: process.env.DATABASE_URL });
    const db = drizzle(pool);

    // Handling different API routes
    const { pathname } = new URL(req.url, `http://${req.headers.host}`);
    
    // Projects endpoints
    if (pathname === '/api/projects' && req.method === 'GET') {
      const projects_data = await db.select().from(projects);
      return res.status(200).json(projects_data);
    }
    
    // Get project by ID
    if (pathname.match(/^\/api\/projects\/\d+$/) && req.method === 'GET') {
      const id = parseInt(pathname.split('/').pop());
      const [project] = await db.select().from(projects).where(eq(projects.id, id));
      
      if (!project) {
        return res.status(404).json({ error: 'Project not found' });
      }
      
      return res.status(200).json(project);
    }
    
    // Skills endpoints
    if (pathname === '/api/skills' && req.method === 'GET') {
      const skills_data = await db.select().from(skills);
      return res.status(200).json(skills_data);
    }
    
    // Get skill by ID
    if (pathname.match(/^\/api\/skills\/\d+$/) && req.method === 'GET') {
      const id = parseInt(pathname.split('/').pop());
      const [skill] = await db.select().from(skills).where(eq(skills.id, id));
      
      if (!skill) {
        return res.status(404).json({ error: 'Skill not found' });
      }
      
      return res.status(200).json(skill);
    }
    
    // Experiences endpoints
    if (pathname === '/api/experiences' && req.method === 'GET') {
      const experiences_data = await db.select().from(experiences);
      return res.status(200).json(experiences_data);
    }
    
    // Get experience by ID
    if (pathname.match(/^\/api\/experiences\/\d+$/) && req.method === 'GET') {
      const id = parseInt(pathname.split('/').pop());
      const [experience] = await db.select().from(experiences).where(eq(experiences.id, id));
      
      if (!experience) {
        return res.status(404).json({ error: 'Experience not found' });
      }
      
      return res.status(200).json(experience);
    }
    
    // Messages endpoint
    if (pathname === '/api/messages' && req.method === 'POST') {
      const { name, email, subject, message } = req.body;
      
      if (!name || !email || !message) {
        return res.status(400).json({ error: 'Name, email, and message are required' });
      }
      
      const newMessage = {
        name,
        email,
        subject: subject || '',
        message,
        createdAt: new Date(),
        read: false
      };
      
      const [createdMessage] = await db.insert(messages).values(newMessage).returning();
      return res.status(201).json(createdMessage);
    }
    
    // Route not found
    return res.status(404).json({ error: 'API endpoint not found' });
  } catch (error) {
    console.error('API error:', error);
    return res.status(500).json({ error: 'Internal server error', details: error.message });
  } finally {
    // Ensure connection is closed in serverless environment
    try {
      pool?.end();
    } catch (e) {
      console.error('Error closing pool:', e);
    }
  }
};

// Export for serverless use
module.exports = (req, res) => {
  app(req, res, () => handler(req, res));
};