import { z } from "zod";

// Project type
export interface Project {
  id: number;
  title: string;
  description: string;
  image?: string;
  technologies: string[];
  githubUrl?: string;
  demoUrl?: string;
  featured: boolean;
  createdAt: string;
}

// Experience type
export interface Experience {
  id: number;
  company: string;
  position: string;
  startDate: string;
  endDate?: string | null;
  description: string;
  skills?: string[];
  order?: number;
  createdAt: string;
}

// Skill type
export interface Skill {
  id: number;
  name: string;
  category: string;
  icon?: string;
  level: number;
  createdAt: string;
}

// Message type
export interface Message {
  id: number;
  name: string;
  email: string;
  subject?: string;
  message: string;
  read: boolean;
  createdAt: string;
}

// Form validation schemas
export const messageSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  subject: z.string().optional(),
  message: z.string().min(1, "Message is required")
});

export type MessageInput = z.infer<typeof messageSchema>;