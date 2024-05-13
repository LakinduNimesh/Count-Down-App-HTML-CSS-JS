const monthsEl = document.getElementById('months');
const weeksEl = document.getElementById('weeks');
const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');

const newYears = '1 Jan 2025';

function countdown() {
  const newYearsDate = new Date(newYears);
  const currentDate = new Date();
  const distance = newYearsDate - currentDate;

  const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const weeks = Math.floor(distance / (1000 * 60 * 60 * 24 * 7));
  const months = (newYearsDate.getFullYear() - currentDate.getFullYear()) * 12 + newYearsDate.getMonth() - currentDate.getMonth();

  monthsEl.innerHTML = formatTime(months);
  weeksEl.innerHTML = formatTime(weeks);
  daysEl.innerHTML = formatTime(days);
  hoursEl.innerHTML = formatTime(hours);
  minutesEl.innerHTML = formatTime(minutes);
  secondsEl.innerHTML = formatTime(seconds);
}

function formatTime(time) {
  return time < 10 ? (`0${time}`) : time;
}




//initial call
countdown();

setInterval(countdown, 1000);