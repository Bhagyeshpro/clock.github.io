setInterval(setClock, 1000 )

// Selector for Analog Clock
const hourHand = document.querySelector('[data-hour-hand]');
const minuteHand = document.querySelector('[data-minute-hand]');
const secondHand = document.querySelector('[data-second-hand]');

// Selector for digital Clock
const HourE1 = document.getElementById('Hours');
const MinutesE1 = document.getElementById('Minutes');
const SecondsE1 = document.getElementById('Seconds');


function setClock() {
    // Getting General Time
    const currentDate = new Date();

    // Converting time into hours and sec and minutes
    const secondsRatio = currentDate.getSeconds()/ 60;
    const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60;
    const hoursRatio = (minutesRatio + currentDate.getHours()) / 12;

    setRotation(secondHand, secondsRatio);
    setRotation(minuteHand, minutesRatio);
    setRotation(hourHand, hoursRatio);


    // Setting Time For Digital Clock

    hours = currentDate.getHours();
    minutes = currentDate.getMinutes();
    seconds = currentDate.getSeconds();

    HourE1.innerHTML = formatTime(hours);
    MinutesE1.innerHTML = formatTime(minutes);
    SecondsE1.innerHTML = formatTime(seconds);
}

// Rotation of Hands
function setRotation(element, rotationRatio) {
    element.style.setProperty('--rotation', rotationRatio * 360)
}

// Rotate BG Image


function formatTime (time) {
    return time < 10 ? `0${time}` : time;
}

setClock()


