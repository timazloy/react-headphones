import '../App.css';
import Swiper from '../components/Swiper'
import Header from '../components/Header/Header'
import React from "react";
import Cart from '../components/Cart/Cart'
import SearchGoods from "../components/SearchGoods";

function Home({items}) {
    const [searchValue, setSearchValue] = React.useState('');



    const onChangeSearchInput = (e) => {
        setSearchValue(e.target.value)
    }

    const filtredItems = items.filter((item) => item.title.toLowerCase().includes(searchValue.toLowerCase()))

    return (
        <div className="main-block">
            <div className="main-block__wrapper">
                <Header/>
                <div className="main-block__body">
                    <div className="main-block__slider slider-swiper">
                        <Swiper/>
                    </div>
                    <SearchGoods onChangeSearchInput={onChangeSearchInput} searchValue={searchValue} setSearchValue={setSearchValue}/>
                    <div className="main-block__goods goods">
                        {/*{items*/}
                        {/*    .filter((item) => item.title.toLowerCase().includes(searchValue.toLowerCase()))*/}
                        {/*    .map((item, index) => (*/}
                        {/*    <Cart key={index} name={item.title} price={item.price} imageUrl={item.imageUrl}/>*/}
                        {/*))}*/}
                        {
                            filtredItems.length > 0 ? items
                                .filter((item) => item.title.toLowerCase().includes(searchValue.toLowerCase()))
                                .map((item, index) => (
                                    <Cart key={index} name={item.title} price={item.price} imageUrl={item.imageUrl}/>
                                )) : <h1>По вашему запросу ничего не нашлось</h1>
                        }

                    </div>
                </div>

            </div>
        </div>
    );
}

export default Home;
