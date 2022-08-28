import React from "react";

function Cart({name, price, imageUrl}) {

    return (
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
                <button className="button-favorite">
                    <img src="/img/btn-favorite.svg" alt="button-favorite"/>
                </button>
            </div>
        </div>
    );
}

export default Cart;
