const Days = document.getElementById('days');
const Hours = document.getElementById('hours');
const Minutes = document.getElementById('minutes');
const Seconds = document.getElementById('seconds');
const Time1 = document.getElementById("time1");
const Time2 = document.getElementById("time2");
const Time3 = document.getElementById("time3");
const Time4 = document.getElementById("time4");
const Ready = document.getElementById("ready");
const targetDate = new Date("November 18 2025 14:00:00").getTime();

function timer(){
    const currentDate = new Date().getTime();
    const distance = targetDate - currentDate

    const days = Math.floor(distance / 1000 / 60 / 60 / 24);
    const hours = Math.floor(distance / 1000 / 60 / 60) % 24;
    const minutes = Math.floor(distance / 1000 / 60) % 60;
    const seconds = Math.floor(distance / 1000) % 60;

    // console.log(days + ":" + hours + ":" + minutes + ":" + seconds);

    Days.innerHTML = days;
    Hours.innerHTML = hours;
    Minutes.innerHTML = minutes;
    Seconds.innerHTML = seconds;

    if(distance < 0) {
        Time1.style.display = "none"
        Time1.style.opacity = "0"
        Time2.style.display = "none"
        Time2.style.opacity = "0"
        Time3.style.display = "none"
        Time3.style.opacity = "0"
        Time4.style.display = "none"
        Time4.style.opacity = "0"
        Ready.style.display = "block"
        Ready.style.opacity = "1"
    }
}

setInterval(timer, 1000);