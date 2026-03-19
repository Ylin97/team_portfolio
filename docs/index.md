---
layout: home
title: 工程技术团队 - 技术作品集
titleTemplate: 工程技术团队技术作品集

hero:
  name: 工程技术团队
  text: 打造生产级 AI 与系统
  tagline: 我们专注于三维视觉、SLAM、大语言模型和系统架构。工程卓越与前沿 AI 研究的完美结合。
  image:
    src: /hero-image.png
    alt: 工程技术团队标志
  actions:
    - theme: brand
      text: 查看项目
      link: /projects/
    - theme: alt
      text: GitHub
      link: https://github.com

features:
  - icon: 🎮
    title: 三维视觉与渲染
    details: 基于 Vulkan 的渲染引擎、3D 高斯泼溅、实时图形管线和内容创作编辑器工具。
  - icon: 🚁
    title: SLAM 与机器人
    details: 视觉惯性里程计、多传感器融合（RTK/IMU/相机）、自主探索和 PX4 飞控集成。
  - icon: 🤖
    title: 大模型与 AI 工程
    details: 多智能体架构、vLLM 分布式推理、LoRA/QLoRA 微调和基于 RAG 的知识系统。
  - icon: ⚙️
    title: 系统架构
    details: 高性能计算、生产级系统设计、可扩展后端服务和数字孪生平台。
---

<script setup>
const projects = [
  {
    name: '3DGS 渲染引擎',
    description: '基于 Vulkan 的高性能渲染引擎，采用计算着色器管线和 RenderGraph 调度架构。',
    tags: ['Vulkan', '3DGS', '计算着色器', 'RenderGraph'],
    link: '/projects/3dgs-engine'
  },
  {
    name: '测量系统 (3DGS)',
    description: '图像/视频到三维重建系统，带有 GPS 尺度恢复功能，用于大尺寸物体自动测量。',
    tags: ['3DGS', '重建', 'GPS', '测量'],
    link: '/projects/measurement-system'
  },
  {
    name: 'SLAM + 无人机系统',
    description: '语义 SLAM 系统，集成 VINS-Fusion、RTK/IMU/视觉融合、FUEL 自主探索和 PX4 飞控。',
    tags: ['SLAM', '无人机', 'VINS', 'PX4'],
    link: '/projects/slam-system'
  },
  {
    name: '大模型 Agent 平台',
    description: '多智能体平台，采用 Planner/Tool/Memory 架构，支持 vLLM 推理和 RAG 知识库。',
    tags: ['LLM', 'Agent', 'vLLM', 'RAG'],
    link: '/projects/agent-platform'
  },
  {
    name: '三维重建研究',
    description: '高性能渲染引擎研究，包括高斯点云优化和渲染 - 语义融合技术。',
    tags: ['研究', '3DGS', '优化'],
    link: '/projects/reconstruction-research'
  },
  {
    name: '桥梁数字孪生 (UE)',
    description: '基于 Unreal Engine 的可视化系统，集成 IoT 数据用于桥梁实时监测。',
    tags: ['Unreal Engine', '数字孪生', 'IoT'],
    link: '/projects/bridge-system'
  }
]

const galleryImages = [
  {
    src: '/assets/projects/3dgs-engine/demo-1.png',
    title: '3DGS 实时渲染',
    description: '580 万高斯点，89 FPS 实时渲染',
    project: '/projects/3dgs-engine'
  },
  {
    src: '/assets/projects/slam-system/exploration-sequence.png',
    title: '无人机自主探索',
    description: '基于 FUEL 算法的未知环境探索',
    project: '/projects/slam-system'
  },
  {
    src: '/assets/projects/agent-platform/dashboard.png',
    title: 'Agent 平台仪表盘',
    description: '多智能体协作监控系统',
    project: '/projects/agent-platform'
  },
  {
    src: '/assets/projects/bridge-system/digital-twin-ui.png',
    title: '桥梁数字孪生',
    description: 'IoT 传感器数据实时可视化',
    project: '/projects/bridge-system'
  },
  {
    src: '/assets/projects/measurement-system/ui-screenshot.png',
    title: '三维测量系统',
    description: '交互式尺寸测量界面',
    project: '/projects/measurement-system'
  },
  {
    src: '/assets/projects/reconstruction-research/semantic-fusion.png',
    title: '语义融合重建',
    description: '几何与语义的 3D 融合表示',
    project: '/projects/reconstruction-research'
  }
]
</script>

