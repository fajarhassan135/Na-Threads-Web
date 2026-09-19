# Netlify Deployment Guide

## 🚀 Quick Deploy

### Option 1: Deploy via Netlify Dashboard (Recommended)

1. **Build the project locally first** (optional but recommended):
   ```bash
   npm install
   npm run build
   ```

2. **Go to [Netlify](https://app.netlify.com)**

3. **Drag and Drop Deployment:**
   - Drag the `dist` folder directly to Netlify dashboard
   - Your site will be live in seconds!

### Option 2: Deploy via Git (Continuous Deployment)

1. **Push your code to GitHub/GitLab/Bitbucket**

2. **Connect to Netlify:**
   - Go to [Netlify](https://app.netlify.com)
   - Click "Add new site" → "Import an existing project"
   - Connect your Git repository

3. **Configure Build Settings:**
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Node version: `18` (or latest LTS)

4. **Set Environment Variables:**
   - Go to Site settings → Environment variables
   - Add the following:
     ```
     VITE_SUPABASE_URL=https://grqfogwhamtcuhqshntx.supabase.co
     VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdycWZvZ3doYW10Y3VocXNobnR4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQ2NTM5MjgsImV4cCI6MjA3MDIyOTkyOH0.wiUag6GaK_en5HI5r2N10ZnMg5Aik95R-84qA452TTE
     ```

5. **Deploy!**
   - Netlify will automatically build and deploy your site
   - Every push to your main branch will trigger a new deployment

## 📋 Configuration Files

### `netlify.toml`
This file contains:
- Build settings
- Redirect rules for SPA routing
- Security headers
- Cache control headers

### `public/_redirects`
Fallback redirect file for SPA routing (backup to netlify.toml)

## 🔧 Environment Variables

Set these in Netlify Dashboard → Site settings → Environment variables:

- `VITE_SUPABASE_URL` - Your Supabase project URL
- `VITE_SUPABASE_ANON_KEY` - Your Supabase anonymous key

## ✅ Pre-Deployment Checklist

- [ ] Build runs successfully: `npm run build`
- [ ] All images are optimized
- [ ] Environment variables are set in Netlify
- [ ] Test the contact form after deployment
- [ ] Check all routes work (SPA routing)
- [ ] Verify images load correctly
- [ ] Test on mobile devices

## 🐛 Troubleshooting

### Build Fails
- Check Node version (should be 18+)
- Run `npm install` locally to check for errors
- Check Netlify build logs for specific errors

### 404 Errors on Routes
- Ensure `netlify.toml` redirect rules are present
- Check `public/_redirects` file exists
- Verify build output includes `index.html`

### Environment Variables Not Working
- Ensure variables start with `VITE_` prefix
- Redeploy after adding environment variables
- Check variable names match exactly

### Images Not Loading
- Verify images are in `public/` folder
- Check image paths are correct (should start with `/`)
- Clear browser cache

## 📊 Performance Tips

1. **Enable Netlify Analytics** (optional)
2. **Use Netlify CDN** (automatic)
3. **Enable Asset Optimization** in Netlify settings
4. **Set up Form Handling** if needed (Netlify Forms)

## 🔗 Useful Links

- [Netlify Documentation](https://docs.netlify.com/)
- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html#netlify)
- [Netlify Status Page](https://www.netlifystatus.com/)

## 🎉 After Deployment

1. Test your live site
2. Set up custom domain (optional)
3. Enable HTTPS (automatic with Netlify)
4. Configure form notifications (if using Netlify Forms)
5. Set up analytics (optional)

---

**Your site is now ready for Netlify deployment!** 🚀
