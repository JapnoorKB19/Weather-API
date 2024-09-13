const button = document.getElementById("searchButton");
const input = document.getElementById("city");
const city_temp = document.getElementById("temp");
const city_name = document.getElementById("cityname");
const wind_speed =document.getElementById("wind");
const Humidity=document.getElementById("humidity");
const weather_icon=document.querySelector(".weather-icon");

async function getData(cityName){
    let result = await fetch(`http://api.weatherapi.com/v1/current.json?key=c249062654394834a2d103103241708&q=${cityName}&aqi=yes`);
    return await result.json();
}
button.addEventListener("click" , async ()=>{
    const cityName = input.value;
    const result1 = await getData(cityName);
    city_name.innerText = `${result1.location.name} , ${result1.location.region} , ${result1.location.country}` ;
    city_temp.innerText = Math.round(result1.current.temp_c) + "°C";
    wind_speed.innerText = result1.current.wind_kph + " kmph";
    Humidity.innerText = result1.current.humidity + "%";

    if(result1.current.condition.text == "Partly Cloudy"){
        weather_icon.src = "./images/clouds.png";
    }
    
    else if(result1.current.condition.text === "Sunny" || result1.current.condition.text == "Clear"){
        weather_icon.src = "./images/clear.png";
    }
    
    else if(result1.current.condition.text === "Moderate or heavy rain with thunder" || result1.current.condition.text == "Light rain"){
        weather_icon.src = "./images/rain.png";
    }
    
    else if(result1.current.condition.text  === "Patchy rain nearby" || result1.current.condition.text  == "Patchy light drizzle "){
        weather_icon.src = "./images/drizzle.png";
    }
    
    else if(result1.current.condition.text  === "Mist"){
        weather_icon.src = "./images/mist.png";
    }
    else if(result1.current.condition.text === "Fog"){
        weather_icon.src = "./images/snow.png";
    }

});