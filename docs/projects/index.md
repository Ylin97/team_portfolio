---
title: 所有项目
description: 完整展示我们在三维视觉、SLAM、AI 工程和系统架构领域的技术能力项目。
---

<script setup>
import { computed } from 'vue'

const projects = [
  {
    name: '3DGS 渲染引擎',
    description: '基于 Vulkan 的高性能渲染引擎，采用计算着色器管线和 RenderGraph 调度架构，实现 3D 高斯泼溅实时渲染。',
    longDescription: '使用 Vulkan 计算着色器实现 3D 高斯泼溅的实时渲染引擎，采用模块化 RenderGraph 架构进行高效的 GPU 资源管理。',
    tags: ['Vulkan', '3DGS', '计算着色器', 'RenderGraph', 'C++'],
    category: '三维视觉与渲染',
    link: '/projects/3dgs-engine'
  },
  {
    name: '测量系统 (3DGS)',
    description: '图像/视频到三维重建系统，带有 GPS 尺度恢复功能，用于大尺寸物体的自动尺寸测量。',
    longDescription: '端到端的测量系统，从图像/视频重建 3D 几何，使用 GPS 数据恢复绝对尺度，为工业应用提供自动测量工具。',
    tags: ['3DGS', '重建', 'GPS', '测量', 'Python'],
    category: '三维视觉与渲染',
    link: '/projects/measurement-system'
  },
  {
    name: 'SLAM + 无人机系统',
    description: '语义 SLAM 系统，集成 VINS-Fusion、多传感器融合（RTK/IMU/视觉）、FUEL 自主探索和 PX4 飞控。',
    longDescription: '完整的自主探索系统，结合视觉惯性里程计与 RTK GPS 和 IMU 融合，实现 FUEL 算法的前线探索，集成 PX4 自动驾驶仪。',
    tags: ['SLAM', '无人机', 'VINS-Fusion', 'PX4', 'FUEL', 'C++'],
    category: 'SLAM 与机器人',
    link: '/projects/slam-system'
  },
  {
    name: '大模型 Agent 平台',
    description: '多智能体平台，采用 Planner/Tool/Memory 架构，支持 vLLM 分布式推理、LoRA 微调和 RAG 知识库。',
    longDescription: '企业级智能体平台，支持多个专用智能体（规划器、工具执行器、记忆管理器），具有可扩展的 vLLM 推理后端和检索增强生成领域知识。',
    tags: ['LLM', 'Agent', 'vLLM', 'RAG', 'LoRA', 'Python'],
    category: 'AI 与大模型',
    link: '/projects/agent-platform'
  },
  {
    name: '三维重建研究',
    description: '高性能渲染引擎研究，包括高斯点云优化和渲染 - 语义融合技术。',
    longDescription: '先进的研究项目，探索下一代 3D 重建方法，包括优化的高斯表示、神经渲染改进和语义感知的场景理解。',
    tags: ['研究', '3DGS', '神经渲染', '优化'],
    category: '研究',
    link: '/projects/reconstruction-research'
  },
  {
    name: '桥梁数字孪生 (UE)',
    description: '基于 Unreal Engine 的数字孪生系统，集成 IoT 传感器数据用于桥梁结构健康监测和可视化。',
    longDescription: '基于 Unreal Engine 5 的工业数字孪生平台，集成实时 IoT 传感器数据流用于桥梁结构监测，具有高级可视化和警报系统。',
    tags: ['Unreal Engine', '数字孪生', 'IoT', '可视化', 'C++'],
    category: '系统架构',
    link: '/projects/bridge-system'
  }
]

const categories = [...new Set(projects.map(p => p.category))]
</script>

# 所有项目

全面展示我们在三维视觉、SLAM、AI 工程和系统架构领域的工程项目。

## 项目类别

<div class="category-list">
  <div v-for="category in categories" :key="category" class="category-item">
    <span class="category-badge">{{ category }}</span>
  </div>
</div>

## 按类别查看项目

<div v-for="category in categories" :key="category">

### {{ category }}

<div v-for="project in projects.filter(p => p.category === category)" :key="project.name" class="project-card">
  <h3>{{ project.name }}</h3>
  <p>{{ project.longDescription }}</p>
  <div class="tags">
    <span v-for="tag in project.tags" :key="tag" class="tag">{{ tag }}</span>
  </div>
  <a :href="project.link" class="link">查看详情 →</a>
</div>

</div>

## 添加新项目

要添加新项目：

1. 在 `docs/projects/` 目录中创建新的 Markdown 文件
2. 在 frontmatter 中添加项目元数据
3. 更新上面的项目列表（或实现自动发现）
4. 在 `.vitepress/config.ts` 的侧边栏中添加项目

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
