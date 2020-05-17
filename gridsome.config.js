module.exports = {
  siteName: 'Neuropsychologische Praxis Dr. Denise Long',
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
