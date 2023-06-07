import React from "react";
import Cart from "../components/Cart/Cart";
import FavoritesEmpty from "../components/FavoritesEmpty";
import AppContext from "./context";

function Favorites({onPlus, addToFavorite, isLoading}) {
    const {favorites} = React.useContext(AppContext);

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
                                      key={item.id}
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
