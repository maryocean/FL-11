function formatTime(inputMinutes) {
    var minutes = inputMinutes % 60;
    var allHours = Math.floor(inputMinutes / 60);
    var hours = allHours % 24;
    var days = Math.floor(allHours / 24)
    return days + ' day(s) ' + hours + ' hour(s) ' + minutes + ' minute(s).';
}
console.log(formatTime(3363));


