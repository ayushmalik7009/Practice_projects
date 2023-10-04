const input = document.getElementById('int');
const btn = document.getElementById('btn');
const temp = document.getElementById('temp');
const percentage = document.getElementById('percent');
const wind = document.getElementById('wind');
const city = document.getElementById('city');



btn.addEventListener("click",()=>{

  const apiKey = '9eb6891b27add5d1d1a5134fafb74ce8'; 
  
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=${apiKey}`;
  
  // Make the API request
  fetch(apiUrl)
    .then((response) => {
     
      if (response.status === 200) {
        return response.json(); 
      } else {
        throw new Error('Failed to fetch data'); 
      }
    })
    .then((data) => {
      const temperatureKelvin = data.main.temp;
      const temperatureCelsius = Math.round(temperatureKelvin - 273.15); // Convert Kelvin to Celsius
      temp.innerText = `${temperatureCelsius}°c`;
    
      percentage.innerText = `${data.main.humidity} %`
      
      wind.innerText = `${data.wind.speed} km/hr`

      city.innerText = data.name; 
    })
    .catch((error) => {
      console.error(error);
    });
  



})




