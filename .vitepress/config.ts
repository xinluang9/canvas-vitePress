import { defineConfig } from 'vitepress'
import { SearchPlugin } from "vitepress-plugin-search";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Canvas",
  description: "A VitePress Site",
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
          { text: '04-绘制图像', link: '/src/04-basicImg' },
          { text: '05-几何变换', link: '/src/05-basicFive' },
          { text: '06-合成与剪裁', link: '/src/06-basicSix' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
