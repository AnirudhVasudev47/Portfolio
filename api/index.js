// This is the main API handler for Vercel
import express from 'express';
import { Pool, neonConfig } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-serverless';
import ws from 'ws';
import * as schema from '../shared/schema.js';
import dotenv from 'dotenv';

// Setup for serverless environment
dotenv.config();
neonConfig.webSocketConstructor = ws;

// Database connection
if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL must be set");
}

const pool = new Pool({ connectionString: process.env.DATABASE_URL });
const db = drizzle({ client: pool, schema });

// Create Express app
const app = express();
app.use(express.json());

// API Routes
// Projects endpoints
app.get('/api/projects', async (req, res) => {
  try {
    const projects = await db.select().from(schema.projects);
    res.json(projects);
  } catch (error) {
    console.error('Error fetching projects:', error);
    res.status(500).json({ error: 'Failed to fetch projects' });
  }
});

app.get('/api/projects/:id', async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const [project] = await db.select().from(schema.projects).where(schema.projects.id.equals(id));
    
    if (!project) {
      return res.status(404).json({ error: 'Project not found' });
    }
    
    res.json(project);
  } catch (error) {
    console.error('Error fetching project:', error);
    res.status(500).json({ error: 'Failed to fetch project' });
  }
});

// Skills endpoints
app.get('/api/skills', async (req, res) => {
  try {
    const skills = await db.select().from(schema.skills);
    res.json(skills);
  } catch (error) {
    console.error('Error fetching skills:', error);
    res.status(500).json({ error: 'Failed to fetch skills' });
  }
});

app.get('/api/skills/:id', async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const [skill] = await db.select().from(schema.skills).where(schema.skills.id.equals(id));
    
    if (!skill) {
      return res.status(404).json({ error: 'Skill not found' });
    }
    
    res.json(skill);
  } catch (error) {
    console.error('Error fetching skill:', error);
    res.status(500).json({ error: 'Failed to fetch skill' });
  }
});

// Experiences endpoints
app.get('/api/experiences', async (req, res) => {
  try {
    const experiences = await db.select().from(schema.experiences);
    res.json(experiences);
  } catch (error) {
    console.error('Error fetching experiences:', error);
    res.status(500).json({ error: 'Failed to fetch experiences' });
  }
});

app.get('/api/experiences/:id', async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const [experience] = await db.select().from(schema.experiences).where(schema.experiences.id.equals(id));
    
    if (!experience) {
      return res.status(404).json({ error: 'Experience not found' });
    }
    
    res.json(experience);
  } catch (error) {
    console.error('Error fetching experience:', error);
    res.status(500).json({ error: 'Failed to fetch experience' });
  }
});

// Messages endpoint
app.post('/api/messages', async (req, res) => {
  try {
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
    
    const [createdMessage] = await db.insert(schema.messages).values(newMessage).returning();
    res.status(201).json(createdMessage);
  } catch (error) {
    console.error('Error creating message:', error);
    res.status(500).json({ error: 'Failed to create message' });
  }
});

// Export for serverless use
export default app;