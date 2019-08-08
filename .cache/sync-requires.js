const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/dandiacz/sites/portfolio/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/dandiacz/sites/portfolio/src/pages/404.js"))),
  "component---src-pages-clairolpro-js": hot(preferDefault(require("/Users/dandiacz/sites/portfolio/src/pages/clairolpro.js"))),
  "component---src-pages-devry-js": hot(preferDefault(require("/Users/dandiacz/sites/portfolio/src/pages/devry.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/dandiacz/sites/portfolio/src/pages/index.js"))),
  "component---src-pages-lenovo-product-js": hot(preferDefault(require("/Users/dandiacz/sites/portfolio/src/pages/lenovo-product.js"))),
  "component---src-pages-lenovo-social-js": hot(preferDefault(require("/Users/dandiacz/sites/portfolio/src/pages/lenovo-social.js"))),
  "component---src-pages-sirva-js": hot(preferDefault(require("/Users/dandiacz/sites/portfolio/src/pages/sirva.js"))),
  "component---src-pages-southwest-js": hot(preferDefault(require("/Users/dandiacz/sites/portfolio/src/pages/southwest.js")))
}

