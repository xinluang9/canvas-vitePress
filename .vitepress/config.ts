import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Canvas",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: 'http://zxjp-dzg-1301158478.cos.ap-shanghai.myqcloud.com/Image/2023-6-20/money.png',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/src/basicOne' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: '认识Canvas', link: '/src/basicOne' },
          { text: 'canvas绘制基本图形', link: '/src/basicTwo' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
