import React from "react";
import axios from "axios";
 import Loader from 'react-loader-spinner'


export default function Weather(props){
    
    function handleResponse(response){
        alert(`The temperature in ${response.data.name} is ${response.data.main.temp}°C `)
    }
    
    let apiUrl =`https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=3a94f3778290bfeee61278505dbbe51d&units=metric`;
    axios.get(apiUrl).then(handleResponse)

    return (<Loader
         type="Rings"
         color="#00BFFF"
         height={200}
         width={200}
         //timeout={30000} //3 secs
 
      />);
}