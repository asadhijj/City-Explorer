import React from "react";
import axios from "axios";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      description: "",
      date: "",
      display_name: "",
      errFlag: false,
      lat: "",
      lon: "",
      mapFlag: false,
    };
  }

  getLocationData = async (event) => {
    event.preventDefault();
    const cityName = event.target.city.value;
    const URL = `http://localhost:4000/weather?searchQuery=${cityName}`;

    try {
      let resResult = (await axios.get(URL)).data;

      const descriptionR = resResult.forecast.map(
        (e) => `${e.date}: ${e.description}`
      );
      this.setState({
        description: descriptionR.join(" "),
        display_name: cityName,
        lat: resResult.lat,
        lon: resResult.lon,
        mapFlag: true,
        errFlag: false,
      });
    } catch {
      console.log("err");
      this.setState({
        errFlag: true,
        description: "",
        display_name: "",
        lat: "",
        lon: "",
        mapFlag: false,
      });
    }
  };
  render() {
    return (
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
        <hr></hr>

        <h3
          style={{
            backgroundColor: "cornsilk",
            marginLeft: "10px",
            marginBottom: "20px",
          }}
        >
          Display name : {this.state.display_name}
        </h3>

        <p style={{ backgroundColor: "cornsilk", marginLeft: "10px" }}>
          Forecast Information :{this.state.description}
          {this.state.date}
        </p>
        {this.state.mapFlag && (
          <img
            alt="map"
            style={{
              borderRadius: "10px",
              width: "800px",
              height: "400px",
              marginLeft: "10px",
            }}
            src={`https://maps.locationiq.com/v3/staticmap?key=pk.7aedc85ff3620b0d3b6865ccab5efd25&center=${this.state.lat},${this.state.lon}&zoom=1-18`}
          />
        )}
        <p style={{ backgroundColor: "cornsilk", marginLeft: "10px" }}>
          Longtitude : {this.state.lon}
        </p>
        <p style={{ backgroundColor: "cornsilk", marginLeft: "10px" }}>
          Latitude : {this.state.lat}
        </p>

        {this.state.errFlag && <h4>Error : sorry something went wrong!</h4>}
      </div>
    );
  }
}
export default Main;