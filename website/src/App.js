import React, { Component } from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'
import Navbar from "./Components/layout/NavigationBar";

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className={"App"}>
                    <Navbar/>
                </div>
            </BrowserRouter>
        );
    }
}
export default App;