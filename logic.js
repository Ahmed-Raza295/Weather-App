let btn = document.querySelector("#click");
let searchInput = document.querySelector('#input');
let cityTitle = document.querySelector('.city-title');
let titleContainer = document.querySelector('.title');
let temprature = document.querySelector(".temprature");
let temp = document.querySelector('.temp');
let minTemp = document.querySelector(".min-temp");
let maxTemp = document.querySelector('.max-temp');
let humadity = document.querySelector(".humadity");
let humidi = document.querySelector(".humidi");
let feelLike = document.querySelector('.feel-like');
let windDegree = document.querySelector('.wind-degree');
let windSpeed = document.querySelector(".wind-speed")
let speed = document.querySelector('.speed');
let sunrise = document.querySelector(".sun-rise");
let sunset = document.querySelector(".sun-set");

let cityName ;
btn.addEventListener("click",(event)=>{
event.preventDefault();
if(searchInput.value.trim() == ''){
alert('Please Enter Value')

}else{
    cityName = searchInput.value.trim();
    get()
    searchInput.value = ''
}



})

let convert;
async function get() {
    let apiKey = '1f0efe52c9ac8504472d2d4730e67328';
    const api = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`)
     convert = await api.json();
    if(convert.cod !== 200){
        alert('please Enter A valid city')
    }
    let tempRound = convert.main.temp;
    let minTem = convert.main.temp_min;
    let max_temp = convert.main.temp_max;
    let feelRound = convert.main.feels_like;
    
    console.log(convert);
    
    
    cityTitle.innerHTML = cityName
titleContainer.classList.remove('d-none')
temprature.innerHTML = Math.round(tempRound);
temp.innerHTML = Math.round(tempRound)
minTemp.innerHTML = Math.round(minTem)
maxTemp.innerHTML = Math.round(max_temp)
humadity.innerHTML  = convert.main.humidity;
humidi.innerHTML = convert.main.humidity;
feelLike.innerHTML = Math.round(feelRound);
windDegree.innerHTML  = convert.wind.deg;
windSpeed.innerHTML = convert.wind.speed;
speed.innerHTML = convert.wind.speed;
sunrise.innerHTML = convert.sys.sunrise;
sunset.innerHTML = convert.sys.sunset;
}



