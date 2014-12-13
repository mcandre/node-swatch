var sprintf = require("sprintf").sprintf;

// Convert a Date to a number of Swatch beats
function beats(d) {
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

exports.beats = beats;

// Format Swatch beats as a String
function swatchtime(b) {
  return sprintf("@%06.2f", b);
}

exports.swatchtime = swatchtime;

// Convert current time to Swatch time
function swatchNow() {
  return swatchtime(beats(new Date()));
}

exports.swatchNow = swatchNow;
