import '../App.css';
import React from "react";
import SelectPrice from "./Select";

function SearchGoods({onChangeSearchInput, searchValue, setSearchValue, selectedOption, setSelectedOption, clearValue, setFixedFilter, showBrandMenu}) {


    return (
        <div className="main-block__search search">
            <h1 className="search__title">{searchValue ? `Поиск по запросу "${searchValue}"`: 'Все наушники'}</h1>
            <div className="search__block">
                <div className="search__section">
                    <div className="search__input search-input">

                        <input type="text" className="search-input__input" placeholder="Поиск по сайту"  onChange={onChangeSearchInput} value={searchValue}/>
                        <button className="button-search"><img className="search-input__img" src="/img/search.svg" alt="Search"/></button>
                        {searchValue && <button className="button-delete"><img onClick={clearValue} src="/img/btn-remove.svg" alt="Remove"/></button>}
                    </div>
                </div>
                <div className="search__section">
                    <SelectPrice selectedOption={selectedOption} setSelectedOption={setSelectedOption} />
                    <button className="btn-brand">Сортировка по брендам</button>
                </div>
            </div>

        </div>
    );
}

export default SearchGoods;
