import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: '工程技术团队',
  description: '工程技术团队技术作品集 - 三维视觉、SLAM、大模型 Agent、系统架构',
  lang: 'zh-CN',
  
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'keywords', content: '3DGS, SLAM, AI Agent, 渲染引擎，数字孪生，工程技术团队' }],
    ['link', { rel: 'icon', href: '/favicon.svg', type: 'image/svg+xml' }]
  ],

  lastUpdated: true,
  cleanUrls: true,

  markdown: {
    lineNumbers: true,
    theme: {
      light: 'github-light',
      dark: 'github-dark'
    }
  },

  themeConfig: {
    // 顶部导航
    nav: [
      { text: '首页', link: '/' },
      { text: '项目', link: '/projects/' }
    ],

    // 侧边栏 - 项目列表
    sidebar: {
      '/projects/': [
        {
          text: '项目',
          items: [
            { text: '全部项目', link: '/projects/' },
            { text: '3DGS 渲染引擎', link: '/projects/3dgs-engine' },
            { text: '测量系统 (3DGS)', link: '/projects/measurement-system' },
            { text: 'SLAM + 无人机系统', link: '/projects/slam-system' },
            { text: '大模型 Agent 平台', link: '/projects/agent-platform' },
            { text: '三维重建研究', link: '/projects/reconstruction-research' },
            { text: '桥梁数字孪生 (UE)', link: '/projects/bridge-system' }
          ]
        }
      ]
    },

    // 社交链接
    socialLinks: [
      { icon: 'github', link: 'https://github.com' }
    ],

    // 页脚
    footer: {
      message: '工程技术团队技术作品集',
      copyright: 'Copyright © 2024 工程技术团队'
    },

    // 文档配置
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },

    // 搜索配置
    search: {
      provider: 'local',
      options: {
        locales: {
          root: {
            translations: {
              button: {
                buttonText: '搜索',
                buttonAriaLabel: '搜索文档'
              },
              modal: {
                noResultsText: '未找到结果',
                resetButtonTitle: '重置搜索',
                footer: {
                  selectText: '选择',
                  navigateText: '导航'
                }
              }
            }
          }
        }
      }
    },

    // 大纲配置
    outline: {
      label: '本页内容'
    },

    // 编辑链接
    editLink: {
      pattern: 'https://github.com/your-org/your-repo/edit/main/docs/:path',
      text: '在 GitHub 上编辑此页面'
    }
  }
})
