import '../App.css';
import Swiper from '../components/Swiper'
import Header from '../components/Header/Header'
import React from "react";
import Cart from '../components/Cart/Cart'
import SearchGoods from "../components/SearchGoods";
import SearchEmpty from "../components/SearchEmpty/SearchEmpty";

function Home({items, isLoading}) {
    const [searchValue, setSearchValue] = React.useState('');
    const filtredItems = items.filter((item) => item.title.toLowerCase().includes(searchValue.toLowerCase()))


    const onChangeSearchInput = (e) => {
        setSearchValue(e.target.value)
    }

    // console.log(isLoading)

    const renderItemsHome = () => {
        return (
            // isLoading ? [...Array(10)]
            //     : filtredItems.length ? items
            //             .filter((item) => item.title.toLowerCase().includes(searchValue.toLowerCase()))
            //             .map((item, index) => (
            //                 <Cart key={index} name={item.title} price={item.price} imageUrl={item.imageUrl} isLoading={isLoading}/>
            //             ))
            //         : <SearchEmpty setSearchValue={setSearchValue}/>

            // isLoading ? [...Array(10)] : filtredItems

            filtredItems.length > 0 ? items
                .filter((item) => item.title.toLowerCase().includes(searchValue.toLowerCase()))
                .map((item, index) => (
                    <Cart key={index} name={item.title} price={item.price} imageUrl={item.imageUrl} isLoading={isLoading}/>
                )) : <SearchEmpty setSearchValue={setSearchValue}/>
        )

    }


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

                        {renderItemsHome()}

                    </div>
                </div>

            </div>
        </div>
    );
}

export default Home;
