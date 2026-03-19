---
layout: home
title: Engineering Team - Technical Portfolio
titleTemplate: Engineering Team Technical Portfolio

hero:
  name: Engineering Team
  text: Building Production-Ready AI & Systems
  tagline: We specialize in 3D Vision, SLAM, Large Language Models, and System Architecture. Engineering excellence meets cutting-edge AI research.
  image:
    src: /hero-image.png
    alt: Engineering Team Logo
  actions:
    - theme: brand
      text: View Projects
      link: /projects/
    - theme: alt
      text: GitHub
      link: https://github.com

features:
  - icon: 🎮
    title: 3D Vision & Rendering
    details: Vulkan-based rendering engines, 3D Gaussian Splatting, real-time graphics pipelines, and editor tooling for content creation.
  - icon: 🚁
    title: SLAM & Robotics
    details: Visual-inertial odometry, multi-sensor fusion (RTK/IMU/Camera), autonomous exploration, and PX4 flight control integration.
  - icon: 🤖
    title: LLM & AI Engineering
    details: Multi-agent architectures, distributed inference with vLLM, LoRA/QLoRA fine-tuning, and RAG-based knowledge systems.
  - icon: ⚙️
    title: System Architecture
    details: High-performance computing, production-ready system design, scalable backend services, and digital twin platforms.
---

<script setup>
import { computed } from 'vue'

const projects = [
  {
    name: '3DGS Rendering Engine',
    description: 'A high-performance Vulkan-based rendering engine with Compute Shader pipeline and RenderGraph scheduling.',
    tags: ['Vulkan', '3DGS', 'Compute Shader', 'RenderGraph'],
    link: '/projects/3dgs-engine'
  },
  {
    name: 'Measurement System (3DGS)',
    description: 'Image/video to 3D reconstruction system with GPS scale recovery for large-scale dimension measurement.',
    tags: ['3DGS', 'Reconstruction', 'GPS', 'Measurement'],
    link: '/projects/measurement-system'
  },
  {
    name: 'SLAM + UAV System',
    description: 'Semantic SLAM with VINS-Fusion, RTK/IMU/vision fusion, FUEL autonomous exploration, and PX4 integration.',
    tags: ['SLAM', 'UAV', 'VINS', 'PX4'],
    link: '/projects/slam-system'
  },
  {
    name: 'LLM Agent Platform',
    description: 'Multi-agent platform with Planner/Tool/Memory architecture, vLLM inference, and RAG knowledge base.',
    tags: ['LLM', 'Agent', 'vLLM', 'RAG'],
    link: '/projects/agent-platform'
  },
  {
    name: '3D Reconstruction Research',
    description: 'Research on high-performance rendering engines, Gaussian point cloud optimization, and semantic fusion.',
    tags: ['Research', '3DGS', 'Optimization'],
    link: '/projects/reconstruction-research'
  },
  {
    name: 'Bridge Digital Twin (UE)',
    description: 'Unreal Engine-based visualization system with IoT data integration for real-time bridge monitoring.',
    tags: ['Unreal Engine', 'Digital Twin', 'IoT'],
    link: '/projects/bridge-system'
  }
]
</script>

## 📦 Featured Projects

<div v-for="project in projects" :key="project.name" class="project-card">
  <h3>{{ project.name }}</h3>
  <p>{{ project.description }}</p>
  <div class="tags">
    <span v-for="tag in project.tags" :key="tag" class="tag">{{ tag }}</span>
  </div>
  <a :href="project.link" class="link">Learn More →</a>
</div>

<div class="philosophy-section">

## 🧠 Technical Philosophy

<div class="philosophy-grid">

<div class="philosophy-item">

#### Performance First

We prioritize performance in every layer of our systems. From GPU-accelerated rendering to distributed inference, we optimize for real-world workloads.

</div>

<div class="philosophy-item">

#### System Design

Clean architecture, modular components, and well-defined interfaces. We build systems that are maintainable, testable, and scalable.

</div>

<div class="philosophy-item">

#### Production Ready

Research meets engineering. We don't just prototype—we deploy. Every system is designed for reliability, monitoring, and operational excellence.

</div>

<div class="philosophy-item">

#### AI + Engineering

Bridging the gap between AI research and production systems. We integrate cutting-edge models into robust, scalable engineering solutions.

</div>

</div>

</div>

<style>
/* 首页特定样式 */
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

.philosophy-section {
  padding: 3rem 0;
  border-top: 1px solid var(--vp-c-divider);
  margin-top: 3rem;
}

.philosophy-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
}

.philosophy-item {
  padding: 1.5rem;
  border-radius: 12px;
  background-color: var(--vp-c-bg-alt);
  border: 1px solid var(--vp-c-divider);
}

.philosophy-item h4 {
  margin: 0 0 0.75rem 0;
  font-size: 1.1rem;
  color: var(--vp-c-brand);
}

.philosophy-item p {
  margin: 0;
  font-size: 0.9rem;
  color: var(--vp-c-text-2);
  line-height: 1.6;
}

@media (max-width: 768px) {
  .philosophy-grid {
    grid-template-columns: 1fr;
  }
}
</style>
