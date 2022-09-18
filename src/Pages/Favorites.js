import React from "react";
// import 'react-loading-skeleton/dist/skeleton.css'
import Cart from "../components/Cart/Cart";
import FavoritesEmpty from "../components/FavoritesEmpty";
import axios from "axios";



function Favorites({onPlus, addToFavorite, favorites, setFavorites, isLoading}) {


    // const addToFavorite = (obj) => {
    //     async function fetchData() {
    //         // if(favorite) {
    //         //     const itemsResponse = await axios.delete(`https://62f2672bb1098f15081212c2.mockapi.io/favorites/${obj.favorite}`)
    //         // }
    //         // console.log(obj)
    //
    //         const itemsResponse = await axios.post('https://62f2672bb1098f15081212c2.mockapi.io/favorites', obj);
    //         const favoriteResponse = await axios.get('https://62f2672bb1098f15081212c2.mockapi.io/favorites');
    //         setFavorites(favoriteResponse.data)
    //         // setFavorites((prev) => [...prev,  favoriteResponse])
    //     }
    //     fetchData();
    //
    // }

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
                                      onPlus={onPlus}
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
