import React from 'react';

function SearchEmpty() {
   return (
      <div className="main-block__search-empty search-empty">
         <img className="search-empty__image" src="/img/sad-smile.png" alt="image" />
         <h2 className="search-empty__title">К сожалению, по вашему запросу ничего не найдено.</h2>
      </div>
   );
}

export default SearchEmpty;
