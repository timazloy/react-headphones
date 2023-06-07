import '../App.css';
import React from "react";
import SelectPrice from "./Select";
import SearchName from "./SearchName";
import axios from "axios";

function SearchGoods({setNameValue, clearValue, sortPrice, setSortPrice, setSortName, sortName, favorites, setFavorites, isLoading,  items, notFound, setIsLoading, setItems, setNotFound, onChangeSearchInput, searchValue, setSearchValue, selectedOption, setSelectedOption}) {

    let mainSearch = []

    const [modalActive, setModalActive] = React.useState(false)

    const test = (event,item) => {
        event.preventDefault();
        if (!mainSearch.includes(item)) {
            mainSearch.push(item)
            console.log(mainSearch)
        } else if (mainSearch.includes(item)) {
            let num = mainSearch.indexOf(item)
            mainSearch.splice(num, 1);
        }
    }

    return (
        <>
            <div className="main-block__search search">
                <h1 className="search__title main-title">{searchValue ? `Поиск по запросу "${searchValue}"`: 'Все наушники'}</h1>
                <div className="search__block">
                    <div className="search__section">
                        <div className="search__input search-input">
                            <SearchName  setNameValue={setNameValue} sortName={sortName} setSortName={setSortName} onChangeSearchInput={onChangeSearchInput} searchValue={searchValue} clearValue={clearValue}/>
                        </div>
                    </div>
                    <div className="search__section">
                        <SelectPrice sortPrice={sortPrice} setSortPrice={setSortPrice} selectedOption={selectedOption} setSelectedOption={setSelectedOption} />
                    </div>
                </div>
            </div>
        </>
    );
}

export default SearchGoods;
