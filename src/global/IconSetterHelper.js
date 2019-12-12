import { faCloudShowersHeavy, faBolt, faSun, faCloudSun, faMeteor , faSnowflake, faWind } from '@fortawesome/free-solid-svg-icons'


const setWeatherIcon = (icon) => {

    switch(icon){
        case 'clear-day': return (
            faSun
        )

        case 'partly-cloudy-day': return (
            faCloudSun
        )

        case 'rain' : return (
            faCloudShowersHeavy
        )

        case 'snow' : return (
            faSnowflake
        )
         
    
        case 'wind' : return (
            faWind
        )

        case 'thunderstorm' : return (
            faBolt
        )

        default : return (
            faMeteor
        )
    }
}

export default setWeatherIcon;