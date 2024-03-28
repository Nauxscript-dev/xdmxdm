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
        text: '开发者',
        items: [
          { text: 'Docker', link: '/coding/docker.md' },
          { text: 'Golang', link: '/coding/golang.md' },
          { text: 'Javascript', link: '/coding/javascript.md' },
          { text: 'Rust', link: '/coding/rust.md' },
          {
            text: 'Web3',
            items: [
              { text: '综合', link: '/coding/web3/all.md' },
              { text: 'Solidity', link: '/coding/web3/solidity.md' },
            ]
          },
          { text: '面试', link: '/coding/interview.md' },
          { text: '设计模式', link: '/coding/patterns.md' },
          { text: '正则表达式', link: '/coding/regular_expression.md' },
        ]
      },
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Nauxscript-dev/xdmxdm' }
    ]
  }
})
