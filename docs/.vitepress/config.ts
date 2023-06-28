import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "My Awesome Project",
  description: "A VitePress Site",
  srcDir: './src',
  base: '/blog/',
  themeConfig: {
    siteTitle: 'Hello World',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'My Wealth', link: '/markdown-examples' }
    ],
    sidebar: [
      {
        text: 'Vue',
        items: [
          { text: 'vue2', link: '/vue/vue2.md' },
          { text: 'vue3', link: '/vue/vue3.md' },
        ]
      },
      {
        text: 'React基础',
        items: [
          { text: 'class', link: '/react/classComponent' },
          { text: 'hooks', link: '/react/hooksComponent' }
        ]
      },
      {
        text: '问题',
        items: [
          { text: '有点子缘份的bug', link: '/question/bug.md' },
          { text: '相关其他知识', link: '/question/interview.md' },
        ]
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
