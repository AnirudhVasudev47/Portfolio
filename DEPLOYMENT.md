# Deploying Your Portfolio to Vercel

This guide will help you deploy your portfolio website to Vercel, which provides an excellent hosting platform for full-stack JavaScript applications.

## Prerequisites

1. A [Vercel](https://vercel.com) account
2. A PostgreSQL database (such as [Neon](https://neon.tech) or any other PostgreSQL provider)
3. Git repository with your project (GitHub, GitLab, or Bitbucket)

## Deployment Steps

### Step 1: Set Up Your Database

1. Create a PostgreSQL database on a platform like Neon, Supabase, or any other PostgreSQL hosting provider.
2. Make note of your database connection string (it will look something like `postgresql://username:password@host:port/database`).

### Step 2: Connect Your Git Repository to Vercel

1. Log in to your Vercel account.
2. Click on "Add New" and select "Project".
3. Choose the Git repository where your portfolio project is stored.
4. Vercel will detect that this is a Node.js project.

### Step 3: Configure the Project

1. In the configuration screen, set the following:
   - **Framework Preset**: Other
   - **Build Command**: `npm run build` (this should already be the default)
   - **Output Directory**: `dist` (this should already be configured in the vercel.json file)
   - **Install Command**: `npm install` (default)

2. Add the following environment variables:
   - `DATABASE_URL`: Set this to your PostgreSQL connection string.
   
3. Click "Deploy".

### Step 4: Run Database Migrations

After deployment, you'll need to set up your database schema.

1. Go to the "Deployments" tab of your project.
2. Click on the latest deployment.
3. Click on "Functions" or "Console".
4. Use the Console to run the database migration:
   ```bash
   npx drizzle-kit push
   ```
   
5. Optionally, you can also seed the database:
   ```bash
   npm run db:seed
   ```

### Step 5: Enjoy Your Deployed Portfolio!

Your portfolio should now be live at the URL provided by Vercel (typically `https://your-project-name.vercel.app`).

## Troubleshooting

### Database Connection Issues

- Make sure your DATABASE_URL is correctly formatted.
- Verify that your database allows connections from external sources (some providers require you to explicitly allow this).
- Check if your database provider requires SSL connections and adjust your connection string accordingly.

### Build Errors

- Check the build logs in Vercel for any errors.
- Most common issues are related to TypeScript errors or missing dependencies.
- Ensure all dependencies are correctly listed in your package.json.

### API Routes Not Working

- If you encounter issues with API routes, check the logs in the Vercel dashboard.
- Ensure the vercel.json file is correctly routing API requests to your server.

### Custom Domain

To set up a custom domain:

1. Go to your project settings in Vercel.
2. Select "Domains".
3. Add your custom domain and follow the verification process.

## Updating Your Deployed Site

Whenever you push changes to your connected Git repository, Vercel will automatically rebuild and redeploy your site.

For database schema changes, you'll need to manually run migrations after deployment using the Vercel console, or set up a deployment script that handles this automatically.