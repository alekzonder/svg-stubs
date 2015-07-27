var app = require('express')();

app.get('/svg', function(req, res) {

    var width = 1180;
    var height = 90;

    var text = 'text';

    var fill = '#C13C41';

    if (req.query.width) {
        width = req.query.width;
    }

    if (req.query.height) {
        height = req.query.height;
    }

    if (req.query.text) {
        text = req.query.text;
    }

    if (req.query.fill) {
        fill = '#' + req.query.fill;
    }

    if (req.query.time) {
        var date = new Date();
        text = text + ' [' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds() + '.' + date.getMilliseconds() + ']';
    }

    var textX = width / 2;
    var textY = height / 2;

    r = '<svg width="' + width + '" height="' + height + '" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg"> \
            <g> \
            <rect height="' + height + '" width="' + width + '" id="MyRect" fill="' + fill + '"/>\
            <text stroke="white" xml:space="preserve" text-anchor="middle" font-family="serif" font-size="28" y="' + textY + '" x="' + textX + '" stroke-width="0" fill="white">' + text + '</text> \
            </g> \
            </svg>';

    res
        .append('Content-Type', 'image/svg+xml')
        .send(r)
        .end();
});

app.get('/', function(req, res) {
    res.send('<image src="/svg"/>');
});


app.listen(8080);
