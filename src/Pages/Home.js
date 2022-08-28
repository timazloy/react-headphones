import '../App.css';
import Swiper from '../components/Swiper'
import Header from '../components/Header/Header'
import React from "react";
import Cart from '../components/Cart/Cart'

function Home({items, onChangeSearchInput, searchValue, setSearchValue}) {

    return (
        <div className="main-block">
            <div className="main-block__wrapper">
                <Header/>
                <div className="main-block__body">
                    <div className="main-block__slider slider-swiper">
                        <Swiper/>
                    </div>
                    <div className="main-block__search search">
                        <h1>{searchValue ? `Поиск по запросу "${searchValue}"`: 'Все наушники'}</h1>
                        <div className="search__input search-input">
                            <img className="search-input__img" src="/img/search.svg" alt="Search"/>
                            <input type="text" className="search-input__input" placeholder="Поиск..."  onChange={onChangeSearchInput} value={searchValue}/>
                            {searchValue && <img onClick={() => setSearchValue('')} className="button-delete" src="/img/btn-remove.svg" alt="Remove"/>}
                        </div>
                    </div>
                    <div className="main-block__goods goods">
                        {items
                            .filter((item) => item.title.toLowerCase().includes(searchValue.toLowerCase()))
                            .map((item, index) => (
                            <Cart key={index} name={item.title} price={item.price} imageUrl={item.imageUrl}/>
                        ))}


                    </div>
                </div>

            </div>
        </div>
    );
}

export default Home;
