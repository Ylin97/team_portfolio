# Project Assets Directory

This directory contains static assets for project pages.

## Structure

```
assets/
├── projects/
│   ├── 3dgs-engine/
│   │   ├── demo-1.png          # 3DGS rendering demo screenshot
│   │   └── architecture.png    # RenderGraph architecture diagram
│   ├── measurement-system/
│   │   ├── ui-screenshot.png   # Measurement UI interface
│   │   └── reconstruction-demo.png  # 3D reconstruction example
│   ├── slam-system/
│   │   ├── architecture-diagram.png  # System architecture
│   │   ├── exploration-sequence.png  # Exploration demo
│   │   └── flight-test.png     # Flight test photo
│   ├── agent-platform/
│   │   ├── agent-flow.png      # Agent interaction flow
│   │   └── dashboard.png       # Platform dashboard
│   ├── reconstruction-research/
│   │   ├── quality-comparison.png  # Quality comparison
│   │   ├── compression-demo.png    # Compression visualization
│   │   └── semantic-fusion.png     # Semantic segmentation
│   └── bridge-system/
│       ├── digital-twin-ui.png  # Digital twin interface
│       ├── alert-dashboard.png  # Alert dashboard
│       ├── vr-inspection.png    # VR inspection mode
│       └── trend-analysis.png   # Trend analysis chart
└── hero-image.png              # Homepage hero image (optional)
```

## Adding Images

To add images for a project:

1. Place image files in the corresponding project directory
2. Use relative paths in Markdown: `![Description](/assets/projects/project-name/image.png)`
3. Recommended formats: PNG for diagrams/screenshots, WebP for photos
4. Optimize images for web (target <500KB per image)

## Placeholder Images

Currently, these are placeholder directories. Add your actual images:

- Screenshots from your applications
- Architecture diagrams (export from draw.io, Excalidraw, etc.)
- Demo GIFs or videos
- Team photos (if applicable)

## Image Guidelines

- **Resolution**: 1920x1080 or lower for screenshots
- **Format**: PNG (lossless), WebP (photos), SVG (diagrams)
- **Size**: Keep under 500KB per image when possible
- **Accessibility**: Always include alt text in Markdown
