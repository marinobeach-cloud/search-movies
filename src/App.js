import React, { Component } from "react";
import './App.css';
import 'bulma/css/bulma.css'
import { Routes, Route } from "react-router-dom";
import Detail from "./pages/Detail";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

class App extends Component {

    render() {
        return (
            <div className="App">
                <Routes>
                    <Route exact path='/' element={<Home/>} />
                    <Route path='/detail/:id' element={<Detail/>} />
                    <Route path='*' element={<NotFound/>} />
                </Routes>
            </div>
        );
    }

}

export default App;
