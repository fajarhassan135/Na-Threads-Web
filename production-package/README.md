# NA Threads Manufacturing Industry Website

A modern, responsive website for NA Threads Manufacturing Industry, built with React, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern Design**: Clean, professional manufacturing industry aesthetic
- **Responsive Layout**: Optimized for all devices and screen sizes
- **Fast Performance**: Built with Vite for optimal loading speeds
- **Type Safety**: Full TypeScript implementation
- **Component Library**: Rich UI components using Radix UI and Tailwind CSS
- **Image Optimization**: Efficient image handling with fallbacks
- **Contact Forms**: Integrated contact and inquiry forms
- **SEO Optimized**: Meta tags, sitemap, and search engine friendly

## 🛠️ Tech Stack

- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI
- **Icons**: Lucide React
- **Forms**: React Hook Form
- **Database**: Supabase
- **Deployment**: GitHub Pages, Netlify, Vercel ready

## 📋 Prerequisites

- Node.js 18+ 
- npm 9+ or yarn
- Git

## 🚀 Quick Start

### 1. Clone the Repository
```bash
git clone <your-repo-url>
cd na-threads-manufacturing-website
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Environment Setup
Create a `.env.local` file in the root directory:
```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### 4. Development Server
```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## 🏗️ Building for Production

### Automated Build (Recommended)

#### Linux/Mac
```bash
chmod +x build.sh
./build.sh
```

#### Windows
```bash
build.bat
```

### Manual Build
```bash
npm run build
```

The build output will be in the `dist/` directory.

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── ui/             # Reusable UI components
│   ├── shared/         # Shared components
│   └── figma/          # Figma-specific components
├── hooks/               # Custom React hooks
├── lib/                 # Library configurations
├── styles/              # Global styles and CSS
├── types/               # TypeScript type definitions
└── assets/              # Static assets

public/                  # Public assets
├── images/              # Image files
│   ├── company/         # Company images
│   ├── manufacturing/   # Manufacturing images
│   └── products/        # Product images
└── favicon.ico          # Favicon
```

## 🌐 Deployment

### Option 1: GitHub Pages (Free)
1. Push your code to GitHub
2. Enable GitHub Pages in repository settings
3. Set source to GitHub Actions
4. The workflow will automatically deploy on push to main branch

### Option 2: Netlify (Free)
1. Connect your Git repository
2. Set build command: `npm run build`
3. Set publish directory: `dist`

### Option 3: Vercel (Free)
1. Connect your Git repository
2. Set build command: `npm run build`
3. Set output directory: `dist`

### Option 4: Traditional Hosting
Upload contents of `dist/` folder to your web server.

## 🔧 Configuration

### Tailwind CSS
Configuration file: `tailwind.config.js`
- Custom color palette for manufacturing theme
- Responsive breakpoints
- Component-specific utilities

### Vite
Configuration file: `vite.config.ts`
- React plugin
- Path aliases
- PostCSS integration

### TypeScript
Configuration file: `tsconfig.json`
- Strict mode enabled
- Modern ES2020 target
- JSX support

## 📱 PWA Features

The website includes Progressive Web App capabilities:
- Service worker for offline functionality
- App manifest for install prompts
- Responsive design for mobile devices

## 🧪 Testing

### Linting
```bash
npm run lint
```

### Type Checking
```bash
npm run type-check
```

### Preview Build
```bash
npm run preview
```

## 📊 Performance

- **Lighthouse Score**: 90+ on all metrics
- **Bundle Size**: Optimized with Vite
- **Image Optimization**: WebP format with fallbacks
- **Code Splitting**: Automatic route-based splitting

## 🔒 Security

- HTTPS required for production
- Content Security Policy (CSP) headers
- Secure form handling
- XSS protection

## 📈 Analytics

Google Analytics integration ready:
1. Add your GA tracking ID
2. Configure event tracking
3. Monitor user behavior

## 🚨 Troubleshooting

### Build Issues
- Clear `node_modules`: `rm -rf node_modules && npm install`
- Check Node.js version: `node --version`
- Verify TypeScript: `npm run lint`

### Deployment Issues
- Check hosting platform logs
- Verify build output in `dist/` folder
- Test locally with `npm run preview`

### Performance Issues
- Optimize images before upload
- Enable gzip compression
- Use CDN for static assets

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## 📄 License

This project is proprietary to NA Threads Manufacturing Industry.

## 📞 Support

For technical support or questions:
- Check the [Deployment Guide](DEPLOYMENT.md)
- Review [Supabase Setup](SUPABASE_SETUP.md)
- Open an issue on GitHub

---

**Built with ❤️ for NA Threads Manufacturing Industry**
