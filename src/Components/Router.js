import React from "react";
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import Header from './Header';
import Detail from "Routes/Detail";
import Search from "Routes/Search";
import TV from "Routes/TV";
import Movie from "Routes/Movie";
import Home from "Routes/Home";



export default () => (
    <Router>
        <Header />
        <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/show" exact component={TV}/>
            <Route path="/movie" exact component={Movie}/>
            <Route path="/search" component={Search}/>
            <Route path="/movie/:id" component={Detail}/>
            <Route path="/show/:id" component={Detail}/>
            <Redirect from="*" to="/" />
        </Switch>
    </Router>
)