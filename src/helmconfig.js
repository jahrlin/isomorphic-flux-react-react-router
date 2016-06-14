/*
 * Based on the template in Web Starter Kit : https://github.com/google/web-starter-kit/blob/master/app/index.html
 * To add to the config, add an object:
 * {
 *  type: 'link' | 'meta',
 *  sizes: 'widthxheight',
 *  rel: 'rel value'
 *  filename: <Name of your file'
 * }
 */

// Import all your needed files first (webpack will grab the url)

const config = {
  link: [
    { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto+Condensed', type: 'text/css' },
    { rel: 'stylesheet', href: '/assets/styles/main.css' }
  ],
  meta: [
    { charset: 'utf-8' },
    // Setting IE=edge tells Internet Explorer to use the latest engine to render the page and execute Javascript
    { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' },
    //  Meta descriptions are commonly used on search engine result pages to display preview snippets for a given page.
    { name: 'description', content: '' },
    // Mobile Safari introduced this tag to let web developers control the viewport's size and scale
    // The width property controls the size of the viewport, the initial-scale property controls
    // the zoom level when the page is first loaded
    { name: 'viewport', content: 'width=device-width, initial-scale=1' }
  ]
};

export default config;
