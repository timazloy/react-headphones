import React from "react";

function Cart(props) {

    return (

        <div className="goods__item item">
            <div className="item__wrapper">
                <img className="item__image" src="img/headphone/1.jpg" alt="image"/>
            </div>
            <div className="item__title">
                Радиочастотная гарнитура Astro A50
            </div>
            <div className="item__price item-price">
                <div className="item-price__section">
                    <div className="item-price__title">Цена:</div>
                    <div className="item-price__text">12 999 руб.</div>
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
