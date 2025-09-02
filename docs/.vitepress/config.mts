import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "SA Portal",
  description: "Your one-stop stop SA information",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'SA Form', link: 'https://p.ecvph.com' }
    ],

    sidebar: [
      {
        text: 'Quick Links',
        items: [
          { text: 'Sales Resources', link: '/sales' },
          { text: 'Templates', link: '/templates' },
	  { text: 'Team', link: '/team' }
        ]
      }
    ]

  }
})
