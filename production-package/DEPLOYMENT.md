# NA Threads Manufacturing Website - Deployment Guide

## 🚀 Quick Start

### Option 1: Automated Build (Recommended)
```bash
# On Linux/Mac
chmod +x build.sh
./build.sh

# On Windows
build.bat
```

### Option 2: Manual Build
```bash
npm ci
npm run lint
npm run build
```

## 📁 Build Output

After a successful build, you'll have:
- `dist/` - Production-ready files
- `production-package/` - Complete deployment package

## 🌐 Deployment Options

### 1. Static Hosting (Recommended)

#### Netlify
1. Drag and drop the `dist/` folder to [Netlify](https://netlify.com)
2. Or connect your Git repository and set build command: `npm run build`
3. Set publish directory: `dist`

#### Vercel
1. Connect your Git repository to [Vercel](https://vercel.com)
2. Set build command: `npm run build`
3. Set output directory: `dist`

#### GitHub Pages
1. Push your code to GitHub
2. Go to Settings > Pages
3. Set source to GitHub Actions
4. Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages
on:
  push:
    branches: [ main ]
jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v2
    - uses: actions/setup-node@v2
      with:
        node-version: '18'
    - run: npm ci
    - run: npm run build
    - uses: peaceiris/actions-gh-pages@v3
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./dist
```

### 2. Traditional Web Hosting

1. Upload all files from `dist/` to your web server's public directory
2. Ensure your server supports SPA routing (configure redirects)

#### Apache (.htaccess)
```apache
RewriteEngine On
RewriteBase /
RewriteRule ^index\.html$ - [L]
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.html [L]
```

#### Nginx
```nginx
location / {
    try_files $uri $uri/ /index.html;
}
```

### 3. CDN Deployment

#### Cloudflare
1. Upload files to Cloudflare Pages
2. Set build command: `npm run build`
3. Set output directory: `dist`

#### AWS S3 + CloudFront
1. Upload `dist/` contents to S3 bucket
2. Configure bucket for static website hosting
3. Set up CloudFront distribution
4. Configure error pages to redirect to `index.html`

## 🔧 Environment Configuration

### Supabase Setup
1. Copy `SUPABASE_SETUP.md` for database configuration
2. Set environment variables in your hosting platform:
   - `VITE_SUPABASE_URL`
   - `VITE_SUPABASE_ANON_KEY`

### Environment Variables
Create `.env.production` for production builds:
```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

## 📱 PWA Configuration

The website includes PWA capabilities. Ensure your hosting supports HTTPS for service worker functionality.

## 🧪 Testing Your Deployment

1. **Build locally**: `npm run build && npm run preview`
2. **Check all routes**: Navigate through all pages
3. **Test forms**: Ensure contact forms work
4. **Check images**: Verify all images load correctly
5. **Mobile testing**: Test responsive design

## 🚨 Common Issues

### Build Failures
- Ensure Node.js version 18+ is installed
- Clear `node_modules` and reinstall: `rm -rf node_modules && npm ci`
- Check TypeScript errors: `npm run lint`

### Deployment Issues
- Verify all files are uploaded to hosting platform
- Check hosting platform logs for errors
- Ensure proper redirects for SPA routing

### Performance Issues
- Enable gzip compression on your server
- Use CDN for static assets
- Optimize images before upload

## 📊 Monitoring

### Analytics
- Google Analytics integration
- Performance monitoring with Lighthouse
- Error tracking with Sentry (optional)

### Health Checks
- Set up uptime monitoring
- Configure error alerts
- Monitor Core Web Vitals

## 🔒 Security

- Enable HTTPS (required for PWA)
- Set security headers
- Regular dependency updates
- Content Security Policy (CSP)

## 📞 Support

For deployment issues:
1. Check hosting platform documentation
2. Review build logs
3. Test locally with `npm run preview`
4. Check browser console for errors

---

**Happy Deploying! 🎉**
