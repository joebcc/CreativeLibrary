// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
const axios = require('axios')

module.exports = function (api) {
  // api.loadSource(async actions => {
  //   // Use the Data Store API here: https://gridsome.org/docs/data-store-api/

  //   const collection = actions.addCollection({
  //     typeName: 'creative'
  //   })

  //   for (const item of data) {
  //     collection.addNode({
  //       id: item.id,
  //       title: item.title,
  //       slug: item.slug,
  //       asset: item.asset,
  //       client: item.client
  //     })
  //   }
  // })

  api.createManagedPages(async ({ createPage }) => {
    const { data } = await axios.get('http://a6creative-craft.dev.cc/craft/web/creative.json');


    const creative = data.data;

    console.log(creative);
    

    creative.forEach(item => {
      createPage({
        path: `/creative/${item.slug}`,
        component: './src/templates/Creative.vue',
        context: {
          title: item.title,
          asset: item.asset,
          client: item.client
        }
      })
    })
  })
}
