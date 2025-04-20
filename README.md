# Anirudh Vasudev - Professional Portfolio

A modern, interactive personal portfolio website showcasing Anirudh Vasudev's professional journey, skills, and projects using advanced web technologies.

![Portfolio Screenshot](public/assets/developer-8764521_1280%202.jpg)

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Database Schema](#database-schema)
- [API Endpoints](#api-endpoints)
- [Setup and Installation](#setup-and-installation)
- [Running the Application](#running-the-application)
  - [Local Development](#local-development)
  - [Production Deployment](#production-deployment)
  - [Using with Replit](#using-with-replit)
  - [Troubleshooting](#troubleshooting)
- [Development](#development)
- [Deployment](#deployment)
- [Future Enhancements](#future-enhancements)
- [License](#license)

## Overview

This portfolio website serves as a professional showcase for Anirudh Vasudev, a full-stack developer with a focus on backend technologies. The website features a responsive design, interactive UI components, and a dynamic content management system backed by a PostgreSQL database.

The site presents Anirudh's professional experience, technical skills, educational background, portfolio projects, and contact information in an engaging and accessible format.

## Features

- **Responsive Design**: Fully responsive layout that works seamlessly on mobile, tablet, and desktop devices
- **Section Navigation**: Smooth scrolling navigation to different sections of the portfolio
- **Interactive Components**: Engaging UI elements with hover effects and animations
- **Dynamic Content**: All content is served from a database, making it easy to update
- **Project Showcase**: Detailed presentation of professional projects with descriptions and links
- **Skills Visualization**: Categorized skill sets with visual indicators
- **Experience Timeline**: Chronological display of professional experience
- **Contact Form**: Functional contact form that stores messages in the database
- **Resume Download**: Option to download resume/CV
- **Hamburger Menu**: Collapsible navigation menu for mobile and medium screen sizes
- **Database Integration**: PostgreSQL database for content management
- **API Endpoints**: RESTful API for content management

## Technologies Used

### Frontend
- React (TypeScript)
- Tailwind CSS for styling
- React Hook Form for form handling
- React Query for data fetching
- Zod for schema validation
- React Icons for icon components

### Backend
- Express.js for the server
- PostgreSQL database for storage
- Drizzle ORM for database operations
- Vite for development and bundling

### Tools & Libraries
- Shadcn UI component library
- TypeScript for type safety
- RESTful API architecture
- Responsive design principles

## Project Structure

```
├── client/
│   ├── src/
│   │   ├── components/       # UI components
│   │   ├── pages/            # Page components
│   │   ├── hooks/            # Custom React hooks
│   │   ├── lib/              # Utility functions and libraries
│   │   └── main.tsx          # Entry point
├── server/
│   ├── routes.ts             # API routes
│   ├── storage.ts            # Database interactions
│   ├── vite.ts               # Vite configuration for development
│   └── index.ts              # Server entry point
├── shared/
│   └── schema.ts             # Database schema definitions
├── public/
│   └── assets/               # Static assets (images, files)
└── db/                       # Database migration scripts
```

## Database Schema

The application uses the following database models:

1. **Users**
   - id: Primary key
   - username: Username for authentication
   - password: Hashed password

2. **Projects**
   - id: Primary key
   - title: Project title
   - description: Detailed project description
   - technologies: Array of technologies used
   - imageUrl: URL to project image
   - liveUrl: URL to live project (optional)
   - githubUrl: URL to GitHub repository (optional)
   - featured: Boolean flag for featured projects

3. **Experiences**
   - id: Primary key
   - company: Company name
   - position: Job title
   - startDate: Employment start date
   - endDate: Employment end date (null for current positions)
   - description: Job description and achievements

4. **Skills**
   - id: Primary key
   - name: Skill name
   - category: Category (Frontend, Backend, etc.)
   - proficiency: Skill proficiency level (1-5)
   - icon: Icon identifier

5. **Messages**
   - id: Primary key
   - name: Sender's name
   - email: Sender's email
   - subject: Message subject
   - message: Message body
   - createdAt: Timestamp of creation
   - read: Boolean flag for read status

## API Endpoints

### Projects
- `GET /api/projects` - Get all projects
- `GET /api/projects/:id` - Get a specific project
- `POST /api/projects` - Create a new project
- `PUT /api/projects/:id` - Update a project
- `DELETE /api/projects/:id` - Delete a project

### Experiences
- `GET /api/experiences` - Get all experiences
- `GET /api/experiences/:id` - Get a specific experience
- `POST /api/experiences` - Create a new experience
- `PUT /api/experiences/:id` - Update an experience
- `DELETE /api/experiences/:id` - Delete an experience

### Skills
- `GET /api/skills` - Get all skills
- `GET /api/skills/:id` - Get a specific skill
- `POST /api/skills` - Create a new skill
- `PUT /api/skills/:id` - Update a skill
- `DELETE /api/skills/:id` - Delete a skill

### Messages
- `GET /api/messages` - Get all messages
- `POST /api/messages` - Create a new message
- `PUT /api/messages/:id/read` - Mark a message as read

## Setup and Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd portfolio-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file with the following:
   ```
   DATABASE_URL=postgresql://username:password@localhost:5432/portfolio
   ```

4. **Initialize the database**
   ```bash
   npm run db:push
   ```

5. **Seed the database with initial data (optional)**
   ```bash
   npm run db:seed
   ```

6. **Start the development server**
   ```bash
   npm run dev
   ```

## Running the Application

### Local Development

1. **Start the development server**
   ```bash
   npm run dev
   ```
   This will start both the frontend and backend servers simultaneously. The application will be available at `http://localhost:5000`.

2. **Access the application**
   Open your browser and navigate to `http://localhost:5000` to view the portfolio website.

3. **API access**
   The API endpoints are available at `http://localhost:5000/api/*` for testing and development purposes.

### Production Deployment

For production environments:

1. **Build the application**
   ```bash
   npm run build
   ```

2. **Start the production server**
   ```bash
   npm start
   ```

### Using with Replit

This application is designed to work seamlessly with Replit:

1. **Fork the Repl**
   Fork this Repl to your own Replit account.

2. **Set up secrets**
   In the Replit environment, add the following secrets:
   - `DATABASE_URL`: Your PostgreSQL database URL (this is automatically set up when you create a database in Replit)

3. **Run the application**
   Click the "Run" button in Replit. The application will automatically start and be available at your Replit URL.

4. **Database setup**
   If running for the first time, open the Shell and run:
   ```bash
   npm run db:push
   npm run db:seed
   ```
   to set up the database schema and seed it with initial data.

### Troubleshooting

- **Database connection issues**: Ensure your PostgreSQL database is running and the connection string in the `.env` file is correct.
- **Port conflicts**: If port 5000 is already in use, you can modify the port in `server/index.ts`.
- **Missing dependencies**: Run `npm install` to ensure all dependencies are properly installed.
- **Build errors**: Check the console for specific error messages. Common issues include TypeScript errors that need to be fixed before building.

## Development

### Adding New Content

To add new content to the portfolio:

1. **Projects**: Add new projects through the API endpoint or directly to the database.
2. **Skills**: Add new skills with appropriate categories and icons.
3. **Experiences**: Add professional experiences to the timeline.

### Customizing the UI

1. **Styling**: Modify Tailwind classes in component files to change styling.
2. **Components**: Add or modify components in the `client/src/components` directory.
3. **Theme**: Edit `theme.json` to change theme colors.

## Deployment

This application can be deployed using the following steps:

1. **Build the application**
   ```bash
   npm run build
   ```

2. **Deploy to a hosting service**
   The application can be deployed to Replit, Vercel, Netlify, or any other hosting service that supports Node.js applications.

## Future Enhancements

- Project filtering by technology or category
- Blog section for tech articles
- Project case studies with detailed galleries
- Integration with GitHub for automated project updates
- Admin dashboard for content management

## License

This project is licensed under the MIT License.