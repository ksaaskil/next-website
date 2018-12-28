const withCSS = require('@zeit/next-css')
const withImages = require('next-images')

const isGitHub = process.env.NODE_ENV === 'github-pages'

module.exports = withImages(withCSS({
    exportPathMap: function () {
        return {
          '/': { page: '/' }
        }
      },
    assetPrefix: isGitHub ? '/next-website/' : ''
    }
))
