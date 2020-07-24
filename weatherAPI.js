// Application ID: 0a3bdae3
// Application Key: 24f675edf002ea1e74ef3ec002d31fc5



//part of the navigator API. will save the current position (lat and long)
function getWeather(position) {
    try {
        //saving the latitude and longitude
        let latitude = position.coords.latitude;
        let longitude = position.coords.longitude;

        //Instatiate new XMLHttpRequest object 
        const Http = new XMLHttpRequest();
        //URL to weatherunlockedapi
        //added a proxy of cors-anywhere to allow a cross-orgin request
        let url = "https://cors-anywhere.herokuapp.com/http://api.weatherunlocked.com/api/current/" + latitude + "," + longitude + "?app_id=0a3bdae3&app_key=24f675edf002ea1e74ef3ec002d31fc5";
        Http.open("GET", url);
        //send Http request
        Http.send();
        //when the request is rechieved work with the responseText
        Http.onload = (e) => {
            //saving the text form the response as a JSON object
            let weatherInfo = JSON.parse(Http.responseText);
            let weatherPara = document.createElement("p");
            weatherPara.textContent = "Local Temperature: " + weatherInfo.temp_c  +  "\u00B0C" + " Wind Speed: " + weatherInfo.windspd_kmh + "km/hr " + weatherInfo.winddir_compass;
            header.appendChild(weatherPara);

        };
    } catch (e) {
        //calls the error function and passes the exception 

        error(e);
    }
}

//will display this if there is an error while getting current position or getting the weather data
function error(e) {
    let errorMsg = document.createElement("p");
    errorMsg.className = "error";
    errorMsg.textContent = "An Error Occured While Getting Weather: " + e.message;
    header.appendChild(errorMsg);
}



//Making sure the page has loaded before displaying the weather
let body = document.querySelector("body");
body.addEventListener("load", navigator.geolocation.getCurrentPosition(getWeather, error));
