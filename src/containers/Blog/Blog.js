import React, { Component } from 'react';
import Posts from './Posts/Posts'
import {Route, NavLink, Switch} from 'react-router-dom'
import NewPost from './NewPost/NewPost';
import FullPost from './FullPost/FullPost'
 
import './Blog.css';
  
class Blog extends Component {
    render () {
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><NavLink to="/" exact>Posts</NavLink></li>
                            <li><NavLink to={{
                                pathname: '/new-post',
                                hash: '#submit',
                                search: '?quick-submit=true'
                 //the active class provided by the NavLink can be overidden by adding activeClassName where you can define your own styles
                 //you can also add inline styling to the navlinks by using activeStyle={{}}               
                            }}>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                {/*<Route path="/" exact render={() => <h1>Home</h1>}/>
                <Route path="/" render={() => <h1>Home</h1>}/>*/}
                <Switch>
                    <Route path="/" exact component={Posts} /> 
                    <Route path="/new-post" component={NewPost} />
                    <Route path="/Posts/:id" exact component={FullPost} />  
                </Switch>
            </div>
        );
    }
}

export default Blog;