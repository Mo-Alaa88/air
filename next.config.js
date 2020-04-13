const withCSS = require('@zeit/next-css');
const withImages = require('next-images');
// const LazySizes = require('react-lazysizes');
module.exports = withCSS(withImages({}))
// module.exports = withImages({})
