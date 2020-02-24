import React, { Component } from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import Navbar from "./Components/layout/NavigationBar";
import Dashboard from "./Components/dashboard/Dashboard";
import ItemDetails from "./Components/project/ItemDetails";
import SignIn from "./Components/authentication/SignIn";
import SignUp from "./Components/authentication/SignUp";

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className={"App"}>
                    <Navbar/>
                    <Switch>
                        <Route Exact path={'/'} component={Dashboard}/>
                        <Route exact path={'/project/:id'} component={ItemDetails}/>
                        <Route exact path={'/signin'} component={SignIn}/>
                        <Route exact path={'/signup'} component={SignUp}/>
                    </Switch>
                </div>
            </BrowserRouter>)
            ;}
}
export default App;
