---
title: All Projects
description: Complete list of engineering projects showcasing our technical capabilities in 3D Vision, SLAM, AI, and System Architecture.
---

<script setup>
import { computed } from 'vue'

const projects = [
  {
    name: '3DGS Rendering Engine',
    description: 'A high-performance Vulkan-based rendering engine with Compute Shader pipeline and RenderGraph scheduling for 3D Gaussian Splatting.',
    longDescription: 'Real-time rendering engine implementing 3D Gaussian Splatting with Vulkan compute shaders, featuring a modular RenderGraph architecture for efficient GPU resource management.',
    tags: ['Vulkan', '3DGS', 'Compute Shader', 'RenderGraph', 'C++'],
    category: '3D Vision & Rendering',
    link: '/projects/3dgs-engine'
  },
  {
    name: 'Measurement System (3DGS)',
    description: 'Image/video to 3D reconstruction system with GPS scale recovery for automatic dimension measurement of large-scale objects.',
    longDescription: 'End-to-end measurement system that reconstructs 3D geometry from images/videos, recovers absolute scale using GPS data, and provides automated measurement tools for industrial applications.',
    tags: ['3DGS', 'Reconstruction', 'GPS', 'Measurement', 'Python'],
    category: '3D Vision & Rendering',
    link: '/projects/measurement-system'
  },
  {
    name: 'SLAM + UAV System',
    description: 'Semantic SLAM system with VINS-Fusion, multi-sensor fusion (RTK/IMU/vision), FUEL autonomous exploration, and PX4 flight control.',
    longDescription: 'Complete autonomous exploration system combining visual-inertial odometry with RTK GPS and IMU fusion, implementing FUEL algorithm for frontier-based exploration with PX4 autopilot integration.',
    tags: ['SLAM', 'UAV', 'VINS-Fusion', 'PX4', 'FUEL', 'C++'],
    category: 'SLAM & Robotics',
    link: '/projects/slam-system'
  },
  {
    name: 'LLM Agent Platform',
    description: 'Multi-agent platform with Planner/Tool/Memory architecture, vLLM distributed inference, LoRA fine-tuning, and RAG knowledge base.',
    longDescription: 'Enterprise-grade agent platform supporting multiple specialized agents (planner, tool executor, memory manager) with scalable vLLM inference backend and retrieval-augmented generation for domain knowledge.',
    tags: ['LLM', 'Agent', 'vLLM', 'RAG', 'LoRA', 'Python'],
    category: 'AI & Large Models',
    link: '/projects/agent-platform'
  },
  {
    name: '3D Reconstruction Research',
    description: 'Research on high-performance rendering engines, Gaussian point cloud optimization, and rendering-semantic fusion techniques.',
    longDescription: 'Advanced research project exploring next-generation 3D reconstruction methods, including optimized Gaussian representations, neural rendering improvements, and semantic-aware scene understanding.',
    tags: ['Research', '3DGS', 'Neural Rendering', 'Optimization'],
    category: 'Research',
    link: '/projects/reconstruction-research'
  },
  {
    name: 'Bridge Digital Twin (UE)',
    description: 'Unreal Engine-based digital twin system with IoT sensor integration for real-time structural health monitoring and visualization.',
    longDescription: 'Industrial digital twin platform built on Unreal Engine 5, integrating real-time IoT sensor data streams for bridge structural monitoring, with advanced visualization and alert systems.',
    tags: ['Unreal Engine', 'Digital Twin', 'IoT', 'Visualization', 'C++'],
    category: 'System Architecture',
    link: '/projects/bridge-system'
  }
]

const categories = [...new Set(projects.map(p => p.category))]
</script>

# All Projects

Comprehensive showcase of our engineering projects across 3D Vision, SLAM, AI Engineering, and System Architecture.

## Project Categories

<div class="category-list">
  <div v-for="category in categories" :key="category" class="category-item">
    <span class="category-badge">{{ category }}</span>
  </div>
</div>

## Projects by Category

<div v-for="category in categories" :key="category">

### {{ category }}

<div v-for="project in projects.filter(p => p.category === category)" :key="project.name" class="project-card">
  <h3>{{ project.name }}</h3>
  <p>{{ project.longDescription }}</p>
  <div class="tags">
    <span v-for="tag in project.tags" :key="tag" class="tag">{{ tag }}</span>
  </div>
  <a :href="project.link" class="link">View Details →</a>
</div>

</div>

## Adding New Projects

To add a new project:

1. Create a new Markdown file in `docs/projects/` directory
2. Add project metadata in the frontmatter
3. Update the project list above (or implement auto-discovery)
4. Add the project to the sidebar in `.vitepress/config.ts`

<style scoped>
.category-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-bottom: 2rem;
}

.category-item {
  display: inline-flex;
}

.category-badge {
  display: inline-block;
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
  font-weight: 500;
  border-radius: 8px;
  background-color: var(--vp-c-brand-light);
  color: #fff;
}

.project-card {
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  background-color: var(--vp-c-bg-elv);
  transition: all 0.3s ease;
}

.project-card:hover {
  border-color: var(--vp-c-brand);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
}

.project-card h3 {
  margin: 0 0 0.75rem 0;
  font-size: 1.25rem;
  color: var(--vp-c-brand);
}

.project-card p {
  margin: 0 0 1rem 0;
  color: var(--vp-c-text-2);
  line-height: 1.6;
}

.project-card .tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.project-card .tag {
  display: inline-block;
  padding: 0.25rem 0.75rem;
  font-size: 0.75rem;
  font-weight: 500;
  border-radius: 999px;
  background-color: var(--vp-c-brand-light);
  color: #fff;
}

.project-card .link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--vp-c-brand);
  text-decoration: none;
  font-weight: 500;
  transition: opacity 0.2s ease;
}

.project-card .link:hover {
  opacity: 0.8;
  text-decoration: none;
}

h3 {
  margin-top: 2rem;
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid var(--vp-c-divider);
}
</style>
