let weatherHistory = JSON.parse(localStorage.getItem("weatherHistory")) || [];
showHistory()
const apiKey = "b3d9941d30750b858fcee655a8cd3344"
////////////////////////
console.log(" Script Loaded");
const step1 = document.createElement("div")
step1.innerText = "Script Loaded"
step1.setAttribute("class", "step1")
document.querySelector(".console").append(step1)

////////////////////////
document.querySelector("form").addEventListener("submit",
    function (e) {
        e.preventDefault()
        const cityName = document.querySelector("#city_name").value

        console.log("Form Submitted");
        const step2 = document.createElement("div")
        step2.innerText = "Form Submitted"
        step2.setAttribute("class", "step2")
        document.querySelector(".console").append(step2)




        if (cityName == "") {
            alert("Please enter a city name")
        }
        fetchWeather(cityName)
    })

async function fetchWeather(city) {
    console.log("Async START");
    const step2 = document.createElement("div")
    step2.innerText = "Async START"
    step2.setAttribute("class", "step2")
    document.querySelector(".console").append(step2)

    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`);

        console.log(" After Fetch Response");
        const step2 = document.createElement("div")
        step2.innerText = "After Fetch Response"
        step2.setAttribute("class", "step2")
        document.querySelector(".console").append(step2)


        const weatherInfo = await response.json()
        console.log("After JSON Parsing", weatherInfo);
        if(weatherInfo?.cod && weatherInfo.cod == 404){
            document.querySelector(".info_container").innerHTML = `<p style="color:red;">Error: City not found. Try to input valid city name.</p>`;
            return;
        }

        displayWeather(weatherInfo)
        saveToHistory(city)

    } catch (error) {
        console.log("Error Caught:", error.message);
        showError(error.message)
        function showError(message) {
            document.querySelector(".info_container").innerHTML = `<p style="color:red;">Error: ${message}</p>`
        }
    }
    console.log(" End of Async");
    const step3 = document.createElement("div")
    step3.innerText = "End of Async"
    step3.setAttribute("class", "step3")
    document.querySelector(".console").append(step3)

}
function displayWeather(data) {
    document.querySelector(".info_container").innerHTML = ""
    let infoCard = document.createElement("div")
    infoCard.setAttribute("class", "infoCard")

    let city_name = document.createElement("p")
    city_name.innerText = `City: ${data.name}`

    let temp = document.createElement("p")
    temp.innerText = `Temp: ${data.main.temp}`

    let weather = document.createElement("p")
    weather.innerText = `Weather: ${data.weather[0].description}`

    let humidity = document.createElement("p")
    humidity.innerText = `Humidity: ${data.main.humidity}`

    let wind = document.createElement("p")
    wind.innerText = `Wind: ${data.wind.speed}`

    infoCard.append(city_name, temp, weather, humidity, wind)
    document.querySelector(".info_container").append(infoCard)
    console.log("End of Sync"); 
    const step2 = document.createElement("div")
    step2.innerText = "End of Sync"
    step2.setAttribute("class", "step2")
    document.querySelector(".console").append(step2)
}

function saveToHistory(city) {

    if (!weatherHistory.includes(city)) {
        weatherHistory.push(city)
        localStorage.setItem("weatherHistory", JSON.stringify(weatherHistory))
    }

    showHistory()
}

function showHistory() {
    document.querySelector(".search_history").innerHTML = "<h1>Search history</h1>"
    weatherHistory.forEach((el, index) => {
        const historyBtn = document.createElement("button")
        historyBtn.style.width = "max-content"
        historyBtn.style.marginLeft = "5px"
        historyBtn.style.borderRadius = "50px"
        historyBtn.textContent = el;
        historyBtn.addEventListener("click", () => { fetchWeather(el) })
        document.querySelector(".search_history").append(historyBtn)
    });

}
const clear_con = document.createElement("div")
clear_con.innerText = "x"
clear_con.setAttribute("class", "clear_con")
document.querySelector(".history").append(clear_con)
clear_con.addEventListener("click", ()=>{
    document.querySelector(".console").innerText = ""
})