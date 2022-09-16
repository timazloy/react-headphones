import React from "react";
import {Link, NavLink} from "react-router-dom";

function FavoritesEmpty() {



    return (
        <div className="main-block__favorites-empty favorites-empty">
            <div className="favorites-empty__image">
                <img src="/img/smile-cute.png" alt="cute-smile"/>
            </div>
            <h2 className="favorites-empty__title">Закладок нет :(</h2>
            <div className="favorites-empty__text">Вы ничего не добавляли в закладки</div>
            <Link to="/">
                <button className="favorites-empty__button button-back">
                    <img className="button-back__icon" src="/img/arrow-back.svg" alt="back"/>
                    <p className="button-back__text">Вернуться назад</p>
                </button>
            </Link>
        </div>
    );
}

export default FavoritesEmpty;
