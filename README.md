# mf-store

## React-Create-App notes
### Commands
#### npm run build
Build directory with a production build of your app. Set up your favorite HTTP server so that a visitor to your site is served index.html

#### npm run start
Starts a Webpack development server for with live reloading for quick dev purposes

### Custom
#### npm run transpile

Just an alias for a babel command ```NODE_ENV=production babel src --out-dir transpiled --presets es2015,react```

We are using the babel-cli to transpile all the javascript files in the src folder into the 'transpiled' folder using the es2015 and react presets.

npm packages for this to work:
* babel-cli - the babel cli runner
* babel-preset-react - the 'react' present for transpiling JSX
* babel-preset-es2015 - the 'es2015' preset for transpiling JS es6
