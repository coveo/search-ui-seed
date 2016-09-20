'use strict';
let fs = require('fs');

if (!fs.existsSync('./bin')) {
  fs.mkdirSync('./bin');
}

if (!fs.existsSync('./bin/css')) {
  fs.mkdirSync('./bin/css');
}

if (!fs.existsSync('./bin/image')) {
  fs.mkdirSync('./bin/image');
}

if (!fs.existsSync('./bin/js')) {
  fs.mkdirSync('./bin/js');
}

fs.createReadStream('./node_modules/coveo-search-ui/bin/css/CoveoFullSearchNewDesign.css').pipe(fs.createWriteStream('./bin/css/CoveoFullSearchNewDesign.css'));
fs.createReadStream('./node_modules/coveo-search-ui/bin/image/spritesNew.png').pipe(fs.createWriteStream('./bin/image/spritesNew.png'));
fs.createReadStream('./node_modules/coveo-search-ui/bin/js/templates/templatesNew.js').pipe(fs.createWriteStream('./bin/js/templatesNew.js'));
fs.createReadStream('./node_modules/coveo-search-ui/bin/js/CoveoJsSearch.js').pipe(fs.createWriteStream('./bin/js/CoveoJsSearch.js'));
fs.createReadStream('./pages/index.html').pipe(fs.createWriteStream('./bin/index.html'));
