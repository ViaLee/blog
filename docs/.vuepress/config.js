module.exports = {
  lang: "zh-CN",
  title: "💫Viaのblog",
  // description: "这是我的第一个 VuePress 站点",
  themeConfig: {
    logo: "/babe.png",
    head: [
      ['link', { rel: 'icon', href: '/babe.png' }]
    ],
    nav: [
      {
        text: "前端",
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
        ],
      },
      { text: "网络",items: [
        {
          text: "HTTP",
          link: "/pages/http",
        }
      ] },
      { text: "面试", link: "/pages/interview" },
    ],
    search: false,
    sidebar: "auto", // 侧边栏配置
    sidebarDepth: 3, // 侧边栏显示2级
  },
  theme: "@vuepress/default",
};
