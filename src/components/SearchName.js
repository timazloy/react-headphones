import '../App.css';
import React from "react";

function SearchName({setNameValue,sortName, clearValue}) {

    return (
        <>
            <input type="text" className="search-input__input" placeholder="Поиск по сайту"  onChange={setNameValue} value={sortName}/>
            <button className="button-search"><img className="search-input__img" src="/img/search.svg" alt="Search"/></button>
            {sortName && <button className="button-delete"><img onClick={clearValue} src="/img/btn-remove.svg" alt="Remove"/></button>}

        </>
    );
}

export default SearchName;
