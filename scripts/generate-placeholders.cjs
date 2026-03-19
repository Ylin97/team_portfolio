// Generate placeholder PNG images for project assets
const fs = require('fs');
const path = require('path');

// Valid 1x1 PNG (base64 decoded)
const placeholderPng = Buffer.from(
  'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==',
  'base64'
);

const projects = {
  '3dgs-engine': ['demo-1.png', 'architecture.png'],
  'measurement-system': ['ui-screenshot.png', 'reconstruction-demo.png'],
  'slam-system': ['architecture-diagram.png', 'exploration-sequence.png', 'flight-test.png'],
  'agent-platform': ['agent-flow.png', 'dashboard.png'],
  'reconstruction-research': ['quality-comparison.png', 'compression-demo.png', 'semantic-fusion.png'],
  'bridge-system': ['digital-twin-ui.png', 'alert-dashboard.png', 'vr-inspection.png', 'trend-analysis.png']
};

const basePath = path.join(__dirname, '..', 'docs', 'assets', 'projects');

console.log('Creating placeholder images...\n');

for (const [project, files] of Object.entries(projects)) {
  const projectPath = path.join(basePath, project);
  
  if (!fs.existsSync(projectPath)) {
    fs.mkdirSync(projectPath, { recursive: true });
  }
  
  for (const file of files) {
    const filePath = path.join(projectPath, file);
    fs.writeFileSync(filePath, placeholderPng);
    console.log(`✓ Created: ${project}/${file}`);
  }
}

console.log('\n✓ All placeholder images created!');
console.log('\nNote: These are placeholder images. Replace them with actual screenshots.');
