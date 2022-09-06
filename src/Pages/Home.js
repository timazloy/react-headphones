import '../App.css';
import Swiper from '../components/Swiper'
import Header from '../components/Header/Header'
import React from "react";
import Cart from '../components/Cart/Cart'
import SearchGoods from "../components/SearchGoods";
import SearchEmpty from "../components/SearchEmpty/SearchEmpty";
import axios from "axios";

function Home({items, isLoading, setSelectedOption, selectedOption, setIsLoading, setFixedFilter, showBrandMenu}) {
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

    const paginate = (event, pageNumber) => {
        event.preventDefault()
        setCurrentPage(pageNumber)
    }

    const filtredItems = items.filter((item) => item.title.toLowerCase().includes(searchValue.toLowerCase()))

    // Очистка поиска
    const clearValue = () => {
        setSearchValue('')
        setNotFound('')
    }

    // условие для картинки "Такой товар не найден"
    const showNotFound = () => {
        if (filtredItems.length === 0) {
            setNotFound(<SearchEmpty setSearchValue={setSearchValue} setNotFound={setNotFound} clearValue={clearValue}/>)
        } else {
            setNotFound('')
        }

    }

    // отслеживаем фильтрацию чтобы выводить "Такой товар не найден"
    React.useEffect(() => {

        console.log(filtredItems)

        if (notFound !== '') return;

        if (isLoading === false) {
            showNotFound()
        }

    }, [filtredItems]);

    // отслеживаем инпут поиска
    React.useEffect(() => {
        if (searchValue.length === 0) {
            setNotFound('')
        }
    }, [searchValue]);


    const onChangeSearchInput = (e) => {
        setSearchValue(e.target.value)
        if (isLoading === false) {
            showNotFound()
        }
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



            // {this.props.conditionA ? "Condition A"
            //         : this.props.conditionB ? "Condition B"
            //             : "Neither"}

            // [...Array(12)].map((item, index) => (
            //     <Cart/>
            // ))

            // (isLoading ? [...Array(8)] : filtredItems)

            // isLoading ? [...Array(12)] :
            isLoading ? [...Array(12)].map((item, index) => (
                <Cart/>
            )) : filtredItems.length > 0 && currentGoods
                .filter((item) => item.title.toLowerCase().includes(searchValue.toLowerCase()))
                .map((item, index) => (
                    <Cart key={index} name={item.title} price={item.price} imageUrl={item.imageUrl} isLoading={isLoading}/>
                ))

            // filtredItems.length > 0 && currentGoods
            //     .filter((item) => item.title.toLowerCase().includes(searchValue.toLowerCase()))
            //     .map((item, index) => (
            //         <Cart key={index} name={item.title} price={item.price} imageUrl={item.imageUrl} isLoading={isLoading}/>
            //     ))
        )
    }

    for (let i = 1; i <= Math.ceil(items.length / goodsPage); i++) {
        pageNumbers.push(i);
    }

    const paginationClasses = (number) => number === currentPage ? "pagination__link--active" : "";

    return (
        <div className="main-wrapper__goods main-block">
            <div className="main-block__wrapper">
                <Header/>
                <div className="main-block__body">
                    <div className="main-block__slider slider-swiper">
                        <Swiper/>
                    </div>
                    <SearchGoods showBrandMenu={showBrandMenu} setFixedFilter={setFixedFilter} clearValue={clearValue} setSelectedOption={setSelectedOption} selectedOption={selectedOption} onChangeSearchInput={onChangeSearchInput} searchValue={searchValue} setSearchValue={setSearchValue}/>
                    <div className="main-block__goods goods">
                        {renderItemsHome()}
                        {notFound}
                    </div>
                    <ul className="main-block__pagination pagination">
                        {
                            pageNumbers.map(number => (
                                <li className="pagination__item" key={number}>
                                    <a
                                        className={[
                                            "pagination__link",
                                            paginationClasses(number)
                                        ].join(' ')}
                                        href="#"
                                        onClick={(event) => paginate(event, number)}
                                    >
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
