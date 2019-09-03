import React, { Component } from 'react';
import '../styles/MovieDetail.css'

class MovieDetail extends Component {
    constructor(){
      super()
      this.state = {
  
      }
    }
  
    render(){
        const movies = this.props.movies
        const match = this.props.match.params.movie
        const movie = movies.filter(m=> {return m.title === match})
        return(
          <div id="MovieDetail">
            <h1>{match} - {movie[0].year}</h1>
            <img id="moviePic" alt="" src={movie[0].img}></img>
            <h6>{movie[0].descrShort}</h6>
          </div>
  
        )
    }
    
  
  
  }
  
  export default MovieDetail;
  