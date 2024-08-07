
const apikey=api_key;
const url="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

let x=document.querySelector("button");
let y=document.querySelector("input");
let z=document.querySelector(".weather-icon");
async function weather(city){
    const response=await fetch(url+city+`&appid=${apikey}`);
    
    if(response.status== 404){
        
        document.querySelector(".weather").style.display="none"
        alert=("Invalid City Name");
        
    }
    else{

        let data= await response.json();
        console.log(data);
        document.querySelector(".city").innerText=data.name;
        document.querySelector(".temp").innerText=data.main.temp+" °C";
        document.querySelector(".humidity").innerText=data.main.humidity+" %";
        
        document.querySelector(".wind-speed").innerText=data.wind.speed+" km/h";
        if(data.weather[0].main=="Rain"){
            z.src="rain.png";
        }
        else if(data.weather[0].main=="Clouds"){
            z.src="img/clouds.png";
        }
        else if(data.weather[0].main=="Clear"){
            z.src="img/clear.png";
        }
        else if(data.weather[0].main=="Drizzle"){
            z.src="img/drizzle.png";
        }
        else if(data.weather[0].main=="Mist"){
            z.src="img/mist.png";
        }
        else if(data.weather[0].main=="Snow"){
            z.src="img/snow.png";
        }
        
        document.querySelector(".weather").style.display="block";
    }
   
  

}
x.addEventListener("click",()=>{
    weather(y.value);
})



