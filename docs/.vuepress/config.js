/*
 * @Author: lishu lishu@gaodun.com
 * @Date: 2021-12-11 01:14:02
 * @LastEditors: lishu lishu@gaodun.com
 * @LastEditTime: 2022-07-13 09:30:43
 * @FilePath: /blog/docs/.vuepress/config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
module.exports = {
  lang: "zh-CN",
  title: "💫Viaのblog",
  // description: "这是我的第一个 VuePress 站点",
  head: [["link", { rel: "icon", href: "/babe.png" }]],
  themeConfig: {
    logo: "/babe.png",
    lastUpdated: '上次更新',
    nav: [
      {
        text: "Basic 🐳",
        items: [
          {
            text: "JS",
            link: "/pages/javascript",
          },
          {
            text: "React",
            link: "/pages/react",
          },
          {
            text: "CSS",
            link: "/pages/css",
          },
          {
            text: "Webpack",
            link: "/pages/webpack",
          },
        ],
      },
      {
        text: "Web 🌏",
        items: [
          {
            text: "HTTP",
            link: "/pages/http",
          },
          {
            text: "安全",
            link: "/pages/security",
          },
          {
            text: "浏览器",
            link: "/pages/browser",
          },
        ],
      },
      {
        text: "Node",
        link: "/pages/node",
      },
      {
        text: "Blog ✍🏻",
        items: [
          { text: "面试 📖", link: "/pages/interview" },
          { text: "博客 ✍🏻", link: "/pages/blog" },
        ],
      },
      // { text: "杂记 🍀", link: "/pages/diary" },
    ],
    search: false,
    sidebar: "auto", // 侧边栏配置
    sidebarDepth: 3, // 侧边栏显示2级
  },
  theme: "@vuepress/default",
  plugins: {
    '@vssue/vuepress-plugin-vssue': {
      // 设置 `platform` 而不是 `api`
      platform: 'github',

      // 其他的 Vssue 配置
      owner: 'ViaLee',
      repo: 'https://github.com/ViaLee/blog-comment.git',
      clientId: 'b5b0c669155ba6dcdf72',
      clientSecret: 'afc6433e13d1345c5276d430289976a805c19649',
      locale:'zh-CN',
    },
    // plugins: ['@vuepress/last-updated',
    // {
    //   transformer: (timestamp, lang) => {
    //     // Don't forget to install moment yourself
    //     const moment = require('moment')
    //     moment.locale(lang)
    //     return moment(timestamp).fromNow()
    //   }
    // }]
  },
};
