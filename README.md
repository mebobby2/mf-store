# mf-store

## Requirements
* node
* docker

## Integration Options
### Backend (git branch integration-backend)
Use the back-end to fetch the other apps. We are using an express server, but a more robust way is to use nginx SSI.
The problem with this approach is if one of the microservices takes a long time to load - it will hold up the entire page.

### iFrame (git branch integration-iframe)
Solves the problem of a slow service holding the entire page up. However, the bad part is that you cannot share the stylesheet,loaded libraries, communication will be harder, etc,

### Client Side JS (integration-client-side-js)
Loads the UI for each microservice using Ajax on the browser. Also solves the problem of a slow service holding the entire page up. However, because it's client side rendering, you may lose SEO. However, Google SEO Crawler is getting better at processing JS these days...

### Progressively stream content to browser (integration-progressive-loading-backend)
Send chunks of data from the server as it loads them from each of the microservices. The bad part is that they have to load in order, different from the previous example were the cart would load before the products list.

## Notes
### create-react-app Commands
#### npm run build
Build directory with a production build of your app. Set up your favorite HTTP server so that a visitor to your site is served index.html

#### npm run start
Starts a Webpack development server for with live reloading for quick dev purposes

### Custom Commands
#### npm run transpile

Just an alias for a babel command ```NODE_ENV=production babel src --out-dir transpiled --presets es2015,react```

We are using the babel-cli to transpile all the javascript files in the src folder into the 'transpiled' folder using the es2015 and react presets.

npm packages for this to work:
* babel-cli - the babel cli runner
* babel-preset-react - the 'react' present for transpiling JSX
* babel-preset-es2015 - the 'es2015' preset for transpiling JS es6

#### npm run start:prod
Alias for ```NODE_ENV=production node server.js```. We are are just runing server.js with node. Notice we are not transpiling server.js in anyway, so if you look inside server.js, we are not using ES6 imports (import example from 'example') but using CommonJS imports (const package = require('module-name')) which is the standard used by node for working with modules.

## Upto
https://medium.com/@_rchaves_/building-microfrontends-part-iv-using-cdns-tech-radar-for-consensus-7dd658c1edb7
