const daysItem =document.getElementById('days');
const hoursItem =document.getElementById('hours');
const minsItem =document.getElementById('mins');
const secondsItem =document.getElementById('seconds');


const newYear = "1 Jan 2024"
function countDown(){
    const newYearDate = new Date(newYear)
    const currentDate=new Date();
    const totalSec=(newYearDate-currentDate)/1000;
    const days = Math.floor(totalSec/3600/24)
    const hours = Math.floor(totalSec/3600)%24
    const minutes = Math.floor(totalSec/60)%60
    const seconds = Math.floor(totalSec)%60
    daysItem.innerHTML=days;
    hoursItem.innerHTML=formatTime(hours);
    minsItem.innerHTML=formatTime(minutes);
    secondsItem.innerHTML=formatTime(seconds);
    if(totalSec<=0){
        clearInterval(countDown);
        alert("Happy New Year!")
    }
}
function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

countDown()
setInterval(countDown,1000)