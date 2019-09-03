import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'


class Movie extends Component {
    constructor(){
      super()
      this.state = {
  
      }
    }
  changeRented = () => {
      this.props.changeRented(this.props.movie.id)
      this.handleBudgetChange()
  }

  handleBudgetChange = () => {
      this.props.handleBudgetChange()
  }


    render(){
        let movie = this.props.movie
        return(
        <div>
        <img className="moviePic" src={movie.img}></img>
        <button value={!movie.isRented} onClick={this.handleBudgetChange} onClick={this.changeRented} >{movie.isRented? "-":"+"}</button>
        <Link to={`/movieDetail/${movie.title}`}>{movie.title}</Link>
        </div>
        )
    }
    
  
  
  }
  
  export default Movie;
  