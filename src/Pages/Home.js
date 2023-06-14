import '../App.css';
import Swiper from '../components/Swiper'
import React from "react";
import Cart from '../components/Cart/Cart'
import SearchGoods from "../components/SearchGoods";
// import Modal from "../components/Modal/Modal";

function Home({cartItems, onPlus, addToFavorite, setNameValue, clearValue, setNotFound, setSearchValue, searchValue, sortPrice, setSortPrice, sortName, setSortName, notFound, favorites, setFavorites, items, isLoading, setSelectedOption, selectedOption, setIsLoading, setFixedFilter, showBrandMenu, setItems}) {

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
    // const [activeModal, setActiveModal] = React.useState(false)
    // const [dataForModal, setDataForModal] = React.useState({})
    //
    //
    // const openModal = (arr) => {
    //     setActiveModal(true)
    //     setDataForModal(arr)
    // }

    const renderItemsHome = () => {
        return (
            isLoading ? [...Array(12)].map((item, index) => (
                <Cart key={index} />
            )) : items.length > 0 && currentGoods
                .map((item, index) => (
                    <Cart onPlus={onPlus}
                          addToFavorite={addToFavorite}
                          setFavorites={setFavorites}
                          setIsLoading={setIsLoading}
                          isFavorite={favorites.some(obj => Number(obj.parentId) === Number(item.parentId))}
                          added={cartItems.some(obj => Number(obj.parentId) === Number(item.parentId))}
                          {...item}
                          key={item.imageUrl}
                          item={item}
                          imageUrl={item.imageUrl}
                          isLoading={isLoading}/>
                ))
        )
    }

    for (let i = 1; i <= Math.ceil(items.length / goodsPage); i++) {
        pageNumbers.push(i);
    }

    const paginationClasses = (number) => number === currentPage ? "pagination__link--active" : "";

    return (
        <>
            <div className="main-block__slider slider-swiper">
                <Swiper/>
            </div>
            <SearchGoods setNameValue={setNameValue} clearValue={clearValue}  setSortPrice={setSortPrice} sortPrice={sortPrice} sortName={sortName} setSortName={setSortName} favorites={favorites} setFavorites={setFavorites} isLoading={isLoading} items={items} notFound={notFound} setNotFound={setNotFound} setItems={setItems} setIsLoading={setIsLoading} showBrandMenu={showBrandMenu} setFixedFilter={setFixedFilter}  setSelectedOption={setSelectedOption} selectedOption={selectedOption} searchValue={searchValue} setSearchValue={setSearchValue}/>
            <div className="main-block__goods goods">
                {renderItemsHome()}
                {notFound}
                {/*<Modal*/}
                {/*    isFavorite={favorites.some(obj => Number(obj.parentId) === Number(dataForModal.parentId))}*/}
                {/*    favorites={favorites}*/}
                {/*    setFavorites={setFavorites}*/}
                {/*    addToFavorite={addToFavorite}*/}
                {/*    onPlus={onPlus}*/}
                {/*    dataForModal={dataForModal}*/}
                {/*    activeModal={activeModal}*/}
                {/*    setActiveModal={setActiveModal} />*/}
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
        </>
    );
}

export default Home;
