function TimeperSec() {
  
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
  
}

setInterval(TimeperSec, 1000);
