import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "兄弟们，写代码！",
  description: "兄弟们，写代码！",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '码上开始', link: '/' },
      { text: '关于', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: '根',
        link: '/homepage'
      },
      {
        text: '编程',
        items: [
          { text: '正则表达式', link: '/coding/regular_expression.md' },
          { text: 'solidity', link: '/coding/solidity.md' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Nauxscript-dev/xdmxdm' }
    ]
  }
})
