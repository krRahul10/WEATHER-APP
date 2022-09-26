const submitBtn = document.getElementById("submitBtn");
const cityName = document.getElementById("cityName");
const city_name = document.getElementById("city_name");
const temp = document.getElementById("temp");
const temp_status = document.getElementById("temp_status");

// let api = `https://api.openweathermap.org/data/2.5/weather?q=pune&unit=metric&appid=a8e163bc0b34c412cb3cb3aff29558b2`;
const getInfo = async (e) => {
  e.preventDefault();

  let cityVal = cityName.value;
  if (cityVal === "") {
    city_name.innerText = `Plz write city name before search`;
  } else {
   try{
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=a8e163bc0b34c412cb3cb3aff29558b2`;
    let res = await fetch(url);
    let data = await res.json()
    // console.log(data)
    let arrData = [data]
    city_name.innerText= `${arrData[0].name}, ${arrData[0].sys.country}`
    temp.innerText=arrData[0].main.temp
    temp_status.innerHTML=arrData[0].weather[0].main

    

   }catch(err){
    // console.log("error", err)
    city_name.innerText = `Plz write city name before search properly`;
   }
  }
};

submitBtn.addEventListener("click", getInfo);
