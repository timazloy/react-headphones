import React from "react";

function SearchEmpty({setSearchValue}) {

    return (
        <div className="main-block__search-empty search-empty">
            <img className="search-empty__image" src="/img/sad-smile.png" alt="image"/>
            <h2 className="search-empty__title">К сожалению, по вашему запросу ничего не найдено.</h2>
            <button onClick={() => setSearchValue('')} className="search-empty__button button-back">
                <img className="button-back__img" src="/img/arrow-back.svg" alt="arrow_back"/>
                <span className="button-back__text">Вернуться назад</span>
            </button>
        </div>
    );
}

export default SearchEmpty;
