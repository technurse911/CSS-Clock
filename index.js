const secondHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate() {
  const current = new Date();
  const seconds = current.getSeconds();
  const mins = current.getMinutes();
  const hours = current.getHours();
  
 document.getElementById("digitalClock").innerText  = `${hours}:${mins}:${seconds}`;
  
  
  const secondsDegrees = ((seconds / 60) * 360) + 90;
  const minutesDegrees = ((mins / 60) * 360) + 90;
  const hourDegrees = ((hours / 12) * 360) + 90;
  
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
  minHand.style.transform = `rotate(${minutesDegrees}deg)`;
  hourHand.style.transform = `rotate(${hourDegrees}deg)`; 
}


setInterval(setDate, 1000);
