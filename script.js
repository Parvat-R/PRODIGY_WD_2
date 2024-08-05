var startBtn = document.getElementById('start');
var stopBtn = document.getElementById('stop');
var resetBtn = document.getElementById('reset');
var lapBtn = document.getElementById('lap');
var laps = document.getElementById("laps");

var hour = document.getElementById('h');
var minute = document.getElementById('m');
var second = document.getElementById('s');

var running = false;

startBtn.onclick = () => {
    if(!running){
        start();
    }
}

stopBtn.onclick = () => {
    if(running){
        stop();
    }
}

resetBtn.onclick = () => {
    if(running){
        stop();
    }
    reset();
}

lapBtn.onclick = () => {
    if(running){
        lap();
    }
}
function start() {
    running = true;
    incrementClock();
}

function stop() {
    running = false;
}

function reset() {
    running = false;
    hour.innerHTML = '00';
    minute.innerHTML = '00';
    second.innerHTML = '00';
    laps.innerHTML = '';
}

function incrementClock() {
    if(!running) return;
    
    let h = parseInt(hour.innerHTML);
    let m = parseInt(minute.innerHTML);
    let s = parseInt(second.innerHTML);

    if (s < 59) {
        s++;
    } else if (m < 59) {
        m++;
        s = 0;
    } else if (h < 23) {
        h++;
        m = 0;
        s = 0;
    } else {
        h = 0;
        m = 0;
        s = 0;
    }

    hour.innerHTML = h;
    minute.innerHTML = m;
    second.innerHTML = s;

    setTimeout(incrementClock, 999);
}

function lap () {
    let h = hour.innerHTML;
    let m = minute.innerHTML;
    let s = second.innerHTML;
    let newLap = document.createElement("div");
    newLap.className = "lap";
    newLap.innerHTML = h + ":" + m + ":" + s;
    laps.appendChild(newLap);
}
