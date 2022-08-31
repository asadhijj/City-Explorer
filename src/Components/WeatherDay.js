
import React from "react";



class WeatherDay extends React.Component {
    render(){

        return(
            <div>
                <p>Date : {this.props.item.datetime}</p>
                <p>description : {this.props.item.description}</p>
                <p>Highest Tempreture of {this.props.item.max_temp}</p>
                <p>Lowest Temperature of {this.props.item.low_temp}</p>
                <hr></hr>
            </div>
        )
    }

}

export default WeatherDay;