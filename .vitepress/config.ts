import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Engineering Team',
  description: 'Engineering Team Technical Portfolio - 3D Vision, SLAM, AI Agent, System Architecture',
  
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'keywords', content: '3DGS, SLAM, AI Agent, Rendering Engine, Digital Twin, Engineering Team' }],
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
      { text: 'Home', link: '/' },
      { text: 'Projects', link: '/projects/' }
    ],

    // 侧边栏 - 项目列表
    sidebar: {
      '/projects/': [
        {
          text: 'Projects',
          items: [
            { text: 'All Projects', link: '/projects/' },
            { text: '3DGS Rendering Engine', link: '/projects/3dgs-engine' },
            { text: 'Measurement System (3DGS)', link: '/projects/measurement-system' },
            { text: 'SLAM + UAV System', link: '/projects/slam-system' },
            { text: 'LLM Agent Platform', link: '/projects/agent-platform' },
            { text: '3D Reconstruction Research', link: '/projects/reconstruction-research' },
            { text: 'Bridge Digital Twin (UE)', link: '/projects/bridge-system' }
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
      message: 'Engineering Team Technical Portfolio',
      copyright: 'Copyright © 2024 Engineering Team'
    },

    // 文档配置
    docFooter: {
      prev: 'Previous',
      next: 'Next'
    },

    // 搜索配置
    search: {
      provider: 'local',
      options: {
        locales: {
          root: {
            translations: {
              button: {
                buttonText: 'Search',
                buttonAriaLabel: 'Search documentation'
              },
              modal: {
                noResultsText: 'No results found',
                resetButtonTitle: 'Reset search',
                footer: {
                  selectText: 'to select',
                  navigateText: 'to navigate'
                }
              }
            }
          }
        }
      }
    }
  }
})
