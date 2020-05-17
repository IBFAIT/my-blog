module.exports = {
  siteName: 'My blog',
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'articles/**/*.md',
        typeName: 'Articles',
        remark: {}
      }
    },
  ],
  transformers: {
    remark: {}
  }
}
