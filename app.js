// TIMING EVENTS EXERCISE

// 1
setTimeout(() => {
  const div1 = document.querySelector(`#first`);
  const p1 = document.createElement(`p`);
  p1.innerText = `Hi`;
  div1.append(p1);
}, 1000);

// 2
setTimeout(() => {
  const div2 = document.querySelector(`#timeout-nesting`);
  const p2 = document.createElement(`p`);
  p2.innerText = `One`;
  div2.append(p2);
  // Nested setTimeout
  setTimeout(() => {
    const p3 = document.createElement(`p`);
    p3.innerText = `Two`;
    div2.append(p3);
  }, 1000);
}, 2000);

// 3a
let counter = 1;
let time = setInterval(() => {
  console.log(counter);
  counter++;
}, 1000);

// 3b
const stop = document.querySelector(`button`);
stop.addEventListener(`click`, () => {
  clearInterval(time);
});

// BONUS
// 4
const countdown = document.querySelector(`#countdown`);
const p4 = document.createElement(`p`);
p4.innerText = `2:00`;
countdown.append(p4);

const startTime = 2;
// let currentTime = startTime * 60;
let currentTime = 5;
function updateCountdown(){
  const minutes = Math.floor(currentTime / 60);
  let seconds = currentTime % 60;
  seconds = (seconds < 10) ? `0` + seconds : seconds;
  p4.innerText = `${minutes} : ${seconds}`;
  currentTime--;
}

setInterval(() => {
  updateCountdown();
  // After currentTime is 0 or less the p4.innerText is immediately changed to `TIME IS UP` every time the code in the anonymous arrow function is run
  if (currentTime <= 0){
    p4.innerText = `TIME IS UP`;
  }
}, 1000);

// OR
/*
const div3 = document.querySelector(`#countdown`);
const p4 = document.createElement(`p`);
p4.innerText = `2:00`;
div3.append(p4);
let startingSeconds = 120;

const countdown = setInterval(() => {
  startingSeconds--;
  const minutes = Math.floor(startingSeconds / 60);
  const seconds = startingSeconds % 60;

  p4.innerText = (seconds < 10) ? `${minutes}:0${seconds}` : `${minutes}:${seconds}`;

  if (startingSeconds === 0){
    p4.innerText = `TIME IS UP`;
    clearInterval(countdown);
  }
}, 1000);
*/