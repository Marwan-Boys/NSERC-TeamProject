import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NavigationBar from "./Components/layout/NavigationBar";
import Dashboard from "./Components/dashboard/Dashboard";
import ItemDetails from "./Components/project/ItemDetails";
import SignIn from "./Components/authentication/SignIn";
import SignUp from "./Components/authentication/SignUp";
import CreateItem from "./Components/project/CreateItem";

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className={"App"}>
                    <NavigationBar/>
                    <Switch>
                        <Route Exact path={'/project/:id'} component={ItemDetails}/>
                        <Route Exact path={'/signin'} component={SignIn}/>
                        <Route Exact path={'/signup'} component={SignUp}/>
                        <Route Exact path={'/create'} component={CreateItem}/>
                        <Route Exact path={'/dashboard'} component={Dashboard}/>
                        <Route Exact path={'/'} component={SignIn}/>
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}
export default App;
