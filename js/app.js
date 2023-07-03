const api_key = `46ad7457603b9b0104e633e78cd60e16`

const loadTemperature = city =>{
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric`
    fetch(url)
        .then(res => res.json())
        .then(data => displayTemperature(data));
}

const displayTemperature = data =>{
    // const temperature = document.getElementById('temperature')
    // console.log(data.weather[0].main);
    // temperature.innerText = data.main.temp
    set_innerText('temperature', data.main.temp)
    set_innerText('condition', data.weather[0].main)
}

const set_innerText = (id, text) =>{
    const temperature = document.getElementById(id)
    temperature.innerText = text
}

document.getElementById("btn-search").addEventListener('click', function(){
    const search_field = document.getElementById('search-field')
    const city = search_field.value;
    //set city
    document.getElementById('city').innerText = city
    loadTemperature(city)
})
// loadTemperature('dhaka');