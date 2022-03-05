const API_KEY= `55b7db4785c713e2116933cd0971da27`;
const searchBtn=()=>{
    const city= document.getElementById('input-value').value;
    const url= `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric` 

    fetch(url)
    .then(res=>res.json())
    .then(data=>getData(data));
    document.getElementById('input-value').value="";
}
const getData=data=>{

    document.getElementById('result').innerHTML="";
    document.getElementById('error').style.display='none';
    if(data.message=='city not found'){
        const errorMessage=document.getElementById('error').style.display='block';
        return;
    }
    const temperature=data.main.temp;
    const feelLike=data.main.feels_like;
    const humidity=data.main.humidity;
    const location=data.name;
    const iconId=data.weather[0].icon;
    const weatherStatus=data.weather[0].main;
    const imgUrl = `http://openweathermap.org/img/wn/${iconId}@2x.png`;
    
    const result=document.getElementById('result');
    const div= document.createElement('div');
    div.classList.add('result-container');

    div.innerHTML=`
        <div class="weather-info">
            <h1>${temperature}&#8451</h1>
            
            <table class="table">
                <tr>
                    <th>Feels Like</th>
                    <td>${feelLike}&#8451</td>
                </tr>
                <tr>
                    <th>Humidity</th>
                    <td>${humidity}</td>
                </tr>
                <tr>
                    <th>Locaion</th>
                    <td>${location}</td>
                </tr>
            </table>
        </div>

        <div class="weather-img">
            <img src="${imgUrl}" alt="">
            <p>${weatherStatus}</p>
        </div>
    
    `
    result.appendChild(div);

    
}