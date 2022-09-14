import React from "react";
import ContentLoader from "react-content-loader";
// import 'react-loading-skeleton/dist/skeleton.css'
import Card from '../components/Cart/Cart'
import Cart from "../components/Cart/Cart";


function Favorites({favorites, setFavorites, isLoading}) {



    return (
        <>
            <div className="main-block__goods goods">
                {

                    isLoading ? [...Array(12)].map((item, index) => (
                        <Cart key={index} />
                    )) : favorites
                        .map((item, index) => (
                            <Card  item={item} key={item.id} name={item.title} price={item.price} imageUrl={item.imageUrl} isLoading={isLoading}
                            />
                        ))
                }
            </div>

        </>
    );
}

export default Favorites;
