import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card"

class Movie extends React.Component {
    render() {
        return (
            <div>
           
              <Card className="card" style={{ width: "18rem"  }}>
                    <Card.Img className="img" variant="top" src={this.props.item.poster_path} />
                    <Card.Body>
                      <Card.Title>{this.props.item.title}</Card.Title>
                      <Card.Text>
                        <p>Overview: {this.props.item.overview}</p>
                        <p>Release Date: {this.props.item.release_date}</p>
                        <p>Average Vote: {this.props.item.vote_average}</p>
                        <p>Total Votes: {this.props.item.vote_count}</p>
                        <p>Popularity: {this.props.item.popularity}</p>
                      </Card.Text>
                    </Card.Body>
                  </Card>

              
               
            </div> 
        )
    }
}
export default Movie
