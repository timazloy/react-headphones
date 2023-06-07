import {Link, NavLink} from "react-router-dom";
import './Header.scss';
import React from 'react'
import ModalBasket from "../ModalBasket";
import AppContext from "../../Pages/context";


function Header({isLoading, OnRemoveItem, cartItems}) {
    const [modalBasketActive, setModalBasketActive] = React.useState(false)

    const {favorites} = React.useContext(AppContext);


    const totalPrice = cartItems.reduce((sum, item) => {return sum + item.price}, 0).toString().replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, "$1" + ' ')

    return (
        <header className="header">
            <div className="header__column">
                <Link to="/">
                    <div className="header__logo logo-section">
                        <div className="logo-section__column">
                            <img className="logo-section__img logo" src="/img/logo.png" alt="logo"/>
                        </div>
                        <div className="logo-section__column">
                            <div className="logo-section__title">REACT HEADPHONES</div>
                            <div className="logo-section__text">Магазин наушников</div>
                        </div>
                    </div>
                </Link>
            </div>
            <div className="header__column">
                <div className="personal-section">
                    <button onClick={() =>setModalBasketActive(true)} className="personal-section__item basket-section">
                        <img className="basket" src="/img/basket.svg" alt="basket"/>
                        <p className="basket-section__text">{totalPrice} руб.</p>
                        {cartItems.length ? <div className="basket-section__count counter">{cartItems.length}</div> : <div className="basket-section__count basket-section__count--hide counter">{cartItems.length}</div>}
                    </button>
                    <ModalBasket totalPrice={totalPrice} isLoading={isLoading} OnRemoveItem={OnRemoveItem} items={cartItems} modalBasketActive={modalBasketActive} setModalBasketActive={setModalBasketActive}/>
                    <Link to="/favorites">
                        <div className="personal-section__item basket-section">
                            <img className="favorites" src="/img/favorites.svg" alt="favorites"/>
                            {favorites.length ? <div className="basket-section__count counter">{favorites.length}</div> : <div className="basket-section__count basket-section__count--hide counter">{favorites.length}</div>}
                        </div>
                    </Link>
                    <div className="personal-section__item">
                        <img className="personal" src="/img/personal.svg" alt="personal"/>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
