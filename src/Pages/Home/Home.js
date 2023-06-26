import "../../App.css";
import Swiper from "../../components/Swiper";
import React from "react";
import Cart from "../../components/Cart/Cart";
import SearchGoods from "../../components/SearchGoods/SearchGoods";
import "./home.scss";

function Home({
  onPlus,
  addToFavorite,
  setNameValue,
  clearValue,
  searchValue,
  sortPrice,
  setSortPrice,
  sortName,
  setSortName,
  notFound,
  favorites,
  items,
  isLoading,
  setSelectedOption,
  selectedOption,
  setIsLoading,
  setFixedFilter,
  showBrandMenu,
}) {
  const [currentPage, setCurrentPage] = React.useState(1);
  const [goodsPage] = React.useState(12);

  const lastGoodsIndex = currentPage * goodsPage;
  const firstGoodsIndex = lastGoodsIndex - goodsPage;
  const currentGoods = items.slice(firstGoodsIndex, lastGoodsIndex);
  const pageNumbers = [];

  const paginate = (event, pageNumber) => {
    event.preventDefault();
    setCurrentPage(pageNumber);
  };

  const renderItemsHome = () => {
    return isLoading
      ? [...Array(12)].map((item, index) => <Cart key={index} />)
      : items.length > 0 &&
          currentGoods.map((item, index) => (
            <Cart
              onPlus={onPlus}
              addToFavorite={addToFavorite}
              setIsLoading={setIsLoading}
              isFavorite={favorites.some(
                (obj) => Number(obj.parentId) === Number(item.parentId)
              )}
              {...item}
              key={item.imageUrl}
              item={item}
              imageUrl={item.imageUrl}
              isLoading={isLoading}
            />
          ));
  };

  for (let i = 1; i <= Math.ceil(items.length / goodsPage); i++) {
    pageNumbers.push(i);
  }

  const paginationClasses = (number) =>
    number === currentPage ? "pagination__link--active" : "";

  return (
    <>
      <div className="main-block__slider slider-swiper">
        <Swiper />
      </div>
      <SearchGoods
        setNameValue={setNameValue}
        clearValue={clearValue}
        setSortPrice={setSortPrice}
        sortPrice={sortPrice}
        sortName={sortName}
        setSortName={setSortName}
        showBrandMenu={showBrandMenu}
        setFixedFilter={setFixedFilter}
        setSelectedOption={setSelectedOption}
        selectedOption={selectedOption}
        searchValue={searchValue}
      />
      <div className="main-block__goods goods">
        {renderItemsHome()}
        {notFound}
      </div>
      <ul className="main-block__pagination pagination">
        {pageNumbers.map((number) => (
          <li className="pagination__item" key={number}>
            <a
              className={["pagination__link", paginationClasses(number)].join(
                " "
              )}
              href="src/Pages/Home/Home#"
              onClick={(event) => paginate(event, number)}
            >
              {number}
            </a>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Home;
