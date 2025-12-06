import React from "react";

import Header from "./components/Header";
import Categories from "./components/Categories";
import Sort from "./components/Sort";
import PizzaBlock from "./components/PizzaBlock";

import './scss/app.scss';


import pizzas from './assets/pizzas.json';

console.log(pizzas);


function App() {

    return (
        <div className="App">
            <div className="wrapper">
                <Header/>

                <div className="content">
                    <div className="container">
                        <div className="content__top">
                            <Categories/>
                            <Sort/>
                        </div>

                        <h2 className="content__title">Все пиццы</h2>

                        <div className="content__items">
                            {
                                pizzas.map(pizza => {
                                    return (
                                        <PizzaBlock key={pizza.id}
                                            title={pizza.title}
                                            price={pizza.price}
                                            imageUrl={pizza.imageUrl}
                                            pizzaTypes={pizza.types}
                                            pizzaSizes={pizza.sizes}
                                        />
                                        // spread-operator
                                        // <PizzaBlock {...pizza} />
                                    )
                                })
                            }

                            {/*або можна так. для наглядності. */}

                            {/*{PizzaBlock(*/}
                            {/*    {*/}
                            {/*        title: "Peperoni-2",*/}
                            {/*        price: 500,*/}
                            {/*    }*/}
                            {/*)}*/}

                            {/*<PizzaBlock title="Peperoni" price={300}/>*/}
                            {/*<PizzaBlock title='Some another Pizza' price="250"/>*/}
                            {/*<PizzaBlock/>*/}
                            {/*<PizzaBlock/>*/}
                            {/*<PizzaBlock/>*/}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
