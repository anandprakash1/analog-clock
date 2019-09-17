var url='https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/'
            var key='9221ac7438eb5a935704b5e75f50565d/'
            var Filter='?units=si&exclude=minutely,hourly,daily,alerts,flags'
            
            function getGeolocation() {
                navigator.geolocation.getCurrentPosition(function(position) {
                    var latitude=position.coords.latitude;
                    var longitude=position.coords.longitude;
                    FetchData(latitude,longitude)
                })
            }


              function calcTime(offset) {
                var date = new Date();
                var utc = date.getTime() + (date.getTimezoneOffset() * 60000);
                var localTime = new Date(utc + (3600000*offset));
                var newTime = localTime.toLocaleString();
                return newTime;
              }
            
            
            function FetchData(latitude,longitude) {
                var URL=url+key+latitude+', '+longitude+Filter 
                var xhttp = new XMLHttpRequest();
                xhttp.onreadystatechange = function() {
                     if (this.readyState == 4 && this.status == 200) {
                        var jsonData=this.responseText
                        var data=JSON.parse(jsonData);
                        console.log(data);
                        var fetchedOffset = data.offset;
                        var timeOnly = calcTime(fetchedOffset);

                        clock(timeOnly);
                        setInterval("clock()", 1000);
                        console.log(calcTime(fetchedOffset))

                        var temperature = document.querySelector(".current_temperature");
                        //var currentTemp = (data.currently.temperature) + "&#176C";
                        var currentTemp = (data.currently.temperature);
                        console.log(currentTemp);
                        temperature.innerHTML = currentTemp + "&#176C";
                        var tempColor = selectColor(currentTemp);
                        temperature.style.color = tempColor
                        console.log(tempColor);

                        var newTimeZone = document.getElementById("newTimeZone");
                        newTimeZone.innerHTML = (data.timezone);
                        console.log(data.timezone);
                        
                     }
                };
                xhttp.open("GET", URL, true); 
                xhttp.withCredentials = false;
                xhttp.setRequestHeader( 'Access-Control-Allow-Origin', '*');
                xhttp.setRequestHeader( 'Content-Type', 'application/json' );
                xhttp.send(null);
              }
            
            getGeolocation()

            function getLocationManualy() {
                var latitude = document.getElementById("Latitude").value;
                var longitude = document.getElementById("Longitude").value;
                FetchData(latitude, longitude)
            }
            
            function selectColor(temperature) {
              if (temperature < 10){
                color = "DarkBlue"
              } else if (temperature <20) {
                color = "yellow";
              } else if (temperature < 30) {
                color = "green";
              } else if (temperature < 40) {
                color = "red";
              } else {
                color = "orange";
              }
              return color;
            }