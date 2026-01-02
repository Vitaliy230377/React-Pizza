import React from 'react';

import Categories from "../components/Categories";
import Sort from "../components/Sort";
import PizzaBlock from "../components/PizzaBlock";
import Skeleton from "../components/PizzaBlock/Skeleton";


function Home(){
    let [pizzas, setPizzas] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(true);


    const [visibleList, setVisibleList] = React.useState(true);
    const togglevisibleList = () => {
        setVisibleList(!visibleList);
    }
    React.useEffect(() => {

        console.log(555);

        fetch('https://694296b069b12460f311fc88.mockapi.io/items')
            .then(response => response.json()) // Parse the response body as JSON
            .then(data => {
                setPizzas(data);
                setIsLoading(false);
            })// Work with the parsed data
            .catch(error => console.log(error));
    }, []);
    //https://694296b069b12460f311fc88.mockapi.io/items


    console.log(pizzas);

    return (
        <>
            <div className="content__top">
                <Categories/>
                <Sort/>
            </div>

            <h2 className="content__title">Все пиццы</h2>

            <div className="content__items">
                {
                    isLoading
                        ? [...new Array(6)].map((_, index) => <Skeleton key={index}/>)
                        : pizzas.map(pizza => {
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
        </>
    )
}

export default Home;
