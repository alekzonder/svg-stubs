#!/usr/bin/env node
var logger = require('log4js').getLogger('svg-stubs');
var app = require('express')();

logger.level = "info";

var port = 8080;

if (process.argv[2]) {
    port = Number(process.argv[2]);
}

var svg = function(req, res) {

    var width = 1180;
    var height = 90;
    var text = 'hello';
    var fill = '#C13C41';
    var fontSize = 24;

    if (req.query.width) {
        width = Number(req.query.width);
    }

    if (req.query.height) {
        height = Number(req.query.height);
    }

    if (req.query.text) {
        text = String(req.query.text);
    }

    if (req.query.fill) {
        fill = '#' + String(req.query.fill);
    }

    if (req.query.time) {
        var date = new Date();
        text = text + ' [' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds() + '.' + date.getMilliseconds() + ']';
    }

    if (req.query.fontSize) {
        fontSize = Number(req.query.fontSize);
    }

    var textX = width / 2;
    var textY = height / 2;

    var result = '<svg width="' + width + '" height="' + height + '" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg"> \
            <g> \
            <rect height="' + height + '" width="' + width + '" id="MyRect" fill="' + fill + '"/>\
            <text stroke="white" xml:space="preserve" text-anchor="middle" font-family="serif" font-size="' + fontSize + '" y="' + textY + '" x="' + textX + '" stroke-width="0" fill="white">' + text + '</text> \
            </g> \
            </svg>';

    res.append('Content-Type', 'image/svg+xml')
        .append('Cache-Control', 'no-cache, no-store, must-revalidate')
        .append('Pragma', 'no-cache')
        .append('Expires', 0)
        .send(result)
        .end();
};

app.get('/*.svg', svg);
app.get('/svg', svg);
app.get('/', svg);

app.listen(port, function() {
    logger.info("listen on %s", port);
});
