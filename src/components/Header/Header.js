import {Link, NavLink} from "react-router-dom";
import './Header.scss';
import React from 'react'
import ModalBasket from "../ModalBasket";



function Header({cartItems}) {
    const [modalBasketActive, setModalBasketActive] = React.useState(false)

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
                        <p className="basket-section__text">1205 руб.</p>
                    </button>
                    <ModalBasket items={cartItems} modalBasketActive={modalBasketActive} setModalBasketActive={setModalBasketActive}/>
                    <Link to="/favorites">
                        <div className="personal-section__item">
                            <img className="favorites" src="/img/favorites.svg" alt="favorites"/>
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
