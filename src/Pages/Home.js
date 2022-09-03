import '../App.css';
import Swiper from '../components/Swiper'
import Header from '../components/Header/Header'
import React from "react";
import Cart from '../components/Cart/Cart'
import SearchGoods from "../components/SearchGoods";
import SearchEmpty from "../components/SearchEmpty/SearchEmpty";
import axios from "axios";

function Home({items, isLoading, setSelectedOption, selectedOption, setIsLoading}) {
    const [searchValue, setSearchValue] = React.useState('');
    const [notFound, setNotFound] = React.useState('');

    const [countries, setCountries] = React.useState([]);
    const [loading, setLoading] = React.useState(false);
    const [currentPage, setCurrentPage] = React.useState(1);
    const [goodsPage] = React.useState(12);

    const lastGoodsIndex = currentPage * goodsPage;
    const firstGoodsIndex = lastGoodsIndex - goodsPage;
    const currentGoods = items.slice(firstGoodsIndex, lastGoodsIndex);
    const pageNumbers = [];

    const paginate = pageNumber => setCurrentPage(pageNumber)


    const filtredItems = items.filter((item) => item.title.toLowerCase().includes(searchValue.toLowerCase()))


    const clearValue = () => {
        setSearchValue('')
        setNotFound('')
    }

    const showNotFound = () => {
        if (filtredItems.length === 0) {
            setNotFound(<SearchEmpty setSearchValue={setSearchValue} setNotFound={setNotFound} clearValue={clearValue}/>)
        } else {
            setNotFound('')
        }

    }

    // const [loaded, setLoaded] = React.useState(false)
    // useEffect(() => {
    //     if (loaded) return ;
    //     //получение data
    //     setCartData(new_data)
    //     setLoaded(true)
    // }, [loaded])

    React.useEffect(() => {
        // if (filtredItems.length === 0) {

        // if (isLoading) return ;

        if (notFound !== '') return;

        if (isLoading === false) {
            showNotFound()
        }

        // console.log(notFound)


        // setIsLoading(false)
        // setTimeout(() => {
        //     showNotFound()
        // }, 1000);

        // }
    }, [filtredItems]);


    const onChangeSearchInput = (e) => {
        setSearchValue(e.target.value)
        // console.log(filtredItems)
        if (isLoading === false) {
            showNotFound()
        }

        // if (filtredItems.length === 0) {
        //     showNotFound()
        // }
    }


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

            filtredItems.length > 0 && currentGoods
                .filter((item) => item.title.toLowerCase().includes(searchValue.toLowerCase()))
                .map((item, index) => (
                    <Cart key={index} name={item.title} price={item.price} imageUrl={item.imageUrl} isLoading={isLoading}/>
                ))
        )

    }

    for (let i = 1; i <= Math.ceil(items.length / goodsPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <div className="main-block">
            <div className="main-block__wrapper">
                <Header/>
                <div className="main-block__body">
                    <div className="main-block__slider slider-swiper">
                        <Swiper/>
                    </div>
                    <SearchGoods clearValue={clearValue} setSelectedOption={setSelectedOption} selectedOption={selectedOption} onChangeSearchInput={onChangeSearchInput} searchValue={searchValue} setSearchValue={setSearchValue}/>
                    <div className="main-block__goods goods">
                        {renderItemsHome()}
                        {notFound}
                    </div>
                    <ul>
                        {
                            pageNumbers.map(number => (
                                <li key={number}>
                                    <a href="#" onClick={() => paginate(number)}>
                                        {number}
                                    </a>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Home;
