import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Pixometra Documentation",
  description: "Complete documentation for Pixometra Framer templates",
  lang: 'en-US',

  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }],
    ['meta', { name: 'theme-color', content: '#40ff43' }],
  ],

  themeConfig: {
    logo: {
      light: '/logo.svg',
      dark: '/logo.svg',
      alt: 'Pixometra'
    },

    nav: [
      { text: 'Home', link: '/' },
      { text: 'SYNTHEX', link: '/synthex/welcome', activeMatch: '/synthex/' },
      { text: 'GitHub', link: 'https://github.com/pixometra' }
    ],

    sidebar: {
      '/synthex/': [
        {
          text: '📚 Introduction',
          items: [
            { text: 'Welcome', link: '/synthex/welcome' },
            { text: 'What You Get', link: '/synthex/what-you-get' },
          ]
        },
        {
          text: '🚀 Getting Started',
          items: [
            { text: 'Duplicate the Template', link: '/synthex/guide/duplicate' },
            { text: 'Framer Basics', link: '/synthex/guide/framer-basics' },
          ]
        },
        {
          text: '📄 Pages',
          items: [
            { text: 'Pages Overview', link: '/synthex/guide/pages-overview' },
            { text: 'Editing Content', link: '/synthex/guide/editing-content' },
          ]
        },
        {
          text: '🗂️ CMS Collections',
          items: [
            { text: 'Overview', link: '/synthex/guide/cms-overview' },
            { text: 'Blog', link: '/synthex/guide/cms-blog' },
            { text: 'Cases', link: '/synthex/guide/cms-cases' },
            { text: 'Career', link: '/synthex/guide/cms-career' },
            { text: 'Legal', link: '/synthex/guide/cms-legal' },
            { text: 'Pricing', link: '/synthex/guide/cms-pricing' },
            { text: 'How to Edit', link: '/synthex/guide/cms-edit' },
          ]
        },
        {
          text: '🎨 Design System',
          items: [
            { text: 'Colors', link: '/synthex/design/colors' },
            { text: 'Typography', link: '/synthex/design/typography' },
          ]
        },
        {
          text: '📦 Components',
          items: [
            { text: 'Terminal Dashboard', link: '/synthex/components/terminal' },
            { text: 'ROI Calculator', link: '/synthex/components/roi-calculator' },
            { text: '404 Game', link: '/synthex/components/404-game' },
            { text: 'Terminal Image', link: '/synthex/components/terminal-image' },
            { text: 'Other Components', link: '/synthex/components/other' },
          ]
        },
        {
          text: '📋 Publishing',
          items: [
            { text: 'Publish Your Site', link: '/synthex/guide/publish' },
            { text: 'Connect Domain', link: '/synthex/guide/domain' },
            { text: 'SEO Settings', link: '/synthex/guide/seo' },
          ]
        },
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/pixometra' }
    ],

    footer: {
      message: 'Made with ❤️ by Pixometra',
      copyright: 'Copyright © 2024 Pixometra'
    },

    search: {
      provider: 'local'
    }
  }
})
