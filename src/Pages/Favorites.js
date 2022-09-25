import React from "react";
// import 'react-loading-skeleton/dist/skeleton.css'
import Cart from "../components/Cart/Cart";
import FavoritesEmpty from "../components/FavoritesEmpty";
import axios from "axios";



function Favorites({onPlus, addToFavorite, favorites, isLoading}) {

    return (
        <>
            <div className="goods__favorite-title main-title">Избранное</div>
            <div className="main-block__goods goods">
                    {
                        isLoading ? [...Array(12)].map((item, index) => (
                            <Cart key={index} isFavorite={true} />
                        )) : favorites
                            .map((item, index) => (
                                <Cart addToFavorite={addToFavorite}
                                      onPlus={onPlus}
                                      isFavorite={true}
                                      // added={true}

                                    // item={item}
                                      key={item.id}
                                      // title={item.title}
                                      // price={item.price}
                                      // imageUrl={item.imageUrl}
                                      {...item}
                                      isLoading={isLoading}
                                />
                            ))
                    }
                    {favorites.length === 0 && <FavoritesEmpty/>}
            </div>

        </>
    );
}

export default Favorites;
