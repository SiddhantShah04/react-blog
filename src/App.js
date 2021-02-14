import React from 'react';
import { useState, useEffect  } from 'react';


import {Route, BrowserRouter as Router, Switch, Link} from "react-router-dom";

import './App.css';
import Header from './components/header'
import Blog from "./components/blog";
import Login from "./components/login";
import Register from "./components/register";
import CreateBlog from "./components/createblog"
import UpateBlog from "./components/updateBlog";

const App = ()=>{
  
  return(
    <Router>
      <div>
        <Switch>
            <Route path="/" exact component={Blog} />
            <Route path="/login" exact component={Login} />
            <Route path="/register" exact component={Register} />
            <Route path="/createblog" exact component={CreateBlog} />
            <Route path="/updateblog" exact component={UpateBlog} />

        </Switch>
      </div>
    </Router>
  )
}

export default App;
