# Anirudh Vasudev - Professional Portfolio

A modern, interactive personal portfolio website showcasing Anirudh Vasudev's professional journey, skills, and projects using React and Vite as a static site.

![Portfolio Screenshot](public/assets/developer-8764521_1280%202.jpg)

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
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

This portfolio website serves as a professional showcase for Anirudh Vasudev, a full-stack developer with a focus on frontend technologies. The website features a responsive design, interactive UI components, and is built as a static site for optimal performance and easy deployment.

The site presents Anirudh's professional experience, technical skills, educational background, portfolio projects, and contact information in an engaging and accessible format.

## Features

- **Responsive Design**: Fully responsive layout that works seamlessly on mobile, tablet, and desktop devices
- **Section Navigation**: Smooth scrolling navigation to different sections of the portfolio
- **Interactive Components**: Engaging UI elements with hover effects and animations
- **Static Content**: All content is served from static JSON files for fast loading
- **Project Showcase**: Detailed presentation of professional projects with descriptions and links
- **Skills Visualization**: Categorized skill sets with visual indicators
- **Experience Timeline**: Chronological display of professional experience
- **Contact Form**: Functional contact form with client-side validation
- **Resume Download**: Option to download resume/CV
- **Hamburger Menu**: Collapsible navigation menu for mobile and medium screen sizes

## Technologies Used

### Frontend
- React (TypeScript)
- Tailwind CSS for styling
- React Hook Form for form handling
- React Query for data fetching
- Zod for schema validation
- React Icons for icon components
- Vite for development and bundling

### Tools & Libraries
- Shadcn UI component library
- TypeScript for type safety
- Responsive design principles

## Project Structure

```
├── client/
│   ├── src/
│   │   ├── components/       # UI components
│   │   ├── pages/            # Page components
│   │   ├── hooks/            # Custom React hooks
│   │   ├── lib/              # Utility functions and libraries
│   │   ├── types.ts          # TypeScript type definitions
│   │   └── main.tsx          # Entry point
├── public/
│   ├── assets/               # Static assets (images, files)
│   └── data/                 # JSON data files for content
```

## Static Data Files

The application uses the following JSON data files located in the `public/data/` directory:

1. **Projects** (`projects.json`)
   - Contains information about portfolio projects
   - Includes title, description, technologies used, and links

2. **Experiences** (`experiences.json`)
   - Contains work experience information
   - Includes company name, position, dates, and description

3. **Skills** (`skills.json`)
   - Contains skill information
   - Grouped by category with proficiency levels and icons

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

3. **Start the development server**
   ```bash
   npm run dev
   ```

## Running the Application

### Local Development

1. **Start the development server**
   ```bash
   npm run dev
   ```
   This will start the Vite development server. The application will be available at `http://localhost:5173` by default.

2. **Access the application**
   Open your browser and navigate to `http://localhost:5173` to view the portfolio website.

### Production Deployment

For production environments:

1. **Build the application**
   ```bash
   npm run build
   ```
   This will generate static files in the `dist` directory.

2. **Preview the production build locally**
   ```bash
   npm run preview
   ```
   This will serve the built files locally for testing.

### Using with Replit

This application is designed to work seamlessly with Replit:

1. **Fork the Repl**
   Fork this Repl to your own Replit account.

2. **Run the application**
   Click the "Run" button in Replit. The application will automatically start in development mode and be available at your Replit URL.

3. **Build for production**
   In the Replit shell, run:
   ```bash
   npm run build
   ```
   to create a production build.

### Troubleshooting

- **Missing dependencies**: Run `npm install` to ensure all dependencies are properly installed.
- **Build errors**: Check the console for specific error messages. Common issues include TypeScript errors that need to be fixed before building.
- **Static file issues**: If images or data files aren't loading, ensure they're correctly placed in the `public` directory.

## Development

### Adding New Content

To add new content to the portfolio:

1. **Projects**: Edit the `public/data/projects.json` file to add, modify, or remove projects.
2. **Skills**: Edit the `public/data/skills.json` file to update skill information.
3. **Experiences**: Edit the `public/data/experiences.json` file to update work experience.

### Customizing the UI

1. **Styling**: Modify Tailwind classes in component files to change styling.
2. **Components**: Add or modify components in the `client/src/components` directory.
3. **Theme**: Edit `theme.json` to change theme colors.

## Deployment

This static site can be deployed using the following steps:

1. **Build the application**
   ```bash
   npm run build
   ```
   This will generate static files in the `dist` directory.

2. **Deploy to a hosting service**
   The application can be deployed to any static site hosting service:
   - Vercel
   - Netlify
   - GitHub Pages
   - Cloudflare Pages
   - Firebase Hosting

   Most of these services can be configured to automatically build and deploy from your repository.

## Future Enhancements

- Project filtering by technology or category
- Blog section for tech articles
- Project case studies with detailed galleries
- Integration with GitHub API to dynamically fetch repository information
- Dark/light theme toggle
- Localization support for multiple languages
- Improved animations and transitions

## License

This project is licensed under the MIT License.
