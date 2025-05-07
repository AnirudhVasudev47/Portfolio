# Deploying Your Static Portfolio to Vercel

This guide will help you deploy your static portfolio website to Vercel, which provides an excellent hosting platform for static sites.

## Prerequisites

1. A [Vercel](https://vercel.com) account.
2. Git repository with your project (GitHub, GitLab, or Bitbucket).

## Deployment Steps

### Step 1: Connect Your Git Repository to Vercel

1. Log in to your Vercel account.
2. Click on "Add New" and select "Project".
3. Choose the Git repository where your portfolio project is stored.
4. Vercel will detect that this is a Vite/React project.

### Step 2: Configure the Project

1. In the configuration screen, set the following:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build` (this should already be the default)
   - **Output Directory**: `dist` (this should already be configured in the vercel.json file)
   - **Install Command**: `npm install` (default)

2. Click "Deploy".

### Step 3: Enjoy Your Deployed Portfolio!

Your portfolio should now be live at the URL provided by Vercel (typically `https://your-project-name.vercel.app`).

## Troubleshooting

### Build Errors

- Check the build logs in Vercel for any errors.
- Most common issues are related to TypeScript errors or missing dependencies.
- Ensure all dependencies are correctly listed in your package.json.

### Static Assets Not Loading

- Make sure all static assets (images, JSON files) are correctly placed in the `public` directory.
- Check that paths to assets in your code are correct.

### Custom Domain

To set up a custom domain:

1. Go to your project settings in Vercel.
2. Select "Domains".
3. Add your custom domain and follow the verification process.

## Updating Your Deployed Site

Whenever you push changes to your connected Git repository, Vercel will automatically rebuild and redeploy your site.

### Updating Content

To update the content of your portfolio:

1. Edit the JSON files in the `public/data` directory.
2. Commit and push your changes to your Git repository.
3. Vercel will automatically rebuild and deploy your site with the updated content.
