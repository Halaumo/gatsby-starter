const path = require('path')

// import aliases
exports.onCreateWebpackConfig = async ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
        '#': path.resolve(__dirname, 'libs'),
      },
    },
  })
}

// exports.onCreatePage = async ({ page, actions }) => {
//   const { createPage } = actions

//   // spa for route /app
//   if (page.path.match(/^\/app/)) {
//     page.matchPath = '/app/*'
//     createPage(page)
//   }

// }
