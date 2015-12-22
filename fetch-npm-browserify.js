// the whatwg-fetch polyfill installs the fetch() function
// on the global object (window or self)
//
// Return that as the export for use in Webpack, Browserify etc.
require('whatwg-fetch');
// if (typeof window === 'object' && window.fetch) {
    module.exports = self.fetch.bind(self);
// }
