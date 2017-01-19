require('babel-register')();
var storage = require('./storage')
var jsdom = require('jsdom').jsdom;

var exposedProperties = ['window', 'navigator', 'document'];

//global.document = jsdom('');
global.document = jsdom('<!doctype html><html><body><div id="app"></div></body></html>', {
  url: 'http://localhost'
})
global.window = document.defaultView;
storage(global.window)
Object.keys(document.defaultView).forEach((property) => {
  if (typeof global[property] === 'undefined') {
    exposedProperties.push(property);
    global[property] = document.defaultView[property];
  }
});

global.navigator = {
  userAgent: 'node.js',
  onLine: true
};

//documentRef = document;
