# Engineering Team Portfolio Website

A professional engineering team portfolio website built with VitePress, showcasing technical capabilities in 3D Vision, SLAM, AI Engineering, and System Architecture.

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
Team_Portfolio_Website/
├── docs/
│   ├── index.md                    # Homepage
│   ├── projects/
│   │   ├── index.md                # Project list
│   │   ├── 3dgs-engine.md          # 3DGS Rendering Engine
│   │   ├── measurement-system.md   # Measurement System
│   │   ├── slam-system.md          # SLAM + UAV System
│   │   ├── agent-platform.md       # LLM Agent Platform
│   │   ├── reconstruction-research.md  # 3D Reconstruction Research
│   │   └── bridge-system.md        # Bridge Digital Twin
│   ├── assets/                     # Static assets (images, etc.)
│   └── public/                     # Public assets (favicon, etc.)
├── .vitepress/
│   ├── config.ts                   # VitePress configuration
│   └── theme/
│       ├── index.ts                # Theme entry point
│       └── styles/
│           └── custom.css          # Custom styles
├── package.json
└── tsconfig.json
```

## Features

- **Responsive Design**: Works on desktop, tablet, and mobile
- **Dark Mode**: Automatic dark mode support
- **Search**: Full-text search across all content
- **Syntax Highlighting**: Code blocks with theme support
- **Mermaid Diagrams**: Architecture diagrams support
- **SEO Optimized**: Meta tags and structured data

## Adding New Projects

1. Create a new Markdown file in `docs/projects/`
2. Add frontmatter metadata:
   ```markdown
   ---
   title: Project Name
   description: Brief description
   ---
   ```
3. Update `.vitepress/config.ts` sidebar configuration
4. Add project to `docs/projects/index.md` project list

## Customization

### Theme Colors

Edit `.vitepress/theme/styles/custom.css`:

```css
:root {
  --vp-c-brand: #3eaf7c;      /* Primary brand color */
  --vp-c-brand-light: #5bc98f; /* Light variant */
  --vp-c-brand-dark: #2d8f63;  /* Dark variant */
}
```

### Site Configuration

Edit `.vitepress/config.ts`:

```typescript
export default defineConfig({
  title: 'Your Team Name',
  description: 'Your description',
  // ...
})
```

## Deployment

### GitHub Pages

```bash
# Build
npm run build

# Deploy (using gh-pages or similar)
npx gh-pages -d docs/.vitepress/dist
```

### Vercel

1. Connect your repository to Vercel
2. Set build command: `npm run build`
3. Set output directory: `docs/.vitepress/dist`

### Netlify

1. Connect your repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `docs/.vitepress/dist`

## Development Guidelines

### Writing Project Pages

Each project page should include:

- **Project Background**: Problem statement and context
- **System Architecture**: Diagrams and module overview
- **Core Technologies**: Technical deep-dive with code examples
- **Personal Responsibilities**: Your specific contributions
- **Project Outcomes**: Quantified results and metrics
- **Demo**: Screenshots, diagrams, or videos

### Code Examples

Use fenced code blocks with language specification:

````markdown
```cpp
// C++ code example
class MyClass {
    // ...
};
```

```python
# Python code example
def my_function():
    pass
```
````

### Images

Place images in `docs/assets/projects/<project-name>/` and reference with absolute paths:

```markdown
![Description](/assets/projects/project-name/image.png)
```

## Tech Stack

- **Framework**: VitePress 1.x
- **Vue**: 3.x
- **TypeScript**: 5.x
- **Styling**: Custom CSS with CSS variables

## Requirements

- Node.js >= 18.0.0
- npm or yarn

## License

MIT

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request
