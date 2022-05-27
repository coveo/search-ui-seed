'use strict';
const sass = require('sass');
const fs = require('fs');

const result = sass.compile('./sass/Index.scss')

fs.writeFileSync('./bin/css/coveoextension.css', result.css);
