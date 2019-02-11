var express = require('express');
var app = express();

app.get('/api/timestamp/:date', function(req, res) {
    // check, if entry is yyyy-mm--dd
    var data = req.params.date;
    if (isNaN(data)) {
        // if entry is yy-mm-dd
        var unixFormat = new Date(data).getTime()/1000;
        var temp = new Date(unixFormat * 1000);
        var utc = temp.toUTCString();
    }
    else {
        // if entry is unix time
        var temp = new Date(data * 1000);
        var utc = temp.toUTCString();
        var unixFormat = parseInt(data); // for removing quotation marks 
    }
    res.json({
        unix: unixFormat,
        utc: utc
    });
})

app.get('/api/timestamp', function(req, res) {
    // Now
    var time = new Date();
    var utc = time.toUTCString()
    var unix = time.getTime();
    res.json({
        unix: unix,
        utc: utc
    });
})