// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
const axios = require('axios')
const AdmZip = require('adm-zip');

module.exports = function (api) {
  api.createManagedPages(async ({ createPage }) => {
    const craftUrl = 'http://a6creative-craft.dev.cc/craft/web/'
    const { data } = await axios.get(`${craftUrl}creative.json`);
    const creative = data.data;

    //? Begin Loop through each imported creative asset ============================================================
    creative.forEach((item, ci) => {
      const assettype = 'banner'; // hard coding banner for now - should eventually be computed by filetype or set in CMS
      var creativeUrl = `../craft/web/assets/creative/${item.asset.path}`;

      //? When dealing with banners ------------------------------------------------
      if (assettype === 'banner' && creativeUrl.includes('.zip')) {
        //? Unzip the compressed folder and search for html files
        const zip = new AdmZip(creativeUrl);
        const zipEntries = zip.getEntries(); // an array of ZipEntry records
        const htmlSearch = zipEntries.filter(zipEntry => zipEntry.entryName.includes('.html'));
        var height;
        var width;

        //? If there are 0 or more than 1 .html files ...................................
        if (htmlSearch.length < 1) { 
          console.log('Error - imported banner with no HTML file', creativeUrl); 
          return;
        } else if (htmlSearch > 1) { 
          console.log('Error - imported banner has multiple HTML files', creativeUrl, htmlSearch); 
          return;
        //? Ensure we have only 1 .html file .........................................
        } else { 
          creativeUrl = `/banners/${item.client}/${item.slug}/`;
          zipEntries.forEach(function(zipEntry) {
            const entryName = zipEntry.entryName;
            if (entryName.includes('__MACOSX')) {
              //? skip unneeded files
              return;
            } else if (entryName.includes('/')) {
              //? for dealing with internal folders - stripping the extra added by the unzipping
              const regex = /\/(.*)\//;
              const internalpath = entryName.match(regex);
              var internalURL = creativeUrl;
              if (internalpath && internalpath[1]) {
                internalURL += internalpath[1];
              }
              zip.extractEntryTo(entryName, `static/${internalURL}`, /*maintainEntryPath*/false, /*overwrite*/true)
            } else {
              zip.extractEntryTo(entryName, `static/${creativeUrl}`, /*maintainEntryPath*/false, /*overwrite*/true)
            }


          } 
          );
          
          //? Check HTML file for ad.size label and save the values if present
          const htmlData = zip.readAsText(htmlSearch[0].entryName); 
          if (htmlData.includes('name="ad.size"')) {
            // console.log(htmlData)
            width = htmlData.match(/meta.*ad.size.*width=(\d*)/)[1];
            height = htmlData.match(/meta.*ad.size.*height=(\d*)/)[1];
            creative[ci].height = height;
            creative[ci].width = width;
            creative[ci].size = width + 'x' + height;
          } else {
            console.log(`${creativeUrl} needs a meta.ad-size tag denoting it's size`);
          }

        }
      } //? end banners --------------------------------------------------------

      item.creativeUrl = creativeUrl;
      createPage({
        path: `/${item.slug}`,
        component: './src/templates/CreativeSingle.vue',
        context: {
          ...item,
          width: width,
          height: height,
          size: width + 'x' + height,
          creativeUrl: creativeUrl,
        }
      })
    })

    createPage({
      path: `/`,
      component: './src/templates/CreativeArchive.vue',
      context: {
        creative: creative,
      }
    });

  })
}
