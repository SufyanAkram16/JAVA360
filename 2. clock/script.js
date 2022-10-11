const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.min-hand');
const hourhand = document.querySelector('.hour-hand')

function setDate() {
    const now = new Date();
    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360 +90);

    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

    const minutes = now.getMinutes();
    const minutesDegree = ((minutes / 60) * 360 +90)

    minuteHand.style.transform = `rotate(${minutesDegree}deg)`;
    
    const hours = now.getHours();
    const hoursDegree = ((hours /12) *360 +90)

    hourhand.style.transform = `rotate(${hoursDegree}deg)`;

}

setInterval(setDate, 1000)