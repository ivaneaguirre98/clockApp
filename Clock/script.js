function clock(){
    let currentTime = new Date();
    console.log(currentTime);
    var currentHours = currentTime.getHours();
    var currentMin = currentTime.getMinutes();
    var currentSecs = currentTime.getSeconds();
    var currentHourz = currentTime.getHours();
    console.log(currentHourz);

    if(currentHours > 12){
        currentHours = currentHours - 12;
    }

    if(currentHours < 10){
        currentHours = "0" + currentHours;
    }

    if(currentMin < 10){
        currentMin = "0" + currentMin;
    }

    if(currentSecs < 10){
        currentSecs = "0" + currentSecs;
    }

    if(currentHourz >= 0 &&  currentHourz <= 11){
        document.getElementById('PMAM').innerHTML = "AM";
    }

    if (currentHourz >= 12 && currentHourz <=23){
      document.getElementById('PMAM').innerHTML = "PM";
    }

    if(currentHourz == 24){
      document.getElementById('PMAM').innerHTML = "AM";
    }


    document.getElementById('hour').innerHTML = currentHours;
    document.getElementById('min').innerHTML = ":" + currentMin;
    document.getElementById('sec').innerHTML =":" +  currentSecs;
}


setInterval(clock,100);
