import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import '../styles/Catalog.css'
import Movie from './Movie';


class Catalog extends Component {
    constructor() {
        super()
        this.state = {
            movieName: "",
            budget: 10
        }
    }

    handleChange = (e) => {
        this.setState({
            movieName: e.target.value
        })
    } 
    handleBudgetChange = () => {
        let rentedMovies = this.props.movies.filter(m=>m.isRented)
        console.log(rentedMovies)
        this.setState({
            budget: this.state.budget - rentedMovies.length*3
        })
    }

    

    render() {
        return (
            
            
            <div id="catalog">
                <div>you have  {this.state.budget}  dollars</div>
                {this.props.movies.filter(m => m.isRented).filter(m=>m.title.toLowerCase().includes(this.state.movieName.toLowerCase())).map((m,i) => <Movie movie={m} key={i} handleBudgetChange={this.handleBudgetChange} changeRented={this.props.changeRented}/>)}
                <input type="text" value={this.state.movieName} onChange={this.handleChange}></input>
                {this.props.movies.filter(m=> m.title.toLowerCase().includes(this.state.movieName.toLowerCase())).map((m,i) =>  <Movie className={this.props.movies[m]} key={i} movie={m} handleBudgetChange={this.handleBudgetChange} changeRented={this.props.changeRented}/>)}
            </div>

        )
    }

}

export default Catalog;
