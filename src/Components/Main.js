import React from "react";
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import "bootstrap/dist/css/bootstrap.min.css";



class Main extends React.Component {
    constructor(props){
        super(props);
        this.state = {
          display_name : '',
          lat : '',
          lon : '',
          errFlag : false,
          mapFlag : false
        }
      }
      
      getLocationData = async (event) => {
        event.preventDefault();
        const cityName = event.target.city.value;
        const key = 'pk.7ebfb42eef13c373d14686d9a5a9d808';
        const URL = `https://us1.locationiq.com/v1/search?key=${key}&q=${cityName}&format=json`


try 
{
  let resResult = await axios.get(URL);
  this.setState({
    display_name : resResult.data[0].display_name,
    lat : resResult.data[0].lat,
    lon : resResult.data[0].lon,
    mapFlag : true
  })
}
catch
{
  console.log('err');
  this.setState({
    errFlag : true
  })
}


      }
      render () {
        return (
            
          <div style={{backgroundColor : 'cornsilk' }}>
        <Form style ={{backgroundColor : 'cornsilk' , marginLeft : '10px', marginBottom : '30px'}} onSubmit={this.getLocationData}>
          <input type="text" name="city" placeholder='Enter a city'/>
          <Button type='submit'>Explore !</Button>
        </Form>
        <hr></hr>
        
        <h3 style ={{backgroundColor : 'cornsilk' ,marginLeft : '10px', marginBottom : '20px'}}>Display name : {this.state.display_name}</h3>
        
        <p style ={{backgroundColor : 'cornsilk' ,marginLeft : '10px'}}>Location Information :</p>
        {this.state.mapFlag && <img style ={{borderRadius:'10px', width : '800px', height : '400px' , marginLeft: '10px'}} src={`https://maps.locationiq.com/v3/staticmap?key=pk.7aedc85ff3620b0d3b6865ccab5efd25&center=${this.state.lat},${this.state.lon}&zoom=1-18`}></img>}
        <p style ={{backgroundColor : 'cornsilk' ,marginLeft : '10px'}}>Longtitude : {this.state.lon}</p>
        <p style ={{backgroundColor : 'cornsilk' ,marginLeft : '10px'}}>Latitude : {this.state.lat}</p>

        {this.state.errFlag && <h4>Error : sorry something went wrong!</h4>}
          </div>
        )
      }
    }
    export default Main;