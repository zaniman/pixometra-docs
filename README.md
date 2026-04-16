# Pixometra Documentation

Central documentation hub for all Pixometra Framer templates.

**Live:** https://docs.pixometra.com

## 🏗️ Structure

```
docs/
├── index.md (главная - каталог шаблонов)
├── synthex/ (документация SYNTHEX)
│   ├── welcome.md
│   ├── what-you-get.md
│   ├── guide/ (Getting Started, Pages, CMS)
│   ├── design/ (Colors, Typography)
│   └── components/ (Terminal, ROI, 404, etc.)
└── (future templates)
```

## 🚀 Getting Started

### Install Dependencies
```bash
npm install
```

### Development Server
```bash
npm run docs:dev
```

Opens at `http://localhost:5173`

### Build for Production
```bash
npm run docs:build
```

### Preview Build
```bash
npm run docs:preview
```

## 📝 Adding New Templates

Create a new folder in `docs/`:

```
docs/
├── synthex/
├── template-2/
│   ├── index.md
│   ├── guide/
│   ├── design/
│   └── components/
└── ...
```

Update `docs/.vitepress/config.mts`:

```typescript
sidebar: {
  '/synthex/': [ /* SYNTHEX structure */ ],
  '/template-2/': [ /* Template 2 structure */ ]
}
```

Add to nav:

```typescript
nav: [
  { text: 'Home', link: '/' },
  { text: 'SYNTHEX', link: '/synthex/welcome' },
  { text: 'Template 2', link: '/template-2/welcome' },
]
```

## 🔗 Deployment

Configured for **Vercel**:

1. Connect GitHub repo to Vercel
2. Set build command: `npm run docs:build`
3. Set output directory: `docs/.vitepress/dist`
4. Add custom domain: `docs.pixometra.com`

Auto-deploys on every push to main branch.

## 📚 VitePress Configuration

See `docs/.vitepress/config.mts` for full configuration.

### Features Enabled

- ✅ Local search
- ✅ Dark/light theme toggle
- ✅ Social links (GitHub)
- ✅ Sidebar navigation
- ✅ Footer with copyright

## 🎯 Conventions

- **Markdown files** — Use `.md` extension
- **Folder structure** — Mirror sidebar structure
- **Internal links** — Use relative paths (`/synthex/welcome`)
- **File names** — Use kebab-case (`terminal-dashboard.md`)
- **Headings** — Start with `# H1`, use `## H2`, `### H3`, etc.

## 🤝 Contributing

To add/update documentation:

1. Edit `.md` files in `docs/`
2. Test locally: `npm run docs:dev`
3. Commit and push to `main`
4. Vercel auto-deploys

## 📄 License

MIT

---

Made with ❤️ by **Pixometra**
