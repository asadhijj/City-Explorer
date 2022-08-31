import React from "react";
import Movie from "./Movie";

class Movies extends React.Component {
    render () {
        return (
            <div>
                {this.props.films.map((item) => {
                    return (
                        <Movie item ={item}></Movie>
                    )
                })}
            </div>
        )
    }
}
export default Movies;