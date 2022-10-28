const day = document.querySelector("#days");
const hours = document.querySelector("#hours");
const minutes = document.querySelector("#minutes");
const seconds = document.querySelector("#seconds");

let currentYear = new Date().getFullYear();
console.log(currentYear);
const newYear = new Date(`January 1 ${currentYear + 1} 00:00:00`);
console.log(newYear);

///update d countdown
function updateTimer() {
  const currentTimer = new Date();
  const diffInYear = newYear - currentTimer;
  console.log(diffInYear);
  const d = Math.floor(diffInYear / 1000 / 60 / 60 / 24);
  console.log(d);
  const h = Math.floor(diffInYear / 1000 / 60 / 60) % 24;
  console.log(h);
  const m = Math.floor(diffInYear / 1000 / 60) % 60;
  console.log(m);
  const s = Math.floor(diffInYear / 1000) % 60;
  console.log(s);

  day.textContent = d;
  hours.textContent = h;
  minutes.textContent = m;
  seconds.textContent = s;
}
updateTimer();
setInterval(updateTimer,1000)