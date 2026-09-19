# NA Threads Manufacturing Industry Website

A modern, responsive website for NA Threads Manufacturing Industry, built with React, TypeScript, Vite, and Tailwind CSS.

## 🚀 Quick Start

### Development
```bash
npm install
npm run dev
```

### Build for Production
```bash
npm run build
```

The build output will be in the `dist/` directory.

## 📦 Deployment

### Netlify Deployment

See [NETLIFY_DEPLOYMENT.md](./NETLIFY_DEPLOYMENT.md) for detailed deployment instructions.

**Quick Deploy:**
1. Build: `npm run build`
2. Drag `dist` folder to [Netlify](https://app.netlify.com)
3. Set environment variables in Netlify dashboard:
   - `VITE_SUPABASE_URL`
   - `VITE_SUPABASE_ANON_KEY`

## 🔧 Environment Variables

Create a `.env` file in the root directory:

```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

## 📁 Project Structure

```
├── public/          # Static assets
├── src/
│   ├── components/  # React components
│   ├── hooks/       # Custom React hooks
│   ├── lib/         # Utilities and configurations
│   ├── styles/      # Global styles
│   └── types/       # TypeScript type definitions
├── netlify.toml     # Netlify configuration
└── vite.config.ts   # Vite configuration
```

## 🛠️ Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Supabase** - Backend/Database
- **Radix UI** - Component library

## 📝 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🌐 Features

- ✅ Responsive design
- ✅ Fast performance (code splitting, lazy loading)
- ✅ Image optimization
- ✅ Contact form with Supabase integration
- ✅ SEO optimized
- ✅ Netlify ready

## 📄 License

See [Attributions.md](./Attributions.md) for license information.
