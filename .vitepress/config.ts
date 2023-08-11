import { defineConfig } from 'vitepress'
import { SearchPlugin } from "vitepress-plugin-search";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Canvas",
  description: "A VitePress Site",
  base: '/canvas-vitePress.top/',
  themeConfig: {
    // search: {
    //   provider: 'local'
    // },
    // https://vitepress.dev/reference/default-theme-config
    logo: 'http://zxjp-dzg-1301158478.cos.ap-shanghai.myqcloud.com/Image/2023-6-20/money.png',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/src/01-basicOne' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: '01-认识Canvas', link: '/src/01-basicOne' },
          { text: '02-canvas绘制基本图形', link: '/src/02-basicTwo' },
          { text: '03-样式和颜色控制', link: '/src/03-basicColor' },
          { text: '04-绘制图像和视频', link: '/src/04-basicImg' },
          { text: '05-绘制文本', link: '/src/05-basicFive' },
          { text: '06-几何变换', link: '/src/06-basicSix' },
          { text: '07-合成与剪裁', link: '/src/07-basicSenve' },
          { text: '08-像素', link: '/src/08-basicEight' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
