import React from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Weather from "./Weather"
import Movies from "./Movies"
import Location from "./Location";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: "",
      display_name: "",
      errFlag: false,
      lat: "",
      lon: "",
      mapFlag: false,
      weatherData:[],
      movieData: [],
    };
  }

  getLocationData = async (event) => {
    event.preventDefault();
    const searchQuery = event.target.city.value;
    const URL = `https://eu1.locationiq.com/v1/search?key=pk.7ebfb42eef13c373d14686d9a5a9d808&q=${searchQuery}&format=json`

    try {
      const resResult = await axios.get(URL);
      this.getWeatherData(resResult.data[0])
      this.getMovieData(searchQuery)

      this.setState({
        errFlag: false,
        display_name: resResult.data[0].display_name,
        lat: resResult.data[0].lat,
        lon: resResult.data[0].lon,
        mapFlag: true,
      });
    } catch {
      console.log("err");
      this.setState({
        errFlag: true,
        display_name: "",
        lat: "",
        lon: "",
        mapFlag: false,

      });
    }
  };

  getWeatherData =async (data) => {
    const URL_Weather = `https://city-explorer-on-duty.herokuapp.com/weather?lon=${data.lon}&lat=${data.lat}`;
    
    try 
    {
      const weatherData = await axios.get(URL_Weather);
      this.setState({
        date : data.datetime,
        display_name: data.display_name,
        lat: data.lat,
        lon: data.lon,
        weatherData : weatherData.data
      })
    }
    catch {
      this.setState({
        display_name: "",
        lat: "",
        lon: "",
        weatherData : []
      })
   
    }
  }

  getMovieData =async (data) =>{
    const URL_Movie = `https://city-explorer-on-duty.herokuapp.com/Movies?searchQuery=${data}`;
    

    try {
      const movieData = await axios.get(URL_Movie);
      this.setState ({
        movieData : movieData.data
      })
    }
    catch {
      this.setState({
        movieData : []
      })
    }

  }
  render() {
    return (
      <>
      <div style={{ backgroundColor: "cornsilk" }}>
        <Form
          style={{
            backgroundColor: "cornsilk",
            marginLeft: "10px",
            marginBottom: "30px",
          }}
          onSubmit={this.getLocationData}
        >
          <input type="text" name="city" placeholder="Enter a city" />
          <Button type="submit">Explore !</Button>
        </Form>
        </div>
        <hr></hr>

          <div>
            <Location
            display_name={this.state.display_name}
            longtitude ={this.state.lon}
            latitude ={this.state.lat}
            map={this.state.mapFlag}
            error={this.state.errFlag}
            ></Location>
          </div>
          <div>
            <Weather forecast = {this.state.weatherData}></Weather>
          </div>
          <div>
            <Movies films = {this.state.movieData}></Movies>
          </div>
          </>  
    );
  }
}
  

export default Main;