## 📦 精选项目

<div v-for="project in projects" :key="project.name" class="project-card">
  <h3>{{ project.name }}</h3>
  <p>{{ project.description }}</p>
  <div class="tags">
    <span v-for="tag in project.tags" :key="tag" class="tag">{{ tag }}</span>
  </div>
  <a :href="project.link" class="link">了解更多 →</a>
</div>

## 🖼️ 项目画廊

<div class="gallery-section">

浏览我们项目的精彩瞬间和技术演示

<div class="gallery-grid">
  <a v-for="(image, index) in galleryImages" :key="index" :href="image.project" class="gallery-item">
    <div class="gallery-image-wrapper">
      <img :src="image.src" :alt="image.title" class="gallery-image" />
      <div class="gallery-overlay">
        <span class="gallery-view">查看项目</span>
      </div>
    </div>
    <div class="gallery-info">
      <h4>{{ image.title }}</h4>
      <p>{{ image.description }}</p>
    </div>
  </a>
</div>

</div>

<div class="philosophy-section">

## 🧠 技术理念

<div class="philosophy-grid">

<div class="philosophy-item">

#### 性能优先

我们在系统的每一层都优先考虑性能。从 GPU 加速渲染到分布式推理，我们为真实世界的工作负载进行优化。

</div>

<div class="philosophy-item">

#### 系统设计

清晰的架构、模块化的组件和定义良好的接口。我们构建的系统可维护、可测试、可扩展。

</div>

<div class="philosophy-item">

#### 生产就绪

研究与工程的结合。我们不只是做原型——我们部署系统。每个系统都为可靠性、监控和卓越运营而设计。

</div>

<div class="philosophy-item">

#### AI + 工程

弥合 AI 研究与生产系统之间的差距。我们将前沿模型集成到稳健、可扩展的工程解决方案中。

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

/* 画廊样式 */
.gallery-section {
  padding: 2rem 0;
  margin-top: 3rem;
}

.gallery-section > p {
  text-align: center;
  color: var(--vp-c-text-2);
  margin-bottom: 2rem;
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
}

.gallery-item {
  border-radius: 12px;
  overflow: hidden;
  background-color: var(--vp-c-bg-elv);
  border: 1px solid var(--vp-c-divider);
  transition: all 0.3s ease;
  text-decoration: none;
  color: inherit;
}

.gallery-item:hover {
  border-color: var(--vp-c-brand);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
  transform: translateY(-4px);
  text-decoration: none;
}

.gallery-image-wrapper {
  position: relative;
  width: 100%;
  padding-top: 56.25%; /* 16:9 比例 */
  overflow: hidden;
  background-color: var(--vp-c-bg-alt);
}

.gallery-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.gallery-item:hover .gallery-image {
  transform: scale(1.05);
}

.gallery-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.gallery-item:hover .gallery-overlay {
  opacity: 1;
}

.gallery-view {
  padding: 0.75rem 1.5rem;
  background-color: var(--vp-c-brand);
  color: #fff;
  border-radius: 8px;
  font-weight: 500;
  font-size: 0.9rem;
}

.gallery-info {
  padding: 1.25rem;
}

.gallery-info h4 {
  margin: 0 0 0.5rem 0;
  font-size: 1.1rem;
  color: var(--vp-c-brand);
}

.gallery-info p {
  margin: 0;
  font-size: 0.9rem;
  color: var(--vp-c-text-2);
  line-height: 1.5;
}

/* 理念部分样式 */
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
  .gallery-grid {
    grid-template-columns: 1fr;
  }
  
  .philosophy-grid {
    grid-template-columns: 1fr;
  }
}
</style>
