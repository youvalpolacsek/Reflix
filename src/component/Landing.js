import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import '../styles/Landing.css'


class Landing extends Component {


    render() {
        const match = this.props.match
        const users = this.props.users

        return (
            <div>
                <h1>who's watching</h1>
                <div>
                    <div id="users-container">
                        {users.map(u => {
                            return (
                                <div key={u.name} id="user" style={{backgroundColor:u.color}}>
                                <Link id="userLink" to="/catalog">{u.name}</Link>
                                </div>
                            )
                        })}
                    </div>


                </div>
            </div>
        )
    }



}

export default Landing;
