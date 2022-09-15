import React from "react";
import ContentLoader from "react-content-loader";
import axios from "axios";
// import 'react-loading-skeleton/dist/skeleton.css'


function Cart({addToFavorite, setIsLoadingFavorite, setFavorites,item, name, price, imageUrl, isLoading=true, isFavorite}) {

    const [favorite, setFavorite] = React.useState(isFavorite);

    const addToFavoriteIcon = () => {
        addToFavorite(item)
        setFavorite(true)
    }
    //
    // const addToFavorite = () => {
    //     setFavorite(!favorite)
    //     console.log(item)
    //     async function fetchData() {
    //
    //         const itemsResponse = await axios.post('https://62f2672bb1098f15081212c2.mockapi.io/favorites', item);
    //         const favoriteResponse = await axios.get('https://62f2672bb1098f15081212c2.mockapi.io/favorites');
    //         setFavorites(favoriteResponse.data)
    //
    //     }
    //     fetchData();
    //
    // }

    // console.log(isLoading)
    return (
        <>
            {isLoading ?  <ContentLoader
                speed={2}
                width={150}
                height={260}
                viewBox="0 0 150 187"
                backgroundColor="#f3f3f3"
                foregroundColor="#ecebeb"
            >
                <rect x="0" y="0" rx="10" ry="10" width="150" height="91" />
                <rect x="0" y="107" rx="7" ry="7" width="150" height="15" />
                <rect x="0" y="126" rx="6" ry="6" width="93" height="15" />
                <rect x="0" y="162" rx="0" ry="0" width="80" height="24" />
                <rect x="114" y="155" rx="12" ry="12" width="32" height="32" />
            </ContentLoader> : <>
                <div className="goods__item item">
                    <div className="item__wrapper">
                        <img className="item__image" src={imageUrl} alt="image"/>
                    </div>
                    <div className="item__title">
                        {name}
                    </div>
                    <div className="item__price item-price">
                        <div className="item-price__section">
                            <div className="item-price__title">Цена:</div>
                            <div className="item-price__text">{price} руб.</div>
                        </div>
                        <button className="button-add">
                            <img src="/img/btn-add.svg" alt="button-add"/>
                        </button>
                        <button className="button-favorite" onClick={addToFavorite}>

                            <img onClick={addToFavoriteIcon} src={favorite ? "/img/like.svg" : "/img/btn-favorite.svg"  } alt="button-favorite"/>
                        </button>
                    </div>
                </div>

            </>}
        </>






    );
}

export default Cart;
