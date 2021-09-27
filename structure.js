// Inputing the current date into the placeholder.

var currentDate = moment();
$("#currentDay").text(currentDate.format("dddd, MMMM Do"));

// Setting variables for the textboxes and buttons.

var allButtons = document.querySelectorAll("#push");

var textbox9 = document.getElementById("text9");
var textbox10 = document.getElementById("text10");
var textbox11 = document.getElementById("text11");
var textbox12 = document.getElementById("text12");
var textbox1 = document.getElementById("text1");
var textbox2 = document.getElementById("text2");
var textbox3 = document.getElementById("text3");
var textbox4 = document.getElementById("text4");
var textbox5 = document.getElementById("text5");

// Setting moment events for current time.

var time = moment();
var currentTime = time.format("ha");
console.log(currentTime);

var scheduleHours9 = document.querySelector("#hours9").innerHTML;
var scheduleHours10 = document.querySelector("#hours10").innerHTML;
var scheduleHours11 = document.querySelector("#hours11").innerHTML;
var scheduleHours12 = document.querySelector("#hours12").innerHTML;
var scheduleHours1 = document.querySelector("#hours1").innerHTML;
var scheduleHours2 = document.querySelector("#hours2").innerHTML;
var scheduleHours3 = document.querySelector("#hours3").innerHTML;
var scheduleHours4 = document.querySelector("#hours4").innerHTML;
var scheduleHours5 = document.querySelector("#hours5").innerHTML;
console.log(scheduleHours10);

// Function for the textbox colors changing as time changes.

if (currentTime==scheduleHours9) {
    textbox9.style.backgroundColor = "red";
} else if(currentTime==scheduleHours10) {
    textbox10.style.backgroundColor = "red";
    textbox9.style.backgroundColor = "gray";
} else if(currentTime==scheduleHours11) {
    textbox10.style.backgroundColor = "gray";
    textbox9.style.backgroundColor = "gray"
    textbox11.style.backgroundColor = "red";
} else if(currentTime==scheduleHours12) {
    textbox10.style.backgroundColor = "gray";
    textbox9.style.backgroundColor = "gray"
    textbox11.style.backgroundColor = "gray";
    textbox12.style.backgroundColor = "red";
} else if(currentTime==scheduleHours1) {
    textbox10.style.backgroundColor = "gray";
    textbox9.style.backgroundColor = "gray"
    textbox11.style.backgroundColor = "gray";
    textbox12.style.backgroundColor = "gray";
    textbox1.style.backgroundColor = "red";
} else if(currentTime==scheduleHours2) {
    textbox10.style.backgroundColor = "gray";
    textbox9.style.backgroundColor = "gray"
    textbox11.style.backgroundColor = "gray";
    textbox12.style.backgroundColor = "gray";
    textbox1.style.backgroundColor = "gray";
    textbox2.style.backgroundColor = "red";
} else if(currentTime==scheduleHours3) {
    textbox10.style.backgroundColor = "gray";
    textbox9.style.backgroundColor = "gray"
    textbox11.style.backgroundColor = "gray";
    textbox12.style.backgroundColor = "gray";
    textbox1.style.backgroundColor = "gray";
    textbox2.style.backgroundColor = "gray";
    textbox3.style.backgroundColor = "red";
} else if(currentTime==scheduleHours4) {
    textbox10.style.backgroundColor = "gray";
    textbox9.style.backgroundColor = "gray"
    textbox11.style.backgroundColor = "gray";
    textbox12.style.backgroundColor = "gray";
    textbox1.style.backgroundColor = "gray";
    textbox2.style.backgroundColor = "gray";
    textbox3.style.backgroundColor = "gray";
    textbox4.style.backgroundColor = "red";
} else if(currentTime==scheduleHours5) {
    textbox10.style.backgroundColor = "gray";
    textbox9.style.backgroundColor = "gray"
    textbox11.style.backgroundColor = "gray";
    textbox12.style.backgroundColor = "gray";
    textbox1.style.backgroundColor = "gray";
    textbox2.style.backgroundColor = "gray";
    textbox3.style.backgroundColor = "gray";
    textbox4.style.backgroundColor = "gray";
    textbox5.style.backgroundColor = "red";
}


