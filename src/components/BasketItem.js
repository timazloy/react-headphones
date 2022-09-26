import React from "react";


function BasketItem({OnRemoveItem, id, price, title, image}) {


    return (
        <div className="basket-goods__item basket-item">
            <div className="basket-item__wrapper">
                <img className="basket-item__img" src={image} alt="good"/>
            </div>
            <div className="basket-item__description">
                <div className="basket-item__title">{title}</div>
                <div className="basket-item__text">{price} руб.</div>
            </div>
            <button onClick={() => OnRemoveItem(id)} className="basket-item__button">
                <img src="/img/btn-remove.svg" alt="close"/>
            </button>
        </div>
    );
}

export default BasketItem;
