const start_btn = document.getElementById('start');
const stop_btn = document.getElementById('stop');
const reset_btn = document.getElementById('reset');
const timerValues = document.querySelectorAll('.timer__value');
let start_time = 0;
let interval_time = null;

function reset_timer(){
    clearInterval(interval_time);
    interval_time = null;
    start_time = 0;
    update_disp();
}

function start_timer(){
    if(interval_time === null){
        interval_time = setInterval(() => {
            start_time++;
            update_disp();
        }, 10);
    }
}

function stopTimer(){
    clearInterval(interval_time);
    interval_time = null;
}

function update_disp(){
    const hours = Math.floor(start_time / 360000);
    const minutes = Math.floor((start_time % 360000) / 6000);
    const seconds = Math.floor((start_time % 6000) / 100);
    const hundredths = start_time % 100;

    timerValues[0].textContent = String(hours).padStart(2, '0');
    timerValues[1].textContent = String(minutes).padStart(2, '0');
    timerValues[2].textContent = String(seconds).padStart(2, '0');
    timerValues[3].textContent = String(hundredths).padStart(2, '0');
}

start_btn.addEventListener('click', start_timer);
stop_btn.addEventListener('click', stopTimer);
reset_btn.addEventListener('click', reset_timer);