// Inputing the current date into the placeholder.

var currentDate = moment();
$("#currentDay").text(currentDate.format("dddd, MMMM Do"));

// Setting variables for the textboxes and buttons.

var allButtons9 = document.querySelector("#push9");
var allButtons10 = document.querySelector("#push10");
var allButtons11 = document.querySelector("#push11");
var allButtons12 = document.querySelector("#push12");
var allButtons1 = document.querySelector("#push1");
var allButtons2 = document.querySelector("#push2");
var allButtons3 = document.querySelector("#push3");
var allButtons4 = document.querySelector("#push4");
var allButtons5 = document.querySelector("#push5");

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

// Functions for retreiving and storing the events from local storage.

var retreive9 = localStorage.getItem("Event of the Day 9");
console.log(retreive9);
textbox9.value = retreive9;

var retreive10 = localStorage.getItem("Event of the Day 10");
console.log(retreive10);
textbox10.value = retreive10;

var retreive11 = localStorage.getItem("Event of the Day 11");
console.log(retreive11);
textbox11.value = retreive11;

var retreive12 = localStorage.getItem("Event of the Day 12");
console.log(retreive12);
textbox12.value = retreive12;

var retreive1 = localStorage.getItem("Event of the Day 1");
console.log(retreive1);
textbox1.value = retreive1;

var retreive2 = localStorage.getItem("Event of the Day 2");
console.log(retreive2);
textbox2.value = retreive2;

var retreive3 = localStorage.getItem("Event of the Day 3");
console.log(retreive3);
textbox3.value = retreive3;

var retreive4 = localStorage.getItem("Event of the Day 4");
console.log(retreive4);
textbox4.value = retreive4;

var retreive5 = localStorage.getItem("Event of the Day 5");
console.log(retreive5);
textbox5.value = retreive5;

// Functions for logging the events into local storage.

var storage9 = function () {
    var value9 = localStorage.setItem("Event of the Day 9", textbox9.value);
    console.log(value9);
}

var storage10 = function () {
    var value10 = localStorage.setItem("Event of the Day 10", textbox10.value);
    console.log(value10);
}

var storage11 = function () {
    var value11 = localStorage.setItem("Event of the Day 11", textbox11.value);
    console.log(value11);
}

var storage12 = function () {
    var value12 = localStorage.setItem("Event of the Day 12", textbox12.value);
    console.log(value12);
}

var storage1 = function () {
    var value1 = localStorage.setItem("Event of the Day 1", textbox1.value);
    console.log(value1);
}
var storage2 = function () {
    var value2 = localStorage.setItem("Event of the Day 2", textbox2.value);
    console.log(value2);
}

var storage3 = function () {
    var value3 = localStorage.setItem("Event of the Day 3", textbox3.value);
    console.log(value3);
}

var storage4 = function () {
    var value4 = localStorage.setItem("Event of the Day 4", textbox4.value);
    console.log(value4);
}

var storage5 = function () {
    var value5 = localStorage.setItem("Event of the Day 5", textbox5.value);
    console.log(value5);
}

// Adding click events to save log the internal text to local storage.

allButtons9.addEventListener("click",storage9);
allButtons10.addEventListener("click",storage10);
allButtons11.addEventListener("click",storage11);
allButtons12.addEventListener("click",storage12);
allButtons1.addEventListener("click",storage1);
allButtons2.addEventListener("click",storage2);
allButtons3.addEventListener("click",storage3);
allButtons4.addEventListener("click",storage4);
allButtons5.addEventListener("click",storage5);


