"use strict";

var
c = require("rho-contracts"),
sprintf = require("sprintf").sprintf;

// Convert a Date to a number of Swatch beats
var beats = c.fun({ d: c.isA(Date, "Date") })
.returns(c.number)
.wrap(
    function(d) {
        var
        utc = new Date(
            d.getUTCFullYear(),
            d.getUTCMonth(),
            d.getUTCDate(),
            d.getUTCHours(),
            d.getUTCMinutes(),
            d.getUTCSeconds()
        ),
        seconds = utc.getHours() * 3600 + utc.getMinutes() * 60 + utc.getSeconds(),
        bmt = seconds + 3600;

        return (bmt / 86.4) % 1000;
    }
);

exports.beats = beats;

// Format Swatch beats as a String
var swatchtime = c.fun({ b: c.number })
.returns(c.string)
.wrap(
    function(b) {
        return sprintf("@%06.2f", b);
    }
);

exports.swatchtime = swatchtime;

// Return the current time to Swatch time
var swatchNow = c.fun()
.returns(c.string)
.wrap(
    function() {
        return swatchtime(beats(new Date()));
    }
);

exports.swatchNow = swatchNow;
