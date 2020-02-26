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
                    <NavigationBar />
                    <Switch>
                        <Route exact path={'/project/:id'} component={ItemDetails}/>
                        <Route exact path={'/signin'} component={SignIn}/>
                        <Route exact path={'/signup'} component={SignUp}/>
                        <Route exact path={'/create'} component={CreateItem}/>
                        <Route Exact path={'/'} component={Dashboard}/>
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}
export default App;
