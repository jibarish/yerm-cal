var d = new Date();

var monthGregorian = d.getMonth() + 1;
var day = d.getDate();

var cycle = 21;
var yerm = 14;
var month = 16;

if (monthGregorian == 5 && day > 17 || monthGregorian > 5) {
    alert("Update me!!");
    throw "Calendar is out of date as of noon 2015 May 18";
}

function dayToNight(day, hour) {
    return (hour >= 12 ? day : day - 1);
}

function hourTransform(hour) {
    return (hour < 12 ? hour + 12 : hour - 12);
}

function hoursToMinutes(hours) {
    return hours * 60
}

function hoursToSeconds(hours) {
    return hours * 3600
}

function minutesToSeconds(minutes) {
    return minutes * 60
}

function round(d) {
    return parseInt(d + 0.5, 10);
}

function calculatePercent(hour, minute, second) {
    return (hoursToSeconds(hourTransform(hour)) + minutesToSeconds(minute) + second) / hoursToSeconds(24.0) * 100;
}

function updateDisplay(night, percent) {
    document.getElementById("cycle").innerHTML = cycle + "\tcycle";
    document.getElementById("yerm").innerHTML = yerm + "\tyerm";
    document.getElementById("month").innerHTML = month + "\tmonth";
    document.getElementById("night").innerHTML = night + "\tnight";
    document.getElementById("percent").innerHTML = percent.toFixed(2) + "\t%";
}

function updateTime() {
    d = new Date();
    var hour = d.getHours();
    var minute = d.getMinutes();
    var second = d.getSeconds();

    var night = dayToNight(day, hour) + 12;
    var percent = calculatePercent(hour, minute, second)

    updateDisplay(night, percent)
}

var makeTime = setInterval(updateTime, 1000);

// New Yerm is on 6 - 17 - 2015 !!!
// New Yerm's Morn : New Year's Eve :: New Yerm's Night : New Year's Day
