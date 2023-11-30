const numberHours = document.querySelector(".number-hours");
const barSeconds = document.querySelector(".bar-seconds");
const stopwatchSeconds = document.querySelector(".stopwatch-bar");
const dateBar = document.querySelector(".date");

const numberElement = [];
const barElement = [];
const stopwatchElement = [];

for (let i = 1; i <= 12; i++) {   //create numbers for hours
     numberElement.push(
        `<span style="--index:${i};"><p>${i}</p></span>`
     );
}

numberHours.insertAdjacentHTML("afterbegin", numberElement.join(""));


for (let i = 1; i <= 60; i++) {   //create 60 span elements for clock bars
    barElement.push(
        `<span style="--index:${i};"><p></p></span>`
    );
}

barSeconds.insertAdjacentHTML("afterbegin", barElement.join(""));  


for (let i = 1; i <= 60; i++) {   //create 60 span elements for stopwatch bars
    stopwatchElement.push(
        `<span style="--index:${i};"><p></p></span>`
    );
}

stopwatchSeconds.insertAdjacentHTML("afterbegin", stopwatchElement.join(""));



const handHours = document.querySelector(".hand.hours");
const handMinutes = document.querySelector(".hand.minutes");
const handSeconds = document.querySelector(".hand.seconds");

function getCurentTime() {     //clock hands movement
    let date = new Date();
    let currentHours = date.getHours();
    let currentMinutes = date.getMinutes();
    let currentSeconds = date.getSeconds();

    handHours.style.transform = `rotate(${currentHours * 30 + currentMinutes / 2}deg)`;
    handMinutes.style.transform = `rotate(${currentMinutes * 6}deg)`;
    handSeconds.style.transform = `rotate(${currentSeconds * 6}deg)`;
}

function stopwatchTime() { //stopwatch hands movement
    let i = 1;

    const interval = setInterval( increment, 1000);

    function increment(){  //will increase i value by 1 every second after activation
        i = i % 360 + 1;
    }

    console.log(i);
}


function getCurrentDay() {
    let day = new Date();
    let currentDay = day.getDate();


    $(".date").append(`<p>${currentDay}</p>`);
}


getCurentTime();
getCurrentDay();

setInterval(getCurentTime, 1000);