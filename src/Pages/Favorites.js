import React from "react";
// import 'react-loading-skeleton/dist/skeleton.css'
import Card from '../components/Cart/Cart'
import Cart from "../components/Cart/Cart";


function Favorites({addToFavorite, favorites, setFavorites, isLoading}) {



    return (
        <>
            <div className="goods__favorite-title main-title">Избранное</div>
            <div className="main-block__goods goods">

                    {

                        isLoading ? [...Array(12)].map((item, index) => (
                            <Cart key={index} />
                        )) : favorites
                            .map((item, index) => (
                                <Card addToFavorite={addToFavorite} isFavorite={true}  item={item} key={item.id} name={item.title} price={item.price} imageUrl={item.imageUrl} isLoading={isLoading}
                                />
                            ))
                    }
            </div>

        </>
    );
}

export default Favorites;
