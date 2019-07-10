function formatTime(inputMinutes) {
    var minutes = inputMinutes % 60;
    var allHours = parseInt(inputMinutes / 60);
    var hours = allHours % 24;
    var days = parseInt(allHours / 24)
    return days + ' day(s) ' + hours + ' hour(s) ' + minutes + ' minute(s).';
}

console.log(formatTime(3601));