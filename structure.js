// Inputing the current date into the placeholder.

var currentDate = moment();
$("#currentDay").text(currentDate.format("dddd, MMMM Do"));
