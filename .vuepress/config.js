module.exports = {
  title: 'SDP Front-end Docs',
  description: 'For Ripple, Nuxt...',
  base: '/sdp-docs/',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' }
    ],
    sidebar: {
      '/guide/': [
        '/guide/',
        {
          title: 'Basics',
          collapsable: false,
          children: [
            '/guide/basics/create-site.md'
          ]
        }
      ]
    }
  }
}
