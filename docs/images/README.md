# Documentation Images

Storage for documentation screenshots and images.

## Folder Structure

- **guide/** — Screenshots for guide pages (pages-overview, cms-collections, publishing, etc.)
- **design/** — Screenshots for design system (colors, typography, tokens)
- **components/** — Screenshots for components (TerminalDashboard, ROICalculator, NotFoundGame, etc.)

## Usage in Markdown

Add images to your markdown files with relative paths:

```markdown
![Description of image](../images/guide/screenshot-name.png)
![Color tokens](../images/design/color-swatches.png)
![Terminal component](../images/components/terminal-dashboard.png)
```

## Image Guidelines

- **Format:** PNG for screenshots (best quality/size ratio)
- **Size:** Keep images reasonable (1200px max width recommended)
- **Naming:** Use descriptive kebab-case names (e.g., `pages-overview-hero.png`)
- **Compression:** Compress PNGs before uploading to keep repo size down

## Supported Formats

- `.png` — Best for screenshots
- `.jpg` / `.jpeg` — Good for photos
- `.webp` — Modern format, smaller file size
- `.svg` — Vector graphics, scalable
