import React from "react";
// import 'react-loading-skeleton/dist/skeleton.css'
import Cart from "../components/Cart/Cart";
import FavoritesEmpty from "../components/FavoritesEmpty";



function Favorites({addToFavorite, favorites, setFavorites, isLoading}) {


    // favorites.forEach(item => {
    //     console.log(item.favorite)
    // })

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
                                      isFavorite={true}
                                      item={item}
                                      key={item.id}
                                      name={item.title}
                                      price={item.price}
                                      imageUrl={item.imageUrl}
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
