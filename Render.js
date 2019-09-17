(function () {
var info = document.createElement('div');
//info.setAttribute('class','info');
info.classList.add('info');
info.classList.add('infoBorder');
//info.className = "info";
var showDate = document.createElement('div');
showDate.classList.add('showDate');
var day = document.createElement('div');
day.classList.add('day');
info.appendChild(showDate);
info.appendChild(day);


var tempSec = document.createElement('div');
tempSec.classList.add('tempSec');
var temp = document.createElement('div');
//temp.setAttribute('id','temp');
temp.id=temp;
temp.classList.add('info');
temp.classList.add('temp');
var current_temperature = document.createElement('div');
current_temperature.classList.add('current_temperature');
temp.appendChild(current_temperature);
tempSec.appendChild(temp);


var Parentcenter = document.createElement('div');
Parentcenter.classList.add('Parentcenter');
var center = document.createElement('div');
center.classList.add('center');
Parentcenter.appendChild(center);


var clockHand = document.createElement('div');
clockHand.classList.add('clockHand');
var hour_hand = document.createElement('div');
hour_hand.classList.add('hour_hand');
var minute_hand = document.createElement('div');
minute_hand.classList.add('minute_hand');
var second_hand = document.createElement('div');
second_hand.classList.add('second_hand');
clockHand.appendChild(hour_hand);
clockHand.appendChild(minute_hand);
clockHand.appendChild(second_hand);

var zone = document.createElement('div');
zone.classList.add('zone');
var newTimeZone = document.createElement('div');
newTimeZone.setAttribute('id','newTimeZone');
//newTimeZone.id=newTimeZone;
newTimeZone.classList.add('info');
zone.appendChild(newTimeZone);



// var dial = document.createElement('div');
// dial.classList.add('dial');
// var diallines = document.createElement('div');
// diallines.classList.add('diallines');
// dial.appendChild(diallines);

var clock_Num = document.createElement('div');
clock_Num.classList.add('clock_Num');
var nightTheme = document.createElement('span');
nightTheme.setAttribute('id','nightTheme');
nightTheme.innerText=12
nightTheme.classList.add('nightTheme');
nightTheme.classList.add('h12');
clock_Num.appendChild(nightTheme);


// var manualLocation = document.createElement('div');
// manualLocation.classList.add('manualLocation');
var Latitude = document.createElement('div');
Latitude.classList.add('Latitude');
var labeldata = document.createElement("label");
labeldata.label="Latitude";
var input = document.createElement("input"); 
input.setAttribute('id','Latitude');
input.setAttribute('type',"text");
input.setAttribute('name',"Latitude");
input.setAttribute('placeholder',"Latitude")
input.setAttribute('value',"");
Latitude.appendChild(labeldata);
Latitude.appendChild(input);


var Longitude = document.createElement('div');
Longitude.classList.add('Longitude');
var labeldata = document.createElement("label");
labeldata.label="Longitude";
var input = document.createElement("input"); 
input.setAttribute('id','Longitude');
input.setAttribute('type',"text");
input.setAttribute('name',"Longitude");
input.setAttribute('placeholder',"Longitude")
input.setAttribute('value',"");
Longitude.appendChild(labeldata);
Longitude.appendChild(input);Longitude


var clock=document.querySelector('.clock');
clock.appendChild(info);
clock.appendChild(tempSec);
clock.appendChild(Parentcenter);
clock.appendChild(clockHand);
//clock.appendChild(dial);
clock.appendChild(zone);
clock.appendChild(clock_Num);
clock.appendChild(Latitude);
clock.appendChild(Longitude);

})();