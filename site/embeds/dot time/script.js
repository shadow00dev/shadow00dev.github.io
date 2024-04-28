const hours = document.getElementById("hours").children;
setInterval(() => {
    var time = timeToDots();
    for (var i=0; i<11;i++) hours[i].setAttribute("data-time", String(time.convertedTime.hours[i+1]));
});

const minutesTens = document.getElementById("minutesTens").children;
const minutesUnits = document.getElementById("minutesUnits").children;
setInterval(() => {
    var time = timeToDots();
    for (var i=0; i<5;i++) minutesTens[i].setAttribute("data-time", String(time.convertedTime.minutes.tens[i+1]));
});

setInterval(() => {
    var time = timeToDots();
    for (var i=0; i<9;i++) minutesUnits[i].setAttribute("data-time", String(time.convertedTime.minutes.units[i+1]));
});

const timeFormat = document.getElementById("time").children;
setInterval(() => {
    var time = timeToDots();
    timeFormat[0].setAttribute("data-time", String(time.pm));
});