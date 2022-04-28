// .vuepress/config.js
module.exports = {
	title: "追求卓越，成功会在不经意间追上你",
	description: "追求卓越，成功会在不经意间追上你",
	head: [
		['link', {rel: 'icon', href: '/favicon.ico'}]
	],
	base: "/docs/",
  themeConfig: {
  	lastUpdated: '更新时间', // string | boolean
    //logo: '/assets/img/logo.png', // 导航栏logo
    //navbar: false, // 禁用导航栏
    sidebar: 'auto', // 自动生成侧边栏
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Spring', link: '/spring/' },
      {
        text: 'Languages',
        ariaLabel: 'Language Menu',
        items: [
          { text: 'Chinese', link: '/language/chinese/' },
          { text: 'Japanese', link: '/language/japanese/' },
          { text: 'Group1', items: [
          	{ text: 'Chinese', link: '/language/chinese/' },
          { text: 'Japanese', link: '/language/japanese/' },
          ]},
          { text: 'Group2', items: [
          	{ text: 'Chinese', link: '/language/chinese/' },
          { text: 'Japanese', link: '/language/japanese/' },
          ]}
        ]
      },
      { text: 'External', link: 'https://google.com' },
    ]
  },
  plugins: [
  	'vuepress-plugin-mermaidjs'
  ]
}
