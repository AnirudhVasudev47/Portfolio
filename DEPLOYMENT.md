# Step-by-Step Guide to Deploy Your Portfolio on Vercel

This updated guide provides detailed instructions to successfully deploy your portfolio website to Vercel, addressing common deployment issues.

## Prerequisites

1. A [Vercel](https://vercel.com) account (sign up for free with your GitHub, GitLab, or Bitbucket account)
2. A PostgreSQL database (recommended: [Neon](https://neon.tech) provides a generous free tier with PostgreSQL)
3. Your project code in a Git repository (GitHub, GitLab, or Bitbucket)

## Deployment Process

### Step 1: Set Up Your PostgreSQL Database

1. Sign up for a free account at [Neon](https://neon.tech) or similar PostgreSQL provider
2. Create a new project in the dashboard
3. Create a new database for your portfolio
4. Copy your connection string (typically looks like `postgresql://username:password@hostname:port/database?sslmode=require`)
5. **Important:** Make sure your connection string includes `?sslmode=require` at the end

### Step 2: Import Your Project to Vercel

1. Log in to your [Vercel Dashboard](https://vercel.com/dashboard)
2. Click **+ New Project**
3. Import your Git repository that contains the portfolio website
4. Vercel will automatically detect that this is a Node.js project

### Step 3: Configure Project Settings

In the configuration screen, set the following parameters:

1. **Project Name**: Choose a name for your deployment (this will be used in your URL)
2. **Framework Preset**: Select "Other" (or Node.js if available)
3. **Root Directory**: Leave as default (./), as your project is in the root
4. **Build Settings**:
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`

### Step 4: Set Up Environment Variables

1. Expand the "Environment Variables" section
2. Add the following variables:
   - **NAME**: `DATABASE_URL`
   - **VALUE**: Your PostgreSQL connection string copied from Step 1
3. If you have any other environment variables your application needs, add them here

### Step 5: Deploy Your Project

1. Click **Deploy**
2. Vercel will now build and deploy your project
3. The initial deployment may take a few minutes

### Step 6: Initialize Your Database

After successful deployment, you need to set up your database schema:

1. Go to the **Deployments** tab in your Vercel project
2. Click on the latest deployment
3. Select **Functions** or **Console**
4. Run the database migration command:
   ```bash
   npx drizzle-kit push
   ```
5. Seed the database with initial content:
   ```bash
   npm run db:seed
   ```

### Step 7: Verify Your Deployment

1. Visit your deployed site at `https://[project-name].vercel.app`
2. Check that the site loads correctly and that:
   - Projects section displays your projects
   - Skills section shows your technical skills
   - Experience timeline appears correctly
   - Contact form works properly

## Maintaining Your Portfolio

### Content Updates

To update the content of your portfolio:

1. Log in to your Vercel dashboard
2. Go to the **Deployments** tab
3. Use the console to connect to your database
4. Execute SQL queries to update your content, for example:
   ```sql
   INSERT INTO projects (title, description, technologies) 
   VALUES ('New Project', 'Project description', ARRAY['React', 'Node.js']);
   ```

Alternatively, you can update your database through your preferred database management tool.

### Code Updates

Whenever you push changes to your Git repository, Vercel will automatically:
1. Detect the changes
2. Build your project
3. Deploy the new version

This continuous deployment process ensures your portfolio is always up-to-date.

## Advanced Configuration

### Custom Domain Setup

To use your own domain name:

1. Go to your project settings in Vercel
2. Select the **Domains** tab
3. Click **Add** and enter your domain name
4. Follow Vercel's instructions to verify ownership and configure DNS settings
5. Once configured, your portfolio will be accessible via your custom domain

### Analytics Integration

To track visitor statistics:

1. Go to your project settings
2. Select the **Analytics** tab
3. Follow the instructions to enable Vercel Analytics or connect Google Analytics

## Troubleshooting Common Issues

### 404 NOT_FOUND Error

If you see a 404 NOT_FOUND error after deployment (like in the screenshot):

1. **Check your vercel.json file**: 
   ```json
   {
     "version": 2,
     "framework": "vite",
     "functions": {
       "api/index.js": {
         "memory": 1024,
         "maxDuration": 10
       }
     },
     "routes": [
       { "src": "/api/(.*)", "dest": "/api" },
       { "handle": "filesystem" },
       { "src": "/assets/(.*)", "dest": "/assets/$1" },
       { "src": "/(.*)", "dest": "/index.html" }
     ]
   }
   ```

2. **Ensure you have an api/index.js file**: This file should contain your API logic for Vercel's serverless functions

3. **Redeploy your application**: Make a small change and push it to trigger a new deployment

4. **Check output directory**: Make sure your build is outputting to the `dist` directory

5. **Verify project.json build settings**: Your `vercel-build` script should output to the correct location

### Database Connection Problems

If your application can't connect to the database:

1. Verify your `DATABASE_URL` is correct in Vercel's environment variables
2. **IMPORTANT**: Make sure you append `?sslmode=require` to your Neon database connection string
3. Check if your database provider's firewall allows connections from Vercel (Neon allows connections from anywhere by default)

### Build Failures

If your build fails during deployment:

1. Check the build logs in Vercel for specific error messages
2. Common issues include:
   - TypeScript errors in your code
   - Missing dependencies in package.json
   - Conflicts with Node.js versions (try specifying Node.js 18.x in Vercel settings)

### API Routes Not Working

If your API endpoints return errors:

1. Check Function logs in Vercel dashboard
2. Verify your database connection is working in the serverless environment
3. Test API endpoints individually using tools like Postman or curl

## Support and Resources

- [Vercel Documentation](https://vercel.com/docs) - Comprehensive guides for deployment
- [Neon Documentation](https://neon.tech/docs) - Help with PostgreSQL database setup
- [Drizzle ORM Documentation](https://orm.drizzle.team/) - Reference for database schema management
