'use strict';

var ghpages = require('gh-pages');
var path = require('path');
var source = path.join(__dirname, 'app');

ghpages.publish(source, function (err, status) {
    if (err) console.log(err);

    console.log(status);
});
