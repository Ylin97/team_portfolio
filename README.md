# 工程技术团队作品集网站

使用 VitePress 构建的专业工程技术团队主页，展示我们在三维视觉、SLAM、AI 工程和系统架构领域的技术能力。

## 快速开始

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build

# 预览生产构建
npm run preview
```

## 项目结构

```
Team_Portfolio_Website/
├── docs/
│   ├── index.md                    # 首页
│   ├── projects/
│   │   ├── index.md                # 项目列表
│   │   ├── 3dgs-engine.md          # 3DGS 渲染引擎
│   │   ├── measurement-system.md   # 测量系统
│   │   ├── slam-system.md          # SLAM + 无人机系统
│   │   ├── agent-platform.md       # 大模型 Agent 平台
│   │   ├── reconstruction-research.md  # 三维重建研究
│   │   └── bridge-system.md        # 桥梁数字孪生
│   ├── assets/                     # 静态资源（图片等）
│   └── public/                     # 公共资源（favicon 等）
├── .vitepress/
│   ├── config.ts                   # VitePress 配置
│   └── theme/
│       ├── index.ts                # 主题入口
│       └── styles/
│           └── custom.css          # 自定义样式
├── package.json
└── tsconfig.json
```

## 功能特性

- **响应式设计**: 适配桌面、平板和手机
- **深色模式**: 自动支持深色主题
- **全文搜索**: 支持中文搜索
- **语法高亮**: 代码块主题支持
- **Mermaid 图表**: 支持架构图
- **SEO 优化**: 元标签和结构化数据
- **项目画廊**: 展示项目精彩瞬间

## 添加新项目

1. 在 `docs/projects/` 目录创建新的 Markdown 文件
2. 添加 frontmatter 元数据：
   ```markdown
   ---
   title: 项目名称
   description: 简短描述
   ---
   ```
3. 更新 `.vitepress/config.ts` 侧边栏配置
4. 在 `docs/projects/index.md` 项目列表中添加项目

## 自定义

### 主题颜色

编辑 `.vitepress/theme/styles/custom.css`：

```css
:root {
  --vp-c-brand: #3eaf7c;      /* 主品牌色 */
  --vp-c-brand-light: #5bc98f; /* 浅色变体 */
  --vp-c-brand-dark: #2d8f63;  /* 深色变体 */
}
```

### 站点配置

编辑 `.vitepress/config.ts`：

```typescript
export default defineConfig({
  title: '你的团队名称',
  description: '你的描述',
  // ...
})
```

## 部署

### GitHub Pages

```bash
# 构建
npm run build

# 部署（使用 gh-pages 或类似工具）
npx gh-pages -d docs/.vitepress/dist
```

### Vercel

1. 连接仓库到 Vercel
2. 设置构建命令：`npm run build`
3. 设置输出目录：`docs/.vitepress/dist`

### Netlify

1. 连接仓库到 Netlify
2. 设置构建命令：`npm run build`
3. 设置发布目录：`docs/.vitepress/dist`

## 开发指南

### 编写项目页面

每个项目页面应包含：

- **项目背景**: 问题陈述和行业背景
- **系统架构**: 架构图和模块概述
- **核心技术**: 技术深入与代码示例
- **个人职责**: 你的具体贡献
- **项目成果**: 量化结果和指标
- **演示**: 截图、图表或视频
- **画廊**: 项目图片展示

### 代码示例

使用带语言指定的代码块：

````markdown
```cpp
// C++ 代码示例
class MyClass {
    // ...
};
```

```python
# Python 代码示例
def my_function():
    pass
```
````

### 图片

将图片放在 `docs/assets/projects/<project-name>/` 目录，使用绝对路径引用：

```markdown
![描述](/assets/projects/project-name/image.png)
```

### 画廊图片

在每个项目页面的画廊部分添加图片展示：

```markdown
## 画廊

<div class="gallery-grid">

<div class="gallery-item">
  <div class="gallery-image-wrapper">
    <img src="/assets/projects/project-name/image.png" alt="图片标题" class="gallery-image" />
  </div>
  <div class="gallery-info">
    <h4>标题</h4>
    <p>描述</p>
  </div>
</div>

</div>
```

## 技术栈

- **框架**: VitePress 1.x
- **Vue**: 3.x
- **TypeScript**: 5.x
- **样式**: 自定义 CSS 与 CSS 变量

## 系统要求

- Node.js >= 18.0.0
- npm 或 yarn

## 许可证

MIT

## 贡献

1. Fork 仓库
2. 创建功能分支
3. 提交更改
4. 推送到分支
5. 创建 Pull Request
