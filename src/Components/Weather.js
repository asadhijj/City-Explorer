import React from "react";
import WeatherDay from "./WeatherDay";


class Weather extends React.Component {
    render () {
        return (
            <div>
                {this.props.forecast.map((item) =>{
                    return (
                        <WeatherDay item = {item}></WeatherDay>
                    )
                }
                )}
            </div>
        )
    }
}
export default Weather;