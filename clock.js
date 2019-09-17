var dialLines = document.getElementsByClassName('diallines');
var numbers = document.getElementsByClassName('numbers');
var numbers24 = document.getElementsByClassName('numbers24');
var analogClock = document.querySelector('.clock');


for (var i = 0; i < 60; i++) {
  analogClock.innerHTML += "<div class='diallines'></div>";
  dialLines[i].style.transform = "rotate(" + 6 * i + "deg)";
}

for (var i = 0; i < 12; i++) {
  analogClock.innerHTML += "<span class='numbers'></span>";
  numbers[i].style.transform = "rotate(" + 30 * i + "deg)";
}



for (var i=0; i < 24; i++) {
    //if(i % 2 === 0) {
      analogClock.innerHTML += "<span class='numbers24'></span>";
      //analogClock.innerHTML += "<span class='numbers24'>"+i+"</span>";
      numbers24[i].style.transform = "rotate(" + 15 * i + "deg)";
    //}
  }

  function twentyFourHrsFormat() {
    var checkBox = document.querySelector("#myCheck");
    var numbers24 = document.querySelectorAll(".numbers24");

  for (var i = 0; i < numbers24.length; i++) {
    if (checkBox.checked == true){
        numbers24[i].style.display = "block";
    } else {
       numbers24[i].style.display = "none";
    }
  }
}

function clock(timeOnly) {
  var weekday = new Array(7),
    dateCheck = new Date();
            h = dateCheck.getHours();
            m = dateCheck.getMinutes()
            s = dateCheck.getSeconds()
    date = dateCheck.getDate();
        
    hDeg = h * 30 + m * (360/720),
    mDeg = m * 6 + s * (360/3600),
    sDeg = s * 6;
    
    var hEl = document.querySelector('.hour_hand');
    var mEl = document.querySelector('.minute_hand');
    var sEl = document.querySelector('.second_hand');
    var dateEl = document.querySelector('.showDate');
    var dayEl = document.querySelector('.day');

    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";
    var day = weekday[dateCheck.getDay()];
  
  hEl.style.transform = "rotate("+hDeg+"deg)";
  mEl.style.transform = "rotate("+mDeg+"deg)";
  sEl.style.transform = "rotate("+sDeg+"deg)";
  dateEl.innerText = date;
  dayEl.innerText = day;
}

//setInterval("clock()", 100);


function themeChange() {
  var element = document.getElementById("nightTheme");
  element.classList.toggle("nightTheme");
  var numbers= document.querySelectorAll('.numbers');
  for (var i = 0; i < numbers.length; i++) {
      numbers[i].classList.toggle('numbersNightMode');
  }

  var diallines= document.querySelectorAll('.diallines');
  for (var i = 0; i < diallines.length; i++) {
      diallines[i].classList.toggle('diallinesNightMode'); 
  }

  var hour_hand= document.querySelector('.hour_hand');
  hour_hand.classList.toggle("handNightMode");

  var minute_hand= document.querySelector('.minute_hand');
  minute_hand.classList.toggle("handNightMode");

  var day= document.querySelector('.day');
  day.classList.toggle("infoNightMode");

  var showDate= document.querySelector('.showDate');
  showDate.classList.toggle("infoNightMode");

  var newTimeZone= document.querySelector('#newTimeZone');
  newTimeZone.classList.toggle("infoNightMode");

  var Theme = document.querySelector('.theme');
  Theme.classList.toggle("themeNight");

  var numbers24 = document.querySelectorAll('.numbers24');
  for (var i = 0; i < numbers24.length; i++) {
    numbers24[i].classList.toggle('diallinesNightMode');
}
  
  if (Theme.innerText === "Night Mood") {
      Theme.innerText = "Day Mood";
    } else {
      Theme.innerText = "Night Mood";
  }
}
