# isomorphic-flux-react-react-router
[![Build Status](https://travis-ci.org/jahrlin/isomorphic-flux-react-react-router.svg?branch=master)](https://travis-ci.org/jahrlin/isomorphic-flux-react-react-router)

Please note that this is work in progress.

It's literally exactly what it sounds like. 
Also uses gulp, webpack, es6 (babel), jest, sass and browsersync.

**Demo:** [http://reactfluxdemo.jahrlin.com/](http://reactfluxdemo.jahrlin.com/)

# install and build/run
```bash
$ git clone https://github.com/jahrlin/isomorphic-flux-react-react-router.git
$ cd isomorphic-flux-react-react-router
$ npm install
$ gulp
```

# testing
```bash
$ npm test
```

# how-to
##async operations
Just add add a static function named `fetchData` to a component that acts as a route handler and the application will wait for it to finish before rendering.
This works for both server-side rendering and on the client.

An example can be found here: [src/components/AsyncData.js](https://github.com/jahrlin/isomorphic-flux-react-react-router/blob/master/src/components/AsyncData.js)
