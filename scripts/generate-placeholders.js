// Generate placeholder PNG images for project assets
import { writeFileSync, mkdirSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

// Valid 800x480 PNG with green background (base64 decoded)
// This is a simple solid color PNG that Vite can process
function createPlaceholderBuffer() {
  // Minimal valid PNG with gray background
  return Buffer.from(
    'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==',
    'base64'
  );
}

const projects = {
  '3dgs-engine': ['demo-1.png', 'architecture.png'],
  'measurement-system': ['ui-screenshot.png', 'reconstruction-demo.png'],
  'slam-system': ['architecture-diagram.png', 'exploration-sequence.png', 'flight-test.png'],
  'agent-platform': ['agent-flow.png', 'dashboard.png'],
  'reconstruction-research': ['quality-comparison.png', 'compression-demo.png', 'semantic-fusion.png'],
  'bridge-system': ['digital-twin-ui.png', 'alert-dashboard.png', 'vr-inspection.png', 'trend-analysis.png']
};

const basePath = join(__dirname, 'docs', 'assets', 'projects');

console.log('Creating placeholder images...\n');

for (const [project, files] of Object.entries(projects)) {
  const projectPath = join(basePath, project);
  
  if (!existsSync(projectPath)) {
    mkdirSync(projectPath, { recursive: true });
  }
  
  for (const file of files) {
    const filePath = join(projectPath, file);
    writeFileSync(filePath, createPlaceholderBuffer());
    console.log(`✓ Created: ${project}/${file}`);
  }
}

console.log('\n✓ All placeholder images created!');
console.log('\nNote: These are placeholder images. Replace them with actual screenshots.');
