import '../../App.css';
import React from 'react';
import SelectPrice from '../Select/Select';
import SearchName from '../SearchName';
import './search-goods.scss';

function SearchGoods({
   setNameValue,
   clearValue,
   sortPrice,
   setSortPrice,
   setSortName,
   sortName,
   onChangeSearchInput,
   searchValue,
   selectedOption,
   setSelectedOption,
}) {
   return (
      <>
         <div className="main-block__search search">
            <h1 className="search__title main-title">{searchValue ? `Поиск по запросу "${searchValue}"` : 'Все наушники'}</h1>
            <div className="search__block">
               <div className="search__section">
                  <div className="search__input search-input">
                     <SearchName
                        setNameValue={setNameValue}
                        sortName={sortName}
                        setSortName={setSortName}
                        onChangeSearchInput={onChangeSearchInput}
                        searchValue={searchValue}
                        clearValue={clearValue}
                     />
                  </div>
               </div>
               <div className="search__section">
                  <SelectPrice
                     sortPrice={sortPrice}
                     setSortPrice={setSortPrice}
                     selectedOption={selectedOption}
                     setSelectedOption={setSelectedOption}
                  />
               </div>
            </div>
         </div>
      </>
   );
}

export default SearchGoods;
