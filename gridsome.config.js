module.exports = {
  siteName: 'Neuropsychologische Praxis Dr. Denise Long',
  siteUrl: 'https://praxis-long.ch',
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'articles/**/*.md',
        typeName: 'Articles',
        remark: {}
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'pages/**/*.md',
        typeName: 'Pages',
        remark: {}
      }
    },
    {
      use: '@gridsome/plugin-sitemap',
      options: {
        cacheTime: 600000, // default
        config: {
          'articles/*': {
            changefreq: 'weekly',
            priority: 0.5
          },
          'pages': {
            changefreq: 'weekly',
            priority: 0.5
          }
        }
      }
    }    
  ],
  transformers: {
    remark: {}
  }
}
