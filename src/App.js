import React, { Component } from 'react'

import "./App.css";

import User from "./components/User";
import Post from "./components/Post";


export default class App extends Component {
    constructor() {
        super()
        this.state = {
            users : [],
            posts : []
        }
    }

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(response=> response.json())
        .then(users => this.setState({users : users}));

        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response=> response.json())
        .then(posts => this.setState({posts : posts}));
        
    }
    
    
  render() {
    const users = this.state.users;
    const posts = this.state.posts;

    return (
        <div>
            <div className="heading__container">
                <h1 className="heading">USERS</h1>
            </div>
            
            <div className="userContainer">
                {
                    users.map(user => {
                        return  <div key={user.id}>
                            <User  details={user} />
                        </div>    
                    })
                }
            </div>

            <div className="heading__container">
                <h1 className="heading posts__heading">Posts</h1>
            </div>

            <div className="postsContainer">
                {
                    posts.map(user => {
                        return  <div key={user.id}>
                            <Post  details={user} />
                        </div>    
                    })
                }
            </div>
     </div>
    )
  }
}



