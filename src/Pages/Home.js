import '../App.css';
import Swiper from '../components/Swiper'
import Header from '../components/Header/Header'
import React from "react";
import Cart from '../components/Cart/Cart'

function Home({items}) {

    return (
        <div className="main-block">
            <div className="main-block__wrapper">
                <Header/>
                <div className="main-block__body">
                    <div className="main-block__slider slider-swiper">
                        <Swiper/>
                    </div>
                    <div className="main-block__search search">
                        <div className="search__title">
                            Все наушники
                        </div>
                        <div className="search__input">

                        </div>
                    </div>
                    <div className="main-block__goods goods">
                        {items.map((item, index) => (
                            <Cart key={index} name={item.title} price={item.price} imageUrl={item.imageUrl}/>
                        ))}


                    </div>
                </div>

            </div>
        </div>
    );
}

export default Home;
