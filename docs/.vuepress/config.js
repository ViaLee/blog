module.exports = {
  lang: "zh-CN",
  title: "blog",
  // description: "这是我的第一个 VuePress 站点",

  themeConfig: {
    logo: "https://vuejs.org/images/logo.png",
    nav: [
      {
        text: "前端基础",
        items: [
          {
            text: "blog",
            link: "/pages/blog",
          },
        ],
      },
      { text: "网络", link: "/pages/blog" },
    ],
    sidebar: "auto", // 侧边栏配置
    sidebarDepth: 2, // 侧边栏显示2级
  },
  theme: "@vuepress/default",
};
