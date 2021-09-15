
// These lists will be used to find the week day and month
let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];
let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];

// Get todays date
let date = new Date();

// Use todays date (int) to find the weekday
let weekday = days[date.getDay()]

// Use the month number to find the month
let month = months[date.getMonth()]

// get the current year
let year = date.getFullYear()

// update the html element with the proper year
document.getElementById("year").innerHTML = year

// update the last time the file was modified
// will update the lastmodify element with the proper date and time
document.getElementById("lastmodify").innerHTML = document.lastModified