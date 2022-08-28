import '../App.css';
import React from "react";

function SearchGoods({onChangeSearchInput, searchValue, setSearchValue}) {


    return (
        <div className="main-block__search search">
            <h1>{searchValue ? `Поиск по запросу "${searchValue}"`: 'Все наушники'}</h1>
            <div className="search__input search-input">
                <img className="search-input__img" src="/img/search.svg" alt="Search"/>
                <input type="text" className="search-input__input" placeholder="Поиск..."  onChange={onChangeSearchInput} value={searchValue}/>
                {searchValue && <img onClick={() => setSearchValue('')} className="button-delete" src="/img/btn-remove.svg" alt="Remove"/>}
            </div>
        </div>
    );
}

export default SearchGoods;
