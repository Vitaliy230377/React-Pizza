import React from "react";

import Header from "./components/Header";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import NotFound from "./pages/NotFound";


import './scss/app.scss';
import {Route, Routes} from "react-router-dom";


// import pizzas from './assets/pizzas.json';
// console.log(pizzas);

const pizzas = [];


function App() {




    return (
        <div className="App">
            <div className="wrapper">
                <Header/>

                <div className="content">
                    <div className="container">
                        <Routes>
                            <Route path="/" element={ <Home />} />
                            <Route path="/cart" element={ <Cart />} />
                            <Route path="/not-found" element={ <NotFound />} />
                            <Route path="*" element={ <NotFound />} />
                        </Routes>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
