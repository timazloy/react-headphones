import React from "react";
import ContentLoader from "react-content-loader";
import axios from "axios";
// import 'react-loading-skeleton/dist/skeleton.css'


function Cart({setIsLoadingFavorite, setFavorites,item, title, price, imageUrl, isLoading=true, isFavorite, addToFavorite, onPlus}) {

    const [favorite, setFavorite] = React.useState(isFavorite);

    // React.useEffect(() => {
    //     setFavorite(isFavorite)
    // }, [favorite]);

    const addToFavoriteIcon = () => {
        addToFavorite(item)
        setFavorite(true)
    }

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

    const [isAdded, setIsAdded] = React.useState(false);

    const onClickPlus = () => {
        setIsAdded(!isAdded)
        onPlus({title, price, imageUrl})
    }

    return (
        <>
            {isLoading ?  <ContentLoader
                speed={2}
                width={210}
                height={303}
                viewBox="0 0 210 260"
                backgroundColor="#f3f3f3"
                foregroundColor="#ecebeb"
                border="1px solid black"
            >
                <rect x="221" y="58" rx="16" ry="16" width="148" height="113" />
                <rect x="29" y="15" rx="8" ry="8" width="151" height="109" />
                <rect x="29" y="148" rx="8" ry="8" width="151" height="46" />
                <rect x="149" y="220" rx="8" ry="8" width="32" height="30" />
                <rect x="28" y="220" rx="0" ry="0" width="95" height="30" />
            </ContentLoader> : <>
                <div className="goods__item item">
                    <div className="item__wrapper">
                        <img className="item__image" src={imageUrl} alt="image"/>
                    </div>
                    <div className="item__title">
                        {title}
                    </div>
                    <div className="item__price item-price">
                        <div className="item-price__section">
                            <div className="item-price__title">Цена:</div>
                            <div className="item-price__text">{price} руб.</div>
                        </div>
                        <button onClick={onClickPlus} className="button-add">
                            <img src={isAdded ? "/img/Add-basket.svg" : "/img/btn-add.svg"} alt="button-add"/>
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
