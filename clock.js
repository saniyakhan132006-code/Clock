function updateClock(){
    const now=new Date();
    let hour=now.getHours();
    let minutes=now.getMinutes();
    let sec=now.getSeconds();
    let ampm=hour>=12 ?"PM":"AM";
    hour=hour % 12;
    hour=hour ? hour:12;

    hour=hour.toString().padStart(2,0);
    minutes=minutes.toString().padStart(2,0);
    sec=sec.toString().padStart(2,0);
  
    document.querySelector(".hour").textContent = hour;
    document.querySelector(".min").textContent = minutes;
    document.querySelector(".sec").textContent = sec;
    document.querySelector(".ampm").textContent = ampm;

}
setInterval(updateClock, 1000);