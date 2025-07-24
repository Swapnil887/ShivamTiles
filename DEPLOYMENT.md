# Deployment Guide for Shivam Tiles

## Vercel Deployment

### Prerequisites
- Vercel account
- GitHub repository with your code

### Steps to Deploy

1. **Connect to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Sign in with GitHub
   - Click "New Project"
   - Import your GitHub repository

2. **Configure Project:**
   - Framework Preset: Next.js
   - Root Directory: `./` (default)
   - Build Command: `npm run build` (default)
   - Output Directory: `.next` (default)
   - Install Command: `npm install` (default)

3. **Environment Variables (Optional):**
   - Add any environment variables if needed

4. **Deploy:**
   - Click "Deploy"
   - Wait for build to complete

### Troubleshooting

If you get a 404 error:

1. **Check Build Logs:**
   - Go to your Vercel dashboard
   - Check the build logs for any errors

2. **Verify Configuration:**
   - Ensure `next.config.ts` is properly configured
   - Check that `vercel.json` exists and is valid

3. **Common Issues:**
   - Make sure all dependencies are in `package.json`
   - Verify TypeScript compilation passes
   - Check that the main page (`src/app/page.tsx`) exists

### Local Testing

Before deploying, test locally:

```bash
npm run build
npm start
```

### Files to Check

- ✅ `next.config.ts` - Next.js configuration
- ✅ `vercel.json` - Vercel deployment configuration
- ✅ `package.json` - Dependencies and scripts
- ✅ `tsconfig.json` - TypeScript configuration
- ✅ `src/app/page.tsx` - Main page component
- ✅ `src/app/layout.tsx` - Root layout

### Support

If issues persist:
1. Check Vercel documentation
2. Review build logs in Vercel dashboard
3. Ensure all files are committed to GitHub 