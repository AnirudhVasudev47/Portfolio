# Vercel Deployment Checklist

Use this checklist to successfully deploy your portfolio website to Vercel.

## Files to Verify Before Deployment

- [x] **vercel.json** - Configuration file is properly set up
- [x] **api/index.js** - API routes implemented for serverless functions
- [x] **.npmrc** - Contains necessary configuration for package installation
- [x] **build.sh** - Script to handle build process

## Configuration Checklist

### 1. Vercel.json Configuration
- [x] Routes are properly configured
- [x] API routes are directed to serverless functions
- [x] Static assets routing is set up

### 2. Database Connection
- [ ] **DATABASE_URL** environment variable is ready to add in Vercel
- [ ] Connection string includes `?sslmode=require` for Neon database
- [ ] Database schema is prepared for deployment

### 3. Build Settings
- [x] Build command is correctly configured
- [x] Output directory is set to `dist`
- [x] Framework is set to Vite

## Deployment Steps

1. Push these changes to your GitHub repository
2. Log in to Vercel and import your repository
3. Configure the environment variables (DATABASE_URL)
4. Deploy the application
5. If you encounter a 404 error:
   - Check the function logs
   - Verify your api/index.js file is being properly deployed
   - Redeploy with the updated configuration

## Post-Deployment

1. Set up the database schema using the Vercel console
2. Seed the database with initial content
3. Test all functionality on the live site
4. Set up a custom domain if desired

Refer to the detailed instructions in DEPLOYMENT.md for more information.