import React from "react";

class Location extends React.Component {
render () {
    return (
        <div>
        <h3
        style={{
          backgroundColor: "cornsilk",
          marginLeft: "10px",
          marginBottom: "20px",
        }}
      >
        Display name : {this.props.display_name}
      </h3>

        {this.props.map && (
          <img
            alt="map"
            style={{
              borderRadius: "10px",
              width: "800px",
              height: "400px",
              marginLeft: "10px",
            }}
            src={`https://maps.locationiq.com/v3/staticmap?key=pk.7aedc85ff3620b0d3b6865ccab5efd25&center=${this.props.latitude},${this.props.longtitude}&zoom=1-18`}
          />
        )}
        <p style={{ backgroundColor: "cornsilk", marginLeft: "10px" }}>
          Longtitude : {this.props.longtitude}
        </p>
        <p style={{ backgroundColor: "cornsilk", marginLeft: "10px" }}>
          Latitude : {this.props.latitude}
        </p>

        {this.props.error && <h4>Error : sorry something went wrong!</h4>}
        </div>
    )
}
}

export default Location;
