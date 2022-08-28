import '../App.css';
import Swiper from '../components/Swiper'
import Header from '../components/Header/Header'
import React from "react";
import Cart from '../components/Cart/Cart'

function Home(props) {

    console.log(props)
    return (
        <div className="main-block">
            <div className="main-block__wrapper">
                <Header/>
                <div className="slider-swiper">
                    <Swiper/>
                </div>
                <div className="main-block__goods goods">
                    {/*{props.map((item, index) => (*/}

                    {/*    <Cart name={item.title} />*/}
                    {/*))}*/}


                </div>
            </div>
        </div>
    );
}

export default Home;